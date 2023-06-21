const mongoose = require('mongoose')

const fruitsSchema = new mongoose.Schema({
    fruit: {type:String, required: true},
    brand: String,
    price: String,
    stock: Number,

    lastAccessed: { type: Date, default: Date.now}
})


const Fruit = mongoose.model('Fruit', fruitsSchema)

module.exports = Fruit;