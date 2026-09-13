import React, { useState, useEffect } from 'react';
import { DollarSign, Plus, Users, Receipt, PieChart, Trash2, ArrowRight } from 'lucide-react';
import { destinationsData } from '../data/destinations';

const ExpenseTrackerPage = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Base Camp Transport & Jeep Hire', amount: 4500, paidBy: 'Member #01 (Leader)', category: 'Transport' },
    { id: 2, title: 'Group Permit & National Park Fees', amount: 1800, paidBy: 'Member #03', category: 'Permits' },
    { id: 3, title: 'Summit Day Ration & Supplies', amount: 3200, paidBy: 'Member #02', category: 'Food' }
  ]);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('You (Aditya)');
  const [category, setCategory] = useState('Transport');

  useEffect(() => {
    const stored = localStorage.getItem('tripExpenses');
    if (stored) setExpenses(JSON.parse(stored));
  }, []);

  const saveToStorage = (updated) => {
    setExpenses(updated);
    localStorage.setItem('tripExpenses', JSON.stringify(updated));
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      paidBy,
      category
    };

    saveToStorage([newExpense, ...expenses]);
    setTitle('');
    setAmount('');
  };

  const handleDelete = (id) => {
    const updated = expenses.filter(exp => exp.id !== id);
    saveToStorage(updated);
  };

  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const activeGroupSize = 6; // Mock active group size
  const perPersonShare = Math.round(totalExpense / activeGroupSize);

  return (
    <div className="pl-28 pr-10 py-10 min-h-screen bg-[#f8fafc]">
      
      {/* Header */}
      <div className="mb-10">
        <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-3">
          Smart Financials
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Group Expense Splitter</h1>
        <p className="text-gray-500 mt-2 font-medium">Track shared group costs, split bills effortlessly, and keep financial transparency.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
        
        {/* Left Column: Summary Cards */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8 text-white shadow-lg space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Total Group Pool</span>
              <Receipt size={24} className="text-purple-300" />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold">₹{totalExpense.toLocaleString('en-IN')}</h2>
              <p className="text-xs text-purple-200 mt-1">Across {expenses.length} shared transactions</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm">
              <span className="text-purple-200 font-medium">Estimated Split ({activeGroupSize} Travelers)</span>
              <span className="font-extrabold text-emerald-400">₹{perPersonShare.toLocaleString('en-IN')} / person</span>
            </div>
          </div>

          {/* Add Expense Form */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <Plus size={18} className="text-purple-600" /> Log New Expense
            </h3>

            <form onSubmit={handleAddExpense} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Expense Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., Equipment Rental" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm text-gray-800 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Amount (₹)</label>
                <input 
                  type="number" 
                  placeholder="2500" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm text-gray-800 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Paid By</label>
                  <input 
                    type="text" 
                    value={paidBy}
                    onChange={(e) => setPaidBy(e.target.value)}
                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm text-gray-800 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-sm text-gray-800 focus:outline-none focus:border-purple-500"
                  >
                    <option value="Transport">Transport</option>
                    <option value="Food">Food</option>
                    <option value="Permits">Permits</option>
                    <option value="Gear">Gear</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-sm transition-colors text-sm mt-2"
              >
                Add Expense
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Transaction List */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-extrabold text-gray-900">Group Transaction History</h3>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full">
              {expenses.length} Records
            </span>
          </div>

          {expenses.length === 0 ? (
            <div className="text-center py-20 text-gray-400 font-medium">
              No expenses logged yet. Add your first shared cost above!
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto max-h-[550px] pr-2">
              {expenses.map((exp) => (
                <div key={exp.id} className="flex justify-between items-center p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-extrabold text-sm shrink-0">
                      ₹
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900">{exp.title}</h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">Paid by <span className="text-purple-600 font-bold">{exp.paidBy}</span> • <span className="uppercase text-[10px] bg-gray-200 px-2 py-0.5 rounded font-bold">{exp.category}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-extrabold text-gray-900 text-lg">₹{exp.amount.toLocaleString('en-IN')}</span>
                    <button 
                      onClick={() => handleDelete(exp.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                      title="Delete Entry"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ExpenseTrackerPage;