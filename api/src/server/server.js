require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const dbConnection = require('../database/connection')

//middlewares
app.use(cors(
//     {
//     origin: 'http://localhost:3000', // Define la origen permitida
//     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Define los métodos permitidos
//     allowedHeaders: ['Content-Type', 'Authorization'], // Define los encabezados permitidos
// }
));

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/city', require('../router/cityRouter')) 
app.use('/api/itinerary', require('../router/itineraryRouter')) 

dbConnection()

app.listen(PORT, ()=>{
    console.log('Servidor iniciado, puerto: ' + PORT)
})