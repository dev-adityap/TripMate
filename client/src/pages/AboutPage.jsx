import React, { useEffect } from 'react';
import { Sparkles, Mountain, ShieldCheck, Users, Globe, Award, Code2 } from 'lucide-react';

export default function AboutPage({ updateBackground }) {
  useEffect(() => {
    if (updateBackground) {
      updateBackground('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }, [updateBackground]);

  const features = [
    { icon: Mountain, title: 'Curated Expeditions', desc: 'Handpicked treks and getaways with verified itineraries and local expertise.' },
    { icon: ShieldCheck, title: 'Safety First', desc: 'Verified hosts, emergency protocols, and gear checklists for peace of mind.' },
    { icon: Users, title: 'Squad Matching', desc: 'Find like-minded travelers and build your crew before you depart.' },
    { icon: Globe, title: 'Sustainable Travel', desc: 'Low-impact routes, leave-no-trace guidance, and community-first partnerships.' },
    { icon: Award, title: 'Quality Assurance', desc: 'Every listing is vetted for experience, pricing, and reliability.' },
    { icon: Sparkles, title: 'Seamless Experience', desc: 'From discovery to checkout, every touchpoint is crafted for ease.' }
  ];

  return (
    <div className="min-h-screen w-full relative text-white font-sans select-none pt-28 md:pt-32 pb-16 px-6 md:px-14">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#09090B] backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 shadow-xs">
            <Sparkles size={12} /> Our Story
          </div>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
            About TripMate
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            TripMate is built to bring adventurers together. We believe travel is better when shared'uniting explorers, streamlining logistics, and creating unforgettable journeys rooted in trust, community, and respect for the wild.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-2xl">
                <f.icon size={20} className="text-amber-300" />
              </div>
              <h3 className="text-lg font-bold text-white">{f.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">Our Mission</h2>
          <p className="text-white/80 leading-relaxed text-sm md:text-base">
            To democratize adventure by making it safer, simpler, and more social. We curate meaningful experiences, empower local communities, and equip every squad with the tools they need to explore responsibly.
          </p>
        </div>

        <div className="border-amber-400/30 bg-gradient-to-br from-white/[0.06] to-amber-500/[0.05] rounded-3xl p-8 shadow-2xl text-center space-y-3 backdrop-blur-2xl border">
          <Code2 size={40} className="text-amber-300 mx-auto" />
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">Crafted with Passion</h3>
          <p className="text-white/80 text-sm">Designed &amp; Developed By Aditya Panna</p>
          <p className="text-white/60 text-xs max-w-2xl mx-auto leading-relaxed">
            Built from the ground up with a focus on performance, accessibility, and editorial craftsmanship to deliver an immersive travel experience.
          </p>
        </div>
      </div>
    </div>
  );
}
