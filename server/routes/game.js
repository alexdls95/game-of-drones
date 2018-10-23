import express from 'express'

const app = express.Router()

const games = []
const players = []


function getPlayer(playerName) {
    var p = players.find(player => player.name == playerName)
    if (p == null) {
        p = {name: playerName, rank: 0}
        players.push(p)
    }
    return p
}

app.post('/', (req, res) => {
    const playerNames = req.body
    const p1 = getPlayer(playerNames.namePlayer1)
    const p2 = getPlayer(playerNames.namePlayer2)
    const firstRound = {
        number: 1,
        movePlayer1: null,
        movePlayer2: null,
        winner: null
    }
    const newGame = {
        _id: +new Date(),
        player1: p1,
        player2: p2,
        rounds: [firstRound],
        winner: null
    }
    games.push(newGame)
    res.status(201).json(newGame)
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    const g = games.find(game => game._id === +id)
    res.status(200).json(g)
})

app.get('/', (req, res) => res.status(200).json(games))

export default app