const {City} = require('../database/models')

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
    }
}
module.exports = citiesControllers