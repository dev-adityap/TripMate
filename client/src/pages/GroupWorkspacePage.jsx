import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockDestinations as destinations, mockTrips } from '../data/mockDatabase';

export default function GroupWorkspacePage() {
  const { id } = useParams();
  const [workspaceTitle, setWorkspaceTitle] = useState('Trip Workspace');
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    let resolvedTitle = 'Trip Workspace';
    let resolvedItinerary = [];

    const cleanId = id ? id.replace('trip-', '') : '';

    const foundDest = destinations.find(
      (d) => String(d.id) === String(cleanId) || String(d.id) === String(id)
    );

    if (foundDest) {
      const destName = foundDest.name || foundDest.title;
      resolvedTitle = ${destName} Trip Workspace;
      
      resolvedItinerary = foundDest.itinerary || [
        { day: 1, title: 'Arrival & Base Camp Briefing', description: 'Meet the team, check gear, and prepare for the expedition.' },
        { day: 2, title: 'Trail Ascent & Wilderness Walk', description: 'Trek through dense forests and scenic viewpoints with the group.' },
        { day: 3, title: 'Summit Day & Celebration', description: 'Reach the summit for breathtaking sunrise views before heading back.' }
      ];
    } else {
      const foundMockTrip = mockTrips.find((t) => t.id === id || t.destinationId === cleanId);
      if (foundMockTrip) {
        resolvedTitle = ${foundMockTrip.title} Workspace;
        resolvedItinerary = foundMockTrip.itinerary || [];
      } else {
        resolvedTitle = 'Expedition Trip Workspace';
        resolvedItinerary = [
          { day: 1, title: 'Arrival & Briefing', description: 'Meet your group members and check gear.' },
          { day: 2, title: 'Trail Trekking', description: 'Embark on the core expedition route.' }
        ];
      }
    }

    setWorkspaceTitle(resolvedTitle);
    setItinerary(resolvedItinerary);
  }, [id]);

  return (
    <div className="min-h-screen w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14">
      <div className="relative z-10 max-w-6xl mx-auto space-y-6">
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-400/50 text-xs font-bold px-2.5 py-0.5 rounded-full backdrop-blur-2xl">JOINED</span>
              <span className="text-xs text-white/40 font-bold uppercase tracking-wider">Trip ID: {id}</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white mt-1">{workspaceTitle}</h1>
          </div>
          <Link to="/trips" className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:bg-white hover:text-zinc-950 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all">
            ? Back to My Trips
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-white">Group Members</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-white/[0.05] border border-white/10 rounded-xl backdrop-blur-2xl">
                  <div className="bg-amber-500/10 text-amber-300 border border-amber-400/50 font-bold h-10 w-10 rounded-full flex items-center justify-center backdrop-blur-2xl">TP</div>
                  <div>
                    <p className="text-sm font-bold text-white">Tanuj</p>
                    <p className="text-xs text-white/60">22 • Male</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/[0.05] border border-white/10 rounded-xl backdrop-blur-2xl">
                  <div className="bg-purple-500/10 text-purple-300 border border-purple-400/50 font-bold h-10 w-10 rounded-full flex items-center justify-center backdrop-blur-2xl">AP</div>
                  <div>
                    <p className="text-sm font-bold text-white">Aditya Panna (You)</p>
                    <p className="text-xs text-amber-300 font-semibold">Admin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-white">Itinerary Schedule</h3>
              <div className="space-y-3">
                {itinerary.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/[0.05] border border-white/10 rounded-xl backdrop-blur-2xl">
                    <span className="text-xs font-bold text-amber-300">Day {item.day || idx + 1}</span>
                    <h4 className="text-xs font-bold text-white mt-0.5">{item.title}</h4>
                    <p className="text-xs text-white/70 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col h-[600px]">
            <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">Group Chat</h3>
            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-2">
              <div className="bg-white/15 border border-white/20 p-4 rounded-2xl max-w-md backdrop-blur-2xl text-white">
                <span className="text-xs font-bold text-amber-300 block mb-1">Tanuj</span>
                <p className="text-sm text-white/90">Hey Aditya! Super excited for this trip. Let me know when you want to discuss logistics.</p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                placeholder="Type a message to your group..." 
                className="flex-1 bg-white/[0.05] border border-white/15 focus:border-amber-400/70 rounded-xl px-4 py-3 text-sm outline-none text-white placeholder:text-white/40 transition-all"
              />
              <button className="bg-white hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
