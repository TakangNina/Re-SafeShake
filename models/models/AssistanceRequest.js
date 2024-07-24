const mongoose = require('mongoose');

const assistanceRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  disabilityType: { type: String, required: true },
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AssistanceRequest', assistanceRequestSchema);