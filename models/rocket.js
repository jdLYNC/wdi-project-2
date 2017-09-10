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
  firstFlight: { type: Date, required: true },
  image: imageSchema,

  // Rocket stats
  height: { type: Number, required: true },
  payload: { type: Number, required: true },
  stages: { type: Number, required: true },
  costPerLaunch: { type: Number, required: true },
  totalLaunches: { type: Number, required: true },
  successes: { type: Number, required: true },
  failures: { type: Number, required: true }
});

module.exports = mongoose.model('Rocket', rocketSchema);
