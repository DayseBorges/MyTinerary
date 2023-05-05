const Itinerary = require('../models/itineraryModel')
const mongoose = require('mongoose')


let itineraryService = {
    // getCities: async () => {
    //     let cities = await City.find({enabled: true})
    //     return cities
    // },
    // getCity: async (id) => {
    //     console.log('Service ',id);
    //     let city = await City.findById(id)
    //     console.log('Service ',city);
    //     return city
    // },
    // searchCityByName: async (name) => {
    //     let city = await City.findOne({name: name.toLowerCase()})
    //     return city
    // },
    createItinerary: async ({name, url, city, description, price, duration, creatorName}) => {
        let itinerary = await Itinerary.create({name, url, city, description, price, duration, creatorName})
        return itinerary
    },
    // deleteCity: async (id) => {
    //     let city = await City.findByIdAndUpdate(id,{enabled: false})
    //     return city
    // },
    // deleteForceCity: async (id) => {
    //     let city = await City.findByIdAndDelete(id);
    //     return city
    // },
    // updateCity: async (id, name, url, country, description) => {
    //     let city = await City.findByIdAndUpdate(id,{name, url, country, description})
    //     return city
    // },
}

module.exports = itineraryService