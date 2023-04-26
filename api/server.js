require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT || 3001;
const Router = require('./routes')
const dbConnection = require('./database/connection')

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', Router) 

dbConnection()

app.listen(PORT, ()=>{
    console.log('Servidor iniciado, puerto: ' + PORT)
})