const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, require: true},
    city: String,
    state: String,
    zip: String,

    lastAccessed: { type: Date, default: Date.now },
})

const Person = mongoose.model("Person", personSchema)

module.exports = Person;