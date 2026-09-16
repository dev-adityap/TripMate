import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockDestinations as destinations } from '../data/mockDatabase';
import { useAuth } from '../context/AuthContext';

export default function TripDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  
  const [workspaceTitle, setWorkspaceTitle] = useState('Trip Workspace');
  const [itinerary, setItinerary] = useState([]);
  
  // Chat state
  const [messages, setMessages] = useState(() => {
    const savedChats = JSON.parse(localStorage.getItem(`tripmate_chat_${id}`) || '[]');
    if (savedChats.length > 0) return savedChats;
    return [
      { sender: 'Tanuj', text: `Hey ${user?.name || 'Aditya'}! Super excited for this trip. Let me know when you want to discuss logistics.` }
    ];
  });
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const cleanId = id ? id.replace('trip-', '') : '';
    const foundDest = destinations.find(
      (d) => String(d.id) === String(cleanId) || String(d.id) === String(id)
    );

    if (foundDest) {
      const destName = foundDest.name || foundDest.title || 'Destination';
      setWorkspaceTitle(`${destName} Trip Workspace`);
      setItinerary(foundDest.itinerary || [
        { day: 1, title: 'Arrival & Base Camp Briefing', description: 'Meet the team, check gear, and prepare for the expedition.' },
        { day: 2, title: 'Trail Ascent & Wilderness Walk', description: 'Trek through dense forests and scenic viewpoints with the group.' },
        { day: 3, title: 'Summit Day & Celebration', description: 'Reach the summit for breathtaking sunrise views before heading back.' }
      ]);
    } else {
      setWorkspaceTitle('Trip Workspace');
    }
  }, [id]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      sender: user?.name || 'Aditya Panna',
      isMe: true,
      text: inputMessage.trim()
    };

    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    localStorage.setItem(`tripmate_chat_${id}`, JSON.stringify(updatedMessages));
    setInputMessage('');

    // Simulate automated reply from Tanuj after 1 second if mentioning or just chatting
    setTimeout(() => {
      const replyMsg = {
        sender: 'Tanuj',
        isMe: false,
        text: `Got it! Sounds good to me. Let's sync up on gear tomorrow.`
      };
      const withReply = [...updatedMessages, replyMsg];
      setMessages(withReply);
      localStorage.setItem(`tripmate_chat_${id}`, JSON.stringify(withReply));
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 px-4 sm:px-6 lg:px-8 pt-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">JOINED</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Trip ID: {id}</span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mt-1">{workspaceTitle}</h1>
          </div>
          <Link to="/my-trips" className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all">
            ← Back to My Trips
          </Link>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Members & Itinerary */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Group Members</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="bg-indigo-100 text-indigo-700 font-bold h-10 w-10 rounded-full flex items-center justify-center">TP</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Tanuj</p>
                    <p className="text-xs text-gray-500">22 • Male</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="bg-purple-100 text-purple-700 font-bold h-10 w-10 rounded-full flex items-center justify-center">
                    {user?.name ? user.name.charAt(0) : 'A'}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{user?.name || 'Aditya Panna'} (You)</p>
                    <p className="text-xs text-indigo-600 font-semibold">Admin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Itinerary Schedule</h3>
              <div className="space-y-3">
                {itinerary.map((item, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-xs font-bold text-indigo-600">Day {item.day || idx + 1}</span>
                    <h4 className="text-xs font-bold text-gray-800 mt-0.5">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Group Chat */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col h-[600px]">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Group Chat</h3>
            
            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-2">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-2xl border max-w-md ${
                    msg.isMe || msg.sender === (user?.name || 'Aditya Panna')
                      ? 'ml-auto bg-indigo-50 border-indigo-100 text-right' 
                      : 'bg-gray-50 border-gray-100 text-left'
                  }`}
                >
                  <span className="text-xs font-bold text-indigo-600 block mb-1">
                    {msg.sender} {msg.sender === (user?.name || 'Aditya Panna') ? '(You)' : ''}
                  </span>
                  <p className="text-sm text-gray-700">{msg.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="pt-3 border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message to your group..." 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600 transition-all"
              />
              <button 
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}