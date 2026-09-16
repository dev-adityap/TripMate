  // This file serves as your frontend data layer until MongoDB endpoints are fully connected.
  // Image is explicitly set to null as requested, to trigger your beautiful fallback UI.

  // MODIFIED FILE - Updated with 100 completely populated, unique destinations.
  // Note: image is strictly set to "" to preserve your frontend fallback UI.
  // You can retain your existing mockTrips array at the bottom of this file.

  export const mockDestinations = [
    // 🏔️ MOUNTAINS / HILL DESTINATIONS
    {
      id: 'd1', name: 'Manali', state: 'Himachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'A premier Himalayan retreat blending lush valleys, apple orchards, and thrilling adventure sports.',
      fullDescription: 'Nestled in the picturesque Beas River Valley, Manali serves as India’s premier high-altitude hill station. It beautifully contrasts lush green alpine meadows and vibrant apple orchards with towering, snow-capped Himalayan peaks. Manali acts as a gateway to the adventurous Spiti Valley and Leh. Visitors can explore the charming, cafe-lined streets of Old Manali, visit ancient wooden temples, or engage in high-octane adventure sports in the nearby Solang Valley. Whether you are a backpacker seeking tranquil mountain vibes, a honeymooner looking for romantic snowscapes, or a thrill-seeker preparing for a massive Himalayan trek, Manali provides an unforgettable mountain experience.',
      whyVisit: 'Offers a perfect balance of serene natural beauty, rich local culture in Old Manali, and thrilling adventure activities.',
      topAttractions: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Old Manali'],
      thingsToDo: ['Paragliding', 'River Rafting', 'Cafe Hopping', 'Trekking'],
      bestTimeToVisit: 'October to June', recommendedDuration: '4-5 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Leisure / Adventure', difficulty: 'Easy',
      travelTips: ['Book Rohtang Pass permits well in advance.', 'Old Manali is better for backpackers.', 'Carry heavy woolens if visiting in winter.'],
      image: "https://images.unsplash.com/photo-1597167231350-d057a45dc868?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd2', name: 'Kasol', state: 'Himachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'The "Amsterdam of India," famous for its pine-covered hills, Parvati River, and vibrant backpacker culture.',
      fullDescription: 'Tucked away in the scenic Parvati Valley, Kasol is a haven for backpackers, trekkers, and nature enthusiasts. Often referred to as the "Mini Israel of India" due to its high percentage of Israeli tourists, the hamlet is surrounded by forested mountains and the roaring Parvati River. The atmosphere here is deeply relaxed, characterized by bohemian cafes serving excellent hummus, local handicrafts, and trance music. Kasol is the primary basecamp for iconic treks like Kheerganga and Sar Pass. It is a destination where you can disconnect from the world, take long walks through pine forests, and immerse yourself in mountain serenity.',
      whyVisit: 'The ultimate chill destination with a unique mix of Israeli culture, stunning pine forests, and access to incredible Himalayan treks.',
      topAttractions: ['Parvati River', 'Manikaran Sahib', 'Tosh Village', 'Chalal Trek Trail'],
      thingsToDo: ['Trekking to Kheerganga', 'Cafe Hopping', 'Riverside Camping', 'Exploring nearby villages'],
      bestTimeToVisit: 'March to June & October to November', recommendedDuration: '3-4 Days', approximateBudget: '₹6,000 - ₹10,000', travelStyle: 'Backpacking', difficulty: 'Easy',
      travelTips: ['Carry cash as ATMs are limited and often run out.', 'Be prepared for sudden rain showers.', 'Respect local village customs when visiting Tosh or Malana.'],
      image: "https://images.unsplash.com/photo-1710495556210-85091a7520b0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd3', name: 'Spiti Valley', state: 'Himachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'A rugged, cold desert mountain valley known for its ancient Buddhist monasteries and lunar-like landscapes.',
      fullDescription: 'Known as the "Middle Land," Spiti Valley is a cold desert mountain valley located high in the Himalayas. It is characterized by stark, barren landscapes, ancient Buddhist monasteries perched on rocky outcrops, and crystal-clear high-altitude lakes. The isolation, the profound silence, and the rugged terrain offer an unparalleled escape from modern life. The road trip to Spiti is as legendary as the destination itself, weaving through some of the world’s most treacherous and beautiful mountain passes. It is a haven for astrophotographers, adventure motorcyclists, and those seeking spiritual solitude among thousand-year-old Tibetan Buddhist traditions.',
      whyVisit: 'For the ultimate raw adventure, spectacular stargazing, and an immersive cultural experience in one of the most remote regions of India.',
      topAttractions: ['Key Monastery', 'Chandratal Lake', 'Kunzum Pass', 'Kibber Village', 'Dhankar Monastery'],
      thingsToDo: ['High-altitude driving', 'Monastery hopping', 'Stargazing', 'Camping by Chandratal'],
      bestTimeToVisit: 'May to October', recommendedDuration: '8-10 Days', approximateBudget: '₹18,000 - ₹25,000', travelStyle: 'Adventure / Offbeat', difficulty: 'Moderate',
      travelTips: ['Acclimatize properly; altitude sickness is real.', 'BSNL network works best, but expect days with zero connectivity.', 'Carry extra fuel if self-driving.'],
      image: "https://plus.unsplash.com/premium_photo-1661930516466-04ffc555c510?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd4', name: 'Kinnaur Valley', state: 'Himachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'A dramatic valley known for its dangerous roads, lush apple orchards, and the sacred Mount Kinnaur Kailash.',
      fullDescription: 'Kinnaur Valley is a spectacular region where the lush green of the lower Himalayas transitions into the arid, barren landscapes of the Tibetan plateau. Famous for its delicious apples and traditional wood-and-stone architecture, Kinnaur is deeply steeped in mythology, blending Hinduism and Buddhism. The valley is defined by the fierce Sutlej River carving through deep gorges and the imposing, snow-capped Mount Kinnaur Kailash looming in the background. The road journey through Kinnaur is thrilling, often featuring cliff-hanging highways cut directly into sheer rock faces, making it a bucket-list destination for intrepid road-trippers and spiritual seekers alike.',
      whyVisit: 'To experience a unique blend of Hinduism and Buddhism, dramatic road trips, and some of the sweetest apples in India.',
      topAttractions: ['Kalpa', 'Chitkul (Last village of India)', 'Sangla Valley', 'Recong Peo'],
      thingsToDo: ['Road tripping', 'Village walks', 'Apple orchard visits', 'Photography'],
      bestTimeToVisit: 'April to June & September to October', recommendedDuration: '6-7 Days', approximateBudget: '₹12,000 - ₹18,000', travelStyle: 'Road Trip / Nature', difficulty: 'Moderate',
      travelTips: ['The roads can be treacherous; hire an experienced local driver if unsure.', 'Chitkul gets extremely cold even in summer.', 'Respect the local deities and temple rules.'],
      image: "https://images.unsplash.com/photo-1733242792661-007784695a37?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd5', name: 'Tirthan Valley', state: 'Himachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'An unspoiled paradise beside the Tirthan River, acting as the gateway to the Great Himalayan National Park.',
      fullDescription: 'Tirthan Valley is an offbeat, deeply serene destination that has escaped the heavy commercialization of other Himachali hill stations. Named after the pristine Tirthan River that flows through it, this valley is characterized by traditional wooden Himachali homes, dense pine forests, and hidden waterfalls. It serves as the primary base for exploring the Great Himalayan National Park, a UNESCO World Heritage site known for its rich biodiversity. Visitors come here for quiet contemplation, exceptional brown trout fishing, and multi-day treks into deep forests where snow leopards and Himalayan brown bears roam. It is pure, untouched mountain wilderness.',
      whyVisit: 'Perfect for those seeking peace, quiet, riverside homestays, and untouched wilderness away from tourist crowds.',
      topAttractions: ['Great Himalayan National Park', 'Serolsar Lake', 'Jalori Pass', 'Chehni Kothi'],
      thingsToDo: ['Trout Fishing', 'Trekking', 'Riverside Camping', 'Bird Watching'],
      bestTimeToVisit: 'March to June & September to November', recommendedDuration: '4-5 Days', approximateBudget: '₹8,000 - ₹12,000', travelStyle: 'Nature / Relax', difficulty: 'Easy',
      travelTips: ['Fishing requires a permit which your homestay can help arrange.', 'Jalori Pass is steep; ensure your vehicle is in good condition.', 'Carry eco-friendly products to protect the river.'],
      image: "https://images.unsplash.com/photo-1652501836149-ab1b0f220a37?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd6', name: 'Dalhousie', state: 'Himachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'A charming colonial-era hill station spread across five hills, offering panoramic views of the Dhauladhar range.',
      fullDescription: 'Established in 1854 as a summer retreat for British troops, Dalhousie retains a distinct colonial charm with its Scottish and Victorian-style architecture, old churches, and sprawling colonial bungalows. Spread across five hills, the town offers magnificent, unhindered views of the snow-capped Pir Panjal and Dhauladhar mountain ranges. The landscape features dense groves of pines, oaks, and deodars. Nearby, the meadows of Khajjiar provide a stunning, Swiss-like landscape perfect for picnics and light adventure. Dalhousie is ideal for slow travel, long nature walks, and experiencing a slice of 19th-century history amidst pristine Himalayan beauty.',
      whyVisit: 'To experience old-world colonial charm, quiet forest walks, and the stunning green meadows of nearby Khajjiar.',
      topAttractions: ['Khajjiar', 'Panchpula', 'Dainkund Peak', 'St. John’s Church'],
      thingsToDo: ['Nature Walks', 'Boating at Chamera Lake', 'Trekking to Dainkund', 'Café Hopping'],
      bestTimeToVisit: 'March to June & October to December', recommendedDuration: '3-4 Days', approximateBudget: '₹9,000 - ₹14,000', travelStyle: 'Family / Leisure', difficulty: 'Easy',
      travelTips: ['Khajjiar gets crowded on weekends; go early in the morning.', 'Winter visits require heavy woolens as it snows heavily.', 'Great place for buying traditional Himachali shawls.'],
      image: "https://images.unsplash.com/photo-1589702413183-ca141958b7c5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd7', name: 'Dharamshala', state: 'Himachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'The winter capital of Himachal, blending deep Kangra culture with Tibetan spirituality under the Dhauladhar peaks.',
      fullDescription: 'Dharamshala is a vibrant city split into two distinct halves: the bustling lower commercial center and the upper spiritual hub of Mcleod Ganj. Framed by the dramatic, jagged peaks of the Dhauladhar range, the lower town is steeped in traditional Kangra culture, featuring ancient Hindu temples, tea gardens, and historical forts. The city is famous for the HPCA Stadium, one of the most beautifully situated cricket grounds in the world. Dharamshala offers a rich tapestry of experiences, from exploring local art museums to wandering through lush cedar forests, providing a grounding Himalayan experience.',
      whyVisit: 'A perfect mix of traditional Himachali culture, beautiful tea gardens, and the stunning backdrop of the Dhauladhar mountains.',
      topAttractions: ['HPCA Cricket Stadium', 'Kangra Art Museum', 'War Memorial', 'Gyuto Monastery'],
      thingsToDo: ['Watching a cricket match', 'Tea garden tours', 'Exploring Kangra Fort', 'Forest walks'],
      bestTimeToVisit: 'February to June & September to November', recommendedDuration: '2-3 Days', approximateBudget: '₹7,000 - ₹11,000', travelStyle: 'Culture / Leisure', difficulty: 'Easy',
      travelTips: ['Combine this trip with Mcleod Ganj for a complete experience.', 'The stadium is open to tourists on non-match days.', 'Monsoons receive extremely heavy rainfall; avoid July and August.'],
      image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd8', name: 'Mcleod Ganj', state: 'Himachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'The residence of the Dalai Lama, known as "Little Lhasa," famous for its Tibetan culture and mountain cafes.',
      fullDescription: 'Sitting high above Dharamshala, Mcleod Ganj is a globally renowned spiritual center and the headquarters of the Tibetan government-in-exile. Affectionately called "Little Lhasa," the streets are lined with maroon-robed monks, Tibetan handicraft shops, and incredible cafes serving momos and thukpa. The majestic Tsuglagkhang Complex, home to the Dalai Lama, is the beating heart of the town. Beyond spirituality, Mcleod Ganj is a trekker’s paradise, serving as the starting point for the famous Triund Trek. The town offers a unique atmosphere where spiritual seekers, global backpackers, and adventure enthusiasts converge under the Himalayan sky.',
      whyVisit: 'To immerse yourself in Tibetan Buddhist culture, enjoy world-class mountain cafes, and trek to the stunning Triund ridge.',
      topAttractions: ['Tsuglagkhang Complex', 'Bhagsu Waterfall', 'Namgyal Monastery', 'Dal Lake'],
      thingsToDo: ['Triund Trek', 'Cafe Hopping', 'Meditation and Yoga Retreats', 'Shopping for Tibetan artifacts'],
      bestTimeToVisit: 'September to June', recommendedDuration: '3-4 Days', approximateBudget: '₹8,000 - ₹13,000', travelStyle: 'Spiritual / Backpacking', difficulty: 'Moderate',
      travelTips: ['The hike to Bhagsu waterfall is steep but rewarding.', 'Triund can get very crowded; consider camping further up at Snowline.', 'Respect the silence inside the monastery premises.'],
      image: "https://images.unsplash.com/photo-1507475834979-531ebe544dbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd9', name: 'Mussoorie', state: 'Uttarakhand', category: 'MOUNTAIN',
      shortDescription: 'The "Queen of the Hills," offering sweeping views of the Doon Valley, colonial architecture, and a lively Mall Road.',
      fullDescription: 'Perched on a ridge overlooking the expansive Doon Valley, Mussoorie is one of India’s most popular and accessible hill stations. Founded by the British in the 1820s, it retains its colonial legacy through old churches, libraries, and grand summer estates. The heart of the town is the bustling Mall Road, filled with eateries, gaming arcades, and souvenir shops. For nature lovers, short walks lead to the misty cascades of Kempty Falls and the panoramic viewpoints of Lal Tibba. Mussoorie offers a nostalgic, classic Indian hill station experience wrapped in the cool embrace of the Garhwal Himalayas.',
      whyVisit: 'Ideal for a quick, classic mountain getaway featuring beautiful misty walks, colonial history, and lively street culture.',
      topAttractions: ['Kempty Falls', 'Mall Road', 'Lal Tibba', 'Gun Hill', 'Company Garden'],
      thingsToDo: ['Cable Car Ride to Gun Hill', 'Shopping on Mall Road', 'Nature walks in Landour', 'Cafe hopping'],
      bestTimeToVisit: 'March to June & September to November', recommendedDuration: '3-4 Days', approximateBudget: '₹9,000 - ₹14,000', travelStyle: 'Family / Leisure', difficulty: 'Easy',
      travelTips: ['Stay in Landour if you prefer peace over the crowded Mall Road.', 'Book hotels well in advance during summer weekends.', 'Try the famous baked goods at Landour Bakehouse.'],
      image: "https://images.unsplash.com/photo-1690702812077-cc5b8ee88b01?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd10', name: 'Auli', state: 'Uttarakhand', category: 'MOUNTAIN',
      shortDescription: 'India’s premier ski destination, featuring pristine snow slopes and towering views of the Nanda Devi peak.',
      fullDescription: 'Auli is a breathtaking alpine meadow that transforms into a world-class skiing destination during the winter months. Surrounded by ancient oak and coniferous forests, it offers some of the most spectacular, uninterrupted views of India’s highest peaks, including the majestic Nanda Devi. The town is accessible via a thrilling ropeway ride from Joshimath that glides over deep valleys and dense forests. While winter attracts skiers and snowboarders to its pristine slopes, summer reveals vibrant green meadows speckled with wildflowers, making it a perfect base for high-altitude trekking and peaceful nature retreats in the Garhwal Himalayas.',
      whyVisit: 'To experience the best skiing in India and witness unparalleled, close-up views of the Nanda Devi mountain range.',
      topAttractions: ['Auli Artificial Lake', 'Auli Ropeway', 'Gurso Bugyal', 'Chattrakund'],
      thingsToDo: ['Skiing and Snowboarding', 'Ropeway Ride', 'Trekking to Gurso Bugyal', 'Camping'],
      bestTimeToVisit: 'December to March (for snow) & May to November (for nature)', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹20,000', travelStyle: 'Adventure / Nature', difficulty: 'Moderate',
      travelTips: ['Skiing equipment can be rented locally; no need to buy.', 'The ropeway from Joshimath is the best way to reach Auli.', 'Carry heavy snow gear if visiting in winter.'],
      image: "https://images.unsplash.com/photo-1623727705498-51a6a4154384?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd11', name: 'Chopta', state: 'Uttarakhand', category: 'MOUNTAIN',
      shortDescription: 'Known as the "Mini Switzerland of Uttarakhand," a lush meadow serving as the base for the Tungnath trek.',
      fullDescription: 'Chopta is a pristine, unspoiled valley covered with dense forests of pine, deodar, and rhododendron. Unlike highly commercialized hill stations, Chopta offers a raw, off-the-grid mountain experience with rolling green meadows (bugyals) that turn pure white in winter. It is most famous as the base camp for the trek to Tungnath, the highest Shiva temple in the world, and the Chandrashila summit beyond it. The region is a designated wildlife sanctuary, offering glimpses of rare Himalayan birds and musk deer. Chopta is the ultimate destination for those seeking solitude, starry nights, and authentic mountain trekking.',
      whyVisit: 'For its untouched natural beauty, incredible stargazing, and as the starting point for the legendary Tungnath trek.',
      topAttractions: ['Tungnath Temple', 'Chandrashila Peak', 'Deoria Tal', 'Kedarnath Wildlife Sanctuary'],
      thingsToDo: ['Trekking', 'Camping', 'Bird Watching', 'Astrophotography'],
      bestTimeToVisit: 'April to November', recommendedDuration: '3-4 Days', approximateBudget: '₹7,000 - ₹11,000', travelStyle: 'Adventure / Backpacking', difficulty: 'Moderate',
      travelTips: ['Electricity is limited; carry power banks.', 'Accommodation consists mainly of tents and basic guesthouses.', 'Trekking in winter requires snow boots and a guide.'],
      image: "https://images.unsplash.com/photo-1699214101672-610e95f1e8d3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd12', name: 'Munsiyari', state: 'Uttarakhand', category: 'MOUNTAIN',
      shortDescription: 'A remote, breathtaking hamlet in the Kumaon region offering majestic views of the Panchachuli peaks.',
      fullDescription: 'Tucked away in the remote corners of the Pithoragarh district, Munsiyari is a well-kept secret of the Kumaon Himalayas. The town sits at the base of the great Himalayan range and is famous for offering dramatic, in-your-face views of the Panchachuli peaks—a group of five snow-capped mountains that glow golden during sunset. Munsiyari translates to "place with snow," and it serves as the base for highly challenging treks like the Milam and Ralam Glaciers. Surrounded by pristine waterfalls, dense forests, and high-altitude flora, it is a paradise for serious trekkers, photographers, and nature purists.',
      whyVisit: 'To witness the awe-inspiring Panchachuli peaks and experience the untouched, raw wilderness of the deep Kumaon region.',
      topAttractions: ['Panchachuli Peaks Viewpoint', 'Birthi Falls', 'Khaliya Top', 'Tribal Heritage Museum'],
      thingsToDo: ['Trekking to Khaliya Top', 'Glacier Trekking', 'Nature Photography', 'Village walks'],
      bestTimeToVisit: 'March to June & September to October', recommendedDuration: '4-5 Days', approximateBudget: '₹9,000 - ₹14,000', travelStyle: 'Offbeat / Adventure', difficulty: 'Difficult',
      travelTips: ['The drive to Munsiyari is long and tiring; break the journey if needed.', 'Carry sufficient cash and essential medicines.', 'A permit is required for the Milam Glacier trek.'],
      image: "https://images.unsplash.com/photo-1683700916507-93d49889bacc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd13', name: 'Lansdowne', state: 'Uttarakhand', category: 'MOUNTAIN',
      shortDescription: 'A quiet, well-maintained cantonment town known for its pine forests, colonial history, and serene atmosphere.',
      fullDescription: 'Lansdowne is one of the quietest and most unspoiled hill stations in India, maintained by the Garhwal Rifles of the Indian Army. Named after Lord Lansdowne, the former Viceroy of India, the town features impeccably clean streets, old colonial churches, and dense forests of blue pine and oak. Unlike bustling tourist hubs, Lansdowne is all about slow living. Visitors can enjoy peaceful boat rides on Bhulla Lake, panoramic Himalayan views from Tip-in-Top point, and long, undisturbed walks through misty woodland trails. It is the perfect weekend getaway for those looking to read, relax, and rejuvenate.',
      whyVisit: 'For a highly peaceful, uncrowded, and meticulously clean mountain retreat surrounded by rich military history and pine forests.',
      topAttractions: ['Tip-in-Top Point', 'Bhulla Lake', 'St. John’s Church', 'Darwan Singh Regimental Museum'],
      thingsToDo: ['Nature Walks', 'Boating', 'Bird Watching', 'Visiting the Army Museum'],
      bestTimeToVisit: 'March to June & September to November', recommendedDuration: '2-3 Days', approximateBudget: '₹7,000 - ₹10,000', travelStyle: 'Relaxation / Family', difficulty: 'Easy',
      travelTips: ['Accommodation is limited; book well in advance.', 'Since it is an army cantonment, strict rules regarding cleanliness and noise apply.', 'Great for short weekend trips from Delhi.'],
      image: "https://images.unsplash.com/photo-1606202801044-284067800cdf?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd14', name: 'Ranikhet', state: 'Uttarakhand', category: 'MOUNTAIN',
      shortDescription: 'The "Queen’s Meadow," a picturesque cantonment town famous for its golf course and majestic Himalayan views.',
      fullDescription: 'Ranikhet, which translates to "Queen\'s Meadow," is a lush, sprawling hill station in the Almora district. Developed by the British as a summer retreat and army cantonment, it remains beautifully preserved and fiercely protected from over-commercialization. The town is famous for the Upat Golf Course, one of the highest 9-hole courses in Asia, offering sweeping views of the Himalayan ranges, including Nanda Devi. Ranikhet is characterized by undulating green meadows, ancient Jhula Devi temple, and thick forests of pine and deodar. It is an idyllic destination for peaceful retreats, gentle hikes, and witnessing spectacular mountain sunrises.',
      whyVisit: 'To enjoy a serene, uncommercialized hill station with rolling golf courses, ancient temples, and vast Himalayan panoramas.',
      topAttractions: ['Upat Golf Course', 'Jhula Devi Temple', 'Chaubatia Gardens', 'Majhkhali'],
      thingsToDo: ['Golfing', 'Orchard Walks', 'Temple Hopping', 'Picnicking in the meadows'],
      bestTimeToVisit: 'March to July & September to November', recommendedDuration: '3-4 Days', approximateBudget: '₹8,000 - ₹12,000', travelStyle: 'Leisure / Family', difficulty: 'Easy',
      travelTips: ['Try the fresh fruit juices and jams at Chaubatia Gardens.', 'The town sleeps early; plan your dinners accordingly.', 'Respect the army cantonment regulations.'],
      image: "https://images.unsplash.com/photo-1599578326727-8163b8360ca6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd15', name: 'Nainital', state: 'Uttarakhand', category: 'MOUNTAIN',
      shortDescription: 'A classic lake city set in a steep valley, famous for its emerald Naini Lake and vibrant Mall Road.',
      fullDescription: 'Set in a steep, forested valley around the striking, eye-shaped Naini Lake, Nainital is the crown jewel of the Kumaon region. This bustling hill station was a favored summer retreat for the British, and its colonial past is still visible in its architecture, prestigious schools, and boat clubs. The town revolves around the lake, where colorful paddle boats dot the emerald waters. Visitors can ride the aerial ropeway to Snow View Point, shop for wax candles and local handicrafts on Mall Road, or hike up to Naina Peak for breathtaking views of the great Himalayas. It is vibrant, romantic, and endlessly charming.',
      whyVisit: 'The ultimate quintessential Indian hill station experience, featuring boating, lakeside promenades, and stunning viewpoint hikes.',
      topAttractions: ['Naini Lake', 'Naina Devi Temple', 'Mall Road', 'Snow View Point', 'Eco Cave Gardens'],
      thingsToDo: ['Boating', 'Cable Car Ride', 'Shopping', 'Trekking to Tiffin Top'],
      bestTimeToVisit: 'March to June & September to December', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Family / Romance', difficulty: 'Easy',
      travelTips: ['Mall road is closed to vehicles in the evening; be prepared to walk.', 'Parking is very limited; choose a hotel with dedicated parking.', 'Try the local bal mithai (sweet).'],
      image: "https://images.unsplash.com/photo-1712201649803-ab1b13dae600?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd16', name: 'Darjeeling', state: 'West Bengal', category: 'MOUNTAIN',
      shortDescription: 'The "Queen of the Himalayas," world-renowned for its tea estates, the Toy Train, and views of Kangchenjunga.',
      fullDescription: 'Clinging to a steep mountain ridge, Darjeeling is world-famous for producing the "Champagne of Teas." The town is draped in sprawling, emerald-green tea estates and offers jaw-dropping views of Mount Kangchenjunga, the world’s third-highest peak. The colonial-era Darjeeling Himalayan Railway, a UNESCO World Heritage site affectionately known as the "Toy Train," chugs its way through the narrow, misty streets. Visitors wake up before dawn to witness the legendary sunrise over the Himalayas from Tiger Hill, explore Buddhist monasteries, and sip world-class tea in heritage cafes. It is a culturally rich, deeply nostalgic mountain city.',
      whyVisit: 'To sip the world’s finest tea, ride a historic steam locomotive, and witness a legendary sunrise over Mount Kangchenjunga.',
      topAttractions: ['Tiger Hill', 'Darjeeling Himalayan Railway', 'Batasia Loop', 'Padmaja Naidu Himalayan Zoological Park', 'Happy Valley Tea Estate'],
      thingsToDo: ['Toy Train Ride', 'Tea Tasting', 'Watching the Sunrise', 'Visiting the Himalayan Mountaineering Institute'],
      bestTimeToVisit: 'March to May & October to December', recommendedDuration: '4-5 Days', approximateBudget: '₹12,000 - ₹18,000', travelStyle: 'Culture / Leisure', difficulty: 'Easy',
      travelTips: ['Tiger Hill requires an extremely early start (around 3:30 AM).', 'Book the Toy Train joyride weeks in advance.', 'Pack an umbrella; rain is unpredictable.'],
      image: "https://images.unsplash.com/photo-1617478993559-75ceef413f4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd17', name: 'Kalimpong', state: 'West Bengal', category: 'MOUNTAIN',
      shortDescription: 'A tranquil hill station known for its Buddhist monasteries, colonial architecture, and vibrant flower nurseries.',
      fullDescription: 'Perched on a ridge overlooking the Teesta River, Kalimpong is a quieter, more relaxed alternative to its bustling neighbor, Darjeeling. Historically a crucial trading post between Tibet and India, the town boasts a fascinating mix of Bhutanese, Tibetan, and Nepalese cultures. Kalimpong is famous for its educational institutions, colonial-era bungalows, and sprawling commercial flower nurseries that export exotic orchids worldwide. Visitors can explore ancient Buddhist monasteries like Zang Dhok Palri Phodang, enjoy panoramic views from Deolo Hill, and wander through the bustling local bazaars. It is a town that invites slow exploration and peaceful contemplation.',
      whyVisit: 'For a relaxed mountain vibe, stunning orchid nurseries, and a rich blend of Tibetan and colonial history without the crowds.',
      topAttractions: ['Deolo Hill', 'Zang Dhok Palri Phodang', 'Pine View Nursery', 'MacFarlane Memorial Church'],
      thingsToDo: ['Paragliding from Deolo', 'Visiting Flower Nurseries', 'Monastery Hopping', 'Shopping for local cheese and lollipops'],
      bestTimeToVisit: 'March to May & September to December', recommendedDuration: '2-3 Days', approximateBudget: '₹8,000 - ₹12,000', travelStyle: 'Leisure / Relax', difficulty: 'Easy',
      travelTips: ['Try the locally made Kalimpong cheese and lollipops.', 'A great stopover destination if you are traveling to Sikkim.', 'Deolo Hill offers excellent picnic spots.'],
      image: "https://images.unsplash.com/photo-1588494149782-7b8327080716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGthbGltcG9uZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 'd18', name: 'Gangtok', state: 'Sikkim', category: 'MOUNTAIN',
      shortDescription: 'The impeccably clean and vibrant capital of Sikkim, blending modern urban culture with deep Buddhist traditions.',
      fullDescription: 'Draped over a steep mountain ridge, Gangtok is a remarkably clean, modern, and highly organized hill city. As the capital of Sikkim, it serves as the perfect base for exploring the state’s pristine alpine lakes and high-altitude passes. The city itself is a fascinating blend of traditional Tibetan Buddhist culture and contemporary urban life. The pedestrian-only MG Marg is the heart of Gangtok, lined with cafes, bars, and boutiques. Beyond the city center, visitors can find peace in massive monastic complexes like Rumtek, ride the cable car for panoramic views, and enjoy the majestic backdrop of Mount Kangchenjunga.',
      whyVisit: 'To experience a model, litter-free Himalayan city with a vibrant cafe culture, excellent shopping, and deep Buddhist heritage.',
      topAttractions: ['MG Marg', 'Rumtek Monastery', 'Tsomgo Lake', 'Nathu La Pass', 'Ganesh Tok'],
      thingsToDo: ['Walking on MG Marg', 'Cable Car Ride', 'Day trip to Nathu La', 'Trying authentic Tibetan food'],
      bestTimeToVisit: 'September to June', recommendedDuration: '4-5 Days', approximateBudget: '₹12,000 - ₹20,000', travelStyle: 'Culture / Adventure', difficulty: 'Moderate',
      travelTips: ['Nathu La Pass requires a special permit and is closed on Mondays and Tuesdays.', 'Strict anti-littering and anti-smoking laws are enforced on MG Marg.', 'Taxis operate on a strict syndicate system.'],
      image: "https://images.unsplash.com/photo-1615966192539-f1731963b19a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd19', name: 'Pelling', state: 'Sikkim', category: 'MOUNTAIN',
      shortDescription: 'A serene town offering the closest and most spectacular views of the Kangchenjunga mountain range.',
      fullDescription: 'Located in West Sikkim, Pelling is a small, quiet town whose main claim to fame is its unparalleled, incredibly close-up view of the Kangchenjunga massif. On a clear day, the snow-capped peaks feel close enough to touch. Beyond the views, Pelling is deeply rooted in history and spirituality. It is home to the ancient Pemayangtse Monastery and the atmospheric ruins of Rabdentse, the former capital of Sikkim. Recent additions like the spectacular glass-bottomed Sky Walk at the Chenrezig statue have added a modern thrill. Pelling is a place of profound peace, cascading waterfalls, and majestic mountain vistas.',
      whyVisit: 'For the absolute best, unobstructed views of Mount Kangchenjunga, ancient monastery visits, and the thrilling glass Sky Walk.',
      topAttractions: ['Pemayangtse Monastery', 'Rabdentse Ruins', 'Pelling Sky Walk', 'Khecheopalri Lake', 'Kanchenjunga Falls'],
      thingsToDo: ['Walking the Glass Sky Walk', 'Exploring ancient ruins', 'Hiking to waterfalls', 'Photography'],
      bestTimeToVisit: 'September to May', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Nature / Spiritual', difficulty: 'Easy',
      travelTips: ['Wake up early for the best mountain views before the clouds roll in.', 'The roads to Pelling can be bumpy; travel during daylight.', 'Khecheopalri Lake is highly sacred; do not disturb the water.'],
      image: "https://images.unsplash.com/photo-1721884487052-8fb79415772c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 'd20', name: 'Tawang', state: 'Arunachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'A spiritually profound, high-altitude town famous for the massive Tawang Monastery and dramatic alpine passes.',
      fullDescription: 'Perched at an elevation of 10,000 feet near the Bhutanese and Tibetan borders, Tawang is a place of immense spiritual and natural grandeur. It is home to the magnificent Tawang Monastery, the largest Buddhist monastery in India and the second largest in the world. The journey to Tawang is an adventure in itself, crossing the snow-bound Sela Pass. The landscape is dotted with high-altitude glacial lakes, prayer flags fluttering in the cold wind, and memorials honoring Indian soldiers. Tawang offers a deeply moving blend of Monpa culture, profound Tibetan Buddhism, and some of the most dramatic scenery in the Northeast.',
      whyVisit: 'To witness the massive Tawang Monastery, cross the legendary Sela Pass, and explore the raw, untouched beauty of Arunachal Pradesh.',
      topAttractions: ['Tawang Monastery', 'Sela Pass', 'Madhuri Lake (Shunga Tser)', 'Tawang War Memorial', 'Nuranang Falls'],
      thingsToDo: ['Monastery visits', 'High-altitude road tripping', 'Paying respects at the War Memorial', 'Trying Monpa cuisine'],
      bestTimeToVisit: 'March to October', recommendedDuration: '5-7 Days', approximateBudget: '₹15,000 - ₹25,000', travelStyle: 'Adventure / Spiritual', difficulty: 'Moderate',
      travelTips: ['An Inner Line Permit (ILP) is mandatory for all Indian tourists.', 'Acclimatization is necessary; do not rush the ascent.', 'Winters are brutally cold and roads may be blocked by snow.'],
      image: "https://images.unsplash.com/photo-1626761627604-f27d98885f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF3YW5nfGVufDB8fDB8fHww"
    },
    {
      id: 'd21', name: 'Ziro', state: 'Arunachal Pradesh', category: 'MOUNTAIN',
      shortDescription: 'A picture-perfect valley characterized by lush pine-clad hills, rice terraces, and the unique Apatani tribal culture.',
      fullDescription: 'Ziro Valley is a cultural and ecological marvel hidden in the hills of Arunachal Pradesh. It is the homeland of the Apatani tribe, famous for their sustainable farming practices, unique facial tattoos, and massive nose plugs. The valley is a visual masterpiece, featuring flat, expansive rice fields interwoven with intricate water channels, surrounded by rolling hills covered in dense blue pine forests. Ziro is also globally recognized for hosting the Ziro Festival of Music, an eco-friendly outdoor music festival that draws artists and travelers from around the world. It is a destination for slow travel, cultural immersion, and finding harmony with nature.',
      whyVisit: 'To experience the fascinating Apatani tribal culture, stunning rice terraces, and a highly peaceful, off-the-grid lifestyle.',
      topAttractions: ['Apatani Villages (Hong, Hija)', 'Tarin Fish Farm', 'Meghna Cave Temple', 'Ziro Puto'],
      thingsToDo: ['Village walks and tribal interactions', 'Attending the Ziro Music Festival (September)', 'Trekking in the pine forests', 'Photography'],
      bestTimeToVisit: 'March to October (September for the Music Festival)', recommendedDuration: '3-5 Days', approximateBudget: '₹10,000 - ₹16,000', travelStyle: 'Culture / Offbeat', difficulty: 'Easy',
      travelTips: ['An Inner Line Permit (ILP) is mandatory.', 'Always ask for permission before photographing tribal elders.', 'Accommodation during the music festival must be booked months in advance.'],
      image: "https://images.unsplash.com/photo-1641821917194-6760d7b28190?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd22', name: 'Shillong', state: 'Meghalaya', category: 'MOUNTAIN',
      shortDescription: 'The "Scotland of the East," a vibrant city known for its rock music culture, cafes, and rolling green hills.',
      fullDescription: 'Shillong, the capital of Meghalaya, is a dynamic and youthful city nestled among rolling hills and pine forests, earning it the moniker "Scotland of the East." It is celebrated across India for its deep-rooted passion for music, particularly rock and indie genres, with live music echoing from local cafes almost every evening. The city serves as the cosmopolitan gateway to the rest of the state, featuring colonial-era architecture, bustling markets, and the beautiful Ward’s Lake. Beyond the urban charm, Shillong is surrounded by stunning waterfalls, viewpoint peaks, and living root bridges in the deeper valleys, making it a perfect blend of culture and nature.',
      whyVisit: 'For its incredible live music scene, charming cafes, and as the perfect base camp to explore the waterfalls of Meghalaya.',
      topAttractions: ['Umiam Lake', 'Elephant Falls', 'Shillong Peak', 'Ward’s Lake', 'Don Bosco Museum'],
      thingsToDo: ['Boating on Umiam Lake', 'Cafe hopping and live music', 'Shopping at Police Bazar', 'Museum tours'],
      bestTimeToVisit: 'September to May', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Culture / Leisure', difficulty: 'Easy',
      travelTips: ['Traffic in Shillong can be heavily congested; plan extra travel time.', 'Police Bazar is the best place to find local Khasi food and street shopping.', 'Carry an umbrella regardless of the season.'],
      image: "https://images.unsplash.com/photo-1609276804051-8c5e906cc430?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpbGxvbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 'd23', name: 'Cherrapunji', state: 'Meghalaya', category: 'MOUNTAIN',
      shortDescription: 'Historically the wettest place on earth, famous for dramatic waterfalls, deep caves, and Living Root Bridges.',
      fullDescription: 'Locally known as Sohra, Cherrapunji is a landscape carved by extreme rainfall. This high-altitude town sits on the edge of the Khasi Hills, overlooking the plains of Bangladesh. The heavy monsoons have created a dramatic topography featuring some of the tallest plunge waterfalls in India, such as the spectacular Nohkalikai Falls, and an extensive network of deep limestone caves. The region’s crowning jewels, however, are the Living Root Bridges—bio-engineering marvels where local Khasi tribes have trained the roots of rubber trees to form sturdy bridges across raging rivers. It is a raw, intensely green, and deeply adventurous destination.',
      whyVisit: 'To trek to the astonishing Double Decker Living Root Bridge, explore massive limestone caves, and witness towering waterfalls.',
      topAttractions: ['Nohkalikai Falls', 'Double Decker Living Root Bridge (Nongriat)', 'Mawsmai Cave', 'Seven Sisters Falls'],
      thingsToDo: ['Trekking to Nongriat', 'Caving', 'Waterfall hopping', 'Ziplining at Mawkdok Dympep Valley'],
      bestTimeToVisit: 'October to May', recommendedDuration: '3-4 Days', approximateBudget: '₹9,000 - ₹14,000', travelStyle: 'Adventure / Nature', difficulty: 'Moderate',
      travelTips: ['The trek to the Double Decker bridge involves descending and climbing over 3,000 steep stairs.', 'Monsoon visits are beautiful but restrict outdoor activities due to heavy rain.', 'Hire a guide for extensive caving.'],
      image: "https://images.unsplash.com/photo-1735567065045-97ba386867ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd24', name: 'Gulmarg', state: 'Jammu & Kashmir', category: 'MOUNTAIN',
      shortDescription: 'A world-class ski resort and alpine meadow featuring the famous Gondola ride up to Mount Apharwat.',
      fullDescription: 'Gulmarg, translating to "Meadow of Flowers," is a cup-shaped valley in the Pir Panjal range that transforms into India’s premier winter sports destination. Covered in deep, powdery snow from December to March, it attracts skiers and snowboarders from around the globe. The main attraction is the Gulmarg Gondola, one of the highest cable cars in the world, which ferries visitors to the dizzying heights of Mount Apharwat at nearly 14,000 feet. In the summer, the snow melts to reveal lush green meadows dotted with vibrant wildflowers and the highest green golf course in the world, offering spectacular trekking and photography opportunities.',
      whyVisit: 'For the thrill of the high-altitude Gondola ride, world-class winter skiing, and some of the most romantic snowscapes in India.',
      topAttractions: ['Gulmarg Gondola', 'Apharwat Peak', 'Alpather Lake', 'Gulmarg Golf Course', 'Strawberry Valley'],
      thingsToDo: ['Skiing and Snowboarding', 'Gondola Ride', 'Trekking to Alpather Lake', 'Snowmobiling'],
      bestTimeToVisit: 'December to March (for snow) & May to October (for nature)', recommendedDuration: '3-4 Days', approximateBudget: '₹15,000 - ₹25,000', travelStyle: 'Adventure / Romance', difficulty: 'Moderate',
      travelTips: ['Book Gondola tickets online well in advance, as they sell out daily.', 'Phase 2 of the Gondola reaches extreme altitudes; beware of altitude sickness.', 'Rent proper snow boots and coats locally.'],
      image: "https://images.unsplash.com/photo-1706353222367-d0b0fb602f07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd25', name: 'Pahalgam', state: 'Jammu & Kashmir', category: 'MOUNTAIN',
      shortDescription: 'The "Valley of Shepherds," a breathtakingly beautiful town set along the roaring Lidder River.',
      fullDescription: 'Situated at the confluence of the Lidder River and streams flowing from the Sheshnag Lake, Pahalgam is the quintessential Kashmiri paradise. It is characterized by dense pine forests, crystal-clear rushing rivers, and expansive green meadows surrounded by snow-capped peaks. Pahalgam is famous as the starting point for the annual Amarnath Yatra pilgrimage, but it is also a premier destination for leisure and adventure. Visitors can take pony rides through the beautiful Betaab Valley, named after a Bollywood movie, or enjoy white-water rafting in the Lidder River. It offers a deeply tranquil, postcard-perfect Himalayan escape.',
      whyVisit: 'To experience the idyllic, untouched beauty of Kashmir’s valleys, enjoy riverside picnics, and take scenic pony rides.',
      topAttractions: ['Betaab Valley', 'Aru Valley', 'Baisaran (Mini Switzerland)', 'Lidder River', 'Chandanwari'],
      thingsToDo: ['Pony Rides', 'River Rafting', 'Trekking', 'Trout Fishing', 'Picnicking'],
      bestTimeToVisit: 'March to November', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹18,000', travelStyle: 'Leisure / Family', difficulty: 'Easy',
      travelTips: ['Bargain hard when hiring ponies for excursions.', 'Private outside taxis are often not allowed for local sightseeing; you must hire a local union taxi.', 'Aru Valley is less crowded and more scenic than Betaab.'],
      image: "https://images.unsplash.com/photo-1636000412010-0df8743754a2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd26', name: 'Sonamarg', state: 'Jammu & Kashmir', category: 'MOUNTAIN',
      shortDescription: 'The "Meadow of Gold," acting as the gateway to Ladakh and famous for the spectacular Thajiwas Glacier.',
      fullDescription: 'Sonamarg is a mesmerizing alpine valley situated at an altitude of 9,000 feet, dominated by massive glaciers and snow-capped peaks. The town acts as the final major Kashmiri settlement before the treacherous Zoji La pass leads into the arid region of Ladakh. The defining feature of Sonamarg is its proximity to the Thajiwas Glacier, which remains covered in snow virtually year-round. Visitors can hike or take a pony ride to the glacier, where sledding and snow activities are popular even in the height of summer. The region is also the starting point for the spectacular Great Lakes Trek, making it a hub for serious trekkers.',
      whyVisit: 'To touch the snow at the Thajiwas Glacier in the middle of summer and witness the dramatic transition of landscapes toward Ladakh.',
      topAttractions: ['Thajiwas Glacier', 'Zoji La Pass', 'Vishansar Lake', 'Sindh River'],
      thingsToDo: ['Trekking to the Glacier', 'Sledding', 'Trout Fishing in the Sindh River', 'Camping'],
      bestTimeToVisit: 'April to October', recommendedDuration: '2-3 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Adventure / Nature', difficulty: 'Moderate',
      travelTips: ['The road to Sonamarg is closed during deep winter due to heavy snowfall.', 'Wear sturdy trekking shoes if you plan to walk to Thajiwas Glacier instead of taking a pony.', 'Start your journey to Zoji La very early in the morning to avoid traffic.'],
      image: "https://images.unsplash.com/photo-1666513303924-8dd2ca7606ff?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd27', name: 'Leh', state: 'Ladakh', category: 'MOUNTAIN',
      shortDescription: 'The high-altitude capital of Ladakh, a land of barren mountains, ancient Tibetan monasteries, and deep blue skies.',
      fullDescription: 'Leh is a high-desert city in the Himalayas that feels entirely detached from the rest of India. Sitting at over 11,000 feet, the landscape is defined by stark, barren, multi-colored mountains, brilliant blue skies, and the mighty Indus River. The city is crowned by the imposing, nine-story Leh Palace and the Shanti Stupa, which offers panoramic views of the entire valley. Leh is a hub of Tibetan Buddhist culture, with ancient, whitewashed monasteries clinging to rocky cliffs just outside the city. It serves as the ultimate basecamp for epic motorcycle journeys, high-altitude trekking, and exploring the wider, extreme wilderness of the Ladakh region.',
      whyVisit: 'For an otherworldly landscape, profound Tibetan Buddhist culture, and the ultimate high-altitude adventure experience.',
      topAttractions: ['Leh Palace', 'Shanti Stupa', 'Thiksey Monastery', 'Hemis Monastery', 'Magnetic Hill'],
      thingsToDo: ['Monastery tours', 'Motorcycling', 'Cafe hopping in Leh market', 'White water rafting on the Zanskar River'],
      bestTimeToVisit: 'May to September', recommendedDuration: '5-7 Days', approximateBudget: '₹15,000 - ₹25,000', travelStyle: 'Adventure / Culture', difficulty: 'Moderate',
      travelTips: ['Strict acclimatization is mandatory; rest completely for the first 48 hours to avoid Acute Mountain Sickness (AMS).', 'Drink plenty of water and avoid alcohol upon arrival.', 'Postpaid connections of major networks work best.'],
      image: "https://images.unsplash.com/photo-1600242466690-c1c04f081762?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd28', name: 'Nubra Valley', state: 'Ladakh', category: 'MOUNTAIN',
      shortDescription: 'A high-altitude desert known for the double-humped Bactrian camels and the perilous journey via Khardung La.',
      fullDescription: 'Separated from Leh by the towering Khardung La pass—one of the highest motorable roads in the world—Nubra Valley is a vast, starkly beautiful landscape where the Shyok and Nubra rivers meet. The valley is famous for its unique cold desert sand dunes at Hunder, where visitors can ride the rare double-humped Bactrian camels, a remnant of the ancient Silk Route trade. Overlooking the valley is the massive, 32-meter-tall statue of Maitreya Buddha at the Diskit Monastery. The landscape is a surreal mix of grey sand, green oasis villages, and snow-capped peaks, offering an unforgettable, rugged adventure.',
      whyVisit: 'To cross one of the world’s highest motorable passes and ride a double-humped camel in a high-altitude cold desert.',
      topAttractions: ['Khardung La Pass', 'Hunder Sand Dunes', 'Diskit Monastery', 'Turtuk Village', 'Panamik Hot Springs'],
      thingsToDo: ['Bactrian Camel Safari', 'Motorcycling', 'ATV Rides on Sand Dunes', 'Exploring the Balti culture in Turtuk'],
      bestTimeToVisit: 'May to September', recommendedDuration: '2-3 Days', approximateBudget: '₹12,000 - ₹18,000', travelStyle: 'Adventure / Offbeat', difficulty: 'Moderate',
      travelTips: ['Do not spend more than 20 minutes at Khardung La top due to extreme thin air.', 'An Inner Line Permit (ILP) is required.', 'Turtuk is highly recommended for a unique cultural shift.'],
      image: "https://images.unsplash.com/photo-1714637469792-d19b0c8be55e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd29', name: 'Pangong Lake', state: 'Ladakh', category: 'MOUNTAIN',
      shortDescription: 'A mesmerizing, high-altitude endorheic lake famous for its brilliant, ever-changing shades of blue.',
      fullDescription: 'Pangong Tso is a breathtaking endorheic lake situated at an astonishing altitude of 14,270 feet. Spanning the border of India and Tibet, the lake is famous for its crystal-clear, hyper-saline waters that dramatically change color throughout the day—shifting from deep azure to light blue, green, and even purple as the sun moves. Surrounded by stark, barren, and rugged mountains, the contrast of the bright blue water against the dry earth is a photographer’s dream. The journey to the lake involves crossing the high Chang La pass. Spending a night in a camp by the lake, under a blanket of stars, is an iconic Himalayan experience.',
      whyVisit: 'To witness the surreal, color-changing waters of one of the highest saltwater lakes in the world, surrounded by barren peaks.',
      topAttractions: ['Pangong Tso', 'Chang La Pass', 'Spangmik Village', 'Shooting Point (3 Idiots fame)'],
      thingsToDo: ['Lakeside Camping', 'Photography', 'Stargazing', 'Watching the sunrise over the lake'],
      bestTimeToVisit: 'May to September', recommendedDuration: '1-2 Days', approximateBudget: '₹8,000 - ₹12,000', travelStyle: 'Adventure / Nature', difficulty: 'Moderate',
      travelTips: ['Nights by the lake are freezing, even in summer; pack heavy thermals.', 'Do not pollute the lake; it has a very fragile ecosystem.', 'Oxygen levels drop significantly at night.'],
      image: "https://images.unsplash.com/photo-1593118845043-359e5f628214?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // 🥾 TREKS / ADVENTURE
    {
      id: 'd30', name: 'Sandakphu Trek', state: 'West Bengal', category: 'TREK',
      shortDescription: 'The only trek in India offering unobstructed panoramic views of four of the world’s five highest peaks, including Everest.',
      fullDescription: 'Sandakphu is the highest peak in West Bengal. This legendary trek weaves through the Singalila National Park, famous for its dense forests of blooming rhododendrons and magnolias in the spring. The trail zigzags along the Indo-Nepal border, allowing trekkers to experience unique cross-cultural villages. The ultimate reward of this trek is the view from the summit: a sweeping, 180-degree panorama featuring Mount Everest, Kangchenjunga (the "Sleeping Buddha"), Lhotse, and Makalu. It is a culturally rich, visually stunning trek that relies on charming teahouses rather than tents, making it an excellent introduction to multi-day Himalayan trekking.',
      whyVisit: 'For the rare opportunity to see Mount Everest and Kangchenjunga simultaneously from a relatively accessible trail.',
      topAttractions: ['View of the Sleeping Buddha', 'Singalila National Park', 'Tumling', 'Phalut'],
      thingsToDo: ['Trekking', 'Wildlife Spotting (Red Panda if lucky)', 'Teahouse hopping', 'Photography'],
      bestTimeToVisit: 'April to May & October to early December', recommendedDuration: '6-7 Days', approximateBudget: '₹9,000 - ₹14,000', travelStyle: 'Adventure Trek', difficulty: 'Moderate',
      travelTips: ['Carry an original ID as the trail enters Nepal.', 'The wind on the ridge is notoriously fierce; a good windcheater is essential.', 'Stay in a teahouse to experience local Sherpa hospitality.'],
      image: "https://images.unsplash.com/photo-1705744145760-c2ba12abb3a1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd31', name: 'Kedarkantha Trek', state: 'Uttarakhand', category: 'TREK',
      shortDescription: 'India’s most popular winter trek, featuring beautiful pine forests, snowy trails, and a thrilling summit climb.',
      fullDescription: 'Kedarkantha is the quintessential winter trek in the Indian Himalayas. Starting from the charming village of Sankri, the trail winds through dense forests of pine, oak, and maple, which look magical when blanketed in snow. The campsites, particularly Juda Ka Talab, a frozen high-altitude lake, are exceptionally beautiful. The highlight is the summit push, usually done before dawn. Reaching the Kedarkantha peak at 12,500 feet offers a magnificent 360-degree view of the mighty Garhwal ranges, including Swargarohini and Bandarpoonch. Because the ascent is gradual but rewarding, it is highly recommended for beginners looking for their first snow-trekking experience.',
      whyVisit: 'The perfect introductory winter trek offering deep snow, beautiful forest trails, and an immensely rewarding summit climb.',
      topAttractions: ['Kedarkantha Summit', 'Juda Ka Talab', 'Sankri Village', 'Views of Swargarohini Peak'],
      thingsToDo: ['Snow Trekking', 'Camping on snow', 'Night Photography', 'Summit climbing'],
      bestTimeToVisit: 'December to April (for snow)', recommendedDuration: '5-6 Days', approximateBudget: '₹8,000 - ₹12,000', travelStyle: 'Adventure Trek', difficulty: 'Moderate',
      travelTips: ['Layering is crucial; temperatures drop well below freezing at night.', 'Microspikes and gaiters are usually provided by trek operators but are mandatory.', 'Hydrate constantly, even if you do not feel thirsty in the cold.'],
      image: "https://images.unsplash.com/photo-1669807935395-3bc80395a951?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd32', name: 'Kedarnath Trek', state: 'Uttarakhand', category: 'TREK',
      shortDescription: 'A deeply spiritual and physically demanding pilgrimage trek to one of the holiest Shiva temples in the Himalayas.',
      fullDescription: 'The Kedarnath Trek is as much a spiritual journey as it is a physical challenge. Starting from Gaurikund, the 16-kilometer steep uphill trail runs alongside the roaring Mandakini River, surrounded by towering, snow-capped peaks. The path is shared by thousands of devoted pilgrims, chanting hymns, which creates an incredibly powerful and emotional atmosphere. The destination is the ancient Kedarnath Temple, perched at 11,755 feet against the dramatic backdrop of the Kedarnath peak. Whether undertaken for religious reasons or for the sheer love of the mountains, reaching the temple after the grueling climb provides a profound sense of achievement and peace.',
      whyVisit: 'To experience the intense devotion of the Char Dham yatra and witness the majestic Kedarnath temple against snow-capped peaks.',
      topAttractions: ['Kedarnath Temple', 'Bhairav Temple', 'Chorabari Tal (Gandhi Sarovar)', 'Mandakini River'],
      thingsToDo: ['Pilgrimage Trekking', 'Attending the evening Aarti', 'Helicopter ride (optional)'],
      bestTimeToVisit: 'May to June & September to October', recommendedDuration: '3-4 Days', approximateBudget: '₹7,000 - ₹15,000', travelStyle: 'Spiritual / Trek', difficulty: 'Moderate',
      travelTips: ['The weather is highly unpredictable; carry heavy rain gear.', 'Start the trek extremely early in the morning to avoid the midday sun and afternoon rain.', 'Ponies and palanquins are available for those unable to walk.'],
      image: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd33', name: 'Valley of Flowers Trek', state: 'Uttarakhand', category: 'TREK',
      shortDescription: 'A UNESCO World Heritage trek that leads into a hidden Himalayan valley bursting with millions of alpine flowers.',
      fullDescription: 'The Valley of Flowers is a legendary monsoon trek that feels like stepping into a fairy tale. Hidden deep in the Garhwal Himalayas, this UNESCO World Heritage site is completely snowbound for most of the year. However, during the monsoon, the snow melts to reveal a lush valley floor carpeted with millions of vibrant alpine flowers, including blue poppies, orchids, and primulas. The trek starts from Govindghat and follows the Pushpawati River. The valley is also a haven for rare wildlife like the Himalayan blue sheep. It is a rare trek where rain is not a deterrent, but the very reason to visit.',
      whyVisit: 'To witness a rare, fleeting natural phenomenon where a high-altitude valley explodes into a carpet of vibrant colors.',
      topAttractions: ['Valley of Flowers National Park', 'Hemkund Sahib', 'Pushpawati River', 'Ghangaria Village'],
      thingsToDo: ['Botanical photography', 'Trekking', 'Pilgrimage to Hemkund Sahib', 'Nature walks'],
      bestTimeToVisit: 'July to early September', recommendedDuration: '5-6 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Nature Trek', difficulty: 'Moderate',
      travelTips: ['Excellent quality rain gear (poncho, waterproof boots, bag cover) is absolutely mandatory.', 'Camping is not allowed inside the valley; you must return to Ghangaria before dark.', 'Combine this with the steep hike to Hemkund Sahib.'],
      image: "https://images.unsplash.com/photo-1643042281037-e86e7a0568cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd34', name: 'Tungnath-Chandrashila Trek', state: 'Uttarakhand', category: 'TREK',
      shortDescription: 'A highly rewarding, short trek leading to the world’s highest Shiva temple and a stunning 360-degree summit view.',
      fullDescription: 'Starting from the beautiful meadows of Chopta, this trek is famous for offering maximum rewards for relatively moderate effort. The well-paved trail winds through rich rhododendron forests and alpine meadows, offering constant views of the Himalayas. The first major milestone is Tungnath, the highest Shiva temple in the world, sitting at over 12,000 feet. From the temple, a steep, thrilling one-kilometer climb leads to the Chandrashila summit. At the top, trekkers are greeted with an awe-inspiring 360-degree panorama of Garhwal giants like Nanda Devi, Trishul, and Chaukhamba. It is an excellent weekend trek for beginners and photography enthusiasts.',
      whyVisit: 'To visit the world’s highest Shiva temple and achieve a stunning summit climb that can be completed over a weekend.',
      topAttractions: ['Tungnath Temple', 'Chandrashila Summit', 'Chopta Bugyal', 'Views of Nanda Devi'],
      thingsToDo: ['Summit Climbing', 'Bird Watching', 'Photography', 'Snow trekking in winter'],
      bestTimeToVisit: 'April to November', recommendedDuration: '2-3 Days', approximateBudget: '₹6,000 - ₹10,000', travelStyle: 'Adventure Trek', difficulty: 'Easy',
      travelTips: ['The final push from Tungnath to Chandrashila is steep and can be slippery in winter.', 'Start the summit hike before dawn to catch the sunrise.', 'Carry sufficient water from Chopta.'],
      image: "https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd35', name: 'Ali Bedni Bugyal Trek', state: 'Uttarakhand', category: 'TREK',
      shortDescription: 'A trek through Asia’s largest high-altitude alpine meadows, offering majestic views of Mt. Trishul and Mt. Nanda Ghunti.',
      fullDescription: 'The Ali Bedni Bugyal trek takes you through two of the most expansive and visually stunning high-altitude meadows (bugyals) in the Himalayas. The trek begins in deep, dark oak and rhododendron forests before dramatically opening up to the vast, undulating green carpets of Ali and Bedni Bugyal. The contrast is breathtaking. From the meadows, the towering peaks of Mt. Trishul and Mt. Nanda Ghunti feel close enough to touch, providing a majestic backdrop. In the spring, the meadows are dotted with wild horses and alpine flowers, while autumn turns the grass a beautiful golden brown. It is a visually spectacular, moderately challenging trek.',
      whyVisit: 'To walk across massive, rolling green meadows at 11,000 feet with gigantic snow-capped peaks looming right in front of you.',
      topAttractions: ['Ali Bugyal', 'Bedni Bugyal', 'Bedni Kund', 'Views of Mt. Trishul'],
      thingsToDo: ['Meadow Trekking', 'Camping under the stars', 'Landscape Photography', 'Forest walks'],
      bestTimeToVisit: 'May to June & September to October', recommendedDuration: '5-6 Days', approximateBudget: '₹10,000 - ₹14,000', travelStyle: 'Nature Trek', difficulty: 'Moderate',
      travelTips: ['Do not trek during the peak monsoon as the meadows become infested with leeches and mist blocks the views.', 'Proper trekking shoes with good grip are required.', 'Ensure you carry eco-bags to bring back your waste.'],
      image: "https://images.unsplash.com/photo-1666513306098-5d2b004bd915?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd36', name: 'Dayara Bugyal Trek', state: 'Uttarakhand', category: 'TREK',
      shortDescription: 'An incredibly beautiful and highly accessible meadow trek, perfect for beginners and families seeking majestic views.',
      fullDescription: 'Dayara Bugyal is widely considered one of the most beautiful alpine meadows in India. Sprawling over 28 square kilometers, this vast expanse of green pasture sits at an altitude of 10,000 feet. The trek is relatively short and features a gradual ascent, making it an ideal choice for absolute beginners, families, and children. Once you emerge from the oak forests onto the meadow, you are treated to sweeping, panoramic views of the Gangotri range, including peaks like Bandarpoonch and Black Peak. In winter, the rolling green slopes turn into a vast, undulating snowfield, transforming the trek into a fantastic winter wonderland experience.',
      whyVisit: 'The perfect introductory trek for beginners, offering massive green meadows and stunning views with a very manageable climb.',
      topAttractions: ['Dayara Meadows', 'Views of Bandarpoonch Peak', 'Bakaria Top', 'Barsu Village'],
      thingsToDo: ['Meadow walks', 'Winter snow trekking', 'Camping', 'Photography'],
      bestTimeToVisit: 'May to July & September to March', recommendedDuration: '4 Days', approximateBudget: '₹8,000 - ₹12,000', travelStyle: 'Beginner Trek', difficulty: 'Easy',
      travelTips: ['Excellent choice for a first winter snow trek.', 'Carry a good quality windproof jacket for the open meadows.', 'Respect the local shepherds and their flocks.'],
      image: "https://images.unsplash.com/photo-1739875875493-5c1470c86726?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd37', name: 'Har Ki Dun Trek', state: 'Uttarakhand', category: 'TREK',
      shortDescription: 'A historic valley trek rich with ancient mythology, ancient wooden villages, and views of the Swargarohini peak.',
      fullDescription: 'Often referred to as the "Valley of Gods," Har Ki Dun is a cradle-shaped hanging valley deeply rooted in the Mahabharata epic. According to legend, the Pandavas took this exact route to ascend to heaven via the Swargarohini peak, which dominates the valley skyline. The trek is culturally immersive, winding through ancient villages like Osla, where temples and wooden houses feature intricate carvings that are centuries old. The trail follows the Supin River through dense pine forests and alpine meadows. Because the gradient is gradual and the altitude gain is slow, it is a long but comfortable trek suitable for most fitness levels.',
      whyVisit: 'A perfect blend of Himalayan mythology, ancient Himalayan village culture, and stunning, dramatic valley landscapes.',
      topAttractions: ['Osla Village', 'Swargarohini Peak View', 'Jaundhar Glacier', 'Supin River'],
      thingsToDo: ['Valley Trekking', 'Interacting with locals in ancient villages', 'Glacier exploration', 'Riverside camping'],
      bestTimeToVisit: 'April to June & September to December', recommendedDuration: '7-8 Days', approximateBudget: '₹12,000 - ₹18,000', travelStyle: 'Culture / Nature Trek', difficulty: 'Moderate',
      travelTips: ['The trek is long (around 47 km total); build your stamina through jogging before you go.', 'Respect the local architecture and customs in Osla.', 'The valley gets freezing cold in November.'],
      image: "https://images.unsplash.com/photo-1788770675004-1b1e004fc34a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd38', name: 'Brahmatal Trek', state: 'Uttarakhand', category: 'TREK',
      shortDescription: 'A thrilling winter trek famous for its frozen high-altitude lakes and unparalleled views of Mt. Trishul and Nanda Ghunti.',
      fullDescription: 'Brahmatal is a classic winter trek designed for those who want to experience deep snow, frozen lakes, and majestic mountain views. Much of the trail weaves through an ancient, mystical forest of oak and rhododendron, which looks spectacular when heavy with snow. The trek features two high-altitude lakes—Bekaltal and Brahmatal—both of which freeze solid in the dead of winter. The absolute highlight of the trek is the summit ridge walk. When you reach the top, the gigantic peaks of Mt. Trishul and Mt. Nanda Ghunti appear so close they feel like a physical wall of ice and rock right in front of you.',
      whyVisit: 'To camp by frozen alpine lakes and walk along a thrilling snow-covered ridge with massive peaks right in your face.',
      topAttractions: ['Brahmatal Lake', 'Bekaltal Lake', 'Brahmatal Summit', 'Views of Mt. Trishul'],
      thingsToDo: ['Snow Trekking', 'Ridge walking', 'Camping in snow', 'Photography'],
      bestTimeToVisit: 'December to March', recommendedDuration: '6 Days', approximateBudget: '₹9,000 - ₹13,000', travelStyle: 'Winter Trek', difficulty: 'Moderate',
      travelTips: ['Snow blindness is a risk on sunny winter days; UV-protected sunglasses are strictly mandatory.', 'Carry three layers of warm clothing.', 'The lakes are considered sacred; do not walk on the ice.'],
      image: "https://images.unsplash.com/photo-1767165019720-993c62543bfb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd39', name: 'Kuari Pass Trek', state: 'Uttarakhand', category: 'TREK',
      shortDescription: 'The "Lord Curzon Trail," famous for offering the most spectacular, unobstructed views of Mt. Nanda Devi.',
      fullDescription: 'Historically traversed by Lord Curzon, the Kuari Pass trek is famed for one specific, unparalleled feature: its unmatched views of Mt. Nanda Devi, India’s highest entirely domestic peak. As you hike out of the dense, ancient oak forests, the trail opens up to reveal a stunning amphitheater of Garhwal giants, including Dronagiri, Kamet, and Hathi-Ghodi Parvat. The trek involves crossing beautiful bugyals (meadows) and interacting with local shepherds. Because the maximum altitude is relatively modest (around 12,500 feet), it avoids the severe altitude sickness risks of higher passes, making it an incredibly rewarding trek for beginners and seasoned hikers alike.',
      whyVisit: 'For the absolute best, closest views of Mount Nanda Devi and a visually stunning transition from deep forests to open ridges.',
      topAttractions: ['Kuari Pass Summit', 'Views of Mt. Nanda Devi', 'Gorson Bugyal', 'Tali Lake'],
      thingsToDo: ['Mountain Viewing', 'Trekking', 'Forest Camping', 'Photography'],
      bestTimeToVisit: 'April to June & September to December', recommendedDuration: '5-6 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Adventure Trek', difficulty: 'Moderate',
      travelTips: ['A great alternative to Auli if you want to avoid tourist crowds but want the same views.', 'The wind at the pass is incredibly strong.', 'Carry sufficient memory cards; you will take endless photos.'],
      image: "https://images.unsplash.com/photo-1716573263049-bb901a972ce1?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd40', name: 'Hampta Pass Trek', state: 'Himachal Pradesh', category: 'TREK',
      shortDescription: 'A dramatic crossover trek from the lush, green Kullu Valley to the barren, arid desert of Spiti.',
      fullDescription: 'Hampta Pass is renowned as the most dramatic crossover trek in the Himalayas. It offers a surreal visual contrast that changes daily. You begin your journey in the lush, rain-fed Kullu Valley, walking through thick pine forests, crossing log bridges over rushing streams, and navigating bright green meadows. However, as you climb over the 14,000-foot Hampta Pass, the landscape abruptly shifts. You descend into the stark, dry, and barren Lahaul and Spiti Valley, surrounded by massive, jagged rock formations. The trek usually concludes with a drive to the stunning, moon-shaped Chandratal Lake, adding the perfect final touch to an epic adventure.',
      whyVisit: 'To experience the unbelievable contrast of trekking from a lush green valley into a cold, barren mountain desert in just a few days.',
      topAttractions: ['Hampta Pass', 'Chandratal Lake', 'Shea Goru Campsite', 'Jobra Forests'],
      thingsToDo: ['Pass Crossing', 'River Fording', 'Camping at Shea Goru', 'Visiting Chandratal'],
      bestTimeToVisit: 'Mid-June to September', recommendedDuration: '5-6 Days', approximateBudget: '₹10,000 - ₹16,000', travelStyle: 'Crossover Trek', difficulty: 'Moderate',
      travelTips: ['The river crossings are freezing cold; be prepared for the shock.', 'Rain is highly likely on the Kullu side; pack good rain gear.', 'The descent from the pass is steep and requires careful footing.'],
      image: "https://images.unsplash.com/photo-1688804470994-271ad19db477?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd41', name: 'Buran Ghati Trek', state: 'Himachal Pradesh', category: 'TREK',
      shortDescription: 'An exhilarating, action-packed trek featuring a thrilling snow-wall rappel and the beautiful Chandranahan Lake.',
      fullDescription: 'Buran Ghati is one of the most perfectly balanced and thrilling treks in the Himalayas. It offers a little bit of everything: deep, mysterious pine and oak forests, expansive day-long meadow walks, the pristine glacial Chandranahan Lake, and a heavy dose of adrenaline. The absolute highlight of the trek is crossing the Buran Ghati pass at 15,000 feet. From the top, trekkers face a near-vertical snow wall that they must rappel down using ropes, followed by a series of exhilarating snow slides. It is a visually spectacular and physically thrilling adventure best suited for fit trekkers looking for the next level of excitement.',
      whyVisit: 'For the ultimate trekking thrill of rappelling down a massive snow wall at 15,000 feet after walking through stunning meadows.',
      topAttractions: ['Buran Ghati Pass', 'Chandranahan Lake', 'Dayara Meadows', 'Rappelling the snow wall'],
      thingsToDo: ['Snow Rappelling', 'High-altitude Trekking', 'Camping by the lake', 'Sliding on snow'],
      bestTimeToVisit: 'May to June & September to October', recommendedDuration: '7-8 Days', approximateBudget: '₹14,000 - ₹20,000', travelStyle: 'Adventure / Thrill', difficulty: 'Moderate',
      travelTips: ['Strict physical fitness is required due to the altitude and the technical pass crossing.', 'Listen carefully to your trek leaders during the rappel.', 'The campsites are incredibly beautiful; bring a good camera.'],
      image: "https://images.unsplash.com/photo-1601639396099-c87b05e04fd9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd42', name: 'Pin Parvati Pass Trek', state: 'Himachal Pradesh', category: 'TREK',
      shortDescription: 'A highly challenging, epic 11-day expedition crossing from the Parvati Valley into the remote Pin Valley.',
      fullDescription: 'The Pin Parvati Pass is not just a trek; it is a grueling, magnificent Himalayan expedition. Covering roughly 110 kilometers over 11 days, the trail demands immense physical and mental endurance. Trekkers start in the lush, humid Parvati Valley, hiking past the hot springs of Kheerganga and the vast alpine meadow of Odi Thach, before navigating tricky glacial moraines and crevasses. The climax is crossing the formidable pass at 17,450 feet, which acts as a bridge to the stark, colorful, and completely barren Pin Valley in Spiti. This trek is reserved exclusively for highly experienced trekkers seeking the ultimate test of endurance.',
      whyVisit: 'The ultimate badge of honor for experienced trekkers, offering a grueling, incredibly diverse 11-day trans-Himalayan journey.',
      topAttractions: ['Pin Parvati Pass', 'Kheerganga Hot Springs', 'Mantalai Lake', 'Pin Valley National Park'],
      thingsToDo: ['Glacier Trekking', 'Crevasse Navigation', 'High-altitude Camping', 'River Crossings'],
      bestTimeToVisit: 'July to September', recommendedDuration: '11-12 Days', approximateBudget: '₹22,000 - ₹30,000', travelStyle: 'Expedition', difficulty: 'Difficult',
      travelTips: ['Strictly for experienced trekkers with previous high-altitude experience.', 'Physical conditioning (running, strength training) months in advance is mandatory.', 'Weather at the pass is highly unpredictable and can cause delays.'],
      image: "https://images.unsplash.com/photo-1574632430946-82add0b76816?q=80&w=1525&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd43', name: 'Beas Kund Trek', state: 'Himachal Pradesh', category: 'TREK',
      shortDescription: 'A short, beautiful weekend trek near Manali leading to the glacial lake that is the source of the Beas River.',
      fullDescription: 'Beas Kund is the perfect weekend trek for beginners, families, and those short on time but hungry for high-mountain views. Starting a short drive from Manali, the trail winds through the beautiful Solang Valley, passing through ancient deodar forests and sprawling grasslands like Bakarthach. The destination is the emerald Beas Kund, a serene alpine lake nestled at the base of towering peaks like Hanuman Tibba and Friendship Peak. According to legend, the sage Vyas bathed in this very lake while writing the Mahabharata. It offers a massive visual reward—glaciers, meadows, and peaks—for a relatively minimal amount of walking.',
      whyVisit: 'To stand face-to-face with massive glaciers and peaks on a short, easy weekend trek just outside Manali.',
      topAttractions: ['Beas Kund Lake', 'Bakarthach Meadows', 'Views of Hanuman Tibba', 'Solang Valley'],
      thingsToDo: ['Glacier Viewing', 'Trekking', 'Camping', 'Photography'],
      bestTimeToVisit: 'Mid-May to October', recommendedDuration: '3-4 Days', approximateBudget: '₹6,000 - ₹9,000', travelStyle: 'Beginner Trek', difficulty: 'Easy',
      travelTips: ['A great introductory trek to prepare for longer Himalayan journeys.', 'The final stretch over the moraine boulders can be tricky on the ankles.', 'Carry a water bottle to refill directly from the glacial streams.'],
      image: "https://images.pexels.com/photos/19100015/pexels-photo-19100015.jpeg?_gl=1*mmex6u*_ga*NDE2OTEwMDkyLjE3ODkwNzc3MjM.*_ga_8JE65Q40S6*czE3ODk1NjE4MTEkbzMkZzEkdDE3ODk1NjE4MjQkajQ3JGwwJGgw"
    },
    {
      id: 'd44', name: 'Goechala Trek', state: 'Sikkim', category: 'TREK',
      shortDescription: 'A legendary, high-altitude trek offering the closest and most dramatic views of Mount Kangchenjunga.',
      fullDescription: 'The Goechala Trek is the closest you can get to the world’s third-highest mountain, Kangchenjunga, without actually climbing it. Situated in the Kanchenjunga National Park, the trail is incredibly diverse. Trekkers walk through enchanting forests of blooming rhododendrons, cross wooden bridges over roaring rivers, and navigate the spooky, dead-tree landscape of Dzongri. The highlight of the trek is waking up before midnight to hike to the Goechala viewpoint. Watching the first rays of the morning sun hit the towering, sheer ice wall of Kangchenjunga is an emotional, awe-inspiring experience. It is a tough, high-altitude trek that requires excellent fitness and determination.',
      whyVisit: 'For the ultimate, heart-stopping sunrise view of Mount Kangchenjunga and a walk through pristine, protected bio-reserves.',
      topAttractions: ['Goechala Viewpoint', 'Kangchenjunga Range', 'Dzongri Top', 'Samiti Lake'],
      thingsToDo: ['High-altitude Trekking', 'Watching the sunrise on the peaks', 'Wildlife spotting', 'Camping'],
      bestTimeToVisit: 'April to May & October to November', recommendedDuration: '10-11 Days', approximateBudget: '₹18,000 - ₹25,000', travelStyle: 'Adventure Trek', difficulty: 'Difficult',
      travelTips: ['This is a long, physically demanding trek; cardio fitness is crucial.', 'Foreigners require a Protected Area Permit to do this trek.', 'Acclimatize properly at Dzongri before pushing higher.'],
      image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // 🏖️ BEACHES / ISLANDS
    {
      id: 'd45', name: 'Goa', state: 'Goa', category: 'BEACH',
      shortDescription: 'India’s pocket-sized paradise, renowned for its golden beaches, vibrant nightlife, and Portuguese heritage.',
      fullDescription: 'Goa is India’s undisputed beach capital, offering a beautiful blend of Indian and Portuguese cultures. The state is broadly divided into two distinct vibes. North Goa is famous for its electric energy, bustling beach shacks, lively flea markets, and legendary nightlife. In contrast, South Goa is a sanctuary of peace, featuring pristine, uncrowded white-sand beaches, luxury resorts, and quiet wellness retreats. Beyond the beaches, Goa boasts centuries-old UNESCO-listed churches, lush spice plantations, and mouth-watering seafood curries. Whether you want to dance until dawn, explore colonial history on a rented scooter, or simply read a book under a palm tree, Goa delivers.',
      whyVisit: 'The ultimate destination for freedom, featuring the best nightlife in India alongside stunning, palm-fringed beaches and rich history.',
      topAttractions: ['Basilica of Bom Jesus', 'Dudhsagar Waterfalls', 'Anjuna Flea Market', 'Chapora Fort', 'Fort Aguada'],
      thingsToDo: ['Beach hopping', 'Water sports', 'Nightclubbing', 'Heritage walks in Fontainhas', 'Scooter exploration'],
      bestTimeToVisit: 'November to February', recommendedDuration: '4-5 Days', approximateBudget: '₹12,000 - ₹25,000', travelStyle: 'Party / Leisure', difficulty: 'Easy',
      travelTips: ['Rent a scooter for the best, most flexible way to explore.', 'Try the local Goan fish curry and Feni.', 'North Goa is for parties; South Goa is for peace.'],
      image: "https://images.unsplash.com/photo-1653928359063-13eb336a4196?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd46', name: 'Palolem Beach', state: 'Goa', category: 'BEACH',
      shortDescription: 'A stunning, crescent-shaped beach in South Goa known for its calm waters, colorful beach huts, and laid-back vibe.',
      fullDescription: 'Palolem is widely considered one of the most beautiful and idyllic beaches in all of Goa. Located in the deep south, the beach forms a perfect crescent shape, naturally framed by rocky hills on both ends. This unique geography keeps the waters incredibly calm, making it perfect for swimming, kayaking, and paddleboarding. Palolem is famous for its vibrant, temporary coco-huts that line the shore, offering a true beachfront living experience. The vibe here is distinctly laid-back, attracting backpackers, yogis, and families looking to escape the heavy commercialization of North Goa. At night, it hosts unique "Silent Noise" headphone parties to maintain the peace.',
      whyVisit: 'To experience a pristine, calm-water beach with a perfect chilled-out backpacker vibe, away from the chaos of the north.',
      topAttractions: ['Palolem Beach', 'Butterfly Beach', 'Cotigao Wildlife Sanctuary', 'Honeymoon Beach'],
      thingsToDo: ['Kayaking', 'Dolphin spotting boat rides', 'Attending a Silent Noise party', 'Yoga retreats'],
      bestTimeToVisit: 'November to March', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹18,000', travelStyle: 'Relax / Backpacking', difficulty: 'Easy',
      travelTips: ['Take a short boat ride to the hidden Butterfly Beach for sunset.', 'Beach huts are dismantled during the monsoon season (June to October).', 'The water here is exceptionally safe for swimming.'],
      image: "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd47', name: 'Baga Beach', state: 'Goa', category: 'BEACH',
      shortDescription: 'The pulsing heart of North Goa, famous for its intense nightlife, crowded shacks, and non-stop water sports.',
      fullDescription: 'Baga Beach is the epicenter of North Goa’s bustling tourism scene. It is loud, crowded, and bursting with infectious energy. During the day, the beach is a playground for water sports enthusiasts, offering everything from parasailing to jet skiing and banana boat rides. The shoreline is packed edge-to-edge with iconic beach shacks serving cold beer and fresh seafood. As the sun sets, Baga transforms into a party hub. Tito’s Lane, located just off the beach, is famous across India for its legendary nightclubs that pump music until dawn. Baga is not for those seeking quiet; it is for those looking to celebrate.',
      whyVisit: 'For the ultimate, high-energy Goan party experience, non-stop water sports, and vibrant nightlife.',
      topAttractions: ['Baga Beach', 'Tito’s Lane', 'Mackie’s Saturday Night Bazaar', 'Britto’s Shack'],
      thingsToDo: ['Parasailing', 'Clubbing', 'Eating seafood at beach shacks', 'Shopping at night markets'],
      bestTimeToVisit: 'November to February', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹20,000', travelStyle: 'Party / Adventure', difficulty: 'Easy',
      travelTips: ['Expect heavy crowds, especially during long weekends and New Year.', 'Bargain hard for water sports packages.', 'Book nightclub entries online to avoid long queues.'],
      image: "https://images.unsplash.com/photo-1775132693217-32c5c775adfd?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd48', name: 'Gokarna', state: 'Karnataka', category: 'BEACH',
      shortDescription: 'A unique temple town boasting pristine, rugged beaches, offering a quieter, more spiritual alternative to Goa.',
      fullDescription: 'Gokarna offers a fascinating duality: it is simultaneously one of the most sacred Hindu pilgrimage sites in South India and a bohemian paradise for backpackers. The town is centered around the ancient Mahabaleshwar Temple, drawing thousands of devotees. Just a short trek over the laterite hills, however, reveals a series of stunning, rugged beaches like Om Beach, Kudle Beach, and Paradise Beach. These beaches offer a raw, untouched beauty that Goa left behind decades ago. The famous Gokarna Beach Trek allows visitors to hike across the cliffs from one beach to another, combining light adventure with spectacular coastal views.',
      whyVisit: 'To experience raw, stunning beaches and a relaxed hippie vibe blended seamlessly with deep spiritual traditions.',
      topAttractions: ['Om Beach', 'Kudle Beach', 'Mahabaleshwar Temple', 'Half Moon Beach', 'Mirjan Fort'],
      thingsToDo: ['Beach Trekking', 'Surfing', 'Yoga', 'Temple Visits', 'Cafe hopping'],
      bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹7,000 - ₹12,000', travelStyle: 'Backpacking / Relax', difficulty: 'Easy',
      travelTips: ['Dress modestly when in the main town and near the temples.', 'The hike between beaches is scenic but can be very hot; carry water.', 'ATMs in town can be unreliable; carry some cash.'],
      image: "https://images.unsplash.com/photo-1693205118032-9382f7267f55?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd49', name: 'Varkala', state: 'Kerala', category: 'BEACH',
      shortDescription: 'A dramatic coastal town famous for its towering red laterite cliffs standing adjacent to the Arabian Sea.',
      fullDescription: 'Varkala is completely unique on the Indian coastline, defined by its striking red laterite cliffs that rise abruptly from the Arabian Sea. A paved pathway runs along the edge of the cliff, lined with bohemian cafes, Tibetan shops, yoga studios, and ayurvedic massage centers, all offering panoramic views of the ocean. Below the cliff lies Papanasam Beach, believed to wash away sins according to local Hindu tradition. The vibe in Varkala is deeply spiritual and intensely relaxed, making it a major hub for yoga practitioners and backpackers seeking wellness, spectacular sunsets, and a slower pace of life.',
      whyVisit: 'For the dramatic cliff-side views, excellent cafe culture, and world-class yoga and Ayurvedic treatments.',
      topAttractions: ['Varkala Cliff', 'Papanasam Beach', 'Janardanaswamy Temple', 'Kappil Beach', 'Ponnumthuruthu Island'],
      thingsToDo: ['Paragliding off the cliff', 'Surfing', 'Ayurvedic massages', 'Yoga retreats', 'Watching the sunset'],
      bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹9,000 - ₹15,000', travelStyle: 'Wellness / Backpacking', difficulty: 'Easy',
      travelTips: ['The currents at Papanasam beach can be very strong; swim with caution.', 'Try the fresh seafood at the cliff cafes.', 'Great destination for beginner surfing lessons.'],
      image: "https://images.unsplash.com/photo-1704499683154-12b5bf19bc1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd50', name: 'Kovalam', state: 'Kerala', category: 'BEACH',
      shortDescription: 'Kerala’s most famous beach destination, characterized by its iconic lighthouse and crescent-shaped shorelines.',
      fullDescription: 'Once a quiet fishing village discovered by hippies in the 1970s, Kovalam has grown into Kerala’s most developed and famous beach resort. The town is defined by three adjacent crescent-shaped beaches, the most prominent being Lighthouse Beach, named after the iconic red-and-white striped lighthouse that stands on a rocky promontory at its southern end. The promenade is bustling with luxury resorts, Ayurvedic centers, and seafood restaurants. While it can get crowded during peak season, Kovalam remains a fantastic destination for families and travelers looking for safe swimming, excellent coastal food, and traditional Kerala wellness therapies right on the beach.',
      whyVisit: 'A classic, family-friendly beach holiday offering safe swimming waters, great seafood, and the iconic lighthouse view.',
      topAttractions: ['Lighthouse Beach', 'Hawah Beach', 'Vizhinjam Lighthouse', 'Samudra Beach', 'Karamana River'],
      thingsToDo: ['Climbing the Lighthouse', 'Surfing', 'Ayurvedic treatments', 'Catamaran rides'],
      bestTimeToVisit: 'September to March', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹20,000', travelStyle: 'Family / Leisure', difficulty: 'Easy',
      travelTips: ['The view from the top of the lighthouse is spectacular, especially at sunset.', 'Lighthouse Beach is the busiest; Samudra Beach is quieter.', 'Bargain with local fishermen for catamaran rides.'],
      image: "https://images.unsplash.com/photo-1645974459771-855ac128b89f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd51', name: 'Marari', state: 'Kerala', category: 'BEACH',
      shortDescription: 'A quiet, pristine stretch of sand in Alleppey, offering an authentic, slow-paced Kerala fishing village experience.',
      fullDescription: 'Located just a short drive from the famous backwaters of Alleppey, Marari Beach offers a stark contrast to the busy shores of Kovalam. Marari is not a bustling resort town; rather, it is a sleepy, traditional fishing village with a long, pristine, and largely empty stretch of white sand fringed by thousands of coconut palms. The destination focuses on eco-tourism and slow living. Visitors can watch local fishermen haul in their daily catch, relax in eco-friendly boutique resorts, and enjoy the absolute tranquility of the Arabian Sea. It is the perfect place to unwind and disconnect after a busy tour of Kerala.',
      whyVisit: 'For absolute peace, quiet, and a genuine glimpse into the daily life of a traditional Keralan coastal village.',
      topAttractions: ['Marari Beach', 'Arthunkal Church', 'Traditional Coir making villages'],
      thingsToDo: ['Relaxing on the beach', 'Ayurvedic massages', 'Village cycling tours', 'Watching the fishermen'],
      bestTimeToVisit: 'October to March', recommendedDuration: '2-3 Days', approximateBudget: '₹10,000 - ₹18,000', travelStyle: 'Relaxation / Romance', difficulty: 'Easy',
      travelTips: ['There are very few beach shacks or water sports; this is a place purely for relaxation.', 'Combine a stay here with a houseboat trip in nearby Alleppey.', 'Respect the local fishermen and their workspace on the beach.'],
      image: "https://images.pexels.com/photos/36694035/pexels-photo-36694035.jpeg"
    },
    {
      id: 'd52', name: 'Alappuzha', state: 'Kerala', category: 'BEACH',
      shortDescription: 'The "Venice of the East," world-renowned for its intricate network of emerald backwaters and luxury houseboats.',
      fullDescription: 'Alappuzha, also known as Alleppey, is globally famous for its vast, mesmerizing network of backwaters—a labyrinth of shimmering canals, lagoons, and lakes intertwined with lush paddy fields and coconut groves. The quintessential Alleppey experience is renting a traditional "Kettuvallam" (houseboat) and drifting slowly through the waterways, observing village life that happens entirely on the water. Beyond the backwaters, the town also features the historic Alappuzha Beach with its 19th-century pier. However, the true magic lies inland, where the slow rhythm of the water, the incredible local Kerala cuisine served on the boats, and the stunning sunsets create an unforgettable romantic experience.',
      whyVisit: 'To drift silently through lush, tropical backwaters on a traditional houseboat—one of the most unique travel experiences in the world.',
      topAttractions: ['Alleppey Backwaters', 'Alappuzha Beach', 'Vembanad Lake', 'Krishnapuram Palace', 'Marari Beach'],
      thingsToDo: ['Houseboat Cruise', 'Kayaking in narrow canals', 'Ayurvedic therapies', 'Village walks'],
      bestTimeToVisit: 'October to February', recommendedDuration: '2-3 Days', approximateBudget: '₹12,000 - ₹25,000', travelStyle: 'Romance / Leisure', difficulty: 'Easy',
      travelTips: ['For a more intimate experience, rent a small canoe or kayak to explore the narrow canals where large houseboats cannot go.', 'Book houseboats well in advance during the winter peak season.', 'Mosquito repellent is essential.'],
      image: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxhcHB1emhhfGVufDB8fDB8fHww"
    },
    {
      id: 'd53', name: 'Tarkarli', state: 'Maharashtra', category: 'BEACH',
      shortDescription: 'A pristine coastal village renowned for its crystal-clear waters, scuba diving, and the historic Sindhudurg Fort.',
      fullDescription: 'Tarkarli is a hidden gem on the Konkan coast of Maharashtra. Unlike the commercialized beaches of Goa, Tarkarli boasts incredibly clear, turquoise waters where the seabed is often visible up to 20 feet deep. This clarity makes it one of the premier destinations in India for scuba diving and snorkeling, allowing visitors to explore vibrant coral reefs. The coastline is dotted with casuarina trees and traditional Malvani homes. Just off the coast stands the magnificent Sindhudurg Fort, a formidable 17th-century Maratha sea fort built by Shivaji Maharaj. Tarkarli perfectly combines thrilling water sports with rich history and mouth-watering Malvani seafood cuisine.',
      whyVisit: 'To experience some of the clearest waters in India, excellent scuba diving, and the dramatic Sindhudurg sea fort.',
      topAttractions: ['Tarkarli Beach', 'Sindhudurg Fort', 'Devbagh Beach', 'Karli Backwaters', 'Tsunami Island'],
      thingsToDo: ['Scuba Diving', 'Snorkeling', 'Parasailing', 'Houseboat stay on Karli river', 'Eating Malvani seafood'],
      bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹8,000 - ₹14,000', travelStyle: 'Adventure / Leisure', difficulty: 'Easy',
      travelTips: ['The scuba diving is excellent for beginners.', 'Do not leave without trying the local Malvani fish curry and Solkadhi.', 'Dolphin spotting boat rides early in the morning are highly recommended.'],
      image: "https://images.pexels.com/photos/11324691/pexels-photo-11324691.jpeg"
    },
    {
      id: 'd54', name: 'Alibaug', state: 'Maharashtra', category: 'BEACH',
      shortDescription: 'A popular weekend getaway from Mumbai, famous for its historic sea forts, black sand beaches, and luxury villas.',
      fullDescription: 'Located just a quick ferry ride across the harbor from Mumbai, Alibaug is a historic coastal town that has transformed into a favorite weekend retreat for city dwellers. The town is rich in Maratha history, most notably featuring the impressive Kolaba Fort, which can be accessed on foot or by horse cart during low tide. The beaches here, such as Varsoli and Nagaon, feature unique dark, magnetic sand and offer a wide array of water sports. In recent years, Alibaug has seen a surge in upscale boutique resorts and cafes, blending its rustic coastal charm with modern luxury and convenience.',
      whyVisit: 'A quick, accessible escape offering historical sea forts, thrilling water sports, and relaxing beachside cafes.',
      topAttractions: ['Kolaba Fort', 'Nagaon Beach', 'Murud-Janjira Fort', 'Kashid Beach', 'Kanakeshwar Forest'],
      thingsToDo: ['Water sports at Nagaon', 'Walking to Kolaba Fort at low tide', 'Seafood dining', 'Beach hopping'],
      bestTimeToVisit: 'November to March', recommendedDuration: '2-3 Days', approximateBudget: '₹8,000 - ₹15,000', travelStyle: 'Weekend Getaway / Family', difficulty: 'Easy',
      travelTips: ['Taking the Ro-Ro ferry from Mumbai is the fastest and most scenic way to reach.', 'Always check the tide timings before visiting Kolaba Fort.', 'Kashid Beach, a short drive away, has cleaner, white sand.'],
      image: "https://plus.unsplash.com/premium_photo-1697729600112-434ee1c7f670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxpYmF1Z3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 'd55', name: 'Diu', state: 'Gujarat', category: 'BEACH',
      shortDescription: 'A tiny, peaceful island featuring distinct Portuguese architecture, quiet beaches, and a massive coastal fort.',
      fullDescription: 'Diu is a small, serene island off the coast of Gujarat, deeply infused with Portuguese colonial history. Having been a Portuguese colony for over 400 years, the island’s architecture, culture, and relaxed pace of life reflect this heritage. The island is dominated by the colossal Diu Fort, which offers sweeping views of the Arabian Sea. Visitors can relax on the clean, uncrowded sands of Nagoa Beach, explore the spectacular naturally carved Naida Caves, and cycle through the quiet, pastel-colored streets of the old town. Diu offers a tranquil, historically rich coastal escape away from the crowds of mainland beaches.',
      whyVisit: 'To explore a massive Portuguese sea fort, wander through stunning caves, and enjoy incredibly peaceful, clean beaches.',
      topAttractions: ['Diu Fort', 'Naida Caves', 'Nagoa Beach', 'St. Paul’s Church', 'Ghoghla Beach'],
      thingsToDo: ['Exploring the fort', 'Photography in Naida Caves', 'Water sports at Nagoa', 'Cycling around the island'],
      bestTimeToVisit: 'October to March', recommendedDuration: '2-3 Days', approximateBudget: '₹7,000 - ₹12,000', travelStyle: 'Heritage / Relax', difficulty: 'Easy',
      travelTips: ['Rent a scooter or bicycle to easily explore the small island.', 'Naida Caves are best visited around noon when the sunlight filters perfectly through the roof.', 'The island has a very laid-back, early-to-bed culture.'],
      image: "https://images.unsplash.com/photo-1569776186059-f26b84be14b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGl1fGVufDB8fDB8fHww"
    },
    {
      id: 'd56', name: 'Puri', state: 'Odisha', category: 'BEACH',
      shortDescription: 'One of the Char Dham pilgrimage sites, famous for the Jagannath Temple and its sweeping, golden sand beach.',
      fullDescription: 'Puri is a unique destination where intense spiritual devotion meets the wild beauty of the Bay of Bengal. It is one of the original Char Dham pilgrimage sites for Hindus, home to the towering, magnificent Jagannath Temple. The city’s energy is palpable, especially during the legendary Rath Yatra festival. Just a short walk from the temple lies the Golden Beach of Puri, known for its roaring waves and bustling promenade filled with camel rides and sand art. A short drive away is the architectural marvel of the Konark Sun Temple and the tranquil Chilika Lake, making Puri a diverse and culturally profound destination.',
      whyVisit: 'To experience the profound spirituality of the Jagannath Temple and relax by the roaring waves of the Bay of Bengal.',
      topAttractions: ['Shree Jagannath Temple', 'Puri Golden Beach', 'Konark Sun Temple', 'Chilika Lake', 'Raghurajpur Artist Village'],
      thingsToDo: ['Temple Pilgrimage', 'Surfing', 'Viewing Sand Art', 'Shopping for Pattachitra art'],
      bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹8,000 - ₹14,000', travelStyle: 'Spiritual / Family', difficulty: 'Easy',
      travelTips: ['Non-Hindus are not allowed inside the Jagannath Temple, but views from the library opposite are available.', 'The sea currents at Puri are notoriously strong; do not swim too deep.', 'Try the temple Mahaprasad.'],
      image: "https://images.unsplash.com/photo-1655352710727-6c89536454b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVyaXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 'd57', name: 'Visakhapatnam', state: 'Andhra Pradesh', category: 'BEACH',
      shortDescription: 'The "City of Destiny," offering pristine beaches, rolling hills, and India’s first submarine museum.',
      fullDescription: 'Visakhapatnam, or Vizag, is a bustling port city that surprises visitors with its stunning natural beauty. It is unique on the eastern coast because the rolling green hills of the Eastern Ghats dramatically plunge directly into the Bay of Bengal. The city boasts a series of beautiful beaches, with the RK Beach promenade acting as the city’s lively center. Here, you can explore the INS Kursura, an actual decommissioned submarine turned into a museum. A short drive up the coast takes you to the incredibly pristine Rushikonda Beach and the hilltop Kailasagiri park. Vizag perfectly balances urban convenience with scenic coastal charm.',
      whyVisit: 'To explore a real submarine, drive along stunning coastal hill roads, and enjoy some of the cleanest beaches on the east coast.',
      topAttractions: ['RK Beach', 'INS Kursura Submarine Museum', 'Rushikonda Beach', 'Kailasagiri', 'Araku Valley (nearby)'],
      thingsToDo: ['Visiting the Submarine Museum', 'Surfing at Rushikonda', 'Cable car ride at Kailasagiri', 'Coastal drive to Bheemili'],
      bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹9,000 - ₹15,000', travelStyle: 'Family / City', difficulty: 'Easy',
      travelTips: ['Combine your beach trip with a train ride to the beautiful Araku Valley.', 'Rushikonda Beach is safer for swimming compared to RK Beach.', 'Try the local Andhra spicy bamboo chicken.'],
      image: "https://images.unsplash.com/photo-1594313059730-8d0a02f44847?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlzYWtoYXBhdG5hbXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 'd58', name: 'Andaman & Nicobar Islands', state: 'Andaman', category: 'BEACH',
      shortDescription: 'An exotic archipelago offering pristine tropical rainforests, coral reefs, and a dark colonial history at Cellular Jail.',
      fullDescription: 'The Andaman and Nicobar Islands are a remote archipelago in the Bay of Bengal, characterized by lush tropical rainforests, mangroves, and some of the most vibrant coral reefs in the world. Port Blair, the capital, serves as the entry point and holds deep historical significance due to the Cellular Jail, where Indian freedom fighters were imprisoned. Beyond the history, the islands are a premier destination for underwater exploration. With its crystal-clear turquoise waters and abundant marine life, the archipelago offers world-class scuba diving and snorkeling. It is a true tropical paradise that feels entirely disconnected from the Indian mainland.',
      whyVisit: 'To explore rich colonial history at the Cellular Jail and dive into some of the most pristine coral reefs in South Asia.',
      topAttractions: ['Cellular Jail', 'Ross Island (Netaji Subhash Chandra Bose Island)', 'Mahatma Gandhi Marine National Park', 'Chidiya Tapu'],
      thingsToDo: ['Scuba Diving', 'Attending the Light and Sound show at Cellular Jail', 'Island Hopping', 'Bird Watching'],
      bestTimeToVisit: 'October to May', recommendedDuration: '6-8 Days', approximateBudget: '₹30,000 - ₹50,000', travelStyle: 'Adventure / Relax', difficulty: 'Moderate',
      travelTips: ['Ferries between islands get booked quickly; arrange tickets in advance.', 'Internet connectivity is generally poor, making it a true digital detox.', 'A visit to the Cellular Jail is a must for history buffs.'],
      image: "https://images.unsplash.com/photo-1642498232612-a837df233825?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzfGVufDB8fDB8fHww"
    },
    {
      id: 'd59', name: 'Havelock Island', state: 'Andaman', category: 'BEACH',
      shortDescription: 'Home to the legendary Radhanagar Beach, renowned for its white sands, scuba diving, and luxury resorts.',
      fullDescription: 'Havelock Island (officially Swaraj Dweep) is the crown jewel of the Andaman tourism circuit. It is famous for Radhanagar Beach, consistently ranked among the best and most beautiful beaches in Asia. The beach features incredibly fine white sand, dense mahua trees leaning over the shore, and spectacular sunsets. Havelock is also India’s scuba diving capital. The vibrant coral reefs at Elephant Beach and numerous dive sites offer clear visibility and sightings of sea turtles, manta rays, and colorful reef fish. Whether you are seeking a romantic luxury getaway or an underwater adventure, Havelock provides a world-class tropical island experience.',
      whyVisit: 'To walk on the spectacular Radhanagar Beach and experience the best scuba diving and snorkeling in India.',
      topAttractions: ['Radhanagar Beach', 'Elephant Beach', 'Kalapathar Beach', 'Vijaynagar Beach'],
      thingsToDo: ['Scuba Diving', 'Snorkeling', 'Kayaking in the mangroves', 'Relaxing on the beach'],
      bestTimeToVisit: 'October to May', recommendedDuration: '3-5 Days', approximateBudget: '₹15,000 - ₹30,000', travelStyle: 'Romance / Adventure', difficulty: 'Easy',
      travelTips: ['Elephant Beach requires a short boat ride or a jungle trek to reach.', 'Book scuba diving sessions with certified PADI dive centers only.', 'Rent a two-wheeler to explore the island at your own pace.'],
      image: "https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGF2ZWxvY2slMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 'd60', name: 'Neil Island', state: 'Andaman', category: 'BEACH',
      shortDescription: 'A tiny, tranquil island known for its secluded beaches, rich agriculture, and the natural coral bridge.',
      fullDescription: 'Neil Island (officially Shaheed Dweep) is the quieter, more rustic neighbor to bustling Havelock. It is a tiny, flat island that you can cycle across in less than two hours. Known as the "vegetable bowl" of the Andamans due to its rich agriculture, the island moves at a wonderfully slow pace. The beaches are named after mythological characters—Bharatpur, Laxmanpur, and Sitapur—each offering something unique, from excellent shallow-water snorkeling to dramatic sunrises. The highlight is the Natural Bridge, a stunning rock formation carved by the sea over millennia. Neil Island is perfect for travelers seeking absolute peace and isolation.',
      whyVisit: 'To escape the crowds, cycle through quiet agricultural villages, and explore the unique Natural Coral Bridge.',
      topAttractions: ['Natural Bridge (Howrah Bridge)', 'Bharatpur Beach', 'Laxmanpur Beach', 'Sitapur Beach'],
      thingsToDo: ['Glass Bottom Boat Ride', 'Snorkeling at Bharatpur', 'Watching the sunset at Laxmanpur', 'Cycling'],
      bestTimeToVisit: 'October to May', recommendedDuration: '2-3 Days', approximateBudget: '₹10,000 - ₹18,000', travelStyle: 'Relaxation / Romance', difficulty: 'Easy',
      travelTips: ['The Natural Bridge is only accessible during low tide; plan your visit accordingly.', 'Laxmanpur beach offers the best sunset views.', 'The island has very limited nightlife; it’s all about nature.'],
      image: "https://images.unsplash.com/photo-1579317344982-256c49ab1e0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVpbCUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 'd61', name: 'Lakshadweep', state: 'Lakshadweep', category: 'BEACH',
      shortDescription: 'A highly restricted, pristine archipelago of coral atolls offering unmatched white sand beaches and lagoons.',
      fullDescription: 'Lakshadweep is a string of breathtakingly beautiful coral atolls scattered in the Arabian Sea. It is the most pristine, secluded, and ecologically sensitive beach destination in India. Tourism is highly regulated to protect the fragile coral ecosystem and local culture, which means the islands are never crowded. The landscape consists of blindingly white sand beaches, dense coconut groves, and massive, shallow turquoise lagoons teeming with exotic marine life. Visitors spend their days kayaking in the glass-like lagoons, snorkeling over vibrant reefs, and experiencing a Robinson Crusoe-style isolation. It is a highly exclusive, pure tropical escape.',
      whyVisit: 'To experience the most secluded, pristine coral atolls and turquoise lagoons in India, far removed from commercial tourism.',
      topAttractions: ['Agatti Island', 'Bangaram Atoll', 'Thinnakara Island', 'Minicoy Island'],
      thingsToDo: ['Scuba Diving', 'Snorkeling in the lagoons', 'Kayaking', 'Relaxing on empty beaches'],
      bestTimeToVisit: 'October to March', recommendedDuration: '4-6 Days', approximateBudget: '₹40,000 - ₹70,000', travelStyle: 'Exclusive / Nature', difficulty: 'Moderate',
      travelTips: ['A strict Entry Permit is required for all visitors and can take time to process.', 'Alcohol is banned on all islands except the uninhabited Bangaram.', 'Flights to Agatti are limited; book well in advance.'],
      image: "https://images.unsplash.com/photo-1683228265398-aa5773b40fbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFrc2hhZHdlZXB8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 'd62', name: 'Kavaratti', state: 'Lakshadweep', category: 'BEACH',
      shortDescription: 'The administrative capital of Lakshadweep, known for its beautiful lagoon, marine museum, and serene mosques.',
      fullDescription: 'Kavaratti is the most developed island in the Lakshadweep archipelago and serves as its administrative capital. Despite being the capital, it retains a deeply peaceful, unhurried island vibe. The island is bordered by a stunning, calm lagoon on the western side, making it an ideal spot for swimming, kayaking, and introductory scuba diving. Kavaratti is also culturally rich, home to over 50 mosques, the most famous being the beautifully carved Ujra Mosque. The island features a Marine Aquarium that showcases the incredible diversity of local coral and fish species. It offers a perfect mix of water sports and local island culture.',
      whyVisit: 'To enjoy world-class water sports in a stunning lagoon while experiencing the local culture and architecture of the islands.',
      topAttractions: ['Kavaratti Lagoon', 'Ujra Mosque', 'Marine Aquarium', 'Desalination Plant'],
      thingsToDo: ['Scuba Diving', 'Glass Bottom Boat Rides', 'Kayaking', 'Exploring local culture'],
      bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹35,000 - ₹55,000', travelStyle: 'Nature / Culture', difficulty: 'Easy',
      travelTips: ['Dress modestly when exploring the town and visiting the mosques.', 'The lagoon is incredibly safe and shallow, perfect for children and non-swimmers.', 'Permits must be arranged through authorized agents.'],
      image: "https://images.pexels.com/photos/29525734/pexels-photo-29525734.jpeg"
    },

    // 🏛️ MONUMENTS / HERITAGE
    {
      id: 'd63', name: 'Taj Mahal', state: 'Uttar Pradesh', category: 'HERITAGE',
      shortDescription: 'The ultimate symbol of love, this white marble mausoleum is one of the Seven Wonders of the World.',
      fullDescription: 'The Taj Mahal needs no introduction. Built in the 17th century by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this ivory-white marble mausoleum sits gracefully on the south bank of the Yamuna River. It is universally admired as the greatest architectural achievement in the whole range of Indo-Islamic architecture. The monument\'s perfect symmetry, the intricate semi-precious stone inlay work (pietra dura), and the stunning gardens create a hypnotic visual experience. Watching the marble change color from soft pink at dawn to blinding white at noon and golden at sunset is an unforgettable experience.',
      whyVisit: 'To witness absolute architectural perfection and experience one of the most iconic, globally recognized monuments in human history.',
      topAttractions: ['Taj Mahal', 'Mehtab Bagh', 'Taj Museum'],
      thingsToDo: ['Watching the sunrise', 'Photography', 'Heritage walk', 'Viewing the inlay work'],
      bestTimeToVisit: 'October to March', recommendedDuration: '1 Day', approximateBudget: '₹5,000 - ₹8,000', travelStyle: 'Culture / Romance', difficulty: 'Easy',
      travelTips: ['The Taj Mahal is closed on Fridays.', 'Arrive before sunrise to beat the massive crowds and get the best light.', 'Strict security means large bags and food are not allowed inside.'],
      image: "https://plus.unsplash.com/premium_photo-1753395850294-ac5259cb8bdc?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd64', name: 'Agra Fort', state: 'Uttar Pradesh', category: 'HERITAGE',
      shortDescription: 'A massive red sandstone fortress that served as the main residence of the emperors of the Mughal Dynasty.',
      fullDescription: 'Often overshadowed by the Taj Mahal, the Agra Fort is a colossal and historically significant monument in its own right. A UNESCO World Heritage site, this massive 16th-century fortress of red sandstone was the seat of the powerful Mughal Empire. Inside its imposing walls lies a city of stunning palaces, audience halls, and mosques, showcasing a beautiful blend of Hindu and Islamic architectural styles. Highlights include the Jahangiri Mahal and the Khas Mahal. The fort is also poignant; the Musamman Burj is where Shah Jahan was imprisoned by his son, spending his final years gazing out at the Taj Mahal.',
      whyVisit: 'To explore the powerful center of the Mughal Empire and see the tragic tower where Shah Jahan spent his final days.',
      topAttractions: ['Jahangiri Mahal', 'Diwan-i-Am', 'Diwan-i-Khas', 'Musamman Burj', 'Moti Masjid'],
      thingsToDo: ['Historical tours', 'Photography', 'Exploring the palaces', 'Viewing the Taj Mahal from the fort'],
      bestTimeToVisit: 'October to March', recommendedDuration: '1 Day', approximateBudget: '₹4,000 - ₹7,000', travelStyle: 'History / Culture', difficulty: 'Easy',
      travelTips: ['Hire a licensed guide to truly understand the complex history of the Mughal emperors.', 'Combine the visit with the Taj Mahal on the same day.', 'Wear comfortable walking shoes; the complex is huge.'],
      image: "https://images.unsplash.com/photo-1644782123130-d004ba408c93?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd65', name: 'Fatehpur Sikri', state: 'Uttar Pradesh', category: 'HERITAGE',
      shortDescription: 'The magnificent, abandoned red sandstone capital of Emperor Akbar, famous for its grand courtyards and the Buland Darwaza.',
      fullDescription: 'Located a short drive from Agra, Fatehpur Sikri is a sprawling, perfectly preserved ghost city. Built by Emperor Akbar in the late 16th century, it served as the capital of the Mughal Empire for only 14 years before being abandoned due to a severe lack of water. The complex is an architectural masterpiece, built entirely of red sandstone, and perfectly blends Islamic, Hindu, and Jain design elements. The city is dominated by the colossal Buland Darwaza (Gate of Magnificence) and the beautiful white marble tomb of the Sufi saint Salim Chishti. Walking through its empty, echoing courtyards feels like stepping back in time.',
      whyVisit: 'To walk through an intact, abandoned Mughal city and witness the towering architectural marvel of the Buland Darwaza.',
      topAttractions: ['Buland Darwaza', 'Tomb of Salim Chishti', 'Jama Masjid', 'Panch Mahal', 'Diwan-i-Khas'],
      thingsToDo: ['Heritage walks', 'Photography', 'Tying a thread for a wish at the Sufi tomb'],
      bestTimeToVisit: 'October to March', recommendedDuration: 'Half Day', approximateBudget: '₹3,000 - ₹6,000', travelStyle: 'History / Culture', difficulty: 'Easy',
      travelTips: ['Beware of aggressive hawkers and unauthorized "guides" near the mosque entrance.', 'Women must cover their heads when visiting the mosque and tomb.', 'Visit in the late afternoon for beautiful lighting.'],
      image: "https://images.unsplash.com/photo-1717761455275-70b518573f77?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd66', name: 'Jaipur', state: 'Rajasthan', category: 'HERITAGE',
      shortDescription: 'The "Pink City," a vibrant showcase of Rajput architecture, royal palaces, and bustling colorful bazaars.',
      fullDescription: 'Jaipur, the capital of Rajasthan and the cornerstone of the Golden Triangle, is a city of royalty and vibrant color. Famously painted pink to welcome the Prince of Wales in 1876, the old city is a grid of bustling bazaars selling textiles, jewelry, and pottery. The city is anchored by the magnificent City Palace, which is still home to the royal family, and the iconic Hawa Mahal (Palace of Winds) with its hundreds of intricate pink sandstone windows. Just outside the city limits stands the colossal Amer Fort. Jaipur is a sensory overload of rich history, majestic architecture, and vibrant street life.',
      whyVisit: 'To experience the grandeur of Rajput royalty, shop in world-famous bazaars, and photograph stunning pink palaces.',
      topAttractions: ['Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Albert Hall Museum', 'Jal Mahal'],
      thingsToDo: ['Shopping for block prints and gems', 'Heritage walks', 'Trying authentic Rajasthani Thali', 'Visiting the observatory'],
      bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹16,000', travelStyle: 'Culture / Shopping', difficulty: 'Easy',
      travelTips: ['Bargain firmly but politely in the local bazaars like Johari and Bapu Bazaar.', 'Traffic in the old city can be chaotic; use auto-rickshaws for short distances.', 'Buy a composite ticket to save money on monument entries.'],
      image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd67', name: 'Amer Fort', state: 'Rajasthan', category: 'HERITAGE',
      shortDescription: 'A majestic, imposing hilltop fortress featuring opulent palaces, beautiful courtyards, and the stunning Mirror Palace.',
      fullDescription: 'Located just 11 kilometers from Jaipur, Amer Fort (or Amber Fort) is a masterpiece of Rajput architecture. Built from pale yellow and pink sandstone, and white marble, the fort stands massive and imposing on a rugged hill. Inside, it is a contrast of military strength and lavish luxury. The complex is divided into four main courtyards, featuring architectural wonders like the Sheesh Mahal (Mirror Palace), which can be illuminated by a single candle, and the beautiful Ganesh Pol gate. Visitors can walk up the cobbled path or take a jeep to the main courtyard, immersing themselves in centuries of royal history.',
      whyVisit: 'To explore one of India’s most opulent forts, especially the mesmerizing Sheesh Mahal adorned with thousands of tiny mirrors.',
      topAttractions: ['Sheesh Mahal', 'Ganesh Pol', 'Diwan-i-Aam', 'Sukh Niwas', 'Maota Lake'],
      thingsToDo: ['Fort exploration', 'Attending the Light and Sound show', 'Photography', 'Elephant ride (though walking is encouraged)'],
      bestTimeToVisit: 'October to March', recommendedDuration: 'Half Day', approximateBudget: '₹4,000 - ₹7,000', travelStyle: 'History / Culture', difficulty: 'Easy',
      travelTips: ['Avoid the elephant rides to promote ethical tourism; take a jeep or walk up instead.', 'Hire a guide to hear the fascinating legends of the Rajput kings.', 'The evening light and sound show is highly recommended.'],
      image: "https://plus.unsplash.com/premium_photo-1697730288821-62c119fb7c5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd68', name: 'Udaipur', state: 'Rajasthan', category: 'HERITAGE',
      shortDescription: 'The "City of Lakes," famed for its romantic white-marble palaces seemingly floating on shimmering waters.',
      fullDescription: 'Often referred to as the "Venice of the East," Udaipur is widely considered the most romantic city in India. The city is centered around the serene Lake Pichola, bordered by the magnificent City Palace complex—the largest in Rajasthan. The defining image of Udaipur is the Taj Lake Palace, a stunning white marble hotel that appears to float on the water. The city’s narrow, winding streets are filled with historic havelis, rooftop restaurants offering panoramic lake views, and colorful street art. Udaipur offers a refined, tranquil royal experience, far removed from the chaotic energy of other Rajasthani cities.',
      whyVisit: 'For its unparalleled romantic ambiance, stunning lake views, and majestic marble palaces straight out of a fairy tale.',
      topAttractions: ['City Palace', 'Lake Pichola', 'Jag Mandir', 'Saheliyon Ki Bari', 'Bagore Ki Haveli'],
      thingsToDo: ['Sunset boat ride on Lake Pichola', 'Palace tours', 'Watching a cultural dance show', 'Rooftop dining'],
      bestTimeToVisit: 'September to March', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹20,000', travelStyle: 'Romance / Heritage', difficulty: 'Easy',
      travelTips: ['The sunset boat ride on Lake Pichola is essential, though slightly expensive.', 'Stay in a haveli in the old city (Lal Ghat area) for an authentic experience.', 'Don’t miss the Dharohar folk dance show at Bagore Ki Haveli.'],
      image: "https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd69', name: 'Jodhpur', state: 'Rajasthan', category: 'HERITAGE',
      shortDescription: 'The "Blue City," dominated by the colossal Mehrangarh Fort and a maze of vibrant, indigo-painted houses.',
      fullDescription: 'Jodhpur is a striking city that sits on the edge of the Thar Desert. It is dominated by the colossal Mehrangarh Fort, an architectural masterpiece that rises perpendicularly from a rocky hill, looking down upon the city. Looking out from the fort’s ramparts reveals why Jodhpur is called the "Blue City"—a vast sea of boxy houses painted in vivid shades of indigo and blue stretches out below. The old city is a tangled maze of narrow, medieval streets filled with the smell of incense, spices, and famous local sweets. It is a city that feels deeply historic, fierce, and incredibly atmospheric.',
      whyVisit: 'To explore Mehrangarh, arguably the best-maintained fort in India, and get lost in the vibrant, photographic blue streets.',
      topAttractions: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada', 'Clock Tower & Sardar Market', 'Mandore Gardens'],
      thingsToDo: ['Ziplining over the fort', 'Shopping for spices and textiles', 'Heritage walks in the Blue City', 'Tasting Makhaniya Lassi'],
      bestTimeToVisit: 'October to March', recommendedDuration: '2-3 Days', approximateBudget: '₹10,000 - ₹15,000', travelStyle: 'Culture / Photography', difficulty: 'Easy',
      travelTips: ['Take a guided walking tour of the old blue city to find the best photographic spots.', 'The audio guide at Mehrangarh Fort is exceptionally good.', 'Try the famous local snacks: Mirchi Bada and Makhaniya Lassi.'],
      image: "https://plus.unsplash.com/premium_photo-1697730421382-bc8dd92f83ba?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd70', name: 'Jaisalmer', state: 'Rajasthan', category: 'HERITAGE',
      shortDescription: 'The "Golden City," featuring a massive, living sandcastle fort and the sweeping dunes of the Thar Desert.',
      fullDescription: 'Rising like a mirage from the barren Thar Desert, Jaisalmer is defined by its massive, golden sandstone fort. Unlike most Indian forts, Jaisalmer Fort is a "living fort"—nearly a quarter of the city’s population still lives within its ancient walls, running guesthouses, restaurants, and shops. The city is famous for its exquisitely carved merchant havelis, such as Patwon Ki Haveli. Beyond the city limits lie the sweeping sand dunes of Sam and Khuri, where visitors can ride camels into the sunset and sleep under the desert stars. Jaisalmer offers a magical, Arabian Nights-style desert experience.',
      whyVisit: 'To sleep inside a living, golden sandcastle and ride camels through the vast dunes of the Thar Desert.',
      topAttractions: ['Jaisalmer Fort', 'Patwon Ki Haveli', 'Sam Sand Dunes', 'Gadisar Lake', 'Bada Bagh'],
      thingsToDo: ['Camel Safari', 'Desert Camping', 'Exploring carved havelis', 'Watching the sunset from the fort'],
      bestTimeToVisit: 'November to March', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹18,000', travelStyle: 'Adventure / Heritage', difficulty: 'Easy',
      travelTips: ['Summers are unbearably hot; strictly visit in the winter months.', 'Choose Khuri dunes over Sam dunes for a quieter, less commercialized desert experience.', 'Take an overnight train from Jaipur or Jodhpur to reach easily.'],
      image: "https://images.unsplash.com/photo-1668342081577-9c568eb1d550?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd71', name: 'Chittorgarh', state: 'Rajasthan', category: 'HERITAGE',
      shortDescription: 'The epitome of Rajput pride, boasting the largest fort in India filled with tales of courage and sacrifice.',
      fullDescription: 'Chittorgarh is not just a destination; it is the physical embodiment of Rajput courage, romance, and tragedy. The city is home to the Chittorgarh Fort, the largest fort complex in India, sprawling over a massive hilltop plateau. The fort has witnessed several historical sieges and the legendary Jauhar (mass self-immolation) of Rajput women, including Queen Padmini. Visitors can explore the ruins of grand palaces, the intricately carved Vijay Stambha (Tower of Victory), and the beautiful Gaumukh reservoir. Walking through Chittorgarh is a deeply evocative experience, resonating with the echoes of ancient battles and fierce royal pride.',
      whyVisit: 'To explore the sheer scale of India’s largest fort and immerse yourself in the legendary, tragic history of Rajput warriors.',
      topAttractions: ['Chittorgarh Fort', 'Vijay Stambha', 'Kirti Stambha', 'Rana Kumbha Palace', 'Padmini Palace'],
      thingsToDo: ['Fort exploration', 'Attending the Light and Sound show', 'Historical photography'],
      bestTimeToVisit: 'October to March', recommendedDuration: '1-2 Days', approximateBudget: '₹6,000 - ₹10,000', travelStyle: 'History / Culture', difficulty: 'Easy',
      travelTips: ['The fort is massive (700 acres); hire an auto-rickshaw or taxi to get around inside.', 'A government-approved guide is highly recommended to understand the deep history.', 'Beware of aggressive monkeys near the Gaumukh reservoir.'],
      image: "https://images.unsplash.com/photo-1717329162563-2f93e83cc717?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd72', name: 'Hampi', state: 'Karnataka', category: 'HERITAGE',
      shortDescription: 'A surreal landscape of giant boulders and the spectacular ruins of the ancient Vijayanagara Empire.',
      fullDescription: 'Hampi is a surreal, otherworldly destination. It was once the capital of the Vijayanagara Empire, one of the wealthiest cities in the world during the 14th century. Today, its spectacular ruins are scattered across a bizarre landscape of giant, precariously perched granite boulders and lush green banana plantations. The UNESCO World Heritage site features marvels like the intricately carved Stone Chariot in the Vittala Temple and the towering Virupaksha Temple. Across the Tungabhadra River lies "Hippie Island" (Virupapur Gadde), known for its laid-back cafes and backpacker vibe. Hampi is a place of deep historical mystery and striking natural beauty.',
      whyVisit: 'To wander through the breathtaking ruins of a forgotten empire set against a bizarre, Flintstones-like boulder landscape.',
      topAttractions: ['Virupaksha Temple', 'Vittala Temple (Stone Chariot)', 'Hemakuta Hill Sunsets', 'Lotus Mahal', 'Matanga Hill'],
      thingsToDo: ['Ruins exploration', 'Bouldering/Rock Climbing', 'Coracle boat ride', 'Watching the sunset from Matanga Hill'],
      bestTimeToVisit: 'October to March', recommendedDuration: '3-4 Days', approximateBudget: '₹8,000 - ₹14,000', travelStyle: 'Heritage / Backpacking', difficulty: 'Easy',
      travelTips: ['Start your explorations very early; the afternoon sun bouncing off the boulders is intensely hot.', 'Rent a bicycle or moped to explore the vast ruins easily.', 'Climb Matanga Hill before dawn for a spectacular sunrise.'],
      image: "https://images.unsplash.com/photo-1722934804353-0d9f6a55ab5e?q=80&w=1145&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd73', name: 'Badami', state: 'Karnataka', category: 'HERITAGE',
      shortDescription: 'Famous for its magnificent rock-cut cave temples carved into the fiery red sandstone cliffs of a steep ravine.',
      fullDescription: 'Once the royal capital of the mighty Chalukya empire, Badami is renowned for its spectacular rock-cut cave temples. Carved directly into the fiery red sandstone cliffs of a steep ravine, these four main caves feature exquisite sculptures depicting Hindu deities and Jain Tirthankaras. Overlooking the serene green waters of the Agastya Lake, the caves offer a stunning visual contrast. Beyond the caves, the area is dotted with ancient structural temples like the Bhutanatha group, sitting gracefully on the lake\'s edge. Badami, along with nearby Aihole and Pattadakal, forms the cradle of early South Indian temple architecture.',
      whyVisit: 'To marvel at intricate 6th-century rock-cut cave temples set against dramatic red sandstone cliffs and a tranquil green lake.',
      topAttractions: ['Badami Cave Temples', 'Agastya Lake', 'Bhutanatha Temples', 'Badami Fort', 'Archaeological Museum'],
      thingsToDo: ['Cave exploration', 'Photography', 'Heritage walks', 'Rock climbing (for professionals)'],
      bestTimeToVisit: 'October to March', recommendedDuration: '1-2 Days', approximateBudget: '₹6,000 - ₹10,000', travelStyle: 'History / Culture', difficulty: 'Easy',
      travelTips: ['Beware of the aggressive monkeys around the caves; do not carry food openly.', 'Visit the caves in the late afternoon when the red sandstone glows in the sunlight.', 'Combine Badami with Aihole and Pattadakal for a complete heritage circuit.'],
      image: "https://images.unsplash.com/photo-1674398790713-aabd619bcd30?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd74', name: 'Pattadakal', state: 'Karnataka', category: 'HERITAGE',
      shortDescription: 'A UNESCO World Heritage site showcasing the brilliant architectural experiments of the Chalukya dynasty.',
      fullDescription: 'Located on the banks of the Malaprabha River, Pattadakal was the ceremonial coronation center for the Chalukya kings. It is a UNESCO World Heritage site and an architectural laboratory where North Indian (Nagara) and South Indian (Dravidian) architectural styles were blended and experimented with. The complex features ten major temples, the most magnificent being the Virupaksha Temple, adorned with incredibly intricate sculptures detailing episodes from the Ramayana and Mahabharata. Walking through Pattadakal feels like exploring an open-air museum of ancient Indian art and structural design, offering deep insights into the evolution of temple architecture.',
      whyVisit: 'To witness a rare, perfectly preserved fusion of North and South Indian ancient temple architecture in one complex.',
      topAttractions: ['Virupaksha Temple', 'Mallikarjuna Temple', 'Sangameshwara Temple', 'Galaganatha Temple'],
      thingsToDo: ['Architectural photography', 'Historical tours', 'Studying ancient inscriptions'],
      bestTimeToVisit: 'October to March', recommendedDuration: 'Half Day', approximateBudget: '₹4,000 - ₹7,000', travelStyle: 'History / Architecture', difficulty: 'Easy',
      travelTips: ['Usually visited as a day trip from Badami (22 km away).', 'Hire a guide to point out the subtle differences between the Nagara and Dravidian architectural styles.', 'Carry water and a hat, as the complex is entirely open.'],
      image: "https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd75', name: 'Ajanta Caves', state: 'Maharashtra', category: 'HERITAGE',
      shortDescription: 'A horseshoe-shaped gorge featuring 30 ancient rock-cut Buddhist caves filled with masterpiece murals.',
      fullDescription: 'The Ajanta Caves are a UNESCO World Heritage site and a masterpiece of ancient Buddhist art. Carved into a horseshoe-shaped cliff along the Waghur River, these 30 caves date from the 2nd century BCE to about 480 CE. They served as a monastic retreat for Buddhist monks. What sets Ajanta apart from other cave temples are its incredibly well-preserved frescoes and murals. The detailed, vivid paintings depict the past lives and rebirths of the Buddha, providing an unparalleled glimpse into ancient Indian life, fashion, and artistic brilliance. It is a place of profound historical and artistic magnitude.',
      whyVisit: 'To see some of the finest surviving examples of ancient Indian art and perfectly preserved Buddhist frescoes.',
      topAttractions: ['Cave 1 (Padmapani painting)', 'Cave 2', 'Cave 16', 'Cave 17', 'Cave 26 (Reclining Buddha)'],
      thingsToDo: ['Cave exploration', 'Art appreciation', 'Photography (without flash)'],
      bestTimeToVisit: 'October to March', recommendedDuration: '1 Day', approximateBudget: '₹7,000 - ₹12,000', travelStyle: 'History / Art', difficulty: 'Easy',
      travelTips: ['Flash photography is strictly prohibited to protect the ancient paintings.', 'The caves are closed on Mondays.', 'Stay in Aurangabad, which is the best base for visiting both Ajanta and Ellora.'],
      image: "https://images.unsplash.com/photo-1777118365895-631e4435147b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd76', name: 'Ellora Caves', state: 'Maharashtra', category: 'HERITAGE',
      shortDescription: 'A monumental complex of 34 rock-cut temples, famous for the monolithic, gravity-defying Kailasa Temple.',
      fullDescription: 'Ellora is one of the largest rock-cut monastery-temple cave complexes in the world and a UNESCO World Heritage site. Featuring Buddhist, Hindu, and Jain monuments carved side-by-side, it is a testament to the religious tolerance of ancient India. The absolute highlight of Ellora is Cave 16, the Kailasa Temple. Carved top-down from a single, massive piece of volcanic rock, it is designed to resemble Mount Kailash, the abode of Lord Shiva. The sheer scale, engineering brilliance, and intricate detailing of the Kailasa Temple defy modern comprehension. Ellora is a marvel of human endurance and artistic devotion.',
      whyVisit: 'To stand in awe of the Kailasa Temple, an architectural miracle carved top-down from a single solid mountain of rock.',
      topAttractions: ['Kailasa Temple (Cave 16)', 'Buddhist Caves (Caves 1-12)', 'Jain Caves (Caves 30-34)', 'Dashavatara Cave (Cave 15)'],
      thingsToDo: ['Architectural exploration', 'Historical tours', 'Photography'],
      bestTimeToVisit: 'October to March', recommendedDuration: '1 Day', approximateBudget: '₹7,000 - ₹12,000', travelStyle: 'History / Architecture', difficulty: 'Easy',
      travelTips: ['The Ellora caves are closed on Tuesdays.', 'Start your visit early with the Kailasa Temple to avoid the massive crowds that arrive by noon.', 'Requires significant walking; wear comfortable shoes.'],
      image: "https://images.unsplash.com/photo-1701430662581-fbda7edaa84a?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd77', name: 'Elephanta Caves', state: 'Maharashtra', category: 'HERITAGE',
      shortDescription: 'An island off the coast of Mumbai housing ancient rock-cut cave temples dedicated to Lord Shiva.',
      fullDescription: 'Located on Elephanta Island (Gharapuri) just an hour’s ferry ride from the Gateway of India in Mumbai, the Elephanta Caves are a network of sculpted rock-cut temples. The main cave, a UNESCO World Heritage site, is dedicated to Lord Shiva and dates back to the 5th to 7th centuries. The centerpiece of the complex is the magnificent, 20-foot-tall Trimurti sculpture, which depicts Shiva in his three roles as the creator, preserver, and destroyer. The island offers a stark, peaceful contrast to the chaotic energy of Mumbai, making it a perfect half-day historical escape.',
      whyVisit: 'To take a scenic ferry ride from Mumbai and witness the magnificent, giant Trimurti sculpture of Lord Shiva.',
      topAttractions: ['Main Shiva Cave', 'Trimurti Sculpture', 'Cannon Hill', 'Ferry ride from Gateway of India'],
      thingsToDo: ['Cave exploration', 'Ferry ride', 'Photography', 'Trekking to Cannon Hill'],
      bestTimeToVisit: 'November to March', recommendedDuration: 'Half Day', approximateBudget: '₹2,000 - ₹4,000', travelStyle: 'History / Day Trip', difficulty: 'Easy',
      travelTips: ['The caves are closed on Mondays.', 'Beware of the aggressive monkeys; do not carry food in your hands.', 'Take the first ferry out in the morning to beat the heat and the crowds.'],
      image: "https://plus.unsplash.com/premium_photo-1702598911851-307ed72ebce8?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd78', name: 'Khajuraho', state: 'Madhya Pradesh', category: 'HERITAGE',
      shortDescription: 'World-renowned for its stunning Nagara-style temples covered in intricate, sensual, and erotic stone carvings.',
      fullDescription: 'Built by the Chandela dynasty between 950 and 1050 CE, the Khajuraho Group of Monuments is a UNESCO World Heritage site famous worldwide for its exquisite, highly detailed stone carvings. While often associated primarily with its erotic sculptures, these make up only a small fraction of the artwork. The vast majority of the carvings beautifully depict daily life, musicians, gods, and epic battles. The temples, particularly the Kandariya Mahadeva Temple, are masterpieces of Nagara-style architecture, with their towering spires designed to resemble the peaks of the Himalayas. Khajuraho is a celebration of human form, art, and devotion.',
      whyVisit: 'To witness absolute mastery in stone carving and explore some of the most intricate and well-preserved ancient temples in India.',
      topAttractions: ['Kandariya Mahadeva Temple', 'Lakshmana Temple', 'Chaturbhuj Temple', 'Vishvanatha Temple'],
      thingsToDo: ['Temple tours', 'Attending the Light and Sound show', 'Attending the Khajuraho Dance Festival (February)'],
      bestTimeToVisit: 'October to March', recommendedDuration: '2 Days', approximateBudget: '₹8,000 - ₹14,000', travelStyle: 'Culture / Architecture', difficulty: 'Easy',
      travelTips: ['Hire a licensed, knowledgeable guide to understand the deep philosophy behind the carvings.', 'Rent a bicycle to move between the Western, Eastern, and Southern groups of temples.', 'The evening light and sound show is excellent.'],
      image: "https://images.unsplash.com/photo-1672215051407-6e05138da3a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd79', name: 'Orchha', state: 'Madhya Pradesh', category: 'HERITAGE',
      shortDescription: 'A frozen-in-time medieval town boasting grand palaces and cenotaphs along the boulder-strewn Betwa River.',
      fullDescription: 'Orchha is a hidden historical gem that literally translates to "Hidden Place." Founded in the 16th century by the Bundela Rajput chiefs, this small, peaceful town is packed with majestic palaces, intricate temples, and towering royal cenotaphs (chhatris) situated along the boulder-strewn Betwa River. The town’s crown jewels are the Jahangir Mahal, known for its elegant balconies, and the Ram Raja Temple, the only temple in India where Lord Ram is worshipped as a king. With its relaxed vibe, stunning medieval architecture, and lack of heavy commercialization, Orchha is a photographer’s and historian’s dream.',
      whyVisit: 'For a deeply atmospheric, uncrowded exploration of stunning medieval palaces and riverside cenotaphs.',
      topAttractions: ['Jahangir Mahal', 'Ram Raja Temple', 'Orchha Chhatris (Cenotaphs)', 'Chaturbhuj Temple'],
      thingsToDo: ['River rafting on the Betwa', 'Exploring the palaces', 'Photography at the Chhatris', 'Attending the evening Aarti'],
      bestTimeToVisit: 'October to March', recommendedDuration: '2 Days', approximateBudget: '₹6,000 - ₹10,000', travelStyle: 'History / Relax', difficulty: 'Easy',
      travelTips: ['Climb to the roof of the Jahangir Mahal or Chaturbhuj temple for the best panoramic views of the town.', 'Orchha is best visited as a detour on the way to or from Khajuraho.', 'The sunset view of the Chhatris from across the river is iconic.'],
      image: "https://images.unsplash.com/photo-1642152654247-5b9a9c5e8092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      image: "https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      image: "https://images.unsplash.com/photo-1717417925229-600a68f75cab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd82', name: 'Madurai', state: 'Tamil Nadu', category: 'HERITAGE',
      shortDescription: 'One of India’s oldest continuously inhabited cities, anchored by the massive, vividly colorful Meenakshi Temple.',
      fullDescription: 'Madurai is the cultural capital of Tamil Nadu, a city that runs on deep, ancient energy. It is one of the oldest continuously inhabited cities in the world. The absolute center of Madurai—both geographically and spiritually—is the Meenakshi Amman Temple. This massive complex is a masterpiece of Dravidian architecture, featuring 14 towering gopurams (gateway towers) covered in thousands of vividly painted stucco figures of gods, demons, and animals. The city around the temple is a sensory explosion of jasmine flowers, bustling bazaars, and traditional South Indian food. Madurai is a living, breathing testament to ancient Tamil culture and devotion.',
      whyVisit: 'To experience the overwhelming scale, color, and spiritual intensity of the Meenakshi Temple, the heart of Tamil culture.',
      topAttractions: ['Meenakshi Amman Temple', 'Thirumalai Nayakkar Mahal', 'Gandhi Memorial Museum', 'Pudhu Mandapam'],
      thingsToDo: ['Temple visits', 'Eating Jigarthanda (local drink)', 'Shopping for cotton sarees', 'Heritage walks'],
      bestTimeToVisit: 'October to March', recommendedDuration: '2 Days', approximateBudget: '₹7,000 - ₹12,000', travelStyle: 'Spiritual / Culture', difficulty: 'Easy',
      travelTips: ['Strict dress codes apply at the temple; shoulders and knees must be covered.', 'Electronics, including mobile phones, are strictly prohibited inside the Meenakshi Temple.', 'Visit the Thirumalai Nayakkar Mahal for its impressive pillars and evening light show.'],
      image: "https://images.unsplash.com/photo-1692173248120-59547c3d4653?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      image: "https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      image: "https://plus.unsplash.com/premium_photo-1697730426305-113c62434f97?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'd85', name: 'Delhi', state: 'Delhi', category: 'HERITAGE',
      shortDescription: 'The sprawling capital of India, seamlessly blending ancient Mughal monuments with a modern, bustling metropolis.',
      fullDescription: 'Delhi is a city of layers, where centuries of history coexist with a fast-paced modern metropolis. Old Delhi is a chaotic, sensory-rich maze of narrow alleys, historic bazaars like Chandni Chowk, and the towering Jama Masjid. In stark contrast, New Delhi, designed by the British, features wide, leafy avenues and grand government buildings. The city is studded with magnificent Mughal and Islamic architecture, including three UNESCO World Heritage sites: the Red Fort, Qutub Minar, and Humayun’s Tomb. Beyond history, Delhi is India’s culinary capital, offering everything from legendary street food to world-class fine dining.',
      whyVisit: 'To explore centuries of empires, incredible Mughal architecture, and arguably the best street food scene in the country.',
      topAttractions: ['Red Fort', 'Qutub Minar', 'Humayun’s Tomb', 'India Gate', 'Lotus Temple', 'Chandni Chowk'],
      thingsToDo: ['Heritage walks in Old Delhi', 'Street food tasting', 'Shopping at Dilli Haat', 'Visiting museums'],
      bestTimeToVisit: 'October to March', recommendedDuration: '3-5 Days', approximateBudget: '₹10,000 - ₹20,000', travelStyle: 'History / City', difficulty: 'Easy',
      travelTips: ['Use the Delhi Metro; it is clean, safe, and bypasses the city’s notoriously bad traffic.', 'Air pollution can be severe in November and December.', 'Bargain aggressively in street markets like Sarojini Nagar.'],
      image: "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    // 🌿 NATURE / WILDLIFE / UNIQUE
    {
      id: 'd86', name: 'Jim Corbett National Park', state: 'Uttarakhand', category: 'WILDLIFE',
      shortDescription: 'India’s oldest national park, famous for its wild Bengal tigers, herds of elephants, and beautiful Sal forests.',
      fullDescription: 'Established in 1936, Jim Corbett is India’s oldest and one of its most prestigious national parks. Located in the Himalayan foothills, the park boasts a diverse landscape of dense Sal forests, vast grasslands, and the Ramganga River. It is most famous for its healthy population of the majestic Bengal Tiger, though sightings require patience and luck. Beyond tigers, the park is home to large herds of wild elephants, leopards, and over 600 species of birds, making it a paradise for birdwatchers. The Dhikala zone is the most highly sought-after area, offering deep jungle safaris and incredible wildlife encounters.',
      whyVisit: 'For the thrill of tracking Bengal tigers in the wild and experiencing the rich biodiversity of India’s oldest national park.',
      topAttractions: ['Dhikala Zone', 'Bijrani Zone', 'Corbett Waterfall', 'Garjiya Devi Temple', 'Corbett Museum'],
      thingsToDo: ['Jeep Safari', 'Canter Safari', 'Bird Watching', 'Nature Photography', 'River Rafting (seasonal)'],
      bestTimeToVisit: 'November to June', recommendedDuration: '3-4 Days', approximateBudget: '₹12,000 - ₹25,000', travelStyle: 'Wildlife / Nature', difficulty: 'Easy',
      travelTips: ['Safaris must be booked months in advance through the official government portal.', 'Dhikala zone requires an overnight stay inside the park.', 'Wear muted jungle colors (green, brown) and maintain strict silence during safaris.'],
      image: "https://plus.unsplash.com/premium_photo-1661810910850-cca5c23d677e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amltJTIwY29yYmV0dCUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D"
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
      image: "https://images.unsplash.com/photo-1700562554203-5b8644512759?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFudGhhbWJob3JlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww"
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
      image: "https://plus.unsplash.com/premium_photo-1664302694391-845d50183b55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2F6aXJhbmdhJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww"
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
      image: "https://media.istockphoto.com/id/625743384/photo/lion-walking-in-jungle-of-gir-national-park-wildlife.webp?a=1&b=1&s=612x612&w=0&k=20&c=azTNRwA2EF66qlYk7GpmySTt1KYBlq7YiJSun0Wr7Ww="
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
      image: "https://images.unsplash.com/photo-1701368533954-f0dc06ebfbed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZGhhdmdhcmglMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D"
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
      image: "https://images.unsplash.com/photo-1590514526581-bf7feaee0217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FuaGElMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D"
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
      image: "https://images.unsplash.com/photo-1549300461-11c5b94e8855?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZGFyYmFuc3xlbnwwfHwwfHx8MA%3D%3D"
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
      image: "https://images.pexels.com/photos/37454900/pexels-photo-37454900.jpeg"
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
      image: "https://images.unsplash.com/photo-1750353127340-4214a44d0760?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuZGVsaXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 'd95', name: 'Wayanad', state: 'Kerala', category: 'NATURE',
      shortDescription: 'A lush, green district in the Western Ghats known for spice plantations, waterfalls, and wild elephants.',
      fullDescription: 'Set high in the Western Ghats, Wayanad is a rural, pristine district characterized by misty mountains, sprawling tea and spice plantations, and dense tropical forests. It is an integral part of the Nilgiri Biosphere Reserve and offers abundant wildlife sightings, particularly large herds of wild elephants at the Muthanga Wildlife Sanctuary. Wayanad is also rich in history, housing the ancient Edakkal Caves, which feature petroglyphs dating back to the Neolithic age. Visitors can hike to the heart-shaped lake at Chembra Peak, explore cascading waterfalls, and stay in luxurious treehouses. It is Kerala’s ultimate nature and adventure retreat.',
      whyVisit: 'For its pristine, cool climate, dense forests, wild elephants, and a perfect mix of hiking and relaxation.',
      topAttractions: ['Chembra Peak', 'Edakkal Caves', 'Wayanad Wildlife Sanctuary (Muthanga)', 'Banasura Sagar Dam', 'Soochipara Falls'],
      thingsToDo: ['Trekking', 'Wildlife Safari', 'Spices Shopping', 'Boating on the dam', 'Ziplining'],
      bestTimeToVisit: 'October to May', recommendedDuration: '3-4 Days', approximateBudget: '₹10,000 - ₹16,000', travelStyle: 'Nature / Leisure', difficulty: 'Easy',
      travelTips: ['The hike to Edakkal Caves is steep and can be difficult for the elderly.', 'Trekking to Chembra Peak requires permission from the forest office.', 'Expect heavy, continuous rain if visiting during the monsoon.'],
      image: "https://plus.unsplash.com/premium_photo-1661961791283-18b14a3a0083?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      image: "https://images.unsplash.com/photo-1547908771-05259d82e2df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      image: "https://images.unsplash.com/photo-1630641565807-798790b6e6ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      image: "https://images.unsplash.com/photo-1720800670044-ef28c2621bbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXJhdmlrdWxhbSUyME5hdGlvbmFsJTIwUGFya3xlbnwwfHwwfHx8MA%3D%3D"
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
      image: "https://images.unsplash.com/photo-1593692716621-1e228b0a9224?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      image: "https://images.pexels.com/photos/35416185/pexels-photo-35416185.jpeg?_gl=1*nuhca3*_ga*NDE2OTEwMDkyLjE3ODkwNzc3MjM.*_ga_8JE65Q40S6*czE3ODk1Nzg5MzIkbzYkZzEkdDE3ODk1Nzg5NDYkajQ2JGwwJGgw"
    }
  ];
    // Expand this array in your actual codebase for the remaining 95 destinations using this exact schema!


  // MOCK TRIPS (Specific dates & groups linked to destinations above)
  export const mockTrips = [
    {
      id: 't1', destinationId: 'd30', // Linked to Sandakphu
      startDate: '2026-11-12', endDate: '2026-11-16', durationDays: 5,
      budget: 9500, maxMembers: 12, currentMembers: 8, status: 'Open',
      demographics: { males: 5, females: 3, ageGroups: { '18-24': 3, '25-30': 4, '31-40': 1, '40+': 0 } },
      itinerary: [
        { day: 1, title: 'Arrival in Manebhanjan', description: 'Meet the team and prep for the trek.' },
        { day: 2, title: 'Trek to Tumling', description: 'Walk through the beautiful Singalila forest.' },
        { day: 3, title: 'Summit Day', description: 'Reach Sandakphu peak for sunset.' }
      ]
    },
    {
      id: 't2', destinationId: 'd30',
      startDate: '2026-12-05', endDate: '2026-12-09', durationDays: 5,
      budget: 9500, maxMembers: 10, currentMembers: 10, status: 'Full',
      demographics: { males: 6, females: 4, ageGroups: { '18-24': 2, '25-30': 5, '31-40': 3, '40+': 0 } },
      itinerary: []
    },
    {
      id: 't3', destinationId: 'd1', // Linked to Spiti
      startDate: '2026-06-10', endDate: '2026-06-18', durationDays: 9,
      budget: 21000, maxMembers: 15, currentMembers: 5, status: 'Open',
      demographics: { males: 3, females: 2, ageGroups: { '18-24': 1, '25-30': 2, '31-40': 2, '40+': 0 } },
      itinerary: []
    }
  ];