const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    url: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    enabled: { type: Boolean, default: true },
    itineraries: {type: Array, required: false}
});

const City = mongoose.model('City', citiesSchema);

module.exports = City;