import express from 'express'
// import { move } from '../db-api'

const app = express.Router()

const moves = [
    {
        _id: 1,
        move: 'paper',
        kills: 'rock'
    },
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
    {
        _id: 4,
        move: 'dog',
        kills: 'cat'
    },
]


// I tried, but I didn't get it. :-(

// app.get('/', async (req, res) => {
//     try {
//         const moves = await move.findAll()
//         res.status(200).json(moves)
//     } catch (err) {
//         res.status(500).json({
//             message: 'An error ocurred getting moves',
//             err
//         })
//     }
// })

app.get('/', (req, res) => res.status(200).json(moves))

app.get('/:id', (req, res) => res.status(200).json(moves.find(({ _id }) => _id === req.params.id)))

export default app
