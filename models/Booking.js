const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: true },
  address:  { type: String, required: true },
  date:     { type: String, required: true },
  time:     { type: String, required: true },
  problem:  { type: String, required: true },
  status:   { type: String, enum: ['pending', 'confirmed', 'done'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
