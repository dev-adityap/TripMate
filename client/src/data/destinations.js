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
  }
];