const City = require('../database/models');

const citiesControllers = {
    getCities: (req,res)=>{
        res.json({response: 'Ejecutado corretamente!'})
    },
    postCity: async (req, res) => {
        const {name, url, country} = req.body
        let info = {response: '', error: ''}
        try {
            let find = await City.findOne({name: name.toLowerCase()})
            if (find) return res.status(400).json({...info, error: 'Ya existe una ciudad con ese nombre'})
            info.response = await City.create({name, url, country})
        } catch (error) {
            error = error
            console.log(error)
        }
        res.json(info)
    },
    deleteCity: async (req, res) => { 
        const {id} = req.params;
        try {
            let city = await City.findByIdAndUpdate(id, {enabled: false});
            return res.json({response: city}) 
        } catch (error) {
            return res.status(400).json({error: error})
        }
    },
    updateCity: async (req, res) => {
        const {id} = req.params;
        const {name, url, country} = req.body;
        try {
            let city = await City.findByIdAndUpdate(id, {name: name, url: url, country: country})
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
            let city = await City.findByIdAndUpdate(id, {name: name})
            return res.json({response: city}) 
        }
        catch {
            return res.status(400).json({error: error})
        }
    }
}
module.exports = citiesControllers