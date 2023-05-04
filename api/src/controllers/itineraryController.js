const Itinerary = require('../models/itineraryModel.js');
const itineraryService = require('../services/itineraryService.js');
const cityService = require('../services/cityService.js');
const { isValidObjectId } = require('mongoose');

const itineraryControllers = {
    postItinerary: async (req, res) => {
        const {name, url, city, description, price, duration, creatorName} = req.body
        if (!name || !url || !city || !description || !price || !duration || !creatorName) return res.status(400).json({error: 'Faltan parametros'})
        try {
            let findedCity = await cityService.getCity(city) || await cityService.searchCityByName(city)
            if (!findedCity) return res.status(400).json({error: 'No se ha podido crear el itinerario, la ciudad no existe.'})
            console.log(findedCity)
            let itinerary = await itineraryService.createItinerary({name, url, city: findedCity._id, description, price, duration, creatorName})
            res.status(200).json({response: itinerary})
        } catch (error) {
            res.status(400).json({error})
        }
    },
}
module.exports = itineraryControllers