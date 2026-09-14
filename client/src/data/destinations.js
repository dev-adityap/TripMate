export const destinationsData = [
  {
    id: 1,
    name: 'Sandakphu',
    location: 'West Bengal',
    category: 'Trek',
    price: 14500,
    duration: 8,
    rating: 4.8,
    image: null,
    difficulty: 'Moderate to Challenging',
    maxGroupSize: 15,
    currentMembers: 12,
    availableDates: ['Oct 15, 2026', 'Nov 05, 2026', 'Dec 12, 2026'],
    overview: 'Sandakphu is the highest peak in West Bengal, offering a breathtaking panoramic view of four of the highest peaks in the world: Everest, Kangchenjunga, Lhotse, and Makalu.',
    itinerary: [
      { day: 1, title: 'Arrival at NJP / Manebhanjan', description: 'Meet the team at base camp and equipment briefing.' },
      { day: 2, title: 'Manebhanjan to Tumling', description: 'Trek through Singalila National Park border villages.' },
      { day: 3, title: 'Tumling to Kalapokhri', description: 'Walk past pine forests and high-altitude sacred lakes.' },
      { day: 4, title: 'Kalapokhri to Sandakphu Peak', description: 'Reach the summit for a stunning Himalayan sunset.' },
      { day: 5, title: 'Sandakphu to Gurdum', description: 'Descend through dense bamboo and rhododendron forests.' },
      { day: 6, title: 'Gurdum to Srikhola', description: 'Relax by the riverside and experience local hospitality.' },
      { day: 7, title: 'Srikhola to Rimbik & drive back', description: 'Wrap up the trek and head back.' },
      { day: 8, title: 'Departure', description: 'Trip concludes with lifelong memories.' }
    ],
    members: [
      { anonymousId: 'M-01', gender: 'Male', age: 24 }, { anonymousId: 'M-02', gender: 'Female', age: 22 },
      { anonymousId: 'M-03', gender: 'Male', age: 27 }, { anonymousId: 'M-04', gender: 'Female', age: 25 },
      { anonymousId: 'M-05', gender: 'Male', age: 23 }, { anonymousId: 'M-06', gender: 'Male', age: 29 },
      { anonymousId: 'M-07', gender: 'Female', age: 21 }, { anonymousId: 'M-08', gender: 'Male', age: 26 }
    ]
  },
  {
    id: 2,
    name: 'Valley of Flowers',
    location: 'Uttarakhand',
    category: 'Trek',
    price: 12000,
    duration: 5,
    rating: 4.9,
    image: null,
    difficulty: 'Easy to Moderate',
    maxGroupSize: 12,
    currentMembers: 8,
    availableDates: ['Sep 10, 2026', 'Oct 02, 2026', 'Nov 20, 2026'],
    overview: 'A UNESCO World Heritage site known for its vibrant meadows of endemic alpine flowers and rich Himalayan biodiversity.',
    itinerary: [
      { day: 1, title: 'Arrive at Joshimath', description: 'Base camp arrival and gear check.' },
      { day: 2, title: 'Joshimath to Ghangaria', description: 'Scenic trek along the Pushpawati river valley.' },
      { day: 3, title: 'Ghangaria to Valley of Flowers', description: 'Explore blooming alpine meadows and rare flora.' },
      { day: 4, title: 'Ghangaria to Hemkund Sahib', description: 'High altitude glacial lake exploration.' },
      { day: 5, title: 'Return & Departure', description: 'Descent back to Joshimath and dispersal.' }
    ],
    members: [
      { anonymousId: 'M-01', gender: 'Female', age: 23 }, { anonymousId: 'M-02', gender: 'Male', age: 25 },
      { anonymousId: 'M-03', gender: 'Female', age: 26 }, { anonymousId: 'M-04', gender: 'Male', age: 29 }
    ]
  },
  {
    id: 3,
    name: 'Kedarnath',
    location: 'Uttarakhand',
    category: 'Trek / Spiritual',
    price: 9500,
    duration: 4,
    rating: 4.7,
    image: null,
    difficulty: 'Moderate',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 10, 2026', 'Nov 01, 2026', 'Nov 18, 2026'],
    overview: 'A sacred spiritual pilgrimage and scenic mountain trek nestled in the Garhwal Himalayas along the Mandakini river.',
    itinerary: [
      { day: 1, title: 'Arrival at Sonprayag / Gaurikund', description: 'Gathering and briefing.' },
      { day: 2, title: 'Gaurikund to Kedarnath Base', description: 'Trek along mountain trails to the holy shrine.' },
      { day: 3, title: 'Kedarnath Darshan & Exploration', description: 'Morning prayers and surrounding valley exploration.' },
      { day: 4, title: 'Descent & Departure', description: 'Trek back down to Gaurikund.' }
    ],
    members: [
      { anonymousId: 'M-01', gender: 'Male', age: 28 }, { anonymousId: 'M-02', gender: 'Female', age: 26 }
    ]
  },
  {
    id: 4,
    name: 'Tawang',
    location: 'Arunachal Pradesh',
    category: 'Mountains',
    price: 22000,
    duration: 7,
    rating: 4.6,
    image: null,
    difficulty: 'Challenging',
    maxGroupSize: 12,
    currentMembers: 7,
    availableDates: ['Oct 05, 2026', 'Nov 12, 2026', 'Dec 01, 2026'],
    overview: 'Famous for its 400-year-old monastery, high altitude mountain passes, and stunning snow-capped vistas.',
    itinerary: [
      { day: 1, title: 'Arrive at Guwahati & Drive to Bhalukpong', description: 'Gateway to Arunachal.' },
      { day: 2, title: 'Bhalukpong to Dirang', description: 'Drive through lush valleys and hot water springs.' },
      { day: 3, title: 'Dirang to Tawang via Sela Pass', description: 'Cross the majestic Sela Pass at 13,700 ft.' },
      { day: 4, title: 'Tawang Sightseeing', description: 'Explore Tawang Monastery and war memorial.' }
    ],
    members: [
      { anonymousId: 'M-01', gender: 'Male', age: 26 }, { anonymousId: 'M-02', gender: 'Female', age: 24 }
    ]
  },
  {
    id: 5,
    name: 'Spiti Valley',
    location: 'Himachal Pradesh',
    category: 'Adventure',
    price: 24500,
    duration: 9,
    rating: 4.9,
    image: null,
    difficulty: 'Challenging',
    maxGroupSize: 12,
    currentMembers: 9,
    availableDates: ['Sep 20, 2026', 'Oct 10, 2026', 'Nov 05, 2026'],
    overview: 'A cold desert mountain valley located high in the Himalayas, featuring ancient monasteries and stark lunar landscapes.',
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Acclimatization and team meet.' },
      { day: 2, title: 'Manali to Kaza via Atal Tunnel', description: 'High altitude trans-Himalayan drive.' },
      { day: 3, title: 'Kaza Local: Key Monastery', description: 'Explore iconic cliffside monasteries.' }
    ],
    members: [
      { anonymousId: 'M-01', gender: 'Male', age: 25 }, { anonymousId: 'M-02', gender: 'Female', age: 24 }
    ]
  },
  {
    id: 6,
    name: 'Munnar',
    location: 'Kerala',
    category: 'Hills',
    price: 10500,
    duration: 4,
    rating: 4.8,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 11,
    availableDates: ['Oct 01, 2026', 'Oct 20, 2026', 'Nov 15, 2026'],
    overview: 'Endless rolling hills carpeted in emerald-green tea plantations, misty valleys, and cascading waterfalls.',
    itinerary: [
      { day: 1, title: 'Arrive in Kochi & Drive to Munnar', description: 'Scenic drive through spice plantations.' },
      { day: 2, title: 'Tea Gardens & Eravikulam', description: 'Spot the endangered Nilgiri Tahr.' }
    ],
    members: [
      { anonymousId: 'M-01', gender: 'Female', age: 24 }, { anonymousId: 'M-02', gender: 'Male', age: 26 }
    ]
  },
  {
    id: 7,
    name: 'Goa',
    location: 'Goa',
    category: 'Beach',
    price: 15000,
    duration: 5,
    rating: 4.5,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 20,
    currentMembers: 16,
    availableDates: ['Oct 05, 2026', 'Nov 01, 2026', 'Dec 15, 2026'],
    overview: 'Sun-kissed golden beaches, vibrant beach shacks, Portuguese heritage architecture, and lively coastal nightlife.',
    itinerary: [
      { day: 1, title: 'Arrival & North Goa Beaches', description: 'Check-in and sunset at Anjuna.' },
      { day: 2, title: 'Water Sports & Vagator', description: 'Jet skiing and parasailing.' }
    ],
    members: [
      { anonymousId: 'M-01', gender: 'Male', age: 23 }, { anonymousId: 'M-02', gender: 'Female', age: 22 }
    ]
  },
  {
    id: 8,
    name: 'Andaman & Nicobar',
    location: 'Andaman & Nicobar',
    category: 'Beach',
    price: 35000,
    duration: 6,
    rating: 4.9,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 12, 2026', 'Nov 10, 2026', 'Dec 05, 2026'],
    overview: 'Crystal clear turquoise waters, pristine coral reefs, white sand beaches, and historic colonial landmarks.',
    itinerary: [
      { day: 1, title: 'Arrive at Port Blair & Cellular Jail', description: 'Historical tour and light show.' },
      { day: 2, title: 'Port Blair to Havelock Island', description: 'Ferry ride to Radhanagar Beach.' }
    ],
    members: [
      { anonymousId: 'M-01', gender: 'Male', age: 27 }, { anonymousId: 'M-02', gender: 'Female', age: 25 }
    ]
  },
  {
    id: 9,
    name: 'Hampta Pass',
    location: 'Himachal Pradesh',
    category: 'Trek',
    price: 9000,
    duration: 5,
    rating: 4.7,
    image: null,
    difficulty: 'Moderate',
    maxGroupSize: 15,
    currentMembers: 11,
    availableDates: ['Oct 15, 2026', 'Nov 05, 2026'],
    overview: 'A dramatic crossover trek from lush Kullu valley to the stark arid landscape of Lahaul.',
    itinerary: [
      { day: 1, title: 'Manali to Jobra & Trek to Chika', description: 'Pine forest trails.' },
      { day: 2, title: 'Chika to Balu Ka Gera', description: 'River crossings and boulder fields.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 24 }]
  },
  {
    id: 10,
    name: 'Kheerganga',
    location: 'Himachal Pradesh',
    category: 'Trek',
    price: 6500,
    duration: 3,
    rating: 4.6,
    image: null,
    difficulty: 'Easy to Moderate',
    maxGroupSize: 15,
    currentMembers: 9,
    availableDates: ['Oct 12, 2026', 'Nov 02, 2026'],
    overview: 'Famous for its natural hot sulfur springs nestled amidst pine trees in Parvati Valley.',
    itinerary: [
      { day: 1, title: 'Barshaini to Kheerganga', description: 'Trail along Parvati river.' },
      { day: 2, title: 'Hot Springs & Descent', description: 'Soak and return.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 22 }]
  },
  {
    id: 11,
    name: 'Beas Kund',
    location: 'Himachal Pradesh',
    category: 'Trek',
    price: 7000,
    duration: 3,
    rating: 4.5,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 12,
    currentMembers: 7,
    availableDates: ['Oct 18, 2026', 'Nov 10, 2026'],
    overview: 'A scenic high-altitude glacial lake at the foot of towering peaks, birthplace of River Beas.',
    itinerary: [
      { day: 1, title: 'Solang to Bakarthach', description: 'Gradual incline trek.' },
      { day: 2, title: 'Beas Kund exploration', description: 'Glacial plateau visit.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 24 }]
  },
  {
    id: 12,
    name: 'Pin Parvati Pass',
    location: 'Himachal Pradesh',
    category: 'Trek',
    price: 28000,
    duration: 11,
    rating: 4.9,
    image: null,
    difficulty: 'Extremely Challenging',
    maxGroupSize: 10,
    currentMembers: 6,
    availableDates: ['Sep 01, 2026', 'Oct 01, 2026'],
    overview: 'An ultimate high-altitude trans-Himalayan trek connecting Parvati Valley to Spiti.',
    itinerary: [
      { day: 1, title: 'Barshaini to Khirganga', description: 'Start ascent.' },
      { day: 7, title: 'Pass Crossing', description: 'Summit day at 17,457 ft.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 28 }]
  },
  {
    id: 13,
    name: 'Buran Ghati',
    location: 'Himachal Pradesh',
    category: 'Trek',
    price: 15000,
    duration: 7,
    rating: 4.8,
    image: null,
    difficulty: 'Challenging',
    maxGroupSize: 12,
    currentMembers: 8,
    availableDates: ['Oct 05, 2026', 'Nov 02, 2026'],
    overview: 'A thrilling pass-crossing trek in Pabbar Valley featuring snow slopes and rappelling.',
    itinerary: [
      { day: 1, title: 'Shimla to Janglik', description: 'Drive to base village.' },
      { day: 6, title: 'Buran Ghati Pass', description: 'Summit day.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 26 }]
  },
  {
    id: 14,
    name: 'Kasol',
    location: 'Himachal Pradesh',
    category: 'Mountains',
    price: 8000,
    duration: 4,
    rating: 4.7,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 12,
    availableDates: ['Oct 20, 2026', 'Nov 15, 2026'],
    overview: 'The backpacker capital along the Parvati River, offering mountain vibes and village hikes.',
    itinerary: [
      { day: 1, title: 'Arrive in Kasol', description: 'Café hopping and walks.' },
      { day: 2, title: 'Chalal hike', description: 'Hidden wooden trails.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 23 }]
  },
  {
    id: 15,
    name: 'Triund',
    location: 'Himachal Pradesh',
    category: 'Trek',
    price: 4500,
    duration: 2,
    rating: 4.6,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Every Weekend'],
    overview: 'A classic ridge trek above McLeod Ganj offering nocturnal valley views.',
    itinerary: [
      { day: 1, title: 'McLeod Ganj to Triund', description: 'Ascent through oak forests.' },
      { day: 2, title: 'Descent', description: 'Morning breakfast and trek down.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 22 }]
  },
  {
    id: 16,
    name: 'Tosh',
    location: 'Himachal Pradesh',
    category: 'Mountains',
    price: 6000,
    duration: 3,
    rating: 4.5,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 12,
    currentMembers: 8,
    availableDates: ['Oct 14, 2026', 'Nov 11, 2026'],
    overview: 'A traditional village perched at the edge of Parvati valley with wooden houses.',
    itinerary: [
      { day: 1, title: 'Arrive at Tosh', description: 'Settle into homestays.' },
      { day: 2, title: 'Waterfall hike', description: 'Explore upper ridge trails.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 24 }]
  },
  {
    id: 17,
    name: 'Kuari Pass',
    location: 'Uttarakhand',
    category: 'Trek',
    price: 11000,
    duration: 6,
    rating: 4.7,
    image: null,
    difficulty: 'Moderate',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 10, 2026', 'Nov 20, 2026'],
    overview: 'Known as the Curzon Trail, offering close-up views of Mt. Nanda Devi.',
    itinerary: [
      { day: 1, title: 'Joshimath to Dhak', description: 'Forest trails.' },
      { day: 4, title: 'Kuari Pass Summit', description: 'Summit day.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 25 }]
  },
  {
    id: 18,
    name: 'Brahmatal',
    location: 'Uttarakhand',
    category: 'Trek',
    price: 10500,
    duration: 6,
    rating: 4.8,
    image: null,
    difficulty: 'Moderate',
    maxGroupSize: 15,
    currentMembers: 9,
    availableDates: ['Dec 10, 2026', 'Jan 05, 2027'],
    overview: 'A magical winter trek featuring frozen high-altitude glacial lakes and snow.',
    itinerary: [
      { day: 1, title: 'Lohajung to Bekaltal', description: 'Trek through oak forests.' },
      { day: 4, title: 'Brahmatal Summit', description: 'Conquer the peak.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 23 }]
  },
  {
    id: 19,
    name: 'Dayara Bugyal',
    location: 'Uttarakhand',
    category: 'Trek',
    price: 9500,
    duration: 4,
    rating: 4.6,
    image: null,
    difficulty: 'Easy to Moderate',
    maxGroupSize: 15,
    currentMembers: 11,
    availableDates: ['Oct 18, 2026', 'Nov 14, 2026'],
    overview: 'Pristine high-altitude meadow trek with vast carpeted grasslands.',
    itinerary: [
      { day: 1, title: 'Barsu to Barnala Tal', description: 'Forest trek.' },
      { day: 3, title: 'Dayara Bugyal Summit', description: 'Alpine meadows.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 24 }]
  },
  {
    id: 20,
    name: 'Ali Bedni Bugyal',
    location: 'Uttarakhand',
    category: 'Trek',
    price: 13000,
    duration: 6,
    rating: 4.9,
    image: null,
    difficulty: 'Moderate',
    maxGroupSize: 12,
    currentMembers: 8,
    availableDates: ['Oct 08, 2026', 'Nov 03, 2026'],
    overview: 'Home to Asia’s largest alpine meadows with direct vistas of Trishul.',
    itinerary: [
      { day: 1, title: 'Lohajung to Didina', description: 'Village trail.' },
      { day: 3, title: 'Ali Bugyal Ascent', description: 'Plateau views.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 25 }]
  },
  {
    id: 21,
    name: 'Chopta',
    location: 'Uttarakhand',
    category: 'Mountains',
    price: 7500,
    duration: 3,
    rating: 4.7,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 12,
    availableDates: ['Oct 12, 2026', 'Nov 09, 2026'],
    overview: 'The Mini Switzerland of Uttarakhand, surrounded by evergreen forests.',
    itinerary: [
      { day: 1, title: 'Arrive in Chopta', description: 'Campsite check-in.' },
      { day: 2, title: 'Tungnath & Chandrashila', description: 'Summit the highest temple.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 23 }]
  },
  {
    id: 22,
    name: 'Tungnath',
    location: 'Uttarakhand',
    category: 'Trek / Spiritual',
    price: 6000,
    duration: 2,
    rating: 4.8,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 9,
    availableDates: ['Oct 15, 2026', 'Nov 12, 2026'],
    overview: 'The highest Shiva temple in the world, perched on a scenic ridge.',
    itinerary: [
      { day: 1, title: 'Chopta base setup', description: 'Arrival.' },
      { day: 2, title: 'Tungnath trek', description: 'Spiritual ascent.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 25 }]
  },
  {
    id: 23,
    name: 'Munsiyari',
    location: 'Uttarakhand',
    category: 'Mountains',
    price: 14000,
    duration: 5,
    rating: 4.6,
    image: null,
    difficulty: 'Moderate',
    maxGroupSize: 12,
    currentMembers: 7,
    availableDates: ['Oct 22, 2026', 'Nov 18, 2026'],
    overview: 'Hill station famous for views of the Panchachuli peaks.',
    itinerary: [
      { day: 1, title: 'Kathgodam to Munsiyari', description: 'Mountain drive.' },
      { day: 2, title: 'Khaliya Top Trek', description: 'Meadow hike.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 26 }]
  },
  {
    id: 24,
    name: 'Goecha La',
    location: 'Sikkim',
    category: 'Trek',
    price: 18000,
    duration: 10,
    rating: 4.9,
    image: null,
    difficulty: 'Challenging',
    maxGroupSize: 12,
    currentMembers: 8,
    availableDates: ['Oct 10, 2026', 'Nov 05, 2026'],
    overview: 'Legendary pass-trek providing face-to-face views of Mt. Kangchenjunga.',
    itinerary: [
      { day: 1, title: 'Yuksom arrival', description: 'Briefing.' },
      { day: 8, title: 'Goecha La Viewpoint 1', description: 'Summit day.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 27 }]
  },
  {
    id: 25,
    name: 'Dzongri',
    location: 'Sikkim',
    category: 'Trek',
    price: 15000,
    duration: 7,
    rating: 4.7,
    image: null,
    difficulty: 'Moderate to Challenging',
    maxGroupSize: 12,
    currentMembers: 8,
    availableDates: ['Oct 14, 2026', 'Nov 10, 2026'],
    overview: 'Shorter alternative to Goecha La with spectacular mountain vantage points.',
    itinerary: [
      { day: 1, title: 'Yuksom to Sachen', description: 'Start trek.' },
      { day: 4, title: 'Dzongri Top sunrise', description: 'Mountain views.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 25 }]
  },
  {
    id: 26,
    name: 'Dzukou Valley',
    location: 'Nagaland',
    category: 'Nature',
    price: 12500,
    duration: 5,
    rating: 4.8,
    image: null,
    difficulty: 'Moderate',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 20, 2026', 'Nov 22, 2026'],
    overview: 'Valley of Celestial Bliss featuring rolling green hills and winding streams.',
    itinerary: [
      { day: 1, title: 'Kohima to Viswema', description: 'Ridge trail.' },
      { day: 3, title: 'Valley Exploration', description: 'Wander through streams.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 24 }]
  },
  {
    id: 27,
    name: 'Mechuka',
    location: 'Arunachal Pradesh',
    category: 'Mountains',
    price: 21000,
    duration: 6,
    rating: 4.6,
    image: null,
    difficulty: 'Moderate',
    maxGroupSize: 12,
    currentMembers: 7,
    availableDates: ['Oct 11, 2026', 'Nov 14, 2026'],
    overview: 'A picturesque hidden valley near the Indo-China border with pristine rivers.',
    itinerary: [
      { day: 1, title: 'Dibrugarh to Along', description: 'Crossing Brahmaputra.' },
      { day: 3, title: 'Samten Yongcha monastery', description: 'Exploration.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 28 }]
  },
  {
    id: 28,
    name: 'Ziro Valley',
    location: 'Arunachal Pradesh',
    category: 'Nature',
    price: 16000,
    duration: 5,
    rating: 4.7,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 11,
    availableDates: ['Sep 25, 2026', 'Oct 25, 2026'],
    overview: 'Tranquil pine-clad valley home to the Apatani tribe.',
    itinerary: [
      { day: 1, title: 'Guwahati to Ziro', description: 'Drive.' },
      { day: 2, title: 'Apatani Tribal Village Tour', description: 'Cultural exchange.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 23 }]
  },
  {
    id: 29,
    name: 'Varkala',
    location: 'Kerala',
    category: 'Beach',
    price: 11000,
    duration: 4,
    rating: 4.7,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 05, 2026', 'Nov 05, 2026'],
    overview: 'Unique Cenozoic sedimentary cliffs adjacent to the Arabian Sea.',
    itinerary: [
      { day: 1, title: 'Arrive in Varkala', description: 'Cliff sunset.' },
      { day: 2, title: 'Papanasam Beach', description: 'Surfing & activities.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 24 }]
  },
  {
    id: 30,
    name: 'Gokarna',
    location: 'Karnataka',
    category: 'Beach',
    price: 9000,
    duration: 4,
    rating: 4.6,
    image: null,
    difficulty: 'Easy to Moderate',
    maxGroupSize: 15,
    currentMembers: 12,
    availableDates: ['Oct 10, 2026', 'Nov 15, 2026'],
    overview: 'Temple town turned bohemian beach paradise with scenic coastal trails.',
    itinerary: [
      { day: 1, title: 'Kudle Beach', description: 'Sunset gathering.' },
      { day: 2, title: '5-Beach Trek', description: 'Coastal hiking.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 23 }]
  },
  {
    id: 31,
    name: 'Havelock Island',
    location: 'Andaman',
    category: 'Beach',
    price: 25000,
    duration: 5,
    rating: 4.9,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 12,
    currentMembers: 8,
    availableDates: ['Oct 15, 2026', 'Nov 20, 2026'],
    overview: 'Home to Radhanagar Beach, ranked among the best beaches in Asia.',
    itinerary: [
      { day: 1, title: 'Port Blair to Havelock', description: 'Ferry arrival.' },
      { day: 3, title: 'Scuba at Elephant Beach', description: 'Coral diving.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 26 }]
  },
  {
    id: 32,
    name: 'Neil Island',
    location: 'Andaman',
    category: 'Beach',
    price: 22000,
    duration: 4,
    rating: 4.8,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 12,
    currentMembers: 7,
    availableDates: ['Oct 18, 2026', 'Nov 22, 2026'],
    overview: 'Tranquil island known for its natural coral bridge and bioluminescence.',
    itinerary: [
      { day: 1, title: 'Arrival at Neil Island', description: 'Laxmanpur beach.' },
      { day: 2, title: 'Natural Bridge', description: 'Marine exploration.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 25 }]
  },
  {
    id: 33,
    name: 'Tarkarli',
    location: 'Maharashtra',
    category: 'Beach',
    price: 8500,
    duration: 3,
    rating: 4.5,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 20, 2026', 'Nov 25, 2026'],
    overview: 'Famous for white sand beaches, clear waters, and scuba diving.',
    itinerary: [
      { day: 1, title: 'Sindhudurg Fort', description: 'Sea fort tour.' },
      { day: 2, title: 'Scuba Diving', description: 'Devbagh beach.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 24 }]
  },
  {
    id: 34,
    name: 'Alibaug',
    location: 'Maharashtra',
    category: 'Beach',
    price: 5000,
    duration: 2,
    rating: 4.3,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 20,
    currentMembers: 14,
    availableDates: ['Every Weekend'],
    overview: 'Coastal weekend getaway from Mumbai featuring historic sea forts.',
    itinerary: [
      { day: 1, title: 'Kolaba Fort', description: 'Walk across the sea.' },
      { day: 2, title: 'Nagaon Beach', description: 'Water sports.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 22 }]
  },
  {
    id: 35,
    name: 'Digha',
    location: 'West Bengal',
    category: 'Beach',
    price: 4000,
    duration: 3,
    rating: 4.2,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 20,
    currentMembers: 15,
    availableDates: ['Every Weekend'],
    overview: 'West Bengal’s most popular seaside resort town along the Bay of Bengal.',
    itinerary: [
      { day: 1, title: 'New Digha Beach', description: 'Sunset stroll.' },
      { day: 2, title: 'Udaipur Beach', description: 'Sightseeing.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 24 }]
  },
  {
    id: 36,
    name: 'Mandarmani',
    location: 'West Bengal',
    category: 'Beach',
    price: 5500,
    duration: 3,
    rating: 4.4,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 11,
    availableDates: ['Every Weekend'],
    overview: 'Famous for having one of the longest motorable beach drives in India.',
    itinerary: [
      { day: 1, title: 'Beach Drive', description: 'Sunset on sand.' },
      { day: 2, title: 'Red Crab Beach', description: 'Ecosystem tour.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 23 }]
  },
  {
    id: 37,
    name: 'Puri',
    location: 'Odisha',
    category: 'Beach',
    price: 7000,
    duration: 4,
    rating: 4.5,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 10, 2026', 'Nov 12, 2026'],
    overview: 'Sacred coastal city renowned for the Jagannath Temple and golden beaches.',
    itinerary: [
      { day: 1, title: 'Beach Darshan', description: 'Evening waves.' },
      { day: 2, title: 'Jagannath Temple', description: 'Spiritual tour.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 27 }]
  },
  {
    id: 38,
    name: 'Konark',
    location: 'Odisha',
    category: 'Heritage',
    price: 6500,
    duration: 2,
    rating: 4.6,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 9,
    availableDates: ['Oct 12, 2026', 'Nov 15, 2026'],
    overview: 'Home to the magnificent 13th-century Sun Temple.',
    itinerary: [
      { day: 1, title: 'Sun Temple', description: 'Architecture tour.' },
      { day: 2, title: 'Chandrabhaga Beach', description: 'Sunrise.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 26 }]
  },
  {
    id: 39,
    name: 'Lakshadweep',
    location: 'Lakshadweep',
    category: 'Beach',
    price: 40000,
    duration: 6,
    rating: 4.9,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 10,
    currentMembers: 6,
    availableDates: ['Nov 01, 2026', 'Dec 01, 2026'],
    overview: 'Tropical archipelago paradise featuring untouched coral reefs and lagoons.',
    itinerary: [
      { day: 1, title: 'Agatti Island', description: 'Arrival.' },
      { day: 3, title: 'Scuba at Kavaratti', description: 'Marine biodiversity.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 28 }]
  },
  {
    id: 40,
    name: 'Mahabalipuram',
    location: 'Tamil Nadu',
    category: 'Heritage',
    price: 7500,
    duration: 3,
    rating: 4.7,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 15, 2026', 'Nov 18, 2026'],
    overview: 'Ancient port city featuring shore temples and rock reliefs.',
    itinerary: [
      { day: 1, title: 'Shore Temple', description: 'Sunset by sea.' },
      { day: 2, title: 'Pancha Rathas', description: 'Monoliths.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 25 }]
  },
  {
    id: 41,
    name: 'Hampi',
    location: 'Karnataka',
    category: 'Heritage',
    price: 9500,
    duration: 4,
    rating: 4.8,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 11,
    availableDates: ['Oct 05, 2026', 'Nov 10, 2026'],
    overview: 'UNESCO World Heritage ruins of the medieval Vijayanagara Empire.',
    itinerary: [
      { day: 1, title: 'Virupaksha Temple', description: 'Sunset from Matanga Hill.' },
      { day: 2, title: 'Vittala Temple', description: 'Stone chariot.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 24 }]
  },
  {
    id: 42,
    name: 'Ajanta Caves',
    location: 'Maharashtra',
    category: 'Heritage',
    price: 8000,
    duration: 3,
    rating: 4.7,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 9,
    availableDates: ['Oct 12, 2026', 'Nov 14, 2026'],
    overview: 'Ancient rock-cut Buddhist cave monuments with magnificent paintings.',
    itinerary: [
      { day: 1, title: 'Aurangabad arrival', description: 'Check-in.' },
      { day: 2, title: 'Ajanta Caves tour', description: 'Rock-cut art.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 26 }]
  },
  {
    id: 43,
    name: 'Ellora Caves',
    location: 'Maharashtra',
    category: 'Heritage',
    price: 8000,
    duration: 3,
    rating: 4.8,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 13, 2026', 'Nov 16, 2026'],
    overview: 'Rock-cut cave complexes featuring the legendary Kailash Temple.',
    itinerary: [
      { day: 1, title: 'Aurangabad arrival', description: 'Check-in.' },
      { day: 2, title: 'Kailash Temple', description: 'Monolithic marvel.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 25 }]
  },
  {
    id: 44,
    name: 'Khajuraho',
    location: 'Madhya Pradesh',
    category: 'Heritage',
    price: 10000,
    duration: 3,
    rating: 4.6,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 8,
    availableDates: ['Oct 15, 2026', 'Nov 20, 2026'],
    overview: 'UNESCO site famous for nagara-style architectural symbolism.',
    itinerary: [
      { day: 1, title: 'Western Temples', description: 'Exploration.' },
      { day: 2, title: 'Raneh Falls', description: 'Canyon tour.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 28 }]
  },
  {
    id: 45,
    name: 'Sanchi',
    location: 'Madhya Pradesh',
    category: 'Heritage',
    price: 6000,
    duration: 2,
    rating: 4.5,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 7,
    availableDates: ['Oct 20, 2026', 'Nov 22, 2026'],
    overview: 'Home to the Great Stupa, commissioned by Emperor Ashoka.',
    itinerary: [
      { day: 1, title: 'Sanchi Stupa', description: 'Historical tour.' },
      { day: 2, title: 'Udayagiri Caves', description: 'Sanctuaries.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 24 }]
  },
  {
    id: 46,
    name: 'Fatehpur Sikri',
    location: 'Uttar Pradesh',
    category: 'Heritage',
    price: 5000,
    duration: 2,
    rating: 4.4,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 20,
    currentMembers: 12,
    availableDates: ['Every Weekend'],
    overview: 'Majestic fortified ancient city built by Mughal Emperor Akbar.',
    itinerary: [
      { day: 1, title: 'Buland Darwaza', description: 'Palace exploration.' },
      { day: 2, title: 'Local Markets', description: 'Return.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 23 }]
  },
  {
    id: 47,
    name: 'Agra',
    location: 'Uttar Pradesh',
    category: 'Heritage',
    price: 7000,
    duration: 3,
    rating: 4.7,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 20,
    currentMembers: 15,
    availableDates: ['Every Weekend'],
    overview: 'Home to the iconic Taj Mahal and Agra Fort along the Yamuna.',
    itinerary: [
      { day: 1, title: 'Agra Fort', description: 'Sunset view of Taj Mahal.' },
      { day: 2, title: 'Taj Mahal Sunrise', description: 'Architectural tour.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 25 }]
  },
  {
    id: 48,
    name: 'Amer Fort',
    location: 'Rajasthan',
    category: 'Heritage',
    price: 11000,
    duration: 4,
    rating: 4.8,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 05, 2026', 'Nov 12, 2026'],
    overview: 'Majestic hilltop fortress in Jaipur with mirror palaces.',
    itinerary: [
      { day: 1, title: 'Jaipur arrival', description: 'Pink City welcome.' },
      { day: 2, title: 'Amer Fort', description: 'Palace exploration.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 25 }]
  },
  {
    id: 49,
    name: 'Jaisalmer Fort',
    location: 'Rajasthan',
    category: 'Heritage',
    price: 14000,
    duration: 5,
    rating: 4.9,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 11,
    availableDates: ['Oct 12, 2026', 'Nov 15, 2026'],
    overview: 'The Golden Fort of Rajasthan rising from the Thar Desert sands.',
    itinerary: [
      { day: 1, title: 'Fort Walk', description: 'Sunset ramparts.' },
      { day: 3, title: 'Thar Desert Safari', description: 'Camel ride & camping.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 24 }]
  },
  {
    id: 50,
    name: 'Chittorgarh',
    location: 'Rajasthan',
    category: 'Heritage',
    price: 9000,
    duration: 3,
    rating: 4.6,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 9,
    availableDates: ['Oct 18, 2026', 'Nov 20, 2026'],
    overview: 'The largest fort in India, symbol of Rajput valor and sacrifice.',
    itinerary: [
      { day: 1, title: 'Fort base check-in', description: 'Arrival.' },
      { day: 2, title: 'Palaces & Towers', description: 'Kirti Stambh.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 26 }]
  },
  {
    id: 51,
    name: 'Konark Sun Temple',
    location: 'Odisha',
    category: 'Heritage',
    price: 6500,
    duration: 2,
    rating: 4.7,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 8,
    availableDates: ['Oct 22, 2026', 'Nov 25, 2026'],
    overview: '13th-century Sun Temple designed as a gigantic ornamented chariot.',
    itinerary: [
      { day: 1, title: 'Temple Tour', description: 'Architecture appreciation.' },
      { day: 2, title: 'Beach walk', description: 'Return.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 25 }]
  },
  {
    id: 52,
    name: 'Mahabaleshwar',
    location: 'Maharashtra',
    category: 'Hills',
    price: 8500,
    duration: 3,
    rating: 4.5,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Every Weekend'],
    overview: 'Hill station in the Western Ghats known for strawberry farms and viewpoints.',
    itinerary: [
      { day: 1, title: 'Arthur’s Seat', description: 'Viewpoint.' },
      { day: 2, title: 'Strawberry Farm', description: 'Picking & Venna Lake.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 23 }]
  },
  {
    id: 53,
    name: 'Meghalaya',
    location: 'Meghalaya',
    category: 'Nature',
    price: 19000,
    duration: 6,
    rating: 4.9,
    image: null,
    difficulty: 'Moderate',
    maxGroupSize: 15,
    currentMembers: 12,
    availableDates: ['Oct 10, 2026', 'Nov 12, 2026', 'Dec 05, 2026'],
    overview: 'The Abode of Clouds, famous for living root bridges and mystical caves.',
    itinerary: [
      { day: 1, title: 'Guwahati to Shillong', description: 'Umiam lake stop.' },
      { day: 3, title: 'Root Bridge Trek', description: 'Tyrna steps.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 25 }]
  },
  {
    id: 54,
    name: 'Dawki',
    location: 'Meghalaya',
    category: 'Nature',
    price: 15000,
    duration: 4,
    rating: 4.8,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 12, 2026', 'Nov 15, 2026'],
    overview: 'Famous for the Umngot River where boats float mid-air on crystal water.',
    itinerary: [
      { day: 1, title: 'Shillong to Dawki', description: 'Arrival.' },
      { day: 2, title: 'Umngot River Boating', description: 'Crystal water activities.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 24 }]
  },
  {
    id: 55,
    name: 'Kaziranga',
    location: 'Assam',
    category: 'Nature',
    price: 16500,
    duration: 4,
    rating: 4.8,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 12,
    currentMembers: 9,
    availableDates: ['Nov 01, 2026', 'Dec 01, 2026'],
    overview: 'World Heritage sanctuary hosting two-thirds of the world’s rhinoceroses.',
    itinerary: [
      { day: 1, title: 'Guwahati to Kaziranga', description: 'Arrival.' },
      { day: 2, title: 'Elephant & Jeep Safari', description: 'Wildlife spotting.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 27 }]
  },
  {
    id: 56,
    name: 'Rann of Kutch',
    location: 'Gujarat',
    category: 'Nature',
    price: 13000,
    duration: 4,
    rating: 4.7,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 15,
    currentMembers: 11,
    availableDates: ['Nov 15, 2026', 'Dec 20, 2026', 'Jan 10, 2027'],
    overview: 'The world’s largest salt desert, glowing brilliantly under moonlight.',
    itinerary: [
      { day: 1, title: 'Dhordo tent city', description: 'White salt desert sunset.' },
      { day: 2, title: 'Kalo Dungar', description: 'Highest point view.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 25 }]
  },
  {
    id: 57,
    name: 'Gir National Park',
    location: 'Gujarat',
    category: 'Nature',
    price: 14000,
    duration: 3,
    rating: 4.6,
    image: null,
    difficulty: 'Easy',
    maxGroupSize: 12,
    currentMembers: 8,
    availableDates: ['Oct 20, 2026', 'Nov 18, 2026'],
    overview: 'The sole home of the majestic Asiatic lions roaming free in dry forests.',
    itinerary: [
      { day: 1, title: 'Arrive in Sasan Gir', description: 'Campsite check-in.' },
      { day: 2, title: 'Jeep Safari', description: 'Lion tracking.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Male', age: 26 }]
  },
  {
    id: 58,
    name: 'Wayanad',
    location: 'Kerala',
    category: 'Nature',
    price: 11500,
    duration: 4,
    rating: 4.8,
    image: null,
    difficulty: 'Easy to Moderate',
    maxGroupSize: 15,
    currentMembers: 10,
    availableDates: ['Oct 08, 2026', 'Nov 11, 2026'],
    overview: 'Verdant mountain district featuring spice plantations and prehistoric caves.',
    itinerary: [
      { day: 1, title: 'Pookode Lake', description: 'Boating and serenity.' },
      { day: 2, title: 'Chembra Peak Trek', description: 'Heart lake climb.' }
    ],
    members: [{ anonymousId: 'M-01', gender: 'Female', age: 24 }]
  },
  // ... Paste this right below destination #58 (Andaman & Nicobar Islands) ...

  {
    id: 'd59', name: 'Havelock Island', state: 'Andaman & Nicobar', category: 'BEACH',
    shortDescription: 'Home to the legendary Radhanagar Beach, renowned for its white sands, scuba diving, and luxury resorts.',
    fullDescription: 'Havelock Island (officially Swaraj Dweep) is the crown jewel of the Andaman tourism circuit. It is famous for Radhanagar Beach, consistently ranked among the best and most beautiful beaches in Asia. The beach features incredibly fine white sand, dense mahua trees leaning over the shore, and spectacular sunsets that turn the sky ablaze. Havelock is also India’s scuba diving capital. The vibrant coral reefs at Elephant Beach and numerous dive sites offer crystal-clear visibility and sightings of sea turtles, manta rays, and colorful reef fish. Whether you are seeking a romantic luxury getaway or an underwater adventure, Havelock provides a world-class tropical island experience that rivals the Maldives.',
    whyVisit: 'To walk on the spectacular Radhanagar Beach and experience the best scuba diving and snorkeling in India.',
    topAttractions: ['Radhanagar Beach', 'Elephant Beach', 'Kalapathar Beach', 'Vijaynagar Beach'],
    thingsToDo: ['Scuba Diving', 'Snorkeling', 'Kayaking in the mangroves', 'Relaxing on the beach'],
    bestTimeToVisit: 'October to May', recommendedDuration: '3-5 Days', approximateBudget: '₹15,000 - ₹30,000', travelStyle: 'Romance / Adventure', difficulty: 'Easy',
    travelTips: ['Elephant Beach requires a short boat ride or a jungle trek to reach.', 'Book scuba diving sessions with certified PADI dive centers only.', 'Rent a two-wheeler to explore the island at your own pace.'],
    image: ""
  },
  {
    id: 'd60', name: 'Neil Island', state: 'Andaman & Nicobar', category: 'BEACH',
    shortDescription: 'A tiny, tranquil island known for its secluded beaches, rich agriculture, and the natural coral bridge.',
    fullDescription: 'Neil Island (officially Shaheed Dweep) is the quieter, more rustic neighbor to bustling Havelock. It is a tiny, flat island that you can cycle across in less than two hours. Known as the "vegetable bowl" of the Andamans due to its rich agriculture, the island moves at a wonderfully slow pace. The beaches are named after mythological characters—Bharatpur, Laxmanpur, and Sitapur—each offering something unique, from excellent shallow-water snorkeling to dramatic sunrises. The highlight is the Natural Bridge, a stunning rock formation carved by the sea over millennia. Neil Island is perfect for travelers seeking absolute peace, uncrowded sands, and a true digital detox away from commercial tourism.',
    whyVisit: 'To escape the crowds, cycle through quiet agricultural villages, and explore the unique Natural Coral Bridge.',
    topAttractions: ['Natural Bridge (Howrah Bridge)', 'Bharatpur Beach', 'Laxmanpur Beach', 'Sitapur Beach'],
    thingsToDo: ['Glass Bottom Boat Ride', 'Snorkeling at Bharatpur', 'Watching the sunset at Laxmanpur', 'Cycling'],
    bestTimeToVisit: 'October to May', recommendedDuration: '2-3 Days', approximateBudget: '₹10,000 - ₹18,000', travelStyle: 'Relaxation / Romance', difficulty: 'Easy',
    travelTips: ['The Natural Bridge is only accessible during low tide; plan your visit accordingly.', 'Laxmanpur beach offers the best sunset views.', 'The island has very limited nightlife; it’s all about nature.'],
    image: ""
  },
  {
    id: 'd61', name: 'Lakshadweep', state: 'Lakshadweep', category: 'BEACH',
    shortDescription: 'A highly restricted, pristine archipelago of coral atolls offering unmatched white sand beaches and lagoons.',
    fullDescription: 'Lakshadweep is a string of breathtakingly beautiful coral atolls scattered in the Arabian Sea. It is the most pristine, secluded, and ecologically sensitive beach destination in India. Tourism is highly regulated to protect the fragile coral ecosystem and local culture, which means the islands are never crowded. The landscape consists of blindingly white sand beaches, dense coconut groves, and massive, shallow turquoise lagoons teeming with exotic marine life. Visitors spend their days kayaking in the glass-like lagoons, snorkeling over vibrant reefs, and experiencing a Robinson Crusoe-style isolation. It is a highly exclusive, pure tropical escape that requires planning but delivers unmatched natural beauty.',
    whyVisit: 'To experience the most secluded, pristine coral atolls and turquoise lagoons in India, far removed from commercial tourism.',
    topAttractions: ['Agatti Island', 'Bangaram Atoll', 'Thinnakara Island', 'Minicoy Island'],
    thingsToDo: ['Scuba Diving', 'Snorkeling in the lagoons', 'Kayaking', 'Relaxing on empty beaches'],
    bestTimeToVisit: 'October to March', recommendedDuration: '4-6 Days', approximateBudget: '₹40,000 - ₹70,000', travelStyle: 'Exclusive / Nature', difficulty: 'Not Applicable',
    travelTips: ['A strict Entry Permit is required for all visitors and can take time to process.', 'Alcohol is banned on all islands except the uninhabited Bangaram.', 'Flights to Agatti are limited; book well in advance.'],
    image: ""
  },
  {
    id: 'd62', name: 'Kavaratti', state: 'Lakshadweep', category: 'BEACH',
    shortDescription: 'The administrative capital of Lakshadweep, known for its beautiful lagoon, marine museum, and serene mosques.',
    fullDescription: 'Kavaratti is the most developed island in the Lakshadweep archipelago and serves as its administrative capital. Despite being the capital, it retains a deeply peaceful, unhurried island vibe. The island is bordered by a stunning, calm lagoon on the western side, making it an ideal spot for swimming, kayaking, and introductory scuba diving. Kavaratti is also culturally rich, home to over 50 mosques, the most famous being the beautifully carved Ujra Mosque. The island features a Marine Aquarium that showcases the incredible diversity of local coral and fish species. It offers a perfect mix of water sports and local island culture in an idyllic setting.',
    whyVisit: 'To enjoy world-class water sports in a stunning lagoon while experiencing the local culture and architecture of the islands.',
    topAttractions: ['Kavaratti Lagoon', 'Ujra Mosque', 'Marine Aquarium', 'Desalination Plant'],
    thingsToDo: ['Scuba Diving', 'Glass Bottom Boat Rides', 'Kayaking', 'Exploring local culture'],
    bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹35,000 - ₹55,000', travelStyle: 'Nature / Culture', difficulty: 'Easy',
    travelTips: ['Dress modestly when exploring the town and visiting the mosques.', 'The lagoon is incredibly safe and shallow, perfect for children and non-swimmers.', 'Permits must be arranged through authorized agents.'],
    image: ""
  },

  // 🏛️ MONUMENTS / HERITAGE
  {
    id: 'd63', name: 'Taj Mahal, Agra', state: 'Uttar Pradesh', category: 'HERITAGE',
    shortDescription: 'The ultimate symbol of love, this white marble mausoleum is one of the Seven Wonders of the World.',
    fullDescription: 'The Taj Mahal needs no introduction. Built in the 17th century by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this ivory-white marble mausoleum sits gracefully on the south bank of the Yamuna River. It is universally admired as the greatest architectural achievement in the whole range of Indo-Islamic architecture. The monument\'s perfect symmetry, the intricate semi-precious stone inlay work (pietra dura), and the stunning gardens create a hypnotic visual experience. Watching the marble change color from soft pink at dawn to blinding white at noon and golden at sunset is an unforgettable experience that defines Indian tourism.',
    whyVisit: 'To witness absolute architectural perfection and experience one of the most iconic, globally recognized monuments in human history.',
    topAttractions: ['Taj Mahal', 'Mehtab Bagh', 'Taj Museum'],
    thingsToDo: ['Watching the sunrise', 'Photography', 'Heritage walk', 'Viewing the inlay work'],
    bestTimeToVisit: 'October to March', recommendedDuration: '1 Day', approximateBudget: '₹5,000 - ₹8,000', travelStyle: 'Culture / Romance', difficulty: 'Easy',
    travelTips: ['The Taj Mahal is closed on Fridays.', 'Arrive before sunrise to beat the massive crowds and get the best light.', 'Strict security means large bags and food are not allowed inside.'],
    image: ""
  },
  {
    id: 'd64', name: 'Agra Fort', state: 'Uttar Pradesh', category: 'HERITAGE',
    shortDescription: 'A massive red sandstone fortress that served as the main residence of the emperors of the Mughal Dynasty.',
    fullDescription: 'Often overshadowed by the Taj Mahal, the Agra Fort is a colossal and historically significant monument in its own right. A UNESCO World Heritage site, this massive 16th-century fortress of red sandstone was the seat of the powerful Mughal Empire. Inside its imposing walls lies a city of stunning palaces, audience halls, and mosques, showcasing a beautiful blend of Hindu and Islamic architectural styles. Highlights include the Jahangiri Mahal and the Khas Mahal. The fort is also poignant; the Musamman Burj is the exact pavilion where Shah Jahan was imprisoned by his son, spending his final years gazing out at the Taj Mahal.',
    whyVisit: 'To explore the powerful center of the Mughal Empire and see the tragic tower where Shah Jahan spent his final days.',
    topAttractions: ['Jahangiri Mahal', 'Diwan-i-Am', 'Diwan-i-Khas', 'Musamman Burj', 'Moti Masjid'],
    thingsToDo: ['Historical tours', 'Photography', 'Exploring the palaces', 'Viewing the Taj Mahal from the fort'],
    bestTimeToVisit: 'October to March', recommendedDuration: '1 Day', approximateBudget: '₹4,000 - ₹7,000', travelStyle: 'History / Culture', difficulty: 'Easy',
    travelTips: ['Hire a licensed guide to truly understand the complex history of the Mughal emperors.', 'Combine the visit with the Taj Mahal on the same day.', 'Wear comfortable walking shoes; the complex is huge.'],
    image: ""
  },
  {
    id: 'd65', name: 'Fatehpur Sikri', state: 'Uttar Pradesh', category: 'HERITAGE',
    shortDescription: 'The magnificent, abandoned red sandstone capital of Emperor Akbar, famous for its grand courtyards and the Buland Darwaza.',
    fullDescription: 'Located a short drive from Agra, Fatehpur Sikri is a sprawling, perfectly preserved ghost city. Built by Emperor Akbar in the late 16th century, it served as the capital of the Mughal Empire for only 14 years before being abandoned due to a severe lack of water. The complex is an architectural masterpiece, built entirely of red sandstone, and perfectly blends Islamic, Hindu, and Jain design elements. The city is dominated by the colossal Buland Darwaza (Gate of Magnificence) and the beautiful white marble tomb of the Sufi saint Salim Chishti. Walking through its empty, echoing courtyards feels like stepping back in time to the peak of Mughal power.',
    whyVisit: 'To walk through an intact, abandoned Mughal city and witness the towering architectural marvel of the Buland Darwaza.',
    topAttractions: ['Buland Darwaza', 'Tomb of Salim Chishti', 'Jama Masjid', 'Panch Mahal', 'Diwan-i-Khas'],
    thingsToDo: ['Heritage walks', 'Photography', 'Tying a thread for a wish at the Sufi tomb'],
    bestTimeToVisit: 'October to March', recommendedDuration: 'Half Day', approximateBudget: '₹3,000 - ₹6,000', travelStyle: 'History / Culture', difficulty: 'Easy',
    travelTips: ['Beware of aggressive hawkers and unauthorized "guides" near the mosque entrance.', 'Women must cover their heads when visiting the mosque and tomb.', 'Visit in the late afternoon for beautiful lighting.'],
    image: ""
  },
  {
    id: 'd66', name: 'Jaipur', state: 'Rajasthan', category: 'HERITAGE',
    shortDescription: 'The "Pink City," a vibrant showcase of Rajput architecture, royal palaces, and bustling colorful bazaars.',
    fullDescription: 'Jaipur, the capital of Rajasthan and the cornerstone of the Golden Triangle, is a city of royalty and vibrant color. Famously painted pink to welcome the Prince of Wales in 1876, the old city is a grid of bustling bazaars selling textiles, jewelry, and pottery. The city is anchored by the magnificent City Palace, which is still home to the royal family, and the iconic Hawa Mahal (Palace of Winds) with its hundreds of intricate pink sandstone windows. Just outside the city limits stands the colossal Amer Fort. Jaipur is a sensory overload of rich history, majestic architecture, and vibrant street life that perfectly encapsulates the spirit of Rajasthan.',
    whyVisit: 'To experience the grandeur of Rajput royalty, shop in world-famous bazaars, and photograph stunning pink palaces.',
    topAttractions: ['Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Albert Hall Museum', 'Jal Mahal'],
    thingsToDo: ['Shopping for block prints and gems', 'Heritage walks', 'Trying authentic Rajasthani Thali', 'Visiting the observatory'],
    bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹16,000', travelStyle: 'Culture / Shopping', difficulty: 'Easy',
    travelTips: ['Bargain firmly but politely in the local bazaars like Johari and Bapu Bazaar.', 'Traffic in the old city can be chaotic; use auto-rickshaws for short distances.', 'Buy a composite ticket to save money on monument entries.'],
    image: ""
  },
  {
    id: 'd67', name: 'Amer Fort, Jaipur', state: 'Rajasthan', category: 'HERITAGE',
    shortDescription: 'A majestic, imposing hilltop fortress featuring opulent palaces, beautiful courtyards, and the stunning Mirror Palace.',
    fullDescription: 'Located just 11 kilometers from Jaipur, Amer Fort (or Amber Fort) is a masterpiece of Rajput architecture. Built from pale yellow and pink sandstone, and white marble, the fort stands massive and imposing on a rugged hill. Inside, it is a contrast of military strength and lavish luxury. The complex is divided into four main courtyards, featuring architectural wonders like the Sheesh Mahal (Mirror Palace), which can be illuminated by a single candle, and the beautiful Ganesh Pol gate. Visitors can walk up the cobbled path or take a jeep to the main courtyard, immersing themselves in centuries of royal history and strategic brilliance.',
    whyVisit: 'To explore one of India’s most opulent forts, especially the mesmerizing Sheesh Mahal adorned with thousands of tiny mirrors.',
    topAttractions: ['Sheesh Mahal', 'Ganesh Pol', 'Diwan-i-Aam', 'Sukh Niwas', 'Maota Lake'],
    thingsToDo: ['Fort exploration', 'Attending the Light and Sound show', 'Photography', 'Walking the ramparts'],
    bestTimeToVisit: 'October to March', recommendedDuration: 'Half Day', approximateBudget: '₹4,000 - ₹7,000', travelStyle: 'History / Culture', difficulty: 'Easy',
    travelTips: ['Avoid the elephant rides to promote ethical tourism; take a jeep or walk up instead.', 'Hire a guide to hear the fascinating legends of the Rajput kings.', 'The evening light and sound show is highly recommended.'],
    image: ""
  },
  {
    id: 'd68', name: 'Udaipur', state: 'Rajasthan', category: 'HERITAGE',
    shortDescription: 'The "City of Lakes," famed for its romantic white-marble palaces seemingly floating on shimmering waters.',
    fullDescription: 'Often referred to as the "Venice of the East," Udaipur is widely considered the most romantic city in India. The city is centered around the serene Lake Pichola, bordered by the magnificent City Palace complex—the largest in Rajasthan. The defining image of Udaipur is the Taj Lake Palace, a stunning white marble hotel that appears to float on the water. The city’s narrow, winding streets are filled with historic havelis, rooftop restaurants offering panoramic lake views, and colorful street art. Udaipur offers a refined, tranquil royal experience, far removed from the chaotic energy of other Rajasthani cities, making it perfect for couples and history lovers.',
    whyVisit: 'For its unparalleled romantic ambiance, stunning lake views, and majestic marble palaces straight out of a fairy tale.',
    topAttractions: ['City Palace', 'Lake Pichola', 'Jag Mandir', 'Saheliyon Ki Bari', 'Bagore Ki Haveli'],
    thingsToDo: ['Sunset boat ride on Lake Pichola', 'Palace tours', 'Watching a cultural dance show', 'Rooftop dining'],
    bestTimeToVisit: 'September to March', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹20,000', travelStyle: 'Romance / Heritage', difficulty: 'Easy',
    travelTips: ['The sunset boat ride on Lake Pichola is essential, though slightly expensive.', 'Stay in a haveli in the old city (Lal Ghat area) for an authentic experience.', 'Don’t miss the Dharohar folk dance show at Bagore Ki Haveli.'],
    image: ""
  },
  {
    id: 'd69', name: 'Jodhpur', state: 'Rajasthan', category: 'HERITAGE',
    shortDescription: 'The "Blue City," dominated by the colossal Mehrangarh Fort and a maze of vibrant, indigo-painted houses.',
    fullDescription: 'Jodhpur is a striking city that sits on the edge of the Thar Desert. It is dominated by the colossal Mehrangarh Fort, an architectural masterpiece that rises perpendicularly from a rocky hill, looking down upon the city. Looking out from the fort’s ramparts reveals why Jodhpur is called the "Blue City"—a vast sea of boxy houses painted in vivid shades of indigo and blue stretches out below. The old city is a tangled maze of narrow, medieval streets filled with the smell of incense, spices, and famous local sweets. It is a city that feels deeply historic, fierce, and incredibly atmospheric, offering the true flavor of Marwar.',
    whyVisit: 'To explore Mehrangarh, arguably the best-maintained fort in India, and get lost in the vibrant, photographic blue streets.',
    topAttractions: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada', 'Clock Tower & Sardar Market', 'Mandore Gardens'],
    thingsToDo: ['Ziplining over the fort', 'Shopping for spices and textiles', 'Heritage walks in the Blue City', 'Tasting Makhaniya Lassi'],
    bestTimeToVisit: 'October to March', recommendedDuration: '2-3 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Culture / Photography', difficulty: 'Easy',
    travelTips: ['Take a guided walking tour of the old blue city to find the best photographic spots.', 'The audio guide at Mehrangarh Fort is exceptionally good.', 'Try the famous local snacks: Mirchi Bada and Makhaniya Lassi.'],
    image: ""
  },
  {
    id: 'd70', name: 'Jaisalmer', state: 'Rajasthan', category: 'HERITAGE',
    shortDescription: 'The "Golden City," featuring a massive, living sandcastle fort and the sweeping dunes of the Thar Desert.',
    fullDescription: 'Rising like a mirage from the barren Thar Desert, Jaisalmer is defined by its massive, golden sandstone fort. Unlike most Indian forts, Jaisalmer Fort is a "living fort"—nearly a quarter of the city’s population still lives within its ancient walls, running guesthouses, restaurants, and shops. The city is famous for its exquisitely carved merchant havelis, such as Patwon Ki Haveli, showcasing incredible stonework. Beyond the city limits lie the sweeping sand dunes of Sam and Khuri, where visitors can ride camels into the sunset and sleep under the desert stars. Jaisalmer offers a magical, Arabian Nights-style desert experience completely unique to Rajasthan.',
    whyVisit: 'To sleep inside a living, golden sandcastle and ride camels through the vast dunes of the Thar Desert.',
    topAttractions: ['Jaisalmer Fort', 'Patwon Ki Haveli', 'Sam Sand Dunes', 'Gadisar Lake', 'Bada Bagh'],
    thingsToDo: ['Camel Safari', 'Desert Camping', 'Exploring carved havelis', 'Watching the sunset from the fort'],
    bestTimeToVisit: 'November to March', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹18,000', travelStyle: 'Adventure / Heritage', difficulty: 'Easy',
    travelTips: ['Summers are unbearably hot; strictly visit in the winter months.', 'Choose Khuri dunes over Sam dunes for a quieter, less commercialized desert experience.', 'Take an overnight train from Jaipur or Jodhpur to reach easily.'],
    image: ""
  },
  {
    id: 'd71', name: 'Chittorgarh', state: 'Rajasthan', category: 'HERITAGE',
    shortDescription: 'The epitome of Rajput pride, boasting the largest fort in India filled with tales of courage and sacrifice.',
    fullDescription: 'Chittorgarh is not just a destination; it is the physical embodiment of Rajput courage, romance, and tragedy. The city is home to the Chittorgarh Fort, the largest fort complex in India, sprawling over a massive hilltop plateau. The fort has witnessed several historical sieges and the legendary Jauhar (mass self-immolation) of Rajput women, including Queen Padmini, who chose death over dishonor. Visitors can explore the ruins of grand palaces, the intricately carved Vijay Stambha (Tower of Victory), and the beautiful Gaumukh reservoir. Walking through Chittorgarh is a deeply evocative experience, resonating with the echoes of ancient battles and fierce royal pride.',
    whyVisit: 'To explore the sheer scale of India’s largest fort and immerse yourself in the legendary, tragic history of Rajput warriors.',
    topAttractions: ['Chittorgarh Fort', 'Vijay Stambha', 'Kirti Stambha', 'Rana Kumbha Palace', 'Padmini Palace'],
    thingsToDo: ['Fort exploration', 'Attending the Light and Sound show', 'Historical photography'],
    bestTimeToVisit: 'October to March', recommendedDuration: '1-2 Days', approximateBudget: '₹6,000 - ₹10,000', travelStyle: 'History / Culture', difficulty: 'Easy',
    travelTips: ['The fort is massive (700 acres); hire an auto-rickshaw or taxi to get around inside.', 'A government-approved guide is highly recommended to understand the deep history.', 'Beware of aggressive monkeys near the Gaumukh reservoir.'],
    image: ""
  },
  {
    id: 'd72', name: 'Hampi', state: 'Karnataka', category: 'HERITAGE',
    shortDescription: 'A surreal landscape of giant boulders and the spectacular ruins of the ancient Vijayanagara Empire.',
    fullDescription: 'Hampi is a surreal, otherworldly destination. It was once the capital of the Vijayanagara Empire, one of the wealthiest cities in the world during the 14th century. Today, its spectacular ruins are scattered across a bizarre landscape of giant, precariously perched granite boulders and lush green banana plantations. The UNESCO World Heritage site features marvels like the intricately carved Stone Chariot in the Vittala Temple and the towering Virupaksha Temple. Across the Tungabhadra River lies "Hippie Island" (Virupapur Gadde), known for its laid-back cafes and backpacker vibe. Hampi is a place of deep historical mystery and striking natural beauty that captivates every traveler.',
    whyVisit: 'To wander through the breathtaking ruins of a forgotten empire set against a bizarre, Flintstones-like boulder landscape.',
    topAttractions: ['Virupaksha Temple', 'Vittala Temple (Stone Chariot)', 'Hemakuta Hill Sunsets', 'Lotus Mahal', 'Matanga Hill'],
    thingsToDo: ['Ruins exploration', 'Bouldering/Rock Climbing', 'Coracle boat ride', 'Watching the sunset from Matanga Hill'],
    bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹8,000 - ₹14,000', travelStyle: 'Heritage / Backpacking', difficulty: 'Moderate',
    travelTips: ['Start your explorations very early; the afternoon sun bouncing off the boulders is intensely hot.', 'Rent a bicycle or moped to explore the vast ruins easily.', 'Climb Matanga Hill before dawn for a spectacular sunrise.'],
    image: ""
  },
  {
    id: 'd73', name: 'Badami', state: 'Karnataka', category: 'HERITAGE',
    shortDescription: 'Famous for its magnificent rock-cut cave temples carved into the fiery red sandstone cliffs of a steep ravine.',
    fullDescription: 'Once the royal capital of the mighty Chalukya empire, Badami is renowned for its spectacular rock-cut cave temples. Carved directly into the fiery red sandstone cliffs of a steep ravine, these four main caves feature exquisite sculptures depicting Hindu deities and Jain Tirthankaras. Overlooking the serene green waters of the Agastya Lake, the caves offer a stunning visual contrast. Beyond the caves, the area is dotted with ancient structural temples like the Bhutanatha group, sitting gracefully on the lake\'s edge. Badami, along with nearby Aihole and Pattadakal, forms the absolute cradle of early South Indian temple architecture.',
    whyVisit: 'To marvel at intricate 6th-century rock-cut cave temples set against dramatic red sandstone cliffs and a tranquil green lake.',
    topAttractions: ['Badami Cave Temples', 'Agastya Lake', 'Bhutanatha Temples', 'Badami Fort', 'Archaeological Museum'],
    thingsToDo: ['Cave exploration', 'Photography', 'Heritage walks', 'Rock climbing (for professionals)'],
    bestTimeToVisit: 'October to March', recommendedDuration: '1-2 Days', approximateBudget: '₹6,000 - ₹10,000', travelStyle: 'History / Culture', difficulty: 'Easy',
    travelTips: ['Beware of the aggressive monkeys around the caves; do not carry food openly.', 'Visit the caves in the late afternoon when the red sandstone glows in the sunlight.', 'Combine Badami with Aihole and Pattadakal for a complete heritage circuit.'],
    image: ""
  },
  {
    id: 'd74', name: 'Pattadakal', state: 'Karnataka', category: 'HERITAGE',
    shortDescription: 'A UNESCO World Heritage site showcasing the brilliant architectural experiments of the Chalukya dynasty.',
    fullDescription: 'Located on the banks of the Malaprabha River, Pattadakal was the ceremonial coronation center for the Chalukya kings. It is a UNESCO World Heritage site and an architectural laboratory where North Indian (Nagara) and South Indian (Dravidian) architectural styles were blended and experimented with. The complex features ten major temples, the most magnificent being the Virupaksha Temple, adorned with incredibly intricate sculptures detailing episodes from the Ramayana and Mahabharata. Walking through Pattadakal feels like exploring an open-air museum of ancient Indian art and structural design, offering deep insights into the evolution of temple architecture in India.',
    whyVisit: 'To witness a rare, perfectly preserved fusion of North and South Indian ancient temple architecture in one complex.',
    topAttractions: ['Virupaksha Temple', 'Mallikarjuna Temple', 'Sangameshwara Temple', 'Galaganatha Temple'],
    thingsToDo: ['Architectural photography', 'Historical tours', 'Studying ancient inscriptions'],
    bestTimeToVisit: 'October to March', recommendedDuration: 'Half Day', approximateBudget: '₹4,000 - ₹7,000', travelStyle: 'History / Architecture', difficulty: 'Easy',
    travelTips: ['Usually visited as a day trip from Badami (22 km away).', 'Hire a guide to point out the subtle differences between the Nagara and Dravidian architectural styles.', 'Carry water and a hat, as the complex is entirely open to the sun.'],
    image: ""
  },
  {
    id: 'd75', name: 'Ajanta Caves', state: 'Maharashtra', category: 'HERITAGE',
    shortDescription: 'A horseshoe-shaped gorge featuring 30 ancient rock-cut Buddhist caves filled with masterpiece murals.',
    fullDescription: 'The Ajanta Caves are a UNESCO World Heritage site and a masterpiece of ancient Buddhist art. Carved into a horseshoe-shaped cliff along the Waghur River, these 30 caves date from the 2nd century BCE to about 480 CE. They served as a monastic retreat for Buddhist monks. What sets Ajanta apart from other cave temples are its incredibly well-preserved frescoes and murals. The detailed, vivid paintings depict the past lives and rebirths of the Buddha, providing an unparalleled glimpse into ancient Indian life, fashion, and artistic brilliance. It is a place of profound historical, religious, and artistic magnitude.',
    whyVisit: 'To see some of the finest surviving examples of ancient Indian art and perfectly preserved Buddhist frescoes.',
    topAttractions: ['Cave 1 (Padmapani painting)', 'Cave 2', 'Cave 16', 'Cave 17', 'Cave 26 (Reclining Buddha)'],
    thingsToDo: ['Cave exploration', 'Art appreciation', 'Photography (without flash)'],
    bestTimeToVisit: 'October to March', recommendedDuration: '1 Day', approximateBudget: '₹7,000 - ₹12,000', travelStyle: 'History / Art', difficulty: 'Easy',
    travelTips: ['Flash photography is strictly prohibited to protect the ancient paintings.', 'The caves are closed on Mondays.', 'Stay in Aurangabad, which is the best base for visiting both Ajanta and Ellora.'],
    image: ""
  },
  {
    id: 'd76', name: 'Ellora Caves', state: 'Maharashtra', category: 'HERITAGE',
    shortDescription: 'A monumental complex of 34 rock-cut temples, famous for the monolithic, gravity-defying Kailasa Temple.',
    fullDescription: 'Ellora is one of the largest rock-cut monastery-temple cave complexes in the world and a UNESCO World Heritage site. Featuring Buddhist, Hindu, and Jain monuments carved side-by-side, it is a testament to the religious tolerance of ancient India. The absolute highlight of Ellora is Cave 16, the Kailasa Temple. Carved top-down from a single, massive piece of volcanic rock, it is designed to resemble Mount Kailash, the abode of Lord Shiva. The sheer scale, engineering brilliance, and intricate detailing of the Kailasa Temple defy modern comprehension. Ellora is a marvel of human endurance and unparalleled artistic devotion.',
    whyVisit: 'To stand in awe of the Kailasa Temple, an architectural miracle carved top-down from a single solid mountain of rock.',
    topAttractions: ['Kailasa Temple (Cave 16)', 'Buddhist Caves (Caves 1-12)', 'Jain Caves (Caves 30-34)', 'Dashavatara Cave (Cave 15)'],
    thingsToDo: ['Architectural exploration', 'Historical tours', 'Photography'],
    bestTimeToVisit: 'October to March', recommendedDuration: '1 Day', approximateBudget: '₹7,000 - ₹12,000', travelStyle: 'History / Architecture', difficulty: 'Easy',
    travelTips: ['The Ellora caves are closed on Tuesdays.', 'Start your visit early with the Kailasa Temple to avoid the massive crowds that arrive by noon.', 'Requires significant walking; wear comfortable shoes.'],
    image: ""
  },
  {
    id: 'd77', name: 'Elephanta Caves', state: 'Maharashtra', category: 'HERITAGE',
    shortDescription: 'An island off the coast of Mumbai housing ancient rock-cut cave temples dedicated to Lord Shiva.',
    fullDescription: 'Located on Elephanta Island (Gharapuri) just an hour’s ferry ride from the Gateway of India in Mumbai, the Elephanta Caves are a network of sculpted rock-cut temples. The main cave, a UNESCO World Heritage site, is dedicated to Lord Shiva and dates back to the 5th to 7th centuries. The centerpiece of the complex is the magnificent, 20-foot-tall Trimurti sculpture, which depicts Shiva in his three roles as the creator, preserver, and destroyer. The island offers a stark, peaceful contrast to the chaotic energy of Mumbai, making it a perfect half-day historical escape for city dwellers and tourists alike.',
    whyVisit: 'To take a scenic ferry ride from Mumbai and witness the magnificent, giant Trimurti sculpture of Lord Shiva.',
    topAttractions: ['Main Shiva Cave', 'Trimurti Sculpture', 'Cannon Hill', 'Ferry ride from Gateway of India'],
    thingsToDo: ['Cave exploration', 'Ferry ride', 'Photography', 'Trekking to Cannon Hill'],
    bestTimeToVisit: 'November to March', recommendedDuration: 'Half Day', approximateBudget: '₹2,000 - ₹4,000', travelStyle: 'History / Day Trip', difficulty: 'Easy',
    travelTips: ['The caves are closed on Mondays.', 'Beware of the aggressive monkeys; do not carry food in your hands.', 'Take the first ferry out in the morning to beat the heat and the crowds.'],
    image: ""
  },
  {
    id: 'd78', name: 'Khajuraho', state: 'Madhya Pradesh', category: 'HERITAGE',
    shortDescription: 'World-renowned for its stunning Nagara-style temples covered in intricate, sensual, and erotic stone carvings.',
    fullDescription: 'Built by the Chandela dynasty between 950 and 1050 CE, the Khajuraho Group of Monuments is a UNESCO World Heritage site famous worldwide for its exquisite, highly detailed stone carvings. While often associated primarily with its erotic sculptures, these make up only a small fraction of the artwork. The vast majority of the carvings beautifully depict daily life, musicians, gods, and epic battles. The temples, particularly the Kandariya Mahadeva Temple, are masterpieces of Nagara-style architecture, with their towering spires designed to resemble the peaks of the Himalayas. Khajuraho is a celebration of human form, ancient art, and deep devotion.',
    whyVisit: 'To witness absolute mastery in stone carving and explore some of the most intricate and well-preserved ancient temples in India.',
    topAttractions: ['Kandariya Mahadeva Temple', 'Lakshmana Temple', 'Chaturbhuj Temple', 'Vishvanatha Temple'],
    thingsToDo: ['Temple tours', 'Attending the Light and Sound show', 'Attending the Khajuraho Dance Festival (February)'],
    bestTimeToVisit: 'October to March', recommendedDuration: '2 Days', approximateBudget: '₹8,000 - ₹14,000', travelStyle: 'Culture / Architecture', difficulty: 'Easy',
    travelTips: ['Hire a licensed, knowledgeable guide to understand the deep philosophy behind the carvings.', 'Rent a bicycle to move between the Western, Eastern, and Southern groups of temples.', 'The evening light and sound show is excellent.'],
    image: ""
  },
  {
    id: 'd79', name: 'Orchha', state: 'Madhya Pradesh', category: 'HERITAGE',
    shortDescription: 'A frozen-in-time medieval town boasting grand palaces and cenotaphs along the boulder-strewn Betwa River.',
    fullDescription: 'Orchha is a hidden historical gem that literally translates to "Hidden Place." Founded in the 16th century by the Bundela Rajput chiefs, this small, peaceful town is packed with majestic palaces, intricate temples, and towering royal cenotaphs (chhatris) situated along the boulder-strewn Betwa River. The town’s crown jewels are the Jahangir Mahal, known for its elegant balconies, and the Ram Raja Temple, the only temple in India where Lord Ram is worshipped as a king. With its relaxed vibe, stunning medieval architecture, and lack of heavy commercialization, Orchha is a photographer’s and historian’s absolute dream.',
    whyVisit: 'For a deeply atmospheric, uncrowded exploration of stunning medieval palaces and riverside cenotaphs.',
    topAttractions: ['Jahangir Mahal', 'Ram Raja Temple', 'Orchha Chhatris (Cenotaphs)', 'Chaturbhuj Temple'],
    thingsToDo: ['River rafting on the Betwa', 'Exploring the palaces', 'Photography at the Chhatris', 'Attending the evening Aarti'],
    bestTimeToVisit: 'October to March', recommendedDuration: '2 Days', approximateBudget: '₹6,000 - ₹10,000', travelStyle: 'History / Relax', difficulty: 'Easy',
    travelTips: ['Climb to the roof of the Jahangir Mahal or Chaturbhuj temple for the best panoramic views of the town.', 'Orchha is best visited as a detour on the way to or from Khajuraho.', 'The sunset view of the Chhatris from across the river is iconic.'],
    image: ""
  },
  {
    id: 'd80', name: 'Konark', state: 'Odisha', category: 'HERITAGE',
    shortDescription: 'Home to the magnificent Sun Temple, a massive architectural marvel designed as a colossal cosmic chariot.',
    fullDescription: 'The Konark Sun Temple is a pinnacle of Odishan temple architecture and a UNESCO World Heritage site. Built in the 13th century, the entire temple was conceived as a massive, cosmic chariot for the Sun God, Surya. It features 24 intricately carved stone wheels, some nearly 10 feet in diameter, pulled by seven life-sized stone horses. The walls of the temple are covered in incredibly detailed reliefs depicting everyday life, mythical creatures, and sensual art. Although the main sanctum collapsed centuries ago, the surviving audience hall is massive and awe-inspiring, standing as a testament to ancient Indian astronomical and engineering brilliance.',
    whyVisit: 'To witness the sheer scale and unimaginable detail of a temple designed as a gigantic, stone-wheeled chariot.',
    topAttractions: ['Konark Sun Temple', 'Chandrabhaga Beach', 'Konark Archaeological Museum', 'Ramchandi Temple'],
    thingsToDo: ['Architectural photography', 'Studying the sundial wheels', 'Attending the Konark Dance Festival (December)'],
    bestTimeToVisit: 'October to March', recommendedDuration: 'Half Day', approximateBudget: '₹4,000 - ₹7,000', travelStyle: 'History / Culture', difficulty: 'Easy',
    travelTips: ['Hire a guide to explain how the stone wheels function as highly accurate sundials.', 'Combine Konark with a visit to Puri and Bhubaneswar to complete the Golden Triangle of Odisha.', 'The nearby Chandrabhaga beach is great for a quiet evening.'],
    image: ""
  },
  {
    id: 'd81', name: 'Mahabalipuram', state: 'Tamil Nadu', category: 'HERITAGE',
    shortDescription: 'A historic coastal town renowned for its ancient rock-cut temples, monolithic chariots, and the beautiful Shore Temple.',
    fullDescription: 'Located on the Coromandel Coast along the Bay of Bengal, Mahabalipuram (Mamallapuram) was a major seaport of the ancient Pallava kingdom. Today, it is a UNESCO World Heritage site famous for its extraordinary 7th and 8th-century rock-cut architecture. The most iconic structure is the Shore Temple, which sits right on the edge of the ocean, enduring centuries of salty winds and waves. The town is also famous for the Pancha Rathas—five monolithic temples carved from single boulders to resemble wooden chariots—and "Arjuna’s Penance," a massive open-air rock relief. It is a stunning intersection of ancient art and ocean views.',
    whyVisit: 'To explore ancient monolithic rock carvings and the iconic Shore Temple standing resiliently against the ocean.',
    topAttractions: ['Shore Temple', 'Pancha Rathas', 'Arjuna’s Penance', 'Krishna’s Butter Ball', 'Mahabalipuram Beach'],
    thingsToDo: ['Heritage walks', 'Surfing', 'Seafood dining', 'Shopping for stone sculptures'],
    bestTimeToVisit: 'November to February', recommendedDuration: '1-2 Days', approximateBudget: '₹6,000 - ₹12,000', travelStyle: 'Heritage / Coastal', difficulty: 'Easy',
    travelTips: ['Visit the Shore Temple at sunrise for the best light and fewest crowds.', 'The town is a hub for stone carving; you can watch artisans at work in the streets.', 'It is an easy day trip from Chennai.'],
    image: ""
  },
  {
    id: 'd82', name: 'Madurai', state: 'Tamil Nadu', category: 'HERITAGE',
    shortDescription: 'One of India’s oldest continuously inhabited cities, anchored by the massive, vividly colorful Meenakshi Temple.',
    fullDescription: 'Madurai is the cultural capital of Tamil Nadu, a city that runs on deep, ancient energy. It is one of the oldest continuously inhabited cities in the world. The absolute center of Madurai—both geographically and spiritually—is the Meenakshi Amman Temple. This massive complex is a masterpiece of Dravidian architecture, featuring 14 towering gopurams (gateway towers) covered in thousands of vividly painted stucco figures of gods, demons, and animals. The city around the temple is a sensory explosion of jasmine flowers, bustling bazaars, and traditional South Indian food. Madurai is a living, breathing testament to ancient Tamil culture and deep devotion.',
    whyVisit: 'To experience the overwhelming scale, color, and spiritual intensity of the Meenakshi Temple, the heart of Tamil culture.',
    topAttractions: ['Meenakshi Amman Temple', 'Thirumalai Nayakkar Mahal', 'Gandhi Memorial Museum', 'Pudhu Mandapam'],
    thingsToDo: ['Temple visits', 'Eating Jigarthanda (local drink)', 'Shopping for cotton sarees', 'Heritage walks'],
    bestTimeToVisit: 'October to March', recommendedDuration: '2 Days', approximateBudget: '₹7,000 - ₹12,000', travelStyle: 'Spiritual / Culture', difficulty: 'Easy',
    travelTips: ['Strict dress codes apply at the temple; shoulders and knees must be covered.', 'Electronics, including mobile phones, are strictly prohibited inside the Meenakshi Temple.', 'Visit the Thirumalai Nayakkar Mahal for its impressive pillars and evening light show.'],
    image: ""
  },
  {
    id: 'd83', name: 'Varanasi', state: 'Uttar Pradesh', category: 'HERITAGE',
    shortDescription: 'The spiritual heart of India, a chaotic, intense, and deeply profound city on the banks of the sacred river Ganges.',
    fullDescription: 'Varanasi (Kashi) is older than history, older than tradition, and older even than legend. It is the spiritual heart of India. Life and death happen openly on the ancient ghats (steps) leading down to the sacred River Ganges. Pilgrims come here to wash away their sins, while others come to cremate their loved ones at the burning ghats, seeking liberation (moksha). The city is an intense, chaotic maze of narrow alleys filled with temples, cows, and the scent of incense. The evening Ganga Aarti, where priests perform synchronized fire rituals on the riverbank, is a visually spectacular and deeply emotional experience.',
    whyVisit: 'For a raw, unfiltered, and deeply transformative encounter with Indian spirituality, life, and death along the sacred Ganges.',
    topAttractions: ['Dashashwamedh Ghat', 'Manikarnika Ghat (Cremation Ghat)', 'Kashi Vishwanath Temple', 'Sarnath (nearby)'],
    thingsToDo: ['Sunrise boat ride on the Ganges', 'Attending the evening Ganga Aarti', 'Getting lost in the narrow alleys', 'Visiting Sarnath'],
    bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹8,000 - ₹15,000', travelStyle: 'Spiritual / Cultural', difficulty: 'Easy',
    travelTips: ['Be highly respectful and do not take photographs at the cremation ghats (Manikarnika).', 'A sunrise boat ride is the best way to see the city wake up.', 'The narrow alleys (galis) are confusing; use GPS or hire a local guide.'],
    image: ""
  },
  {
    id: 'd84', name: 'Amritsar', state: 'Punjab', category: 'HERITAGE',
    shortDescription: 'The spiritual and cultural center of the Sikh religion, home to the resplendent, gold-covered Harmandir Sahib.',
    fullDescription: 'Amritsar is a city of immense spiritual significance, historical tragedy, and legendary Punjabi hospitality. At the heart of the city lies the Harmandir Sahib, globally known as the Golden Temple. Surrounded by a sacred pool, the stunning gold-covered shrine welcomes people of all faiths. The temple’s Langar (community kitchen) serves free meals to up to 100,000 people daily, an incredible display of selfless service. Just a short walk away is Jallianwala Bagh, a poignant memorial of the tragic 1919 massacre. In the evening, the patriotic fervor reaches its peak at the Wagah Border ceremony. Amritsar is deeply moving and incredibly welcoming.',
    whyVisit: 'To witness the profound peace of the Golden Temple, eat at the massive community kitchen, and experience Punjabi hospitality.',
    topAttractions: ['The Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Partition Museum', 'Ram Bagh Palace'],
    thingsToDo: ['Volunteering at the Langar', 'Attending the Wagah Border Retreat Ceremony', 'Eating Amritsari Kulcha', 'Heritage walks'],
    bestTimeToVisit: 'October to March', recommendedDuration: '2-3 Days', approximateBudget: '₹7,000 - ₹12,000', travelStyle: 'Spiritual / Food', difficulty: 'Easy',
    travelTips: ['Cover your head and remove your shoes before entering the Golden Temple complex.', 'Arrive at the Wagah Border by 3 PM to get a good seat for the ceremony.', 'The local street food, especially the Kulcha, is a must-try.'],
    image: ""
  },
  {
    id: 'd85', name: 'Delhi', state: 'Delhi', category: 'HERITAGE',
    shortDescription: 'The sprawling capital of India, seamlessly blending ancient Mughal monuments with a modern, bustling metropolis.',
    fullDescription: 'Delhi is a city of layers, where centuries of history coexist with a fast-paced modern metropolis. Old Delhi is a chaotic, sensory-rich maze of narrow alleys, historic bazaars like Chandni Chowk, and the towering Jama Masjid. In stark contrast, New Delhi, designed by the British, features wide, leafy avenues and grand government buildings. The city is studded with magnificent Mughal and Islamic architecture, including three UNESCO World Heritage sites: the Red Fort, Qutub Minar, and Humayun’s Tomb. Beyond history, Delhi is India’s culinary capital, offering everything from legendary street food to world-class fine dining. It is a vibrant, exhausting, and completely unforgettable city.',
    whyVisit: 'To explore centuries of empires, incredible Mughal architecture, and arguably the best street food scene in the country.',
    topAttractions: ['Red Fort', 'Qutub Minar', 'Humayun’s Tomb', 'India Gate', 'Lotus Temple', 'Chandni Chowk'],
    thingsToDo: ['Heritage walks in Old Delhi', 'Street food tasting', 'Shopping at Dilli Haat', 'Visiting museums'],
    bestTimeToVisit: 'October to March', recommendedDuration: '3-5 Days', approximateBudget: '₹10,000 - ₹20,000', travelStyle: 'History / City', difficulty: 'Easy',
    travelTips: ['Use the Delhi Metro; it is clean, safe, and bypasses the city’s notoriously bad traffic.', 'Air pollution can be severe in November and December.', 'Bargain aggressively in street markets like Sarojini Nagar.'],
    image: ""
  },

  // 🌿 NATURE / WILDLIFE / UNIQUE
  {
    id: 'd86', name: 'Jim Corbett National Park', state: 'Uttarakhand', category: 'WILDLIFE',
    shortDescription: 'India’s oldest national park, famous for its wild Bengal tigers, herds of elephants, and beautiful Sal forests.',
    fullDescription: 'Established in 1936, Jim Corbett is India’s oldest and one of its most prestigious national parks. Located in the Himalayan foothills, the park boasts a diverse landscape of dense Sal forests, vast grasslands, and the Ramganga River. It is most famous for its healthy population of the majestic Bengal Tiger, though sightings require patience and luck. Beyond tigers, the park is home to large herds of wild elephants, leopards, and over 600 species of birds, making it a paradise for birdwatchers. The Dhikala zone is the most highly sought-after area, offering deep jungle safaris and incredible wildlife encounters in pristine wilderness.',
    whyVisit: 'For the thrill of tracking Bengal tigers in the wild and experiencing the rich biodiversity of India’s oldest national park.',
    topAttractions: ['Dhikala Zone', 'Bijrani Zone', 'Corbett Waterfall', 'Garjiya Devi Temple', 'Corbett Museum'],
    thingsToDo: ['Jeep Safari', 'Canter Safari', 'Bird Watching', 'Nature Photography', 'River Rafting (seasonal)'],
    bestTimeToVisit: 'November to June', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹25,000', travelStyle: 'Wildlife / Nature', difficulty: 'Easy',
    travelTips: ['Safaris must be booked months in advance through the official government portal.', 'Dhikala zone requires an overnight stay inside the park.', 'Wear muted jungle colors (green, brown) and maintain strict silence during safaris.'],
    image: ""
  },
  {
    id: 'd87', name: 'Ranthambore National Park', state: 'Rajasthan', category: 'WILDLIFE',
    shortDescription: 'One of the best places in the world to photograph tigers in the wild, set against ancient ruins and forts.',
    fullDescription: 'Ranthambore offers a wildlife experience unlike any other, blending thrilling tiger tracking with ancient history. Once the private hunting grounds of the Maharajas of Jaipur, the park is dotted with crumbling ruins, overgrown pavilions, and the massive 10th-century Ranthambore Fort. This unique backdrop makes it a favorite for wildlife photographers. Ranthambore is renowned for its diurnal tigers, which means they are active and frequently spotted during the day. Watching a Bengal tiger walk past an ancient stone ruin is an iconic Indian safari experience. The park also houses leopards, sloth bears, and crocodiles in its padma lakes.',
    whyVisit: 'For excellent tiger sighting opportunities and the unique aesthetic of wild predators roaming among ancient, crumbling forts.',
    topAttractions: ['Ranthambore Fort', 'Padam Talao', 'Raj Bagh Ruins', 'Trinetra Ganesh Temple'],
    thingsToDo: ['Tiger Safari', 'Wildlife Photography', 'Hiking to Ranthambore Fort', 'Birding'],
    bestTimeToVisit: 'October to June', recommendedDuration: '3-4 Days', approximateBudget: '₹15,000 - ₹30,000', travelStyle: 'Wildlife / Adventure', difficulty: 'Easy',
    travelTips: ['Zones 1 to 5 are generally considered the best for tiger sightings; book early.', 'Jeep safaris (Gypsy) are much better than the larger Canter trucks for photography.', 'The park is closed during the monsoon (July to September).'],
    image: ""
  },
  {
    id: 'd88', name: 'Kaziranga National Park', state: 'Assam', category: 'WILDLIFE',
    shortDescription: 'A UNESCO World Heritage site and the ultimate sanctuary for the endangered One-Horned Rhinoceros.',
    fullDescription: 'Situated on the floodplains of the mighty Brahmaputra River, Kaziranga National Park is a massive conservation success story. The park is characterized by vast expanses of tall elephant grass, marshlands, and dense tropical broadleaf forests. It is globally famous for hosting two-thirds of the world’s population of the endangered Indian One-Horned Rhinoceros. A safari here almost guarantees multiple close-up sightings of these prehistoric-looking beasts. Besides rhinos, Kaziranga boasts the highest density of tigers in the world (though difficult to spot in the tall grass), large herds of wild elephants, swamp deer, and wild water buffalo.',
    whyVisit: 'To guarantee sightings of the rare One-Horned Rhinoceros in a beautiful, vast landscape of tall elephant grass and wetlands.',
    topAttractions: ['Central Range (Kohora)', 'Western Range (Bagori)', 'Kaziranga National Orchid Park', 'Brahmaputra River'],
    thingsToDo: ['Jeep Safari', 'Elephant Safari', 'Bird Watching', 'Tea Estate Visits'],
    bestTimeToVisit: 'November to April', recommendedDuration: '2-3 Days', approximateBudget: '₹12,000 - ₹20,000', travelStyle: 'Wildlife / Nature', difficulty: 'Easy',
    travelTips: ['The Elephant Safari offers the closest approach to rhinos, but raises ethical concerns for some travelers.', 'The park is completely flooded and closed during the monsoon.', 'Combine with a visit to Majuli Island.'],
    image: ""
  },
  {
    id: 'd89', name: 'Gir National Park', state: 'Gujarat', category: 'WILDLIFE',
    shortDescription: 'The last remaining refuge on Earth for the majestic Asiatic Lion, located in the dry deciduous forests of Gujarat.',
    fullDescription: 'Gir National Park holds a unique and vital place in global wildlife conservation: it is the only place on the planet where you can see the Asiatic Lion in the wild. The landscape of Gir is harsh and rugged, characterized by dry deciduous forests, acacia scrub, and rocky hills. This arid environment makes predator spotting slightly easier than in dense jungles. Thanks to rigorous conservation efforts, the lion population has steadily increased, making sightings during safaris highly probable. Alongside lions, the park is home to leopards, striped hyenas, massive sambar deer, and marsh crocodiles in the Kamleshwar Dam.',
    whyVisit: 'It is the absolute only place in the world to witness the rare Asiatic Lion in its natural habitat.',
    topAttractions: ['Gir Jungle Trail', 'Devalia Safari Park', 'Kamleshwar Dam', 'Somnath Temple (nearby)'],
    thingsToDo: ['Lion Safari', 'Bird Watching', 'Crocodile spotting', 'Visiting local Maldhari tribal settlements'],
    bestTimeToVisit: 'December to March', recommendedDuration: '2-3 Days', approximateBudget: '₹10,000 - ₹18,000', travelStyle: 'Wildlife / Nature', difficulty: 'Easy',
    travelTips: ['Book your safari permits online well in advance via the official Gujarat tourism website.', 'Devalia Safari Park is an enclosed area that guarantees lion sightings, but the true Gir trail is better for authentic wilderness.', 'Closed during the monsoons.'],
    image: ""
  },
  {
    id: 'd90', name: 'Bandhavgarh National Park', state: 'Madhya Pradesh', category: 'WILDLIFE',
    shortDescription: 'Known for having one of the highest densities of Bengal tigers in the world, ensuring excellent safari sightings.',
    fullDescription: 'Bandhavgarh National Park is famous across India for one specific reason: it boasts one of the highest densities of Bengal tigers in the wild. Set among the Vindhya hills, the park features a diverse landscape of steep rocky hills, dense Sal forests, and open grassy meadows (bameras). The park is dominated by the ancient Bandhavgarh Fort, which sits atop a 2,600-foot-high plateau. Legend has it that Lord Rama gave this fort to his brother Lakshmana. With its high tiger population and relatively smaller core area, Bandhavgarh offers some of the best odds for spotting the elusive big cat in its natural habitat.',
    whyVisit: 'For arguably the highest probability of spotting a wild Bengal tiger in India, set in a beautiful, historically rich jungle.',
    topAttractions: ['Tala Zone', 'Magdhi Zone', 'Bandhavgarh Fort', 'Shesh-Saiya (Ancient Vishnu Statue)'],
    thingsToDo: ['Tiger Safari', 'Wildlife Photography', 'Exploring ancient rock-cut caves', 'Bird Watching'],
    bestTimeToVisit: 'October to June', recommendedDuration: '3-4 Days', approximateBudget: '₹15,000 - ₹25,000', travelStyle: 'Wildlife / Adventure', difficulty: 'Easy',
    travelTips: ['Tala zone is historically the most famous for tiger sightings.', 'Safaris are highly regulated; book months in advance.', 'Summer months (April-May) are brutally hot but offer the absolute best tiger sightings near water holes.'],
    image: ""
  },
  {
    id: 'd91', name: 'Kanha National Park', state: 'Madhya Pradesh', category: 'WILDLIFE',
    shortDescription: 'The inspiration for "The Jungle Book," featuring vast meadows, dense Sal forests, and the rare Barasingha deer.',
    fullDescription: 'Kanha National Park is often considered the most scenic and well-managed wildlife reserve in India. Its lush Sal and bamboo forests, interspersed with vast grassy meadows (maidans), served as the inspiration for Rudyard Kipling’s "The Jungle Book." The park is massive, offering a deeply immersive wilderness experience. While Kanha is excellent for spotting Bengal tigers and leopards, it is most celebrated for bringing the Barasingha (Hard Ground Swamp Deer) back from the brink of extinction. The sight of these magnificent, multi-antlered deer grazing in the misty morning meadows is one of the iconic images of the Indian jungle.',
    whyVisit: 'To experience the quintessential, deeply beautiful Indian jungle that inspired "The Jungle Book" and to see the rare Barasingha.',
    topAttractions: ['Kanha Meadows', 'Mukki Zone', 'Bamni Dadar (Sunset Point)', 'Kanha Museum'],
    thingsToDo: ['Tiger Safari', 'Nature Walks in buffer zones', 'Wildlife Photography', 'Tribal village visits'],
    bestTimeToVisit: 'October to June', recommendedDuration: '3-4 Days', approximateBudget: '₹15,000 - ₹25,000', travelStyle: 'Wildlife / Nature', difficulty: 'Easy',
    travelTips: ['Kanha is vast; doing safaris in different zones (like Kanha and Mukki) offers diverse landscapes.', 'Mornings are freezing in winter; dress in multiple layers.', 'The park is closed from July to mid-October.'],
    image: ""
  },
  {
    id: 'd92', name: 'Sundarbans', state: 'West Bengal', category: 'WILDLIFE',
    shortDescription: 'The largest mangrove forest in the world, home to the elusive swimming Bengal tigers and saltwater crocodiles.',
    fullDescription: 'The Sundarbans is a UNESCO World Heritage site and a biosphere reserve unlike any other. It is the largest continuous mangrove forest in the world, formed by the delta of the Ganges, Brahmaputra, and Meghna rivers. Unlike traditional jeep safaris, exploring the Sundarbans is done entirely by boat, navigating a complex network of tidal waterways and mudflats. This is the domain of the legendary, highly elusive Sundarbans Bengal tiger, known for its ability to swim long distances and its man-eating reputation. The dense, impenetrable mangroves also harbor massive saltwater crocodiles, water monitor lizards, and a rich variety of birdlife.',
    whyVisit: 'For a unique, eerie, and thrilling boat safari through dense mangroves in search of the legendary swimming tigers.',
    topAttractions: ['Sajnekhali Watch Tower', 'Sudhanyakhali Watch Tower', 'Dobanki Canopy Walk', 'Netidhopani'],
    thingsToDo: ['Boat Safari', 'Bird Watching', 'Canopy Walk', 'Visiting local delta villages'],
    bestTimeToVisit: 'September to March', recommendedDuration: '2-3 Days', approximateBudget: '₹10,000 - ₹18,000', travelStyle: 'Wildlife / Adventure', difficulty: 'Easy',
    travelTips: ['Tiger sightings are extremely rare due to the dense mangroves; focus on the overall unique ecosystem.', 'Carry binoculars; you will be observing wildlife from the deck of a boat.', 'Winter is the best time; summer is uncomfortably humid.'],
    image: ""
  },
  {
    id: 'd93', name: 'Great Himalayan National Park', state: 'Himachal Pradesh', category: 'WILDLIFE',
    shortDescription: 'A pristine, roadless UNESCO World Heritage site offering deep wilderness trekking and rare Himalayan wildlife.',
    fullDescription: 'The Great Himalayan National Park (GHNP) is an immense, pristine, and incredibly rugged wilderness area in the Kullu region. Unlike other national parks in India, there are no roads, jeeps, or easy safaris here; the only way to explore GHNP is on foot. This UNESCO World Heritage site is a haven for biodiversity, protecting several rare and endangered species, including the elusive Snow Leopard, the Himalayan Brown Bear, and the brilliant blue Western Tragopan pheasant. Trekkers traverse deep valleys, dense oak and pine forests, and high-altitude alpine meadows. It is a destination strictly for serious nature lovers and hikers seeking profound isolation.',
    whyVisit: 'To experience raw, untouched Himalayan wilderness on foot, far removed from any roads, vehicles, or mass tourism.',
    topAttractions: ['Tirthan Valley (Gateway)', 'Sainj Valley', 'Rolla Trek', 'Shilt Hut'],
    thingsToDo: ['Multi-day Wilderness Trekking', 'Bird Watching', 'Camping', 'Trout Fishing in buffer zones'],
    bestTimeToVisit: 'March to June & September to November', recommendedDuration: '5-7 Days', approximateBudget: '₹12,000 - ₹20,000', travelStyle: 'Adventure Trek / Nature', difficulty: 'Difficult',
    travelTips: ['Permits are strictly required to enter the core zone.', 'You must hire registered local guides and porters as trails are unmarked and rugged.', 'Physical fitness is essential for exploring the park.'],
    image: ""
  },
  {
    id: 'd94', name: 'Dandeli', state: 'Karnataka', category: 'WILDLIFE',
    shortDescription: 'An adventure and wildlife hub set in dense deciduous forests, famous for white-water rafting on the Kali River.',
    fullDescription: 'Dandeli is a vibrant adventure and eco-tourism destination located in the dense, moist deciduous forests of the Western Ghats. It is most famous for the Kali River, which provides some of the best white-water rafting experiences in South India. The surrounding Dandeli Wildlife Sanctuary is a biodiversity hotspot, home to the elusive Black Panther, leopards, elephants, and an incredible array of birdlife, particularly the Great Indian Hornbill. Visitors can engage in a mix of thrilling adventure sports—like kayaking, coracle rides, and jungle safaris—while staying in eco-camps deep within the forest. It is the perfect blend of wildlife and adrenaline.',
    whyVisit: 'To combine thrilling white-water rafting on the Kali river with deep jungle safaris in the lush Western Ghats.',
    topAttractions: ['Kali River', 'Dandeli Wildlife Sanctuary', 'Syntheri Rocks', 'Kavala Caves', 'Anshi National Park'],
    thingsToDo: ['White-water Rafting', 'Jungle Safari', 'Bird Watching', 'Coracle Boat Ride', 'Trekking'],
    bestTimeToVisit: 'October to May', recommendedDuration: '2-3 Days', approximateBudget: '₹8,000 - ₹14,000', travelStyle: 'Adventure / Wildlife', difficulty: 'Moderate',
    travelTips: ['Rafting depends entirely on the water release from the nearby dam; confirm in advance.', 'Carry strong insect repellent for jungle walks.', 'Keep an eye out for Hornbills early in the morning.'],
    image: ""
  },
  {
    id: 'd95', name: 'Wayanad', state: 'Kerala', category: 'NATURE',
    shortDescription: 'A lush, green district in the Western Ghats known for spice plantations, waterfalls, and wild elephants.',
    fullDescription: 'Set high in the Western Ghats, Wayanad is a rural, pristine district characterized by misty mountains, sprawling tea and spice plantations, and dense tropical forests. It is an integral part of the Nilgiri Biosphere Reserve and offers abundant wildlife sightings, particularly large herds of wild elephants at the Muthanga Wildlife Sanctuary. Wayanad is also rich in history, housing the ancient Edakkal Caves, which feature petroglyphs dating back to the Neolithic age. Visitors can hike to the heart-shaped lake at Chembra Peak, explore cascading waterfalls, and stay in luxurious treehouses. It is Kerala’s ultimate nature and adventure retreat.',
    whyVisit: 'For its pristine, cool climate, dense forests, wild elephants, and a perfect mix of hiking and relaxation.',
    topAttractions: ['Chembra Peak', 'Edakkal Caves', 'Wayanad Wildlife Sanctuary (Muthanga)', 'Banasura Sagar Dam', 'Soochipara Falls'],
    thingsToDo: ['Trekking', 'Wildlife Safari', 'Spices Shopping', 'Boating on the dam', 'Ziplining'],
    bestTimeToVisit: 'October to May', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹16,000', travelStyle: 'Nature / Leisure', difficulty: 'Moderate',
    travelTips: ['The hike to Edakkal Caves is steep and can be difficult for the elderly.', 'Trekking to Chembra Peak requires permission from the forest office.', 'Expect heavy, continuous rain if visiting during the monsoon.'],
    image: ""
  },
  {
    id: 'd96', name: 'Coorg', state: 'Karnataka', category: 'NATURE',
    shortDescription: 'The "Scotland of India," famous for its endless coffee estates, misty hills, and rich Kodava culture.',
    fullDescription: 'Officially known as Kodagu, Coorg is a wealthy, beautiful hill station famed for producing some of the best coffee in the world. The landscape is a rolling sea of green, with meticulously maintained coffee and spice estates separated by patches of dense jungle and cascading waterfalls, like the famous Abbey Falls. Coorg is deeply defined by the unique culture and martial traditions of the local Kodava people, known for their distinct cuisine and hospitality. Visitors can track wild elephants at the Dubare Elephant Camp, trek to the highest peak, Tadiandamol, or simply enjoy a fresh cup of coffee while watching the mist roll in.',
    whyVisit: 'To stay in lush coffee estate homestays, enjoy spicy Kodava pork cuisine, and experience misty, rolling green landscapes.',
    topAttractions: ['Abbey Falls', 'Dubare Elephant Camp', 'Raja’s Seat', 'Namdroling Monastery (Golden Temple)', 'Tadiandamol Peak'],
    thingsToDo: ['Coffee Plantation Tours', 'Trekking', 'Elephant Bathing', 'River Rafting in Barapole', 'Food Tasting'],
    bestTimeToVisit: 'October to April', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹18,000', travelStyle: 'Nature / Leisure', difficulty: 'Easy',
    travelTips: ['Stay in a traditional coffee estate homestay for the most authentic experience.', 'Don’t miss the Tibetan settlement in nearby Bylakuppe.', 'The local Pandi Curry (pork) is a must-try for non-vegetarians.'],
    image: ""
  },
  {
    id: 'd97', name: 'Chikmagalur', state: 'Karnataka', category: 'NATURE',
    shortDescription: 'The birthplace of coffee in India, offering serene estates and the highest mountain peaks in Karnataka.',
    fullDescription: 'Chikmagalur translates to the "Young Daughter\'s Town" and holds the historical distinction of being the first place coffee was cultivated in India. Nestled in the Baba Budangiri ranges, the town is surrounded by sprawling coffee estates and towering peaks. It is a haven for trekkers, offering the challenging hike up Mullayanagiri, the highest peak in Karnataka, which provides sweeping views of the rugged Western Ghats. The landscape is also dotted with spectacular, multi-tiered waterfalls like Hebbe Falls. Chikmagalur offers a quieter, slightly more rugged, and highly scenic alternative to its more famous neighbor, Coorg.',
    whyVisit: 'To trek the highest peaks in Karnataka and enjoy unparalleled tranquility in some of India’s oldest coffee estates.',
    topAttractions: ['Mullayanagiri Peak', 'Baba Budangiri', 'Hebbe Falls', 'Kemmangundi', 'Coffee Yatra Museum'],
    thingsToDo: ['Trekking', 'Coffee Plantation Walks', 'Jeep Safari to Hebbe Falls', 'Photography'],
    bestTimeToVisit: 'September to May', recommendedDuration: '2-3 Days', approximateBudget: '₹8,000 - ₹14,000', travelStyle: 'Nature / Adventure', difficulty: 'Moderate',
    travelTips: ['The drive to Mullayanagiri peak is extremely narrow and steep; experienced drivers only.', 'Hebbe Falls requires a bumpy 4x4 jeep ride arranged locally.', 'A great weekend getaway from Bangalore.'],
    image: ""
  },
  {
    id: 'd98', name: 'Munnar', state: 'Kerala', category: 'NATURE',
    shortDescription: 'A deeply romantic hill station famous for its manicured tea gardens that roll over the hills like a green carpet.',
    fullDescription: 'Situated at 5,200 feet in the Western Ghats, Munnar is arguably South India’s most beautifully manicured hill station. The defining feature of Munnar is the seemingly endless expanse of emerald-green tea plantations that contour perfectly around the rolling hills, often shrouded in a soft, ethereal mist. Historically the summer resort for the British in South India, Munnar is home to the Eravikulam National Park, the sanctuary for the endangered Nilgiri Tahr. Visitors can hike to Anamudi, the highest peak in South India, visit tea museums, and enjoy the crisp, cool mountain air. It is a visually perfect, deeply romantic destination.',
    whyVisit: 'To witness the breathtaking, geometric beauty of endless tea plantations and enjoy a cool, misty romantic getaway.',
    topAttractions: ['Eravikulam National Park', 'Mattupetty Dam', 'Tea Museum', 'Echo Point', 'Top Station'],
    thingsToDo: ['Tea Estate Walks', 'Wildlife Spotting (Nilgiri Tahr)', 'Boating', 'Trekking to Kolukkumalai'],
    bestTimeToVisit: 'September to March', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹20,000', travelStyle: 'Romance / Leisure', difficulty: 'Easy',
    travelTips: ['Book Eravikulam National Park tickets online to avoid massive queues.', 'Take a jeep safari to Kolukkumalai before dawn for an unforgettable sunrise over the clouds.', 'The winding roads can cause motion sickness.'],
    image: ""
  },
  {
    id: 'd99', name: 'Kodaikanal', state: 'Tamil Nadu', category: 'NATURE',
    shortDescription: 'The "Princess of Hill Stations," centered around a star-shaped lake, offering pine forests and misty viewpoints.',
    fullDescription: 'Set in the misty Palani Hills, Kodaikanal is a charming, old-world hill station known for its cool climate, dense pine forests, and dramatic viewpoints. The town centers around the beautiful, man-made, star-shaped Kodai Lake, where visitors can cycle, walk, or row boats. The unique geography of the area often results in thick clouds rolling right through the streets and forests. Major attractions include Coaker’s Walk, a paved pedestrian path offering stunning valley views, and the Pillar Rocks, three giant granite boulders standing shoulder-to-shoulder. Kodaikanal offers a deeply relaxing, slightly nostalgic mountain retreat perfect for families and couples.',
    whyVisit: 'For a classic, relaxing hill station experience featuring boating, cycling through pine forests, and stunning valley viewpoints.',
    topAttractions: ['Kodai Lake', 'Coaker’s Walk', 'Pillar Rocks', 'Bryant Park', 'Pine Forest'],
    thingsToDo: ['Boating', 'Cycling around the lake', 'Horse riding', 'Hiking to Dolphin’s Nose'],
    bestTimeToVisit: 'October to June', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Family / Leisure', difficulty: 'Easy',
    travelTips: ['Buy homemade chocolates, a local specialty.', 'The hike to Dolphin’s Nose is steep and not recommended for the elderly.', 'Beware of the monkeys near the tourist viewpoints.'],
    image: ""
  },
  {
    id: 'd100', name: 'Lonar Lake', state: 'Maharashtra', category: 'NATURE',
    shortDescription: 'A unique, hyper-velocity meteorite crater lake featuring bizarre alkaline-saline water and surrounded by ancient temples.',
    fullDescription: 'Lonar Lake is a spectacular geographical anomaly. Created over 50,000 years ago when a massive meteorite crashed into the basalt rock of the Deccan Plateau, it is the only known hyper-velocity impact crater in basaltic rock anywhere on Earth. The lake sits at the bottom of a deep, forested crater and is bizarrely both saline and alkaline. The unique chemical composition supports rare microorganisms. Surrounding the lake within the crater are dense forests housing monkeys, peafowl, and ancient, partially ruined Hindu temples like the Daitya Sudan temple. It is a destination of immense scientific, historical, and natural intrigue.',
    whyVisit: 'To explore a massive, actual meteorite crater and witness a unique ecosystem that baffles scientists to this day.',
    topAttractions: ['Lonar Crater Lake', 'Daitya Sudan Temple', 'Gomukh Temple', 'Kamalja Devi Temple'],
    thingsToDo: ['Trekking down into the crater', 'Bird Watching', 'Exploring ancient temple ruins', 'Scientific tourism'],
    bestTimeToVisit: 'October to March', recommendedDuration: '1-2 Days', approximateBudget: '₹5,000 - ₹8,000', travelStyle: 'Offbeat / Nature', difficulty: 'Easy',
    travelTips: ['The trek down to the lake is steep; wear good shoes.', 'The lake water has a distinct smell due to its unique chemistry; swimming is not recommended.', 'Hire a local guide to understand the fascinating geology.'],
    image: ""
  }
];


