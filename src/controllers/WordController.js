const Word = require('../models/Word')

module.exports = {

    
    async index(req, res){ 
        let words = await Word.find().sort('word')
        return res.json(words)
    },

    async show(req, res){
        let word = {}

        if (req.params.id == 'any'){
            word = await Word.aggregate([{ $sample: { size: 1 }}])
            word = word[0]
        } else {
            word = await Word.findById(req.params.id)
        }

        return res.json(word)
    },

    async store(req, res){
        const {word, category, score} = req.body

        let wordObj = await Word.findOne({ word })

        if (!wordObj) {
            wordObj = await Word.create({ word, category, score})
        }

        return res.json(wordObj)
    },

    async update(req, res){
        const word = await Word.findById(req.params.id)
        word.word = req.body.word
        word.category = req.body.category
        word.score = req.body.score
        word.save()

        return res.json(word)
    },

    async destroy(req, res){
        const word = await Word.findById(req.params.id)
        word.remove()

        return res.json(word)
    },
}

// index: retorna uma listagem
// show: retorna um unico registro
// store: criar um novo registro
// update: atualizar um registro
// destroy: deletar um registro