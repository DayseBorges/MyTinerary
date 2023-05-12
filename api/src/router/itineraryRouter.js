const Router = require('express').Router()

// Traemos controllers 
const itineraryControllers = require('../controllers/itineraryController')
const {postItinerary, putLikes} = itineraryControllers

Router.post('/likes', putLikes);
Router.post('/', postItinerary)

module.exports = Router