import express from 'express'

const app = express.Router()

const move = {
    _id: 1,
    move: 'paper',
    kills: 'rock'
}
const moves = [
    move,
    {
        _id: 2,
        move: 'rock',
        kills: 'scissors'
    },
    {
        _id: 3,
        move: 'scissors',
        kills: 'paper'
    },
]

app.get('/', (req, res) => res.status(200).json(moves))

app.get('/:id', (req, res) => res.status(200).json(move))

export default app