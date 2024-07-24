const express = require('express');
const AssistanceRequest = require('../models/AssistanceRequest');

const router = express.Router();

router.post('/request', async (req, res) => {
  try {
    const { name, location, disabilityType, message } = req.body;
    const request = new AssistanceRequest({ name, location, disabilityType, message });
    await request.save();
    res.status(201).json({ message: 'Assistance request submitted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting assistance request', error: error.message });
  }
});

module.exports = router;