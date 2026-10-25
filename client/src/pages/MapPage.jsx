import React, { useState, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  Search,
  MapPin,
  Filter,
  Navigation,
  ArrowRight,
  Compass,
  ExternalLink,
  RotateCcw,
  Layers
} from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

// Carto Dark Matter GL Style (Renders 100% free without token black-screen issues)
const CARTO_DARK_STYLE = {
  version: 8,
  sources: {
    'carto-dark': {
      type: 'raster',
      tiles: [
        'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
        'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
        'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
      ],
      tileSize: 256,
      attribution: '© OpenStreetMap contributors, © CARTO'
    }
  },
  layers: [
    {
      id: 'carto-dark-layer',
      type: 'raster',
      source: 'carto-dark',
      minzoom: 0,
      maxzoom: 20
    }
  ]
};

// Strict India Bounding Box [Southwest [lng, lat], Northeast [lng, lat]]
const INDIA_BOUNDS = [
  [67.0, 5.5],
  [98.5, 37.5]
];

// State / Region Camera Centroids [lng, lat, zoom]
const STATE_CENTROIDS = {
  'All Regions': { longitude: 78.9629, latitude: 22.5937, zoom: 4.4 },
  'Himachal Pradesh': { longitude: 77.1734, latitude: 31.9204, zoom: 7.2 },
  'Uttarakhand': { longitude: 79.0193, latitude: 30.2668, zoom: 7.3 },
  'Ladakh': { longitude: 77.5771, latitude: 34.1526, zoom: 7.0 },
  'Kashmir': { longitude: 74.8570, latitude: 34.0837, zoom: 7.5 },
  'Jammu & Kashmir': { longitude: 74.8570, latitude: 34.0837, zoom: 7.5 },
  'Sikkim': { longitude: 88.5122, latitude: 27.5330, zoom: 8.2 },
  'Meghalaya': { longitude: 91.5822, latitude: 25.4670, zoom: 7.8 },
  'Arunachal Pradesh': { longitude: 93.5000, latitude: 27.6000, zoom: 7.0 },
  'Assam': { longitude: 92.9376, latitude: 26.2006, zoom: 7.0 },
  'Rajasthan': { longitude: 73.8179, latitude: 26.5238, zoom: 6.4 },
  'Kerala': { longitude: 76.2711, latitude: 10.4505, zoom: 7.0 },
  'Goa': { longitude: 73.9278, latitude: 15.3993, zoom: 9.0 },
  'Karnataka': { longitude: 76.1000, latitude: 13.8000, zoom: 6.6 },
  'Tamil Nadu': { longitude: 78.1500, latitude: 11.1271, zoom: 6.8 },
  'Maharashtra': { longitude: 74.5000, latitude: 18.5000, zoom: 6.5 },
  'West Bengal': { longitude: 88.3639, latitude: 24.8000, zoom: 6.6 },
  'Uttar Pradesh': { longitude: 80.5000, latitude: 26.8000, zoom: 6.5 },
  'Gujarat': { longitude: 71.1924, latitude: 22.2587, zoom: 6.5 },
  'Madhya Pradesh': { longitude: 78.6569, latitude: 23.4733, zoom: 6.4 },
  'Andaman & Nicobar': { longitude: 92.7265, latitude: 11.7401, zoom: 7.2 },
  'Lakshadweep': { longitude: 72.6417, latitude: 10.5667, zoom: 8.0 }
};

// Master Coordinate Dictionary for 120+ Indian Destinations [lng, lat]
const DEST_COORDS = {
  'Manali': [77.1887, 32.2396],
  'Kasol': [77.3150, 32.0100],
  'Spiti Valley': [78.0349, 32.2461],
  'Kinnaur Valley': [78.2667, 31.5333],
  'Tirthan Valley': [77.4565, 31.6380],
  'Dalhousie': [75.9708, 32.5380],
  'Dharamshala': [76.3209, 32.2190],
  'McLeod Ganj': [76.3213, 32.2426],
  'Bir Billing': [76.7234, 32.0460],
  'Shimla': [77.1734, 31.1048],
  'Kasauli': [76.9688, 30.9011],
  'Kufri': [77.2728, 31.0977],
  'Khajjiar': [76.0656, 32.5558],
  'Tosh': [77.4521, 32.0169],
  'Malana': [77.2608, 32.0628],
  'Kheerganga': [77.5085, 31.9961],
  'Jibhi': [77.3489, 31.6346],
  'Shoja': [77.3712, 31.5681],
  'Barot Valley': [76.8427, 32.0378],
  'Chitkul': [78.4333, 31.3500],
  'Kalpa': [78.2500, 31.5333],
  'Sangla': [78.2667, 31.4167],
  'Kaza': [78.0700, 32.2300],
  'Chandratal': [77.6167, 32.4769],
  'Solang Valley': [77.1500, 32.3167],
  'Rohtang Pass': [77.2450, 32.3710],
  'Sissu': [77.1256, 32.4795],
  'Narkanda': [77.4590, 31.2580],
  'Chail': [77.1942, 30.9702],
  'Palampur': [76.5365, 32.1109],
  'Mashobra': [77.2303, 31.1322],
  'Parvati Valley': [77.3500, 32.0100],
  'Pin Valley': [77.9833, 32.0000],
  'Key Monastery': [78.0167, 32.2986],
  'Tabo': [78.3833, 32.0947],
  'Langza': [78.0667, 32.2667],
  'Hikkim': [78.0000, 32.2333],
  'Komic': [78.0167, 32.2333],
  'Rishikesh': [78.2676, 30.0869],
  'Mussoorie': [78.0644, 30.4598],
  'Nainital': [79.4630, 29.3803],
  'Auli': [79.5680, 30.5333],
  'Chopta': [79.0241, 30.4608],
  'Tungnath': [79.2153, 30.4886],
  'Kedarnath': [79.0669, 30.7346],
  'Badrinath': [79.4938, 30.7433],
  'Valley of Flowers': [79.6064, 30.7280],
  'Jim Corbett': [78.7747, 29.5300],
  'Mukteshwar': [79.6479, 29.4622],
  'Almora': [79.6591, 29.5892],
  'Ranikhet': [79.4322, 29.6434],
  'Kausani': [79.5960, 29.8444],
  'Lansdowne': [78.6806, 29.8377],
  'Chakrata': [77.8686, 30.7016],
  'Munsiyari': [80.2374, 30.0672],
  'Binsar': [79.7547, 29.7042],
  'Haridwar': [78.1642, 29.9457],
  'Dehradun': [78.0322, 30.3165],
  'Kanatal': [78.3489, 30.4121],
  'Dhanaulti': [78.2430, 30.4258],
  'Bhimtal': [79.5620, 29.3444],
  'Sattal': [79.5316, 29.3511],
  'Kedarkantha': [78.1706, 31.0229],
  'Har Ki Dun': [78.3970, 31.1440],
  'Roopkund': [79.7317, 30.2625],
  'Dayara Bugyal': [78.5670, 30.8360],
  'Leh': [77.5771, 34.1526],
  'Ladakh': [77.5771, 34.1526],
  'Nubra Valley': [77.7000, 34.6800],
  'Pangong Lake': [78.6670, 33.7590],
  'Tso Moriri': [78.3167, 32.9000],
  'Kargil': [76.1349, 34.5539],
  'Zanskar Valley': [76.8906, 33.5683],
  'Turtuk': [76.8267, 34.8469],
  'Hanle': [78.9690, 32.7797],
  'Khardung La': [77.6044, 34.2808],
  'Srinagar': [74.7973, 34.0837],
  'Gulmarg': [74.3803, 34.0484],
  'Pahalgam': [75.3150, 34.0160],
  'Sonamarg': [75.2969, 34.3065],
  'Gurez Valley': [74.8350, 34.6330],
  'Doodhpathri': [74.5681, 33.8686],
  'Yusmarg': [74.6631, 33.8314],
  'Patnitop': [75.3268, 33.0847],
  'Gangtok': [88.6138, 27.3314],
  'Lachung': [88.7436, 27.6894],
  'Lachen': [88.5577, 27.7289],
  'Gurudongmar Lake': [88.7097, 28.0253],
  'Yumthang Valley': [88.6958, 27.8268],
  'Pelling': [88.2378, 27.3188],
  'Zuluk': [88.7797, 27.2519],
  'Tsomgo Lake': [88.7604, 27.3781],
  'Nathula Pass': [88.8317, 27.3883],
  'Darjeeling': [88.2627, 27.0360],
  'Kalimpong': [88.4695, 27.0594],
  'Sandakphu': [88.0019, 27.1060],
  'Shillong': [91.8933, 25.5788],
  'Cherrapunji': [91.7320, 25.2989],
  'Dawki': [92.0175, 25.1887],
  'Mawlynnong': [92.0143, 25.2156],
  'Jowai': [92.2016, 25.4509],
  'Tawang': [91.8689, 27.5861],
  'Ziro Valley': [93.8286, 27.5935],
  'Dirang': [92.2389, 27.3589],
  'Bomdila': [92.4170, 27.2645],
  'Mechuka': [94.1336, 28.6014],
  'Kaziranga': [93.4000, 26.5775],
  'Majuli': [94.1731, 26.9503],
  'Dzukou Valley': [94.0680, 25.5570],
  'Jaipur': [75.7873, 26.9124],
  'Udaipur': [73.7125, 24.5854],
  'Jaisalmer': [70.9083, 26.9157],
  'Jodhpur': [73.0243, 26.2389],
  'Pushkar': [74.5511, 26.4898],
  'Mount Abu': [72.7083, 24.5925],
  'Ranthambore': [76.5026, 26.0173],
  'Bikaner': [73.3119, 28.0229],
  'Chittorgarh': [74.6230, 24.8829],
  'Kumbhalgarh': [73.5866, 25.1483],
  'Bundi': [75.6400, 25.4305],
  'Ajmer': [74.6399, 26.4499],
  'Munnar': [77.0595, 10.0889],
  'Alleppey': [76.3388, 9.4981],
  'Wayanad': [76.1320, 11.6854],
  'Varkala': [76.7163, 8.7379],
  'Kovalam': [76.9787, 8.3988],
  'Thekkady': [77.1615, 9.6031],
  'Kochi': [76.2673, 9.9312],
  'Kumarakom': [76.4320, 9.6175],
  'Vagamon': [76.9052, 9.6862],
  'Coorg': [75.7382, 12.3375],
  'Hampi': [76.4600, 15.3350],
  'Gokarna': [74.3188, 14.5479],
  'Chikmagalur': [75.7720, 13.3161],
  'Ooty': [76.6950, 11.4064],
  'Kodaikanal': [77.4892, 10.2381],
  'Pondicherry': [79.8083, 11.9416],
  'Rameswaram': [79.3129, 9.2876],
  'Kanyakumari': [77.5385, 8.0883],
  'Goa': [73.8278, 15.2993],
  'North Goa': [73.7684, 15.5527],
  'South Goa': [73.9672, 15.2029],
  'Lonavala': [73.4068, 18.7546],
  'Mahabaleshwar': [73.6477, 17.9307],
  'Matheran': [73.2673, 18.9840],
  'Rann of Kutch': [70.1337, 23.8337],
  'Gir': [70.7932, 21.1243],
  'Varanasi': [83.0090, 25.3176],
  'Agra': [78.0081, 27.1767],
  'Khajuraho': [79.9199, 24.8318],
  'Pachmarhi': [78.4346, 22.4675],
  'Andaman': [92.7265, 11.7401],
  'Havelock Island': [92.9876, 11.9761],
  'Neil Island': [93.0402, 11.8322],
  'Lakshadweep': [72.6417, 10.5667],
  'Agatti Island': [72.1928, 10.8569],
  'Amritsar': [74.8723, 31.6340],
  'Kolkata': [88.3639, 22.5726],
  'Sundarbans': [88.8800, 21.9497],
  'Mandarmani': [87.6890, 21.6660],
  'Digha': [87.5298, 21.6266]
};

// Deterministic coordinate resolver so ALL 100 destinations always get valid Indian coordinates
function resolveCoordinates(dest, index) {
  if (typeof dest.lng === 'number' && typeof dest.lat === 'number') {
    return [dest.lng, dest.lat];
  }
  if (Array.isArray(dest.coordinates) && dest.coordinates.length === 2) {
    return [dest.coordinates[0], dest.coordinates[1]];
  }

  const name = (dest.name || '').trim();
  if (DEST_COORDS[name]) {
    return DEST_COORDS[name];
  }

  const matchedKey = Object.keys(DEST_COORDS).find(
    (key) =>
      name.toLowerCase().includes(key.toLowerCase()) ||
      key.toLowerCase().includes(name.toLowerCase())
  );
  if (matchedKey) {
    const hash = name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const offsetLng = ((hash % 15) - 7) * 0.025;
    const offsetLat = (((hash >> 3) % 15) - 7) * 0.025;
    return [DEST_COORDS[matchedKey][0] + offsetLng, DEST_COORDS[matchedKey][1] + offsetLat];
  }

  const regionName = dest.state || dest.region || 'Himachal Pradesh';
  const centroid =
    STATE_CENTROIDS[regionName] ||
    Object.entries(STATE_CENTROIDS).find(([k]) =>
      regionName.toLowerCase().includes(k.toLowerCase())
    )?.[1] ||
    STATE_CENTROIDS['Himachal Pradesh'];

  const angle = (index * 137.5 * Math.PI) / 180;
  const radius = 0.22 + (index % 7) * 0.14;
  return [
    Number((centroid.longitude + Math.cos(angle) * radius).toFixed(4)),
    Number((centroid.latitude + Math.sin(angle) * radius).toFixed(4))
  ];
}

export default function MapPage() {
  const navigate = useNavigate();
  const mapRef = useRef(null);

  const [activeRegion, setActiveRegion] = useState('All Regions');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDest, setSelectedDest] = useState(null);

  const [viewState, setViewState] = useState({
    longitude: 78.9629,
    latitude: 22.5937,
    zoom: 4.4,
    pitch: 25
  });

  const REGIONS = useMemo(() => {
    const dynamicStates = new Set([
      'All Regions',
      'Himachal Pradesh',
      'Uttarakhand',
      'Ladakh',
      'Kashmir',
      'Sikkim',
      'Meghalaya',
      'Rajasthan',
      'Kerala',
      'Goa'
    ]);
    mockDestinations.forEach((d) => {
      if (d.state) dynamicStates.add(d.state);
      else if (d.region) dynamicStates.add(d.region);
    });
    return Array.from(dynamicStates);
  }, []);

  const allMappedDestinations = useMemo(() => {
    return mockDestinations.map((dest, idx) => {
      const [lng, lat] = resolveCoordinates(dest, idx);
      return {
        ...dest,
        lng,
        lat,
        regionLabel: dest.state || dest.region || 'India'
      };
    });
  }, []);

  const filteredDestinations = useMemo(() => {
    return allMappedDestinations.filter((dest) => {
      const matchesRegion =
        activeRegion === 'All Regions' ||
        (dest.state && dest.state.toLowerCase() === activeRegion.toLowerCase()) ||
        (dest.region && dest.region.toLowerCase() === activeRegion.toLowerCase()) ||
        dest.regionLabel.toLowerCase().includes(activeRegion.toLowerCase());

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        (dest.name || '').toLowerCase().includes(q) ||
        (dest.regionLabel || '').toLowerCase().includes(q) ||
        (dest.description || '').toLowerCase().includes(q);

      return matchesRegion && matchesSearch;
    });
  }, [allMappedDestinations, activeRegion, searchQuery]);

  const mapMarkers = useMemo(() => {
    return filteredDestinations;
  }, [filteredDestinations]);

  const flyToLocation = useCallback((lng, lat, zoom = 9.5, pitch = 35) => {
    if (mapRef.current && typeof mapRef.current.flyTo === 'function') {
      mapRef.current.flyTo({
        center: [lng, lat],
        zoom,
        pitch,
        duration: 1400,
        essential: true
      });
    } else {
      setViewState((prev) => ({
        ...prev,
        longitude: lng,
        latitude: lat,
        zoom,
        pitch
      }));
    }
  }, []);

  const handleRegionSelect = (region) => {
    setActiveRegion(region);
    setSelectedDest(null);

    if (STATE_CENTROIDS[region]) {
      const target = STATE_CENTROIDS[region];
      flyToLocation(target.longitude, target.latitude, target.zoom, region === 'All Regions' ? 20 : 35);
      return;
    }

    const regionItems = allMappedDestinations.filter(
      (d) => d.regionLabel.toLowerCase() === region.toLowerCase()
    );
    if (regionItems.length > 0) {
      const avgLng = regionItems.reduce((sum, d) => sum + d.lng, 0) / regionItems.length;
      const avgLat = regionItems.reduce((sum, d) => sum + d.lat, 0) / regionItems.length;
      flyToLocation(avgLng, avgLat, 7.2, 35);
    }
  };

  const handleSidebarCardClick = (dest) => {
    setSelectedDest(dest);
    flyToLocation(dest.lng, dest.lat, 10.5, 45);
  };

  const handleMarkerClick = (e, dest) => {
    e.originalEvent?.stopPropagation();
    navigate(`/destination/${dest.id}`);
  };

  const resetIndiaView = () => {
    setActiveRegion('All Regions');
    setSearchQuery('');
    setSelectedDest(null);
    flyToLocation(78.9629, 22.5937, 4.4, 20);
  };

  return (
    <div className="h-dvh w-full flex flex-col bg-[#09090B] text-zinc-100 font-sans pt-20 overflow-hidden">
      {/* TOP SEARCH & REGION PILLS BAR */}
      <div className="px-6 md:px-10 py-4 z-20 flex flex-col lg:flex-row items-center justify-between gap-4 border-b border-white/10 bg-[#09090B]/90 backdrop-blur-2xl shrink-0">
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={17} />
            <input
              type="text"
              placeholder="Search all 100 Indian peaks, valleys, cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/10 focus:border-amber-400/60 rounded-full pl-11 pr-4 py-2.5 text-sm text-white outline-none transition-all"
            />
          </div>

          <button
            type="button"
            onClick={resetIndiaView}
            title="Reset India Map View"
            className="p-2.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-full transition-all text-amber-300 cursor-pointer"
          >
            <RotateCcw size={17} />
          </button>
        </div>

        {/* Dynamic Region Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 no-scrollbar">
          {REGIONS.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => handleRegionSelect(region)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                activeRegion === region
                  ? 'bg-white text-zinc-950 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                  : 'bg-white/[0.03] text-white/65 border-white/10 hover:border-amber-400/40 hover:text-white'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN SPLIT WORKSPACE */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* LEFT SIDEBAR: ALL 100 VERIFIED ROUTES */}
        <div className="w-full md:w-96 bg-[#09090B]/95 backdrop-blur-2xl border-r border-white/10 flex flex-col z-10 h-full shrink-0">
          <div className="p-5 pb-3 border-b border-white/5 flex items-center justify-between">
            <div>
              <h2 className="text-white font-extrabold text-base flex items-center gap-2">
                <Navigation className="text-amber-400" size={17} /> {activeRegion} Expeditions
              </h2>
              <p className="text-xs text-white/45 mt-0.5">
                {filteredDestinations.length} Verified Routes Plotted on Map
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              India Only
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
            {filteredDestinations.map((dest) => {
              const isSelected = selectedDest?.id === dest.id;
              return (
                <div
                  key={dest.id}
                  onClick={() => handleSidebarCardClick(dest)}
                  className={`group p-4 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-amber-400/15 border-amber-400/60 shadow-[0_0_25px_rgba(245,158,11,0.15)]'
                      : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/5 hover:border-amber-400/30'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <h3 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                      {dest.name}
                    </h3>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/destination/${dest.id}`);
                      }}
                      title="Open Destination Page"
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-amber-400 hover:text-zinc-950 text-white/70 transition-all flex items-center gap-1 shrink-0"
                    >
                      Explore <ArrowRight size={11} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
                    <span className="flex items-center gap-1">
                      <MapPin className="text-amber-400" size={10} /> {dest.regionLabel}
                    </span>
                    <span className="font-mono text-white/30">
                      {dest.lat.toFixed(2)}°N, {dest.lng.toFixed(2)}°E
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT AREA: INTERACTIVE INDIA MAP CANVAS */}
        <div className="flex-1 relative bg-[#09090B] overflow-hidden">
          <Map
            ref={mapRef}
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            minZoom={4}
            maxZoom={15}
            maxBounds={INDIA_BOUNDS}
            style={{ width: '100%', height: '100%' }}
          >
            <NavigationControl position="top-right" />

            {/* ALL 100 DESTINATION PINS */}
            {filteredDestinations.map((dest) => {
              const isSelected = selectedDest?.id === dest.id;
              return (
                <Marker
                  key={dest.id}
                  latitude={dest.lat}
                  longitude={dest.lng}
                  anchor="bottom"
                  onClick={(e) => handleMarkerClick(e, dest)}
                >
                  <div
                    onMouseEnter={() => setSelectedDest(dest)}
                    className="relative group cursor-pointer flex flex-col items-center"
                  >
                    <div
                      className={`mb-1.5 px-2.5 py-1 rounded-xl text-[11px] font-extrabold whitespace-nowrap transition-all pointer-events-none border shadow-xl ${
                        isSelected
                          ? 'opacity-100 scale-105 bg-amber-400 text-zinc-950 border-white'
                          : 'opacity-0 group-hover:opacity-100 bg-[#09090B]/95 text-white border-white/15'
                      }`}
                    >
                      {dest.name} • Click to Open
                    </div>

                    <div
                      className={`rounded-full transition-all duration-300 border-2 ${
                        isSelected
                          ? 'w-6 h-6 bg-amber-300 border-white shadow-[0_0_25px_rgba(245,158,11,1)] scale-125'
                          : 'w-4 h-4 bg-amber-400 border-white/90 shadow-[0_0_15px_rgba(245,158,11,0.75)] group-hover:scale-150'
                      }`}
                    />
                  </div>
                </Marker>
              );
            })}
          </Map>
          {/* FLOATING SELECTED DESTINATION QUICK-CARD ON MAP */}
          {selectedDest && (
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-30 bg-[#09090B]/90 backdrop-blur-2xl border border-amber-400/40 rounded-3xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1">
                    <Compass size={12} /> {selectedDest.regionLabel}
                  </span>
                  <h3 className="text-xl font-black text-white mt-0.5">{selectedDest.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDest(null)}
                  className="text-xs text-white/40 hover:text-white px-2 py-1"
                >
                  ✕
                </button>
              </div>

              {selectedDest.description && (
                <p className="text-xs text-white/60 line-clamp-2 mb-4">{selectedDest.description}</p>
              )}

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
                <div className="text-xs text-white/50 font-mono">
                  {selectedDest.lat.toFixed(3)}°N, {selectedDest.lng.toFixed(3)}°E
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/destination/${selectedDest.id}`)}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg cursor-pointer transition-all"
                >
                  Open Destination <ExternalLink size={13} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
