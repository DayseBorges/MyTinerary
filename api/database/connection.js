require('dotenv').config()
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL



dbConnection().catch(err => console.log(err));

async function dbConnection() {
  await mongoose.connect(DATABASE_URL)
}

module.exports = dbConnection