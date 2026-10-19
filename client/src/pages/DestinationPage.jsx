import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ShieldCheck, Heart, Sparkles, ArrowRight, RefreshCw, Compass, CheckCircle, User, Users, Home, Utensils, Car, Mountain, Sun, Cloud } from 'lucide-react';
import { mockDestinations } from '../data/mockDatabase';

export default function DestinationPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [batches, setBatches] = useState([]);
  const [selectedBatchIndex, setSelectedBatchIndex] = useState(0);

  // Comprehensive itineraries for expeditions
  const itinerariesData = {
    default: [
      { day: 'Day 1', title: 'Arrival, Basecamp & Briefing', desc: 'Arrive at destination basecamp, check into accommodations, and review safety guidelines with your group leader.' },
      { day: 'Day 2', title: 'Core Exploration & Scenic Trail', desc: 'Guided full-day excursion covering iconic viewpoints, local landmarks, and cultural highlights.' },
      { day: 'Day 3', title: 'Adventure Activity & Bonfire', desc: 'Engage in curated group activities, local food walks, and evening stargazing.' },
      { day: 'Day 4', title: 'Sunrise Session & Departure', desc: 'Final group photos, souvenir shopping, and departure home with lifelong memories.' }
    ]
  };

  const generateRandomBatches = () => {
    const datePools = [
      ['Oct 12 - Oct 18, 2026', 'Nov 05 - Nov 11, 2026', 'Dec 20 - Dec 26, 2026'],
      ['Oct 19 - Oct 25, 2026', 'Nov 12 - Nov 18, 2026', 'Jan 10 - Jan 16, 2027'],
      ['Nov 01 - Nov 07, 2026', 'Dec 02 - Dec 08, 2026', 'Feb 14 - Feb 20, 2027']
    ];
    const agePools = ['18 - 24 yrs', '21 - 28 yrs', '20 - 26 yrs', '22 - 30 yrs'];
    const genderPools = ['7 M / 5 F', '6 M / 6 F', '8 M / 4 F', '5 M / 7 F', '9 M / 3 F'];
    const countPools = [10, 12, 14, 15, 16, 18];

    const chosenDates = datePools[Math.floor(Math.random() * datePools.length)];

    return chosenDates.map((dateRange, idx) => ({
      id: idx,
      dateRange,
      ageGroup: agePools[Math.floor(Math.random() * agePools.length)],
      genderVibe: genderPools[Math.floor(Math.random() * genderPools.length)],
      totalJoined: countPools[Math.floor(Math.random() * countPools.length)],
      status: idx === 0 ? 'Filling Fast' : idx === 1 ? 'Available' : 'Limited Slots'
    }));
  };

  useEffect(() => {
    // Find destination directly from mockDatabase using ID
    const found = mockDestinations.find(d => String(d.id) === String(id)) || {
      id: id || '1',
      name: 'Himalayan Expedition',
      state: 'Mountain Region, India',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      approximateBudget: '₹14,500',
      shortDescription: 'An immersive group expedition crafted for young travelers seeking adventure, culture, and deep connections.'
    };

    setDestination(found);
    setBatches(generateRandomBatches());
    setSelectedBatchIndex(0);
  }, [id]);

  const handleRefreshStats = () => {
    setBatches(generateRandomBatches());
    setSelectedBatchIndex(0);
  };

  const handleAddToWishlist = () => {
    if (!destination) return;
    
    const existingWishlist = JSON.parse(localStorage.getItem('tripMate_wishlist') || '[]');
    const currentId = String(destination.id);
    
    const newItem = {
      id: currentId,
      title: destination.name,
      location: destination.state,
      image: destination.image,
      price: destination.approximateBudget || '₹14,500'
    };

    const alreadyExists = existingWishlist.some(item => String(item.id) === currentId);

    if (!alreadyExists) {
      const updated = [...existingWishlist, newItem];
      localStorage.setItem('tripMate_wishlist', JSON.stringify(updated));
      alert(`"${destination.name}" added to your wishlist successfully!`);
    } else {
      alert(`"${destination.name}" is already in your wishlist!`);
    }
  };

  // Destination-specific archetype data mapping for the right-column cards.
  // Matches by specific destination name first (unique per-location details),
  // then falls back dynamically to category/state so no two destination types
  // ever show identical right-column cards.
  const DEFAULT_SPECS = {
    captain: 'Verified Expedition Captain',
    captainSub: 'First-Aid & Trail Certified',
    rating: '4.9 ★',
    accommodation: 'Boutique Stays & Camps',
    meals: 'Breakfast & Dinner',
    transport: 'Private AC SUV / Coach',
    difficulty: 'Easy – Moderate',
    altitude: '',
    weather: '14°C – 22°C · Crisp & Scenic',
    weatherBg: 'from-amber-500/10 to-orange-500/10',
    weatherBorder: 'border-amber-400/20',
    perks: [
      'All local permits, entry & taxes included',
      'Bonfire nights & curated group icebreakers',
      '24/7 on-ground coordinator support',
    ],
  };

  const getDestinationSpecs = (dest) => {
    if (!dest) return DEFAULT_SPECS;

    const key = (dest?.name || dest?.title || dest?.id || '').toLowerCase();
    const category = (dest?.category || '').toLowerCase();
    const state = (dest?.state || dest?.location || '').toLowerCase();

    // Per-destination unique specs (exact-name match, case-insensitive).
    const SPEC_MAP = {
      // 🏔️ Mountain / High-Altitude
      manali: {
        captain: 'High-Altitude Mountaineering & Wilderness First-Aid Certified',
        captainSub: 'Rohtang Pass & Solang Valley specialist',
        rating: '4.9 ★',
        accommodation: 'Alpine Cottages & Apple-Orchard Stays',
        meals: 'Hot Buffet Breakfast & Bonfire Dinner',
        transport: '4x4 Expedition SUV / Tempo Traveller',
        difficulty: 'Moderate – Challenging',
        altitude: '6,700 ft',
        weather: '5°C – 15°C · Pine-Scented & Snow-Capped',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Rohtang Pass permit assistance',
          'Old Manali cafe-hopping map',
          'Paragliding & river rafting bookings',
        ],
      },
      kasol: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Parvati Valley & Kheerganga specialist',
        rating: '4.8 ★',
        accommodation: 'Riverside Camps & Backpacker Hostels',
        meals: 'Israeli Breakfast & Parvati Trout Dinner',
        transport: 'Private SUV & Local Transfers',
        difficulty: 'Easy – Relaxed',
        altitude: '5,000 ft',
        weather: '12°C – 22°C · River-Valley Mist',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Kheerganga trek guidance',
          'Café-hopping map',
          'Riverside camping permits',
        ],
      },
      spiti: {
        captain: 'High-Altitude Mountaineering & Wilderness First-Aid Certified',
        captainSub: 'Cold desert & monastery circuit specialist',
        rating: '4.9 ★',
        accommodation: 'High-Altitude Homestays & Monastery Guesthouses',
        meals: 'Butter Tea & Thukpa Dinner',
        transport: '4x4 Expedition SUV / Tempo Traveller',
        difficulty: 'Challenging',
        altitude: '12,000+ ft',
        weather: '-5°C – 10°C · Lunar Desert & Starry Skies',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Inner-line permits & border formalities',
          'Oxygen / oximeter backup',
          'Monastery circuit tours',
        ],
      },
      ladakh: {
        captain: 'High-Altitude Mountaineering & Wilderness First-Aid Certified',
        captainSub: 'Leh & Nubra Valley acclimatization specialist',
        rating: '4.9 ★',
        accommodation: 'Luxury Desert Camps & Leh Heritage Stays',
        meals: 'Ladakhi Thukpa & Skyu Dinner',
        transport: '4x4 Expedition SUV',
        difficulty: 'Challenging',
        altitude: '11,500+ ft',
        weather: '-2°C – 14°C · Barren Peaks & Deep Blue Skies',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'AMS acclimatization guide',
          'Pangong & Nubra permits',
          'Monastery tours',
        ],
      },
      leh: {
        captain: 'High-Altitude Mountaineering & Wilderness First-Aid Certified',
        captainSub: 'Leh & Nubra Valley acclimatization specialist',
        rating: '4.9 ★',
        accommodation: 'Luxury Desert Camps & Leh Heritage Stays',
        meals: 'Ladakhi Thukpa & Skyu Dinner',
        transport: '4x4 Expedition SUV',
        difficulty: 'Challenging',
        altitude: '11,500+ ft',
        weather: '-2°C – 14°C · Barren Peaks & Deep Blue Skies',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'AMS acclimatization guide',
          'Pangong & Nubra permits',
          'Monastery tours',
        ],
      },
      auli: {
        captain: 'High-Altitude Mountaineering & Wilderness First-Aid Certified',
        captainSub: 'Ski & Nanda Devi viewpoint specialist',
        rating: '4.9 ★',
        accommodation: 'Alpine Ski Lodges & Snow Camps',
        meals: 'Hot Soup & Garhwali Breakfast',
        transport: '4x4 SUV / Ropeway Transfers',
        difficulty: 'Moderate',
        altitude: '9,000+ ft',
        weather: '-3°C – 12°C · Snow-Slopes & Oak Forests',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Ski gear rental',
          'Nanda Devi viewpoint treks',
          'Snow camping',
        ],
      },
      gulmarg: {
        captain: 'High-Altitude Mountaineering & Wilderness First-Aid Certified',
        captainSub: 'Gondola & powder-snow specialist',
        rating: '4.9 ★',
        accommodation: 'Alpine Resorts & Golf-Course Cottages',
        meals: 'Kashmiri Kahwa & Wazwan Dinner',
        transport: '4x4 SUV / Gondola Transfers',
        difficulty: 'Moderate',
        altitude: '8,700 ft',
        weather: '-2°C – 10°C · Powder-Snow & Pine',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Gondola ride booking',
          'Ski lessons',
          'Alpather Lake treks',
        ],
      },
      tawang: {
        captain: 'High-Altitude Mountaineering & Wilderness First-Aid Certified',
        captainSub: 'Sela Pass & monastery circuit specialist',
        rating: '4.9 ★',
        accommodation: 'Monastery Guesthouses & Highland Stays',
        meals: 'Momos & Thukpa Dinner',
        transport: '4x4 Expedition SUV',
        difficulty: 'Challenging',
        altitude: '10,000+ ft',
        weather: '-5°C – 10°C · Alpine Passes & Prayer Flags',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Inner Line Permit',
          'Sela Pass transit',
          'War memorial visits',
        ],
      },
      munsiyari: {
        captain: 'High-Altitude Mountaineering & Wilderness First-Aid Certified',
        captainSub: 'Panchachuli peaks & glacier specialist',
        rating: '4.9 ★',
        accommodation: 'Cliffside Camps & Panchachuli View Stays',
        meals: 'High-Altitude Breakfast & Kumaoni Dinner',
        transport: 'Private 4x4 SUV',
        difficulty: 'Challenging',
        altitude: '7,200 ft',
        weather: '0°C – 12°C · Panchachuli Peaks & Snow Trails',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Khaliya Top trek',
          'Glacier base camps',
          'Wildlife photography',
        ],
      },
      tirthan: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Great Himalayan National Park specialist',
        rating: '4.8 ★',
        accommodation: 'Wooden Homestays & Riverside Cottages',
        meals: 'Trout Breakfast & Himalayan Dinner',
        transport: 'Private SUV / Local Transfers',
        difficulty: 'Easy – Relaxed',
        altitude: '5,000 ft',
        weather: '10°C – 20°C · Great Himalayan National Park Edge',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Trout fishing permit',
          'Jalori Pass trek',
          'Bird-watching walks',
        ],
      },
      kinnaur: {
        captain: 'High-Altitude Mountaineering & Wilderness First-Aid Certified',
        captainSub: 'Sutlej gorge & Kinnaur Kailash specialist',
        rating: '4.9 ★',
        accommodation: 'Wooden-Stone Homestays & Apple-Orchard Stays',
        meals: 'Apple Breakfast & Himachali Dinner',
        transport: '4x4 Expedition SUV',
        difficulty: 'Challenging',
        altitude: '8,500 ft',
        weather: '0°C – 14°C · Sutlej Gorge & Kinnaur Kailash',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Chitkul village visit',
          'Apple orchard tours',
          'Cliff-road driving',
        ],
      },
      chopta: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Tungnath & Chandrashila specialist',
        rating: '4.8 ★',
        accommodation: 'Tungnath Base Camps & Bugyal Stays',
        meals: 'High-Altitude Breakfast & Campfire Dinner',
        transport: 'Private SUV / Local Transfers',
        difficulty: 'Moderate',
        altitude: '8,500 ft',
        weather: '5°C – 15°C · Mini Switzerland & Rhododendron Forests',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Tungnath trek',
          'Chandrashila summit',
          'Deoria Tal camping',
        ],
      },

      // 🌲 Hill Stations / Forest Retreats
      dalhousie: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Khajjiar meadow & colonial trail specialist',
        rating: '4.8 ★',
        accommodation: 'Colonial Bungalows & Pine Cottages',
        meals: 'Himachali Breakfast & Garden Dinner',
        transport: 'Private AC Coach / SUV',
        difficulty: 'Easy – Relaxed',
        altitude: '6,500 ft',
        weather: '10°C – 21°C · Scottish Charm & Dhauladhar Views',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Khajjiar meadow visit',
          'Panchpula walk',
          'Church tours',
        ],
      },
      dharamshala: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Triund trek & tea-garden specialist',
        rating: '4.8 ★',
        accommodation: 'Kangra-Style Cottages & Tea-Garden Stays',
        meals: 'Tibetan Breakfast & Thukpa',
        transport: 'Private SUV / Local Transfers',
        difficulty: 'Easy – Relaxed',
        altitude: '4,800 ft',
        weather: '12°C – 22°C · Dhauladhar Foothills & Cedar Forests',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Triund trek booking',
          'Tea garden tours',
          'Monastery visits',
        ],
      },
      mcleod: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Little Lhasa & Tibetan cafe specialist',
        rating: '4.8 ★',
        accommodation: 'Tibetan Guesthouses & Cafe Stays',
        meals: 'Momos & Butter Tea',
        transport: 'Private SUV / Walking Transfers',
        difficulty: 'Easy – Relaxed',
        altitude: '6,800 ft',
        weather: '10°C – 20°C · Little Lhasa & Mountain Cafes',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Triund trek',
          'Tsuglagkhang complex',
          'Tibetan artifact shopping',
        ],
      },
      mussoorie: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Mall Road & Gun Hill specialist',
        rating: '4.8 ★',
        accommodation: 'Colonial Cottages & Mall-View Hotels',
        meals: 'Continental Breakfast & Garhwali Thali',
        transport: 'Private SUV / Cable Car',
        difficulty: 'Easy – Relaxed',
        altitude: '6,500 ft',
        weather: '10°C – 22°C · Queen of Hills & Misty Walks',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Gun Hill cable car',
          'Kempty Falls trip',
          'Mall Road stroll',
        ],
      },
      nainital: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Naini Lake & Snow View specialist',
        rating: '4.8 ★',
        accommodation: 'Lake-View Cottages & Heritage Hotels',
        meals: 'Kumaoni Breakfast & Lakeside Dinner',
        transport: 'Private SUV / Boat Transfers',
        difficulty: 'Easy – Relaxed',
        altitude: '6,800 ft',
        weather: '12°C – 22°C · Lake-City & Pine Slopes',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Naini Lake boating',
          'Snow View cable car',
          'Eco Cave Gardens',
        ],
      },
      darjeeling: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Toy Train & Tiger Hill specialist',
        rating: '4.8 ★',
        accommodation: 'Tea-Estate Bungalows & Heritage Cottages',
        meals: 'Darjeeling Tea Breakfast & Momos',
        transport: 'Toy Train / Private SUV',
        difficulty: 'Easy – Relaxed',
        altitude: '7,000 ft',
        weather: '8°C – 18°C · Misty Tea Gardens & Kangchenjunga Views',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Toy Train joyride',
          'Tiger Hill sunrise',
          'Tea estate tours',
        ],
      },
      gangtok: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'MG Marg & Nathu La specialist',
        rating: '4.8 ★',
        accommodation: 'Boutique City Hotels & Mountain Lodges',
        meals: 'Sikkimese Breakfast & Thukpa',
        transport: 'Private SUV / Cable Car',
        difficulty: 'Easy – Relaxed',
        altitude: '5,500 ft',
        weather: '10°C – 20°C · MG Marg & Kangchenjunga Vistas',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Nathu La permit',
          'Rumtek monastery',
          'Cable car ride',
        ],
      },
      lansdowne: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Tip-in-Top & Bhulla Lake specialist',
        rating: '4.8 ★',
        accommodation: 'Army-Cantonment Cottages & Pine Cottages',
        meals: 'Continental Breakfast & Garden Dinner',
        transport: 'Private SUV / Local Transfers',
        difficulty: 'Easy – Relaxed',
        altitude: '5,500 ft',
        weather: '12°C – 22°C · Quiet Cantonment & Blue Pine',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Tip-in-Top viewpoint',
          'Bhulla Lake boating',
          'Army museum',
        ],
      },
      ranikhet: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Golf course & Chaubatia specialist',
        rating: '4.8 ★',
        accommodation: 'Golf-Course Cottages & Orchard Stays',
        meals: 'Kumaoni Breakfast & Orchard Dinner',
        transport: 'Private SUV / Local Transfers',
        difficulty: 'Easy – Relaxed',
        altitude: '6,000 ft',
        weather: '12°C – 22°C · Queen\'s Meadow & Himalayan Panorama',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Upat Golf Course',
          'Jhula Devi temple',
          'Chaubatia gardens',
        ],
      },

      // 🏖️ Coastal / Island / Beach
      goa: {
        captain: 'Certified Water-Sports & Coastal Experience Lead',
        captainSub: 'Beach safety & island hopping expert',
        rating: '4.9 ★',
        accommodation: 'Beachfront Villas & Boutique Resorts',
        meals: 'Coastal Breakfast & Sunset Cafe Platter',
        transport: 'Private Ferry / AC Cab',
        difficulty: 'Easy – Tropical Vibe',
        altitude: '0 ft',
        weather: '24°C – 32°C · Golden Sands & Arabian Breeze',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Island ferry tickets & boat transfers',
          'Beach shack hops & seaside dining',
          'Sunset kayak & paddle sessions',
        ],
      },
      kerala: {
        captain: 'Certified Water-Sports & Coastal Experience Lead',
        captainSub: 'Houseboat & backwater cruise specialist',
        rating: '4.9 ★',
        accommodation: 'Houseboats & Boutique Villas',
        meals: 'Kerala Sadya Breakfast & Seafood Dinner',
        transport: 'Houseboat / AC Cab',
        difficulty: 'Easy – Tropical Vibe',
        altitude: '0 ft',
        weather: '24°C – 31°C · Backwater Canals & Coconut Groves',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Houseboat overnight stay',
          'Alleppey canal cruise',
          'Spice plantation tour',
        ],
      },
      andaman: {
        captain: 'Certified Water-Sports & Coastal Experience Lead',
        captainSub: 'Coral reef & island ferry specialist',
        rating: '4.9 ★',
        accommodation: 'Beachfront Cottages & Eco-Resorts',
        meals: 'Coastal Breakfast & Sunset Seafood Platter',
        transport: 'Private Ferry / Coastal Cruiser',
        difficulty: 'Easy – Tropical Vibe',
        altitude: '0 ft',
        weather: '24°C – 30°C · Turquoise Waters & Coral Reefs',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Island ferry tickets',
          'Beach shack hops',
          'Snorkeling sessions',
        ],
      },
      gokarna: {
        captain: 'Certified Water-Sports & Coastal Experience Lead',
        captainSub: 'Om Beach & sunset trek specialist',
        rating: '4.9 ★',
        accommodation: 'Beachside Huts & Boutique Resorts',
        meals: 'Coastal Breakfast & Sunset Cafe Platter',
        transport: 'Private Ferry / AC Cab',
        difficulty: 'Easy – Tropical Vibe',
        altitude: '0 ft',
        weather: '24°C – 31°C · Om Beach & Arabian Waves',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Beach trek routes',
          'Kudle Beach shacks',
          'Sunset kayak sessions',
        ],
      },

      // 👑 Royal Heritage / Desert / Cultural
      udaipur: {
        captain: 'Cultural Historian & Royal Architecture Curator',
        captainSub: 'Lake Palace & heritage trail specialist',
        rating: '4.9 ★',
        accommodation: 'Heritage Haveli & Lake-View Palace Rooms',
        meals: 'Royal Thali Breakfast & Rooftop Dinner',
        transport: 'Private AC Cruiser / Old-City Rickshaw',
        difficulty: 'Easy – Cultural Explorer',
        altitude: '0 ft',
        weather: '18°C – 28°C · City of Lakes & Sunset Aravallis',
        weatherBg: 'from-amber-800/10 to-orange-600/10',
        weatherBorder: 'border-amber-500/20',
        perks: [
          'Monument fast-track entry',
          'Lake Pichola boat ride',
          'Folk music evening',
        ],
      },
      jaipur: {
        captain: 'Cultural Historian & Royal Architecture Curator',
        captainSub: 'Amber Fort & bazaar trail specialist',
        rating: '4.9 ★',
        accommodation: 'Heritage Haveli & Luxury Palace Stays',
        meals: 'Rajasthani Breakfast & Thali Dinner',
        transport: 'Private AC Cruiser / Rickshaw Hop',
        difficulty: 'Easy – Cultural Explorer',
        altitude: '0 ft',
        weather: '18°C – 30°C · Pink City & Desert Nights',
        weatherBg: 'from-amber-800/10 to-orange-600/10',
        weatherBorder: 'border-amber-500/20',
        perks: [
          'Amber Fort fast-track entry',
          'Thar dune bashing',
          'Bazaar walks',
        ],
      },
      jaisalmer: {
        captain: 'Cultural Historian & Royal Architecture Curator',
        captainSub: 'Golden Fort & camel safari specialist',
        rating: '4.9 ★',
        accommodation: 'Luxury Desert Swiss Tents & Haveli Stays',
        meals: 'Rajasthani Thali & Rooftop Breakfast',
        transport: 'Private AC Cruiser / Camel Cart',
        difficulty: 'Easy – Cultural Explorer',
        altitude: '0 ft',
        weather: '20°C – 35°C · Golden Fort & Thar Dunes',
        weatherBg: 'from-amber-800/10 to-orange-600/10',
        weatherBorder: 'border-amber-500/20',
        perks: [
          'Thar dune bashing',
          'Camel safari',
          'Folk music night',
        ],
      },
      varanasi: {
        captain: 'Cultural Historian & Royal Architecture Curator',
        captainSub: 'Ganga ghat & dawn boat specialist',
        rating: '4.9 ★',
        accommodation: 'Riverside Heritage Stays & Ghat-View Hotels',
        meals: 'Kashi Breakfast & Ganga Aarti Thali',
        transport: 'Private AC Cruiser / Old-City Rickshaw',
        difficulty: 'Easy – Cultural Explorer',
        altitude: '0 ft',
        weather: '18°C – 30°C · Spiritual Ghats & Ganga Sunrise',
        weatherBg: 'from-amber-800/10 to-orange-600/10',
        weatherBorder: 'border-amber-500/20',
        perks: [
          'Dawn boat ride on Ganga',
          'Temple fast-track entry',
          'Ganga Aarti viewing',
        ],
      },
      agra: {
        captain: 'Cultural Historian & Royal Architecture Curator',
        captainSub: 'Taj Mahal & Mughal heritage specialist',
        rating: '4.9 ★',
        accommodation: 'Mughal-Style Heritage Stays & Taj-View Hotels',
        meals: 'Mughlai Breakfast & Rooftop Dinner',
        transport: 'Private AC Cruiser / Rickshaw Hop',
        difficulty: 'Easy – Cultural Explorer',
        altitude: '0 ft',
        weather: '18°C – 30°C · Taj Mahal & Yamuna Breeze',
        weatherBg: 'from-amber-800/10 to-orange-600/10',
        weatherBorder: 'border-amber-500/20',
        perks: [
          'Taj Mahal fast-track entry',
          'Agra Fort tour',
          'Marble workshop visit',
        ],
      },

      // 🏞️ River / Adventure
      rishikesh: {
        captain: 'White-Water & Aero-Sports Certified Instructor',
        captainSub: 'Ganga rapids & yoga valley specialist',
        rating: '5.0 ★',
        accommodation: 'Riverside Glamping & Cliffside Camps',
        meals: 'High-Energy Breakfast & Riverside Buffet',
        transport: 'Adventure Support Vehicle',
        difficulty: 'Moderate – High Adrenaline',
        altitude: '1,100 ft',
        weather: '16°C – 25°C · Ganga Rapids & Yoga Valley',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Safety-certified gear & helmet',
          'GoPro assistance & action photography',
          'Riverside acoustic jam evenings',
        ],
      },
      bir: {
        captain: 'White-Water & Aero-Sports Certified Instructor',
        captainSub: 'Paragliding & Dhauladhar specialist',
        rating: '5.0 ★',
        accommodation: 'Cliffside Camps & Paragliding Lodges',
        meals: 'Mountain Breakfast & Campfire Dinner',
        transport: 'Adventure Support Vehicle',
        difficulty: 'Moderate – High Adrenaline',
        altitude: '5,000 ft',
        weather: '12°C – 22°C · Paragliding Capital & Dhauladhar',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Paragliding booking',
          'Safety-certified gear',
          'Mountain biking trails',
        ],
      },
      meghalaya: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Living root bridge & caving specialist',
        rating: '4.8 ★',
        accommodation: 'Living-Root Village Homestays & Eco-Cottages',
        meals: 'Khasi Breakfast & Forest Dinner',
        transport: 'Private SUV / Local Transfers',
        difficulty: 'Moderate – Adventurous',
        altitude: '4,500 ft',
        weather: '14°C – 22°C · Living Root Bridges & Misty Caves',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Double Decker root bridge trek',
          'Limestone caving expedition',
          'Waterfall hopping',
        ],
      },
      cherrapunji: {
        captain: 'Local Heritage Storyteller & Trail Naturalist',
        captainSub: 'Waterfall & cave exploration specialist',
        rating: '4.8 ★',
        accommodation: 'Cliff-Edge Cottages & Cave-View Stays',
        meals: 'Khasi Breakfast & Forest Buffet',
        transport: 'Private SUV / Local Transfers',
        difficulty: 'Moderate – Adventurous',
        altitude: '4,500 ft',
        weather: '14°C – 22°C · Wettest Place & Waterfall Trails',
        weatherBg: 'from-emerald-500/10 to-lime-500/10',
        weatherBorder: 'border-emerald-400/60',
        perks: [
          'Nohkalikai Falls trek',
          'Limestone caving',
          'Seven Sisters Falls',
        ],
      },
      pahalgam: {
        captain: 'White-Water & Aero-Sports Certified Instructor',
        captainSub: 'Lidder River & pony ride specialist',
        rating: '5.0 ★',
        accommodation: 'Riverside Glamping & Pine-Forest Camps',
        meals: 'High-Energy Breakfast & Riverside Buffet',
        transport: 'Private 4x4 SUV',
        difficulty: 'Moderate – Adventurous',
        altitude: '7,200 ft',
        weather: '8°C – 18°C · Lidder Valley & Shepherd\'s Meadow',
        weatherBg: 'from-amber-500/10 to-orange-500/10',
        weatherBorder: 'border-amber-400/20',
        perks: [
          'Pony ride bookings',
          'River rafting',
          'Betaab Valley tours',
        ],
      },
    };

    // 1) Exact name match (substring, case-insensitive).
    const exactMatch = Object.entries(SPEC_MAP).find(([k]) => key.includes(k));
    if (exactMatch) return exactMatch[1];

    // 2) Fall back dynamically by category / state so no two types are identical.
    if (category === 'beach' || state.includes('goa') || state.includes('kerala') || state.includes('andaman')) {
      return SPEC_MAP.goa;
    }
    if (category === 'heritage' || state.includes('rajasthan') || state.includes('uttar pradesh') || state.includes('varanasi') || state.includes('agra')) {
      return SPEC_MAP.udaipur;
    }
    if (category === 'river' || category === 'adventure' || state.includes('rishikesh') || state.includes('uttarakhand')) {
      return SPEC_MAP.rishikesh;
    }
    if (category === 'mountain' || category === 'trek') {
      // High-altitude vs relaxed hill station by altitude keyword if present, else relaxed hill station.
      const high = ['ladakh', 'spiti', 'leh', 'manali', 'auli', 'gulmarg', 'tawang', 'munsiyari', 'kinnaur', 'chopta', 'pahalgam'].some((k) => key.includes(k) || state.includes(k));
      return high ? SPEC_MAP.manali : SPEC_MAP.dalhousie;
    }
    // Default fallback (nature / wildlife / unknown).
    return SPEC_MAP.dalhousie;
  };

  if (!destination) return null;

  const specs = getDestinationSpecs(destination);

  const currentItinerary = itinerariesData.default;
  const activeBatch = batches[selectedBatchIndex] || batches[0];

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 pb-24 pl-0 md:pl-24 p-6 md:p-10 font-sans overflow-x-hidden relative">
      
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative h-[380px] md:h-[450px] shadow-2xl border border-white/10 bg-black/40">
        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent flex flex-col justify-end p-6 md:p-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 w-fit mb-3">
            <Sparkles size={12} /> Verified Group Leader Included
          </div>
          <h1 className="text-3xl md:text-5xl font-sans text-white">{destination.name}</h1>
            <p className="text-zinc-400 text-xs md:text-sm flex items-center gap-1.5 mt-2">
              <MapPin size={15} className="text-amber-300" /> {destination.state}
            </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* About Panel */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-extrabold text-white uppercase tracking-wider">About This Journey</h3>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              {destination.shortDescription || destination.fullDescription || 'An extraordinary group expedition featuring verified leaders, curated stays, and immersive local adventures.'}
            </p>
            <div className="border-t border-white/10 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                <span>Verified stays & gear coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                <span>Instant private workspace unlock on booking</span>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-white uppercase tracking-wider">Day-by-Day Expedition Itinerary</h3>
                <p className="text-[11px] text-zinc-400 mt-0.5">Curated schedule designed for maximum exploration and squad bonding.</p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 px-3 py-1 rounded-full">
                {currentItinerary.length} Days Planned
              </span>
            </div>

            <div className="relative space-y-4 pt-2 pl-6 md:pl-8">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />
              {currentItinerary.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-4 group">
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <Compass size={14} className="text-white" />
                    </div>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/25 ring-2 ring-white/20" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-white/[0.06] border border-white/15 px-3 py-1 rounded-full">
                      {item.day}
                    </span>
                    <h4 className="text-base md:text-lg font-bold tracking-normal text-white leading-snug pt-1">{item.title}</h4>
                    <p className="text-xs md:text-sm font-normal tracking-normal text-white/75 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Batches */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl p-6 md:p-8 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-white uppercase tracking-wider">Select Batch Date & Squad Vibe</h3>
                <p className="text-[11px] text-zinc-400 mt-0.5">Click a date batch below to select your slot.</p>
              </div>
              <button 
                onClick={handleRefreshStats}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-amber-300 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-inner"
              >
                <RefreshCw size={12} /> Refresh Batches
              </button>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-400">Available Batch Slots</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {batches.map((batch, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedBatchIndex(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedBatchIndex === idx
                        ? 'bg-amber-500/[0.08] border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.12)] text-white'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{batch.dateRange}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${
                      selectedBatchIndex === idx ? 'bg-amber-500/20 text-amber-300' : 'bg-white/10 text-zinc-400'
                    }`}>
                      {batch.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-inner">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">Primary Age Group</span>
                <h4 className="text-sm font-bold text-white mt-1">{activeBatch?.ageGroup}</h4>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-inner">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">Gender Vibe Ratio</span>
                <h4 className="text-sm font-bold text-white mt-1">{activeBatch?.genderVibe}</h4>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-inner">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">Total Joined</span>
                <h4 className="text-sm font-bold text-white mt-1">{activeBatch?.totalJoined} Travelers</h4>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-8 sticky top-8 space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Package Price</span>
              <div className="text-2xl md:text-3xl font-sans text-white mt-1">{destination.approximateBudget || '₹14,500'}</div>
              <p className="text-[11px] text-amber-300/90 mt-1 font-medium">Selected Slot: {activeBatch?.dateRange}</p>
            </div>

            <div className="space-y-3 pt-2">
              <button 
                onClick={() => navigate(`/checkout/${id || '1'}`)}
                className="w-full bg-white hover:bg-amber-400 text-zinc-950 font-bold py-4 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Proceed to Checkout <ArrowRight size={16} />
              </button>

              <button 
                onClick={handleAddToWishlist}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-inner"
              >
                <Heart size={15} className="text-amber-400 fill-amber-400" /> Add to Wishlist
              </button>
            </div>

          </div>

          {/* Card 1: Squad & Expedition Captain */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-4">
            <h3 className="text-xs font-extrabold text-white/60 uppercase tracking-wider mb-4">SQUAD & CAPTAIN</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <ShieldCheck size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{specs.captain}</div>
                  <div className="text-[10px] text-white/60">{specs.captainSub}</div>
                </div>
              </div>
              <span className="text-amber-300 text-xs font-bold">{specs.rating}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative flex items-center -space-x-2">
                {[1, 2, 3, 4, 5]
                  .slice(0, Math.min(5, activeBatch?.totalJoined || 0))
                  .map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#09090B] flex items-center justify-center text-[9px] font-bold text-white shadow-md z-10"
                      style={{
                        zIndex: 6 - i,
                        transform: i === 1 ? 'translateX(0)' : `translateX(${-12 * (i - 1)}px)`,
                      }}
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-white">
                  {activeBatch?.totalJoined} Travelers Joined · {Math.max(0, 18 - (activeBatch?.totalJoined || 0))} Slots Left
                </div>
                <div className="text-[10px] text-white/60 flex items-center gap-1">
                  🔒 Private Squad Workspace & Group Chat unlocks instantly after booking.
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Package Inclusions & Specs */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-4">
            <h3 className="text-xs font-extrabold text-white/60 uppercase tracking-wider mb-4">WHAT'S INCLUDED</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-2">
                <Home size={14} className="text-amber-300 shrink-0" />
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-white/60 uppercase">Accommodation</div>
                  <div className="text-xs font-bold text-white">{specs.accommodation}</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-2">
                <Utensils size={14} className="text-amber-300 shrink-0" />
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-white/60 uppercase">Meals</div>
                  <div className="text-xs font-bold text-white">{specs.meals}</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-2">
                <Car size={14} className="text-amber-300 shrink-0" />
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-white/60 uppercase">Transport</div>
                  <div className="text-xs font-bold text-white">{specs.transport}</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-2">
                <Mountain size={14} className="text-amber-300 shrink-0" />
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-white/60 uppercase">Difficulty</div>
                  <div className="flex items-center gap-1.5">
                    <div className="text-xs font-bold text-white">{specs.difficulty}</div>
                    {specs.altitude && (
                      <span className="text-[9px] font-bold text-amber-300 bg-amber-500/10 border border-amber-400/60 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {specs.altitude}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {specs.perks.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/80">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Tripmate Assurance & Seasonal Vibe */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl space-y-3">
            <h3 className="text-xs font-extrabold text-white/60 uppercase tracking-wider mb-3">WEATHER & BOOKING PROMISE</h3>
            <div className={`bg-gradient-to-r ${specs.weatherBg} border ${specs.weatherBorder} rounded-2xl p-3.5 flex items-center justify-between`}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center">
                  <Sun size={12} className="text-yellow-300" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/60 uppercase">Best Season Vibe</div>
                  <div className="text-xs font-bold text-white">{specs.weather}</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-[10px] shrink-0 mt-0.5">🔄</span>
                <span className="text-xs text-white/80 leading-relaxed">Free Batch Switching up to 7 days before departure</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 text-[10px] shrink-0 mt-0.5">🛡️</span>
                <span className="text-xs text-white/80 leading-relaxed">100% Verified Solo & Female-Friendly Squads</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
