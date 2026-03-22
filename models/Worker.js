const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  profession: { type: String, required: true },
  rate:       { type: Number, required: true },
  rating:     { type: Number, default: 4.5 },
  userId:     { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Worker', workerSchema);
