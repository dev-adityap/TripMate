import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import tripRoutes from './routes/tripRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Enable CORS so your React frontend (port 5173) can talk to Express (port 5000)
app.use(cors());

// 2. Body parser for JSON requests
app.use(express.json());

// 3. Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// 4. Mount Trip Routes (Crucial: matches http://localhost:5000/api/trips/:id/ai)
app.use('/api/trips', tripRoutes);

// Root test route
app.get('/', (req, res) => {
  res.send('TripMate Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});