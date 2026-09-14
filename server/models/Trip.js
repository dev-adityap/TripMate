import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  durationDays: { type: Number, required: true },
  budget: { type: Number, required: true },
  maxMembers: { type: Number, default: 12 },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  demographics: {
    males: { type: Number, default: 0 },
    females: { type: Number, default: 0 },
    ageGroups: {
      '18-24': { type: Number, default: 0 },
      '25-30': { type: Number, default: 0 },
      '31-40': { type: Number, default: 0 },
      '40+': { type: Number, default: 0 }
    }
  },
  status: { type: String, enum: ['Open', 'Full', 'Completed'], default: 'Open' },
  itinerary: [{ day: Number, title: String, description: String }]
}, { timestamps: true });

export default mongoose.model('Trip', tripSchema);