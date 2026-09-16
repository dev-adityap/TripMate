import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Trash2, User } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [messagesList, setMessagesList] = useState([]);

  // Fetch messages from MongoDB backend on mount
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/contact'); // Adjust your backend URL if needed
      const data = await res.json();
      if (Array.isArray(data)) setMessagesList(data);
    } catch (err) {
      console.error("Failed to fetch messages from MongoDB:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        fetchMessages(); // Refresh inbox list from MongoDB
        setTimeout(() => setSent(false), 3000);
      }
    } catch (err) {
      console.error("Failed to submit message to MongoDB:", err);
      alert("Error sending message. Make sure your backend server is running.");
    }
  };

  const deleteMessage = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/contact/${id}`, { method: 'DELETE' });
      fetchMessages();
    } catch (err) {
      console.error("Failed to delete message:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] shadow-xs">
            <Mail size={12} /> Get in Touch
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-white">Contact Us</h1>
          <p className="text-[#94A3B8] text-xs md:text-sm">Have questions about an expedition? Our support team is here for you.</p>
        </div>

        {/* Form Card */}
        <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-3xl shadow-xl">
          {sent ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 size={48} className="text-emerald-400 mx-auto animate-bounce" />
              <h3 className="text-base font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-xs text-[#94A3B8]">Saved directly to your MongoDB database.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Aditya Panna"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl p-4 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="aditya@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl p-4 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Your Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Ask us anything about bookings or schedules..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#0B0F17] border border-[#1E293B] rounded-2xl p-4 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/30 cursor-pointer pt-4"
              >
                <Send size={15} /> Send Message to Database
              </button>
            </form>
          )}
        </div>

        {/* MongoDB Inbox List */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <MessageSquare size={16} className="text-sky-400" /> MongoDB Messages Inbox ({messagesList.length})
            </h3>
          </div>

          {messagesList.length === 0 ? (
            <div className="bg-[#111827] border border-[#1E293B] p-8 rounded-3xl text-center text-xs text-[#94A3B8]">
              No messages in MongoDB yet.
            </div>
          ) : (
            <div className="space-y-3">
              {messagesList.map((msg) => (
                <div key={msg._id || msg.date} className="bg-[#111827] border border-[#1E293B] p-6 rounded-3xl shadow-xl space-y-3 relative group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-xs">
                        <User size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{msg.name}</h4>
                        <span className="text-[10px] text-sky-400">{msg.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-400">{new Date(msg.date).toLocaleString()}</span>
                      <button 
                        onClick={() => deleteMessage(msg._id)}
                        className="text-slate-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
                        title="Delete Message"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-[#94A3B8] bg-[#0B0F17] p-4 rounded-2xl border border-[#1E293B] leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}