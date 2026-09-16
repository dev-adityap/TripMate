import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, CheckSquare, Square, Sparkles, ShieldCheck, MapPin, RefreshCw, Bot, Users, ChevronDown } from 'lucide-react';

export default function MessagesPage() {
  const [workspaces, setWorkspaces] = useState([]);
  const [activeWorkspace, setActiveWorkspace] = useState(null);
  
  // Chat messages state per workspace
  const [messages, setMessages] = useState({});
  const [inputText, setInputText] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Trip activities checklist & randomized squad members per workspace
  const [activities, setActivities] = useState({});
  const [squadMembers, setSquadMembers] = useState({});

  // Pool of names to randomize from on every refresh
  const masterNamePool = [
    'Aarav Sharma', 'Priya Roy', 'Rohan Verma', 'Ananya Gupta', 
    'Kabir Mehta', 'Neha Sen', 'Tanuj Das', 'Biki Ghosh', 
    'Sneha Mukherjee', 'Aditya Panna', 'Rahul Banerjee', 'Kunal Bose',
    'Megha Chatterjee', 'Siddharth Paul', 'Puja Dey', 'Arjun Sengupta'
  ];

  // Activity pool for randomizing automatically on website refresh
  const activityPool = [
    'Group City Food Walk',
    'Sunrise Viewpoint Hike',
    'Local Market Souvenir Hunt',
    'Welcome Dinner & Icebreaker',
    'High Altitude Acclimatization Trek',
    'Bonfire & Stargazing Session',
    'River Crossing Briefing',
    'Basecamp Gear & Safety Check',
    'Summit Sunrise Photo Session',
    'Traditional Cultural Evening'
  ];

  useEffect(() => {
    // 1. Load unlocked workspaces from localStorage
    const unlocked = JSON.parse(localStorage.getItem('tripMate_unlockedWorkspaces') || '["Kasol Group", "Dharamshala Group"]');
    setWorkspaces(unlocked);
    
    if (unlocked.length > 0) {
      setActiveWorkspace(unlocked[0]);
    }

    // 2. Initialize Squad Chat with Gemini AI on load
    const initialMsgs = {
      'Kasol Group': [
        { sender: 'TripMate Gemini AI', text: 'Hello squad! For Day 2 in Kasol, we have the Chalal trek and basecamp briefing scheduled. Let me know if you need any gear checks!', time: '10:20 AM', isAi: true }
      ],
      'Dharamshala Group': [
        { sender: 'TripMate Gemini AI', text: 'Welcome to Dharamshala squad! Crisp alpine weather expected. Ask me anything about your trail routes.', time: '9:08 AM', isAi: true }
      ]
    };
    setMessages(initialMsgs);
    localStorage.setItem('tripMate_workspaceMessages', JSON.stringify(initialMsgs));

    // 3. Automatically randomize unique member names & activities on every page refresh
    const freshMembers = {};
    const freshActs = {};

    unlocked.forEach(ws => {
      // Pick 4 to 6 unique random names for this session
      const shuffledNames = [...masterNamePool].sort(() => 0.5 - Math.random());
      const memberCount = Math.floor(Math.random() * 5) + 8; // Between 8 to 12 members
      freshMembers[ws] = {
        count: memberCount,
        names: shuffledNames.slice(0, 6) // Unique preview names for the dropdown
      };

      // Shuffle activities
      const shuffledActs = [...activityPool].sort(() => 0.5 - Math.random()).slice(0, 4);
      freshActs[ws] = shuffledActs.map((title, idx) => ({ id: idx + 1, title, completed: false }));
    });

    setSquadMembers(freshMembers);
    setActivities(freshActs);
    localStorage.setItem('tripMate_workspaceActivities', JSON.stringify(freshActs));
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || !activeWorkspace) return;

    const userMsgText = inputText.trim();
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg = { sender: 'You', text: userMsgText, time: timeNow };
    const updatedMsgs = [...(messages[activeWorkspace] || []), newMsg];
    
    setMessages(prev => ({ ...prev, [activeWorkspace]: updatedMsgs }));
    localStorage.setItem('tripMate_workspaceMessages', JSON.stringify({ ...messages, [activeWorkspace]: updatedMsgs }));
    setInputText('');
    setIsAiTyping(true);

    let aiReplyText = "";

    try {
      // Calls backend server running on port 5000 via ai.js (Gemini 3.6 Flash)
      const response = await fetch('http://localhost:5000/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsgText,
          tripName: activeWorkspace
        })
      });

      if (!response.ok) {
        throw new Error('Backend server error');
      }

      const data = await response.json();
      aiReplyText = data.reply;
    } catch (err) {
      console.warn("Backend AI Connection Warning:", err);
    }

    // Fallback if backend is offline
    if (!aiReplyText) {
      const lower = userMsgText.toLowerCase();
      if (lower.includes('bike') || lower.includes('rent') || lower.includes('ride')) {
        aiReplyText = "Renting bikes makes total sense for exploring freely! Let's check group rates.";
      } else if (lower.includes('food') || lower.includes('eat') || lower.includes('dinner') || lower.includes('cafe')) {
        aiReplyText = "Ooh yes! I've been researching local food spots and cafes. Adding them to our plan!";
      } else if (lower.includes('budget') || lower.includes('cost') || lower.includes('money')) {
        aiReplyText = "That fits my estimate well. We can split common expenses once we get there.";
      } else {
        aiReplyText = "That sounds good to me! Let's lock it in.";
      }
    }

    setTimeout(() => {
      const aiMsg = {
        sender: 'TripMate Gemini AI',
        text: aiReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAi: true
      };

      setMessages(prev => {
        const currentList = prev[activeWorkspace] || [];
        const finalized = { ...prev, [activeWorkspace]: [...currentList, aiMsg] };
        localStorage.setItem('tripMate_workspaceMessages', JSON.stringify(finalized));
        return finalized;
      });
      setIsAiTyping(false);
    }, 500);
  };

  const toggleActivity = (activityId) => {
    if (!activeWorkspace) return;

    const currentActs = activities[activeWorkspace] || [];
    const updatedActs = currentActs.map(act => 
      act.id === activityId ? { ...act, completed: !act.completed } : act
    );

    const updatedAllActs = { ...activities, [activeWorkspace]: updatedActs };
    setActivities(updatedAllActs);
    localStorage.setItem('tripMate_workspaceActivities', JSON.stringify(updatedAllActs));
  };

  const currentWorkspaceMessages = activeWorkspace ? (messages[activeWorkspace] || []) : [];
  const currentWorkspaceActivities = activeWorkspace ? (activities[activeWorkspace] || []) : [];
  const currentWorkspaceData = activeWorkspace ? squadMembers[activeWorkspace] : null;

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F1F5F9] pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans flex flex-col">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full mb-8">
        <div className="inline-flex items-center gap-2 bg-[#131B2E] border border-[#1E293B] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 shadow-xs">
          <Sparkles size={12} /> Squad Collaboration & Gemini 3.6 Flash
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#F1F5F9]">Group Workspaces</h1>
        <p className="text-[#94A3B8] text-sm mt-1">Coordinate itineraries with your verified squad and get live responses from Gemini 3.6 Flash.</p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
        
        {/* Left Column: Active Workspaces & Activities */}
        <div className="space-y-6">
          
          {/* Active Workspaces Selector Card */}
          <div className="bg-[#111827] border border-[#1E293B] p-6 rounded-3xl shadow-xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">Active Workspaces</h3>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold">
                {workspaces.length} Unlocked
              </span>
            </div>

            <div className="space-y-2">
              {workspaces.map((ws, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkspace(ws)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeWorkspace === ws 
                      ? 'bg-[#131B2E] border-sky-500/50 shadow-inner text-white' 
                      : 'bg-[#0B0F17] border-[#1E293B] text-slate-400 hover:text-white'
                  }`}
                >
                  <h4 className="text-sm font-bold text-white">{ws}</h4>
                  <p className="text-[11px] text-sky-400 flex items-center gap-1 mt-1">
                    <MapPin size={12} /> Verified Destination Workspace
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Trip Activities & Vibe Checklist */}
          <div className="bg-[#111827] border border-[#1E293B] p-6 rounded-3xl shadow-xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">Trip Activities & Vibe</h3>
              <span className="text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded-full font-bold">
                Auto-Refreshed
              </span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">Curated itinerary activities refreshing automatically on load.</p>

            <div className="space-y-2.5 pt-2">
              {currentWorkspaceActivities.map((act) => (
                <div 
                  key={act.id}
                  onClick={() => toggleActivity(act.id)}
                  className="bg-[#0B0F17] border border-[#1E293B] p-3.5 rounded-2xl flex items-center justify-between cursor-pointer hover:border-slate-700 transition-all shadow-inner"
                >
                  <span className={`text-xs font-medium ${act.completed ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                    {act.title}
                  </span>
                  {act.completed ? (
                    <CheckSquare size={16} className="text-emerald-400 shrink-0" />
                  ) : (
                    <Square size={16} className="text-slate-600 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Live Chat Panel with Member Count & Unique Shuffled Dropdown */}
        <div className="lg:col-span-2 bg-[#111827] border border-[#1E293B] rounded-3xl shadow-xl flex flex-col h-[650px] overflow-hidden">
          
          {/* Chat Header with Member Count & Unique Random Dropdown */}
          <div className="p-6 bg-[#0B0F17]/50 border-b border-[#1E293B] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-serif text-white">{activeWorkspace || 'Select a Workspace'}</h3>
              <div className="flex items-center gap-3 mt-1">
                {/* Member Number Badge */}
                <span className="text-[11px] text-[#94A3B8] flex items-center gap-1 font-medium bg-[#0B0F17] border border-[#1E293B] px-3 py-1 rounded-lg">
                  <Users size={13} className="text-emerald-400" /> {currentWorkspaceData?.count || 12} Verified Members
                </span>

                {/* Dropdown list of unique names generated fresh every refresh */}
                <div className="relative group">
                  <select className="bg-[#0B0F17] text-sky-400 text-[11px] font-semibold border border-sky-500/30 px-3 py-1.5 rounded-lg appearance-none pr-8 cursor-pointer hover:border-sky-500 focus:outline-none shadow-inner">
                    <option className="bg-[#111827] text-slate-300 font-bold" disabled selected>
                      View Squad Roster (Randomized)
                    </option>
                    {currentWorkspaceData?.names?.map((name, i) => (
                      <option key={i} className="bg-[#111827] text-white">
                        👤 {name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sky-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                <Bot size={12} /> Gemini 3.6 Flash
              </span>
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-pulse"></div>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <div className="text-center my-2">
              <span className="text-[10px] bg-[#0B0F17] border border-[#1E293B] text-slate-400 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                Workspace successfully unlocked after booking verification.
              </span>
            </div>

            {currentWorkspaceMessages.map((msg, idx) => {
              const isMe = msg.sender === 'You';
              const isAi = msg.isAi;
              return (
                <div key={idx} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`}>
                  <span className="text-[10px] font-bold text-slate-400 px-1 flex items-center gap-1">
                    {isAi && <Bot size={12} className="text-sky-400" />} {msg.sender} <span className="text-[9px] font-normal text-slate-600 ml-1">{msg.time}</span>
                  </span>
                  <div className={`p-4 rounded-2xl text-xs max-w-md shadow-md ${
                    isMe 
                      ? 'bg-blue-600 text-white rounded-br-xs' 
                      : isAi
                        ? 'bg-[#131B2E] border border-sky-500/30 text-sky-100 rounded-bl-xs'
                        : 'bg-[#0B0F17] border border-[#1E293B] text-slate-200 rounded-bl-xs'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {isAiTyping && (
              <div className="flex flex-col items-start space-y-1">
                <span className="text-[10px] font-bold text-sky-400 px-1 flex items-center gap-1">
                  <Bot size={12} /> Gemini 3.6 Flash is thinking...
                </span>
                <div className="bg-[#131B2E] border border-sky-500/30 text-sky-300 p-3 rounded-2xl text-xs animate-pulse">
                  Querying backend `/api/ai/chat`...
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
          <form onSubmit={handleSendMessage} className="p-4 bg-[#0B0F17] border-t border-[#1E293B] flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Chat with your squad & Gemini 3.6 Flash..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-[#111827] border border-[#1E293B] rounded-2xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-sky-500 shadow-inner"
            />
            <button 
              type="submit"
              className="w-12 h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-900/30 transition-all cursor-pointer shrink-0"
            >
              <Send size={18} />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}