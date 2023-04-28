require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const dbConnection = require('../database/connection')

//middlewares
app.use(cors({
    origin: 'http://localhost:3000', // Define a origem permitida
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Define os métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Define os cabeçalhos permitidos
}));

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/city', require('../router/cityRouter')) 

dbConnection()

app.listen(PORT, ()=>{
    console.log('Servidor iniciado, puerto: ' + PORT)
})