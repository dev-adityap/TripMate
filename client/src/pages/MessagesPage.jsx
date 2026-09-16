import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, CheckSquare, Square, ShieldCheck, MapPin, Users, Plus } from 'lucide-react';

export default function MessagesPage() {
  const [activeGroup, setActiveGroup] = useState('Dharamshala Group');
  const [messages, setMessages] = useState([
    { sender: 'Priya', text: 'Hey everyone! Let\'s coordinate our itinerary and gear here.' },
    { sender: 'System', text: 'Group workspace successfully unlocked after booking verification.', isSystem: true }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [activities, setActivities] = useState([
    { name: 'Group City Food Walk', completed: true },
    { name: 'Sunrise Viewpoint Hike', completed: false },
    { name: 'Local Market Souvenir Hunt', completed: false },
    { name: 'Welcome Dinner & Icebreaker', completed: false }
  ]);
  const [customActivity, setCustomActivity] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: 'You', text: newMessage }]);
    setNewMessage('');
  };

  const toggleActivity = (index) => {
    const updated = [...activities];
    updated[index].completed = !updated[index].completed;
    setActivities(updated);
  };

  const handleAddActivity = (e) => {
    if (e.key === 'Enter' && customActivity.trim()) {
      e.preventDefault();
      setActivities([...activities, { name: customActivity, completed: false }]);
      setCustomActivity('');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
          <Sparkles size={12} /> Secure Squad Hub
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Your Workspaces</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Coordinate, chat, and collaborate live with your verified travel companions.</p>
      </div>

      {/* Main Workspace Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Active Workspaces & Activities */}
        <div className="space-y-6">
          
          {/* Active Workspaces List */}
          <div className="bg-[#111827] border border-[#1E293B] p-6 rounded-3xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-extrabold text-[#94A3B8] uppercase tracking-wider">Active Workspaces</span>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                1 Unlocked
              </span>
            </div>

            <div className="space-y-3">
              <div className="bg-[#131B2E] border border-blue-500/30 p-4 rounded-2xl cursor-pointer shadow-inner">
                <h4 className="font-bold text-white text-sm">Dharamshala Group</h4>
                <p className="text-[11px] text-[#94A3B8] flex items-center gap-1 mt-1">
                  <MapPin size={12} className="text-[#38BDF8]" /> Himachal Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Trip Activities & Vibe Checklist */}
          <div className="bg-[#111827] border border-[#1E293B] p-6 rounded-3xl shadow-xl space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-extrabold text-[#94A3B8] uppercase tracking-wider">Trip Activities & Vibe</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                Shared
              </span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">Curated itinerary activities for this destination.</p>

            <div className="space-y-2">
              {activities.map((act, idx) => (
                <div 
                  key={idx} 
                  onClick={() => toggleActivity(idx)}
                  className="bg-[#0B0F17] border border-[#1E293B] p-3 rounded-xl flex items-center justify-between cursor-pointer hover:border-slate-700 transition-all"
                >
                  <span className={`text-xs font-medium ${act.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                    {act.name}
                  </span>
                  {act.completed ? <CheckSquare size={16} className="text-emerald-400" /> : <Square size={16} className="text-slate-500" />}
                </div>
              ))}
            </div>

            {/* Propose Custom Activity */}
            <input 
              type="text" 
              placeholder="Propose custom activity..."
              value={customActivity}
              onChange={(e) => setCustomActivity(e.target.value)}
              onKeyDown={handleAddActivity}
              className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500 placeholder:text-slate-600 shadow-inner"
            />
          </div>

        </div>

        {/* Right Column: Live Chat Workspace */}
        <div className="lg:col-span-2 bg-[#111827] border border-[#1E293B] rounded-3xl shadow-xl flex flex-col h-[650px]">
          
          {/* Chat Header */}
          <div className="p-6 border-b border-[#1E293B] flex justify-between items-center bg-[#0B0F17]/50 rounded-t-3xl">
            <div>
              <h3 className="font-serif font-bold text-white text-lg">Dharamshala Group</h3>
              <p className="text-xs text-[#94A3B8] flex items-center gap-2 mt-0.5">
                <span>📍 Himachal Pradesh</span> • <span className="text-emerald-400 font-bold">👥 15 Verified Members</span>
              </p>
            </div>
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/50"></div>
          </div>

          {/* Message Stream */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <div className="text-center my-2">
              <span className="bg-[#0B0F17] border border-[#1E293B] text-[11px] text-[#94A3B8] px-4 py-1.5 rounded-full shadow-inner">
                Welcome to the Dharamshala planning workspace!
              </span>
            </div>

            {messages.map((msg, index) => (
              <div key={index} className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}>
                {msg.isSystem ? (
                  <div className="w-full text-center my-3 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-1.5 rounded-xl">
                    {msg.text}
                  </div>
                ) : (
                  <div className="max-w-md">
                    <span className="text-[10px] font-bold text-[#94A3B8] mb-1 block px-1">{msg.sender}</span>
                    <div className={`p-4 rounded-2xl text-xs leading-relaxed shadow-md ${
                      msg.sender === 'You' 
                        ? 'bg-blue-600 text-white rounded-br-xs' 
                        : 'bg-[#131B2E] border border-[#1E293B] text-slate-200 rounded-bl-xs'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Message Input Box */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-[#1E293B] bg-[#0B0F17]/50 rounded-b-3xl flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Ask about gear, food, budget, or itinerary..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 bg-[#111827] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 placeholder:text-slate-600 shadow-inner"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-2xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center cursor-pointer"
            >
              <Send size={16} />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}