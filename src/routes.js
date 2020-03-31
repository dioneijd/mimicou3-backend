const express = require('express')
const WordController = require('./controllers/WordController')
const SessionController = require('./controllers/SessionController')
const RoomController = require('./controllers/RoomController')

const routes = express.Router()


routes.get('/words', WordController.index)
routes.get('/words/:id', WordController.show)
routes.post('/words', WordController.store)
routes.put('/words/:id', WordController.update)
routes.delete ('/words/:id', WordController.destroy)

routes.get('/sessions', SessionController.index)
routes.get('/sessions/:id', SessionController.show)
routes.post('/sessions', SessionController.store)
routes.put('/sessions/:id', SessionController.update)
routes.delete ('/sessions/:id', SessionController.destroy)

routes.get('/rooms', RoomController.index)
routes.get('/rooms/:id', RoomController.show)
routes.post('/rooms', RoomController.store)
routes.put('/rooms/:id', RoomController.update)
routes.delete ('/rooms/:id', RoomController.destroy)

module.exports = routes