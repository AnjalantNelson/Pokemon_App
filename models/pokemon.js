const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    readyToEvolve: {
        type: String,
        required: true,
    }
})

const pokemon = mongoose.model('pokemon', pokemonSchema)

module.exports = pokemon