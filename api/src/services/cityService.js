const City = require('../models/cityModel')

let cityService = {
    getCities: async () => {
        let cities = await City.find({enabled: true})
        return cities
    },
    searchCityByName: async (name) => {
        let city = await City.findOne({name: name.toLowerCase()})
        return city
    },
    createCity: async (name, url, country) => {
        let city = await City.create({name, url, country})
        return city
    },
    deleteCity: async (id) => {
        let city = await City.findByIdAndUpdate(id,{enabled: false})
        return city
    },
    deleteForceCity: async (id) => {
        let city = await City.findByIdAndDelete(id);
        return city
    },
    updateCity: async (id, name, url, country) => {
        let city = await City.findByIdAndUpdate(id,{name, url, country})
        return city
    },
}

module.exports = cityService