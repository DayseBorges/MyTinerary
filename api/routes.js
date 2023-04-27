const Router = require('express').Router()

// Traemos controllers 
const citiesControllers = require('./controllers/cities')
const {getCities, postCity, deleteCity, updateCity, updateName} = citiesControllers

Router.route('/cities')
.get(getCities)
.post(postCity)

Router.route('/cities/:id')
.delete(deleteCity)
.put(updateCity)
.patch(updateName)

module.exports = Router