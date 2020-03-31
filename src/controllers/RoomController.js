const Room = require('../models/Room')

module.exports = {

    async index(req, res){
        let rooms = await Room.find()
        return res.json(rooms)
    },

    async show(req, res){
        let room = await Room.findById(req.params.id)

        if (!room) {
            room = { error: `Room id ${req.params.id} not found` }
        }
        return res.json(room)
    },

    async store(req, res){
        const {status, teams } = req.body

        let room = await Room.create({status, teams})

        return res.json(room)
    },

    async update(req, res){
        let room = await Room.findById(req.params.id)

        if (!room){
            room = { error: `Room id ${req.params.id} not found` }
            return res.json(room)
        }

        room.status = req.body.status
        room.teams = req.body.teams
        room.save()

        return res.json(room)
    },

    async destroy(req, res){
        let room = await Room.findById(req.params.id)
        room.remove()
        
        return res.json(room)
    },
}