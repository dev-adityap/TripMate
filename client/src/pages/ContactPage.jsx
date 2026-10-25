import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Trash2, User } from 'lucide-react';

export default function ContactPage({ updateBackground }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    if (updateBackground) {
      updateBackground('https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }, [updateBackground]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/contact');
      const data = await res.json();
      if (Array.isArray(data)) setMessagesList(data);
    } catch (err) {
      console.error('Failed to fetch messages from MongoDB:', err);
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
        fetchMessages();
        setTimeout(() => setSent(false), 3000);
      }
    } catch (err) {
      console.error('Failed to submit message to MongoDB:', err);
      alert('Error sending message. Make sure your backend server is running.');
    }
  };

  const deleteMessage = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/contact/${id}`, { method: 'DELETE' });
      fetchMessages();
    } catch (err) {
      console.error('Failed to delete message:', err);
    }
  };

  return (
    <div className="min-h-dvh w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14">
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 shadow-xs">
            <Mail size={12} /> Get in Touch
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">Contact Us</h1>
          <p className="text-white/75 text-xs md:text-sm">Have questions about an expedition? Our support team is here for you.</p>
        </div>

        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8">
          {sent ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 size={48} className="text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-xs text-white/70">Saved directly to your MongoDB database.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-white/80">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Aditya Panna"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/15 focus:border-amber-400/70 rounded-2xl p-4 text-xs text-white placeholder:text-white/40 focus:outline-none transition-all backdrop-blur-2xl"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-white/80">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="aditya@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/15 focus:border-amber-400/70 rounded-2xl p-4 text-xs text-white placeholder:text-white/40 focus:outline-none transition-all backdrop-blur-2xl"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-white/80">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ask us anything about bookings or schedules..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/15 focus:border-amber-400/70 rounded-2xl p-4 text-xs text-white placeholder:text-white/40 focus:outline-none transition-all resize-none backdrop-blur-2xl"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white hover:bg-amber-400 text-zinc-950 font-bold py-4 rounded-2xl transition-all duration-300 shadow-[0_10px_25px_rgba(255,255,255,0.1)] border border-white/10 inline-flex items-center justify-center gap-2"
              >
                <Send size={15} /> Send Message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <MessageSquare size={16} className="text-amber-300" /> MongoDB Messages Inbox ({messagesList.length})
            </h3>
          </div>
          {messagesList.length === 0 ? (
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-8 rounded-3xl text-center text-xs text-white/60">
              No messages in MongoDB yet.
            </div>
          ) : (
            <div className="space-y-3">
              {messagesList.map((msg) => (
                <div key={msg._id || msg.date} className="bg-white/[0.05] border border-white/10 p-6 rounded-2xl backdrop-blur-2xl space-y-3 relative group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white/10 text-white border border-white/10 flex items-center justify-center font-bold text-xs backdrop-blur-2xl">
                        <User size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{msg.name}</h4>
                        <span className="text-[10px] text-amber-300">{msg.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-white/50">{new Date(msg.date).toLocaleString()}</span>
                      <button
                        onClick={() => deleteMessage(msg._id)}
                        className="text-white/50 hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
                        title="Delete Message"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-white/80 whitespace-pre-line">{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
