const City = require('../models/cityModel.js');
const cityService = require('../services/cityService.js');

const citiesControllers = {
    getCities: async (req,res)=>{
        let cities = await cityService.getCities()
        res.json({response: cities})
    },
    getCity: async (req,res)=>{
        try {
            let {id} = req.params
            let city = await cityService.getCity(id)
            city && res.status(200).json({response: city})
        } catch (error) {
            res.status(400).json({error})    
        }
    },
    postCity: async (req, res) => {
        const {name, url, country, description} = req.body
        if (!name || !url || !country || !description) return res.status(400).json({error: 'Faltan parametros'})
        try {
            let find = await cityService.searchCityByName(name)
            if (find) return res.status(400).json({error: 'Ya existe una ciudad con ese nombre'})
            let city = await cityService.createCity(name, url, country, description)
            res.status(200).json({response: city})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    deleteCity: async (req, res) => { 
        const {id} = req.params;
        try {
            let city = await cityService.deleteCity(id)
            return res.json({response: city}) 
        } catch (error) {
            return res.status(400).json({error: error})
        }
    },
    deleteCityForce: async (req, res) => { 
        const {id} = req.params;
        try {
            let city = await cityService.deleteForceCity(id)
            return res.json({response: city}) 
        } catch (error) {
            return res.status(400).json({error: error})
        }
    },
    updateCity: async (req, res) => {
        const {id} = req.params;
        const {name, url, country, description} = req.body;
        try {
            let city = await cityService.updateCity(id, name, url, country, description)
            return res.json({response: city}) 
        }
        catch {
            return res.status(400).json({error: error})
        }
    },
    updateName: async (req, res) => {
        const {id} = req.params;
        const {name} = req.body;
        try {
            let city = await cityService.updateCity(id, name)
            return res.json({response: city}) 
        }
        catch {
            return res.status(400).json({error: error})
        }
    }
}
module.exports = citiesControllers