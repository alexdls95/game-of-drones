import express from 'express'

const app = express.Router()

app.get('/', (req, res) => res.status(200).json(players))

app.get('/:id', (req, res) => {
    const id = req.params.id
    const p = players.find(player => player._id === +id)
    res.status(200).json(p)
})

export default app