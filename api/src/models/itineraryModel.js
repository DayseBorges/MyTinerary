const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    creatorName: {type: String, required: true},
    name: { type: String, unique: true, required: true },
    url: { type: String, required: true },
    city: { type: mongoose.Types.ObjectId, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    duration: {type: Number, required: true},
    enabled: { type: Boolean, default: true },
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;