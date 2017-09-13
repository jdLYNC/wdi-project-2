const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  description: { type: String, required: true }
});

const rocketSchema = new mongoose.Schema({
  // Rocket info
  name: { type: String, required: true, unique: true },
  manufacturer: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  image: imageSchema
});

module.exports = mongoose.model('Rocket', rocketSchema);
