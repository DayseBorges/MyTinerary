const Router = require('express').Router()

// Traemos controllers 
const citiesControllers = require('../controllers/cityController')
const {getCities, postCity, deleteCity, updateCity, updateName, getCity} = citiesControllers

Router.get('/:id', getCity)

Router.get('/', getCities)

Router.post('/', postCity)

Router.delete('/:id', deleteCity)

Router.put('/:id', updateCity)

Router.patch('/:id', updateName)

module.exports = Router