const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
    word: {type: String, default: ''},
    category: {type: String, default: ''},
    score: {type: Number, default: 0},
})

module.exports = mongoose.model('Word', WordSchema)