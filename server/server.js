import 'dotenv/config';
import aiRoutes from './routes/ai.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import destinationRoutes from './routes/destinations.js';

const app = express();
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use(express.json());

// Replace with your MongoDB Atlas connection string
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/ai', aiRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));