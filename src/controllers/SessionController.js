const Session = require('../models/Session')

module.exports = {

    async index(req, res){
        let sessions = await Session.find()
        return res.json(sessions)
    },

    async show(req, res){
        let session = await Session.findById(req.params.id)

        if (!session) {
            session = { error: `Session id ${req.params.id} not found` }
        }
        return res.json(session)
    },

    async store(req, res){
        const {teamName} = req.body

        let session = await Session.create({teamName})

        return res.json(session)
    },

    async update(req, res){
        let session = await Session.findById(req.params.id)

        if (!session){
            session = { error: `Session id ${req.params.id} not found` }
            return res.json(session)
        }

        session.teamName = req.body.teamName
        session.save()

        return res.json(session)

    },

    async destroy(req, res){
        let session = await Session.findById(req.params.id)
        session.remove()

        return res.json(session)
    },

}