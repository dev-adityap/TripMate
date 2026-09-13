import React from 'react';
import { Map, Compass } from 'lucide-react';

const MapPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
          <Map size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Interactive Trip Map</h1>
          <p className="text-gray-500 text-sm">Explore destination pins and travel routes globally.</p>
        </div>
      </div>
      <div className="bg-gray-100 border border-gray-200 rounded-3xl h-[60vh] flex flex-col items-center justify-center gap-3 shadow-inner">
        <Compass size={48} className="text-purple-400 animate-spin-slow" />
        <p className="text-gray-600 font-bold">Interactive map canvas loading...</p>
        <span className="text-xs text-gray-400">Connect Google Maps API key in environment variables to view live pins.</span>
      </div>
    </div>
  );
};

export default MapPage;