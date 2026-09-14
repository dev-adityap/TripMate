// NEW FILE / MODIFIED FILE
// Private Workspace Dashboard: Renders group details, members, itinerary, and group chat 
// with automatic member name detection (e.g., Tanuj) powered by the Gemini backend.
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import TopHeader from '../components/home/TopHeader';
import { Send, Bot, User as UserIcon, Sparkles, AlertCircle } from 'lucide-react';

const TripDashboardPage = () => {
  const { tripId } = useParams();
  
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [typingSender, setTypingSender] = useState('TripMate AI');
  const [apiError, setApiError] = useState(null);
  const chatEndRef = useRef(null);

  const currentUser = { id: 'u1', name: 'Aditya Panna' }; 

  // List of mock group members in this workspace
  const groupMembers = ['Tanuj'];

  const tripDetails = {
    title: tripId === 't3' ? 'Spiti Valley Road Trip' : 'Adventure Expedition',
    state: tripId === 't3' ? 'Himachal Pradesh' : 'India',
    duration: '9 Days',
    members: '2 / 15 members'
  };

  useEffect(() => {
    setMessages([
      { 
        id: 'm1', 
        senderType: 'member', 
        senderName: 'Tanuj', 
        message: 'Hey Aditya! Super excited for this trip. Let me know when you want to discuss the car rentals.', 
        createdAt: new Date() 
      }
    ]);
  }, [tripId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');
    setApiError(null);

    // 1. Post user message to chat UI immediately
    const userMsg = {
      id: Date.now().toString(),
      senderType: 'user',
      senderName: currentUser.name,
      message: userText,
      createdAt: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);

    // 2. Check if user mentioned any group member (e.g. "tanuj")
    let targetPersona = null;
    const lowerText = userText.toLowerCase();
    
    for (const member of groupMembers) {
      if (lowerText.includes(member.toLowerCase())) {
        targetPersona = member;
        break;
      }
    }

    // Also trigger if they explicitly mention TripMate or @ai
    const isAskingAi = targetPersona !== null || lowerText.includes('tripmate') || lowerText.includes('@ai');

    if (isAskingAi) {
      const activeSender = targetPersona || 'TripMate AI';
      setTypingSender(activeSender);
      setIsAiTyping(true);

      try {
        const response = await fetch(`http://localhost:5000/api/trips/${tripId}/ai`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: userText,
            tripContext: tripDetails,
            targetPersona: targetPersona // Passes persona name to backend if matched
          })
        });

        if (!response.ok) throw new Error(`Server returned ${response.status}`);

        const responseData = await response.json();
        
        setMessages((prev) => [...prev, {
          id: responseData.id || Date.now().toString(),
          senderType: responseData.senderType,
          senderName: responseData.senderName,
          message: responseData.message,
          createdAt: new Date()
        }]);

      } catch (err) {
        console.error('API Error:', err);
        setApiError('Unable to generate response. Ensure your backend server is running on port 5000.');
      } finally {
        setIsAiTyping(false);
      }
    }
  };

  const triggerAIAssist = () => {
    setInputText('@TripMate AI, what are the essential items to pack?');
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden font-sans text-slate-900">
      <TopHeader />
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex-shrink-0 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Joined</span>
            <span className="text-xs text-slate-500 font-medium">Trip ID: {tripId}</span>
          </div>
          <h1 className="text-xl font-extrabold text-slate-900">{tripDetails.title} Workspace</h1>
        </div>
      </div>

      {/* Main Grid: Left (Info) | Right (Chat) */}
      <div className="flex-1 overflow-hidden flex flex-col lg:flex-row max-w-7xl w-full mx-auto p-4 gap-4">
        
        {/* Left Side: Members & Itinerary */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 overflow-y-auto pr-2">
          
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 border-b pb-2">Group Members</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold"><UserIcon size={18}/></div>
                <div><p className="text-sm font-bold">Tanuj</p><p className="text-xs text-slate-500">22 • Male</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold"><UserIcon size={18}/></div>
                <div><p className="text-sm font-bold">Aditya Panna (You)</p><p className="text-xs text-slate-500">Admin</p></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex-1">
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 border-b pb-2">Itinerary</h2>
            <p className="text-xs text-slate-500 italic mb-4">Day-by-day schedule for this expedition.</p>
            <div className="space-y-4">
               <div className="border-l-2 border-purple-200 pl-4">
                 <h4 className="text-xs font-bold text-purple-600 mb-1">DAY 1</h4>
                 <p className="text-sm font-bold text-slate-900">Arrival & Acclimatization Briefing</p>
               </div>
               <div className="border-l-2 border-slate-200 pl-4">
                 <h4 className="text-xs font-bold text-slate-400 mb-1">DAY 2</h4>
                 <p className="text-sm font-bold text-slate-900">Pass Crossing & Base Camp Setup</p>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Group Chat with Persona Roleplay */}
        <div className="w-full lg:w-2/3 bg-white rounded-3xl border border-slate-200 shadow-xl flex flex-col overflow-hidden relative">
          
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-slate-100 bg-white z-10 flex justify-between items-center shadow-sm">
            <div>
              <h2 className="font-extrabold text-lg flex items-center gap-2">Group Chat</h2>
              <p className="text-xs text-slate-500">Mention "Tanuj" or click Ask AI to test simulated replies</p>
            </div>
            <button 
              onClick={triggerAIAssist} 
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold transition-colors"
            >
              <Sparkles size={14} /> Ask TripMate AI
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 space-y-6">
            {messages.map((msg) => {
              const isMe = msg.senderName === currentUser.name;
              const isAi = msg.senderType === 'ai';

              return (
                <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                  <div className={`flex items-center gap-1 mb-1 ${isAi ? 'text-indigo-600' : 'text-slate-500'}`}>
                    {isAi && <Bot size={14} />}
                    {!isAi && !isMe && <UserIcon size={14} />}
                    <span className="text-[10px] font-bold uppercase tracking-wider">{msg.senderName}</span>
                  </div>
                  
                  <div className={`
                    max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
                    ${isMe ? 'bg-purple-600 text-white rounded-tr-sm shadow-md shadow-purple-200' : 
                      isAi ? 'bg-indigo-50 text-indigo-950 border border-indigo-200/80 rounded-tl-sm shadow-sm' : 
                      'bg-white border border-slate-200 text-slate-800 rounded-tl-sm shadow-sm'}
                  `}>
                    {msg.message}
                  </div>
                </div>
              );
            })}
            
            {/* Dynamic Typing State */}
            {isAiTyping && (
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 mb-1 text-purple-600">
                  <span className="text-[10px] font-bold uppercase tracking-wider">{typingSender} is typing...</span>
                </div>
                <div className="bg-white border border-slate-200 px-5 py-3.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 shadow-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}

            {apiError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs font-semibold text-red-600">
                <AlertCircle size={16} />
                <span>{apiError}</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-white border-t border-slate-100">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a message (e.g., 'tanuj bro, whats up?')..."
                className="flex-1 bg-slate-100 border-none outline-none rounded-xl px-5 py-3.5 text-sm font-medium focus:ring-2 focus:ring-purple-200 transition-all text-slate-900"
              />
              <button 
                type="submit"
                disabled={!inputText.trim()}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl px-5 flex items-center justify-center transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TripDashboardPage;