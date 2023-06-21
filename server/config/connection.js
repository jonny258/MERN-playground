const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/testMangoDB')

module.exports = mongoose.connection;