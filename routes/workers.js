const express = require('express');
const router = express.Router();
const Worker = require('../models/Worker');

// Get all workers
router.get('/', async (req, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a worker (for testing)
router.post('/', async (req, res) => {
  try {
    const worker = await Worker.create(req.body);
    res.json(worker);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
