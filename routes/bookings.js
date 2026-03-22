const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a booking
router.post('/', async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json({ message: 'Booking confirmed', booking });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all bookings (for admin/testing)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId workerId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
