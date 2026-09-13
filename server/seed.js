import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from './models/Destination.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tripmate';

const destinationsData = [
  { 
    id: 1, 
    name: "Sandakphu", 
    state: "West Bengal", 
    type: "Trek", 
    emoji: "🥾", 
    price: 14500, 
    rating: 4.8, 
    duration: "6 Days",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 2, 
    name: "Valley of Flowers", 
    state: "Uttarakhand", 
    type: "Trek", 
    emoji: "🥾", 
    price: 12000, 
    rating: 4.9, 
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1588668213735-6bf5960d3d52?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 3, 
    name: "Kedarnath", 
    state: "Uttarakhand", 
    type: "Trek / Spiritual", 
    emoji: "🥾", 
    price: 9500, 
    rating: 4.7, 
    duration: "4 Days",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 11, 
    name: "Tawang", 
    state: "Arunachal Pradesh", 
    type: "Mountains", 
    emoji: "🏔️", 
    price: 22000, 
    rating: 4.9, 
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 12, 
    name: "Spiti Valley", 
    state: "Himachal Pradesh", 
    type: "Adventure", 
    emoji: "🏔️", 
    price: 24500, 
    rating: 4.9, 
    duration: "8 Days",
    image: "https://images.unsplash.com/photo-1578592829428-5694c4987f21?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 16, 
    name: "Munnar", 
    state: "Kerala", 
    type: "Hills", 
    emoji: "🌿", 
    price: 10500, 
    rating: 4.6, 
    duration: "4 Days",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 21, 
    name: "Goa", 
    state: "Goa", 
    type: "Beach", 
    emoji: "🏖️", 
    price: 15000, 
    rating: 4.5, 
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 25, 
    name: "Andaman Islands", 
    state: "Andaman & Nicobar", 
    type: "Beach", 
    emoji: "🏝️", 
    price: 32000, 
    rating: 4.9, 
    duration: "6 Days",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 30, 
    name: "Alappuzha", 
    state: "Kerala", 
    type: "Backwaters", 
    emoji: "🌴", 
    price: 13500, 
    rating: 4.8, 
    duration: "3 Days",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 31, 
    name: "Taj Mahal, Agra", 
    state: "Uttar Pradesh", 
    type: "Monument", 
    emoji: "🏛️", 
    price: 6500, 
    rating: 4.8, 
    duration: "2 Days",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 33, 
    name: "Jaipur", 
    state: "Rajasthan", 
    type: "Heritage", 
    emoji: "🏛️", 
    price: 11000, 
    rating: 4.7, 
    duration: "4 Days",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 34, 
    name: "Jaisalmer", 
    state: "Rajasthan", 
    type: "Heritage / Desert", 
    emoji: "🏜️", 
    price: 14000, 
    rating: 4.8, 
    duration: "4 Days",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 41, 
    name: "Varanasi", 
    state: "Uttar Pradesh", 
    type: "Culture", 
    emoji: "🛕", 
    price: 7500, 
    rating: 4.9, 
    duration: "3 Days",
    image: "https://images.unsplash.com/photo-1561359313-0639aad49ff6?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 43, 
    name: "Rishikesh", 
    state: "Uttarakhand", 
    type: "Adventure", 
    emoji: "🧗", 
    price: 8500, 
    rating: 4.8, 
    duration: "3 Days",
    image: "https://images.unsplash.com/photo-1621327014077-5c4d28434770?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 46, 
    name: "Leh-Ladakh", 
    state: "Ladakh", 
    type: "Adventure", 
    emoji: "🏔️", 
    price: 35000, 
    rating: 5.0, 
    duration: "9 Days",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7bb73d2?auto=format&fit=crop&w=800&q=80" 
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    await Destination.deleteMany({});
    console.log('Cleared existing destinations.');

    await Destination.insertMany(destinationsData);
    console.log('Database seeded successfully with unique images!');

    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();