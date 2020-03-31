const mongo = require('mongoose')

const Room = new mongo.Schema({
    status: {type: Number, default: 10},
    teams: [
        {
            session: {type: mongo.Schema.Types.ObjectId, ref: 'Session'},
            score: {type: Number, default: 0},
            mimicking: {type: Boolean, default: false}
        }
    ],
})

// 10 - waiting for the players, game not started
// 20 - playing, game already started
// 30 - finished, game has finished

module.exports = mongo.model('Room', Room)