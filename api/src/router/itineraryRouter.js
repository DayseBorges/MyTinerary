const Router = require('express').Router()

// Traemos controllers 
const itineraryControllers = require('../controllers/itineraryController')
const {postItinerary} = itineraryControllers

Router.post('/', postItinerary)


module.exports = Router