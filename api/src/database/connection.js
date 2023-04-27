require('dotenv').config()
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL

async function dbConnection () {
  try {
    await mongoose.connect(DATABASE_URL)
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConnection