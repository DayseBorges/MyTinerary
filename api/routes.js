const Router = require('express').Router()

// Traemos controllers 
const citiesControllers = require('./controllers/cities')
const {getCities, postCity} = citiesControllers

Router.route('/cities')
.get(getCities)
.post(postCity)

module.exports = Router