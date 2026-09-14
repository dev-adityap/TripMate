import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  category: { type: String, required: true },
  overview: { type: String, required: true },
  whyVisit: { type: String, required: true },
  attractions: [{ type: String }],
  activities: [{ type: String }],
  bestTime: { type: String },
  idealDuration: { type: String },
  approxBudget: { type: String },
  travelStyle: { type: String },
  difficulty: { type: String, default: 'Easy' },
  tips: [{ type: String }],
  image: { type: String, default: null }
}, { timestamps: true });

export default mongoose.model('Destination', destinationSchema);