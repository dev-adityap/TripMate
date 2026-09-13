import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mountain, 
  Palmtree, 
  MountainSnow, 
  Castle, 
  Car, 
  TreePine, 
  ArrowRight 
} from 'lucide-react';

const VibeSection = () => {
  const navigate = useNavigate();

  const vibes = [
    {
      id: 'treks',
      title: 'Treks',
      subtitle: 'Mountains are calling',
      icon: <Mountain size={28} strokeWidth={1.5} />,
      image: '/assets/placeholders/vibe-treks.jpg',
      fallbackColor: 'from-blue-900 to-slate-800'
    },
    {
      id: 'beaches',
      title: 'Beaches',
      subtitle: 'Sun, sand & good vibes',
      icon: <Palmtree size={28} strokeWidth={1.5} />,
      image: '/assets/placeholders/vibe-beaches.jpg',
      fallbackColor: 'from-cyan-800 to-blue-900'
    },
    {
      id: 'mountains',
      title: 'Mountains',
      subtitle: 'Breathe something new',
      icon: <MountainSnow size={28} strokeWidth={1.5} />,
      image: '/assets/placeholders/vibe-mountains.jpg',
      fallbackColor: 'from-slate-700 to-slate-900'
    },
    {
      id: 'heritage',
      title: 'Heritage',
      subtitle: 'Stories from the past',
      icon: <Castle size={28} strokeWidth={1.5} />,
      image: '/assets/placeholders/vibe-heritage.jpg',
      fallbackColor: 'from-amber-900 to-stone-800'
    },
    {
      id: 'road-trips',
      title: 'Road Trips',
      subtitle: 'Just drive.',
      icon: <Car size={28} strokeWidth={1.5} />,
      image: '/assets/placeholders/vibe-roadtrips.jpg',
      fallbackColor: 'from-emerald-900 to-teal-900'
    },
    {
      id: 'nature',
      title: 'Nature',
      subtitle: 'Into the wild',
      icon: <TreePine size={28} strokeWidth={1.5} />,
      image: '/assets/placeholders/vibe-nature.jpg',
      fallbackColor: 'from-green-900 to-emerald-950'
    }
  ];

  return (
    <section className="w-full">
      
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Explore by vibe</h2>
        <p className="text-slate-500 text-sm mt-1">Not sure where to go? Explore trips by your travel style.</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        
        {vibes.map((vibe) => (
          <div 
            key={vibe.id}
            onClick={() => navigate('/discover')} // Safely routes to your existing discover page
            className="relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Background Image Setup */}
            <div className={`absolute inset-0 bg-gradient-to-br ${vibe.fallbackColor}`}>
              <img 
                src={vibe.image} 
                alt={vibe.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-overlay opacity-80"
                onError={(e) => {
                  e.target.style.display = 'none';
                  // The gradient fallback will automatically show through
                }}
              />
            </div>

            {/* Dark Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors"></div>

            {/* Content Container */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
              
              {/* Icon */}
              <div className="mb-auto mt-2 text-white/90 transform group-hover:-translate-y-1 transition-transform duration-300">
                {vibe.icon}
              </div>

              {/* Text Area */}
              <div className="relative">
                <h3 className="text-lg font-bold tracking-wide">{vibe.title}</h3>
                <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold mt-1">
                  {vibe.subtitle}
                </p>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default VibeSection;