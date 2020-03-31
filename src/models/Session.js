const mongo = require('mongoose')

const Session = new mongo.Schema({
    teamName: {
        type: String,
        default: ''
    }
})

module.exports = mongo.model('Session', Session)