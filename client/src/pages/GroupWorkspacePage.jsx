import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, Bot, User, ArrowLeft, ShieldCheck, Calendar, MapPin, Sparkles } from 'lucide-react';
import { destinationsData } from '../data/destinations';

const GroupWorkspacePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  const destination = destinationsData.find(d => String(d.id) === String(id) || String(d._id) === String(id)) || destinationsData[0];

  const [messages, setMessages] = useState([
    { id: 1, sender: 'TripMate AI 🤖', text: `Yo! I'm your group co-pilot for ${destination.name}. Keep it real, don't flake on the dates, and hit me up if you need anything!`, time: '10:00 AM', isAI: true },
    { id: 2, sender: 'Member #01', text: 'Super excited for this trek! Has everyone sorted their gear?', time: '10:02 AM', isAI: false },
    { id: 3, sender: 'Member #03', text: 'Almost done. Just picking up waterproof jackets today.', time: '10:05 AM', isAI: false }
  ]);

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(`workspace_chat_${id}`);
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, [id]);

  const saveMessages = (updated) => {
    setMessages(updated);
    localStorage.setItem(`workspace_chat_${id}`, JSON.stringify(updated));
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = {
      id: Date.now(),
      sender: 'You (Aditya)',
      text: inputText,
      time: timeStr,
      isAI: false
    };

    const updatedWithUser = [...messages, userMsg];
    saveMessages(updatedWithUser);
    setInputText('');

    // Call your live backend AI API route
    fetch('http://localhost:5000/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: userMsg.text, destinationName: destination.name })
    })
    .then(res => res.json())
    .then(data => {
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'TripMate AI 🤖',
        text: data.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAI: true
      };
      saveMessages([...updatedWithUser, aiMsg]);
    })
    .catch(err => {
      console.error('Failed to fetch AI response', err);
      const errorMsg = {
        id: Date.now() + 1,
        sender: 'TripMate AI 🤖',
        text: "Honestly, my backend server just blinked for a second. Make sure your Node server is running!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAI: true
      };
      saveMessages([...updatedWithUser, errorMsg]);
    });
  };

  return (
    <div className="pl-28 pr-10 py-10 min-h-screen bg-[#f8fafc] flex flex-col">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => navigate('/my-trips')} 
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} /> Back to My Trips
        </button>
        <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-2xl text-xs font-extrabold">
          <Sparkles size={14} /> TripMate AI Live Co-Pilot Active
        </div>
      </div>

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-1">
        
        {/* Left Column: Destination Info & Guidelines */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6 h-fit">
          <div>
            <div className="flex items-center gap-1 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
              <MapPin size={14} /> {destination.location}
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">{destination.name}</h2>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl space-y-3 text-xs font-bold text-gray-600">
            <div className="flex justify-between">
              <span>Duration</span>
              <span className="text-gray-900">{destination.duration} Days</span>
            </div>
            <div className="flex justify-between">
              <span>Difficulty</span>
              <span className="text-gray-900">{destination.difficulty || 'Moderate'}</span>
            </div>
            <div className="flex justify-between">
              <span>Privacy</span>
              <span className="text-emerald-600 flex items-center gap-1"><ShieldCheck size={12} /> Anonymous</span>
            </div>
          </div>

          <div className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100 text-xs text-purple-900 leading-relaxed font-medium">
            💡 <strong>Tip:</strong> Type anything here. Your message goes straight to your Gemini backend API for a live, smart response!
          </div>
        </div>

        {/* Right Column: Live Chat with AI Assistant */}
        <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col h-[700px]">
          
          {/* Chat Header */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="font-extrabold text-gray-900 text-lg">Group Workspace & AI Co-Pilot</h3>
              <p className="text-xs text-gray-500 font-medium">Collaborate with fellow travelers and chat with TripMate AI.</p>
            </div>
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.sender.includes('You') ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-500">{msg.sender}</span>
                  <span className="text-[10px] text-gray-400">{msg.time}</span>
                </div>
                <div className={`p-4 rounded-2xl max-w-lg text-sm font-medium leading-relaxed shadow-sm ${
                  msg.isAI 
                    ? 'bg-purple-50 text-purple-950 border border-purple-100' 
                    : msg.sender.includes('You')
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 flex gap-3">
            <input 
              type="text" 
              placeholder="Ask TripMate AI anything (powered by Gemini API)..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 p-4 bg-gray-50 border border-gray-200 rounded-2xl font-medium text-sm text-gray-800 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button 
              type="submit"
              className="px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Send size={18} />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};

export default GroupWorkspacePage;