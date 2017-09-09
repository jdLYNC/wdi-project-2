const mongoose = require('mongoose');

const rocketSchema = new mongoose.Schema({
  // Rocket info
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  nationality: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },

  // Rocket stats
  height: { type: Number, required: true },
  payload: { type: Number, required: true },
  numBoosters: { type: Number, required: true },
  totalLaunches: { type: Number, required: true },
  successes: { type: Number, required: true },
  failures: { type: Number, required: true }
});

module.exports = mongoose.model('Rocket', rocketSchema);
