import express from 'express'
import Debug from 'debug'
import { players } from './player'

const app = express.Router()
const debug = new Debug('game-of-drones:root')
const games = []


function gameGetterMiddleware(req, res, next) {
    const { id } = req.params
    req.game = games.find(({ _id }) => _id === +id)
    next()
}

function roundGetterMiddleware(req, res, next) {
    const round = req.game.rounds.find(({ number }) => number === req.body.number)
    round.movePlayer1 = req.body.movePlayer1
    round.movePlayer2 = req.body.movePlayer2
    req.round = round
    next()
}

function winnerSelectorMiddleware(req, res, next) {
    var moveP1 = req.round.movePlayer1
    var moveP2 = req.round.movePlayer2
    var result = ((moveP1.kills == moveP2.move) - (moveP2.kills == moveP1.move))
    debug(`result: ${result}`)
    req.round.winner = (result > 0) ? req.game.player1 : (result < 0) ? req.game.player2 : null
    debug(`winner: ${req.round.winner}`)
    next()
}

function winsIncreaserMiddleware(req, res, next) {
    if (req.round.winner == req.game.player1) {
        req.game.wins.player1 = req.game.wins.player1 + 1
    } else if (req.round.winner == req.game.player2) {
        req.game.wins.player2 = req.game.wins.player2 + 1
    }
    next()
}

function endCheckerMiddleware(req, res, next) {
    if (req.game.wins.player1 >= 3)
        req.game.winner = req.game.player1
    else if (req.game.wins.player2 >= 3)
        req.game.winner = req.game.player2
    if (req.game.winner != null) {
        req.game.winner.rank++
        return res.status(201).json(req.game)
    }
        
    next()
}

function newGame(p1 = null, p2 = null) {
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
        winner: null,
        wins: {
            player1: 0,
            player2: 0
        }
    }
    games.push(newGame)
    return newGame
}

function findPlayerOrGetNewOne(playerName) {
    var p = players.find(player => player.name == playerName)
    if (p == null) {
        p = { name: playerName, rank: 0 }
        players.push(p)
    }
    return p
}

app.post('/', (req, res) => {
    const playerNames = req.body
    const p1 = findPlayerOrGetNewOne(playerNames.namePlayer1)
    const p2 = findPlayerOrGetNewOne(playerNames.namePlayer2)
    const game = newGame(p1, p2)
    res.status(201).json(game)
})

app.post('/:id/round',
    gameGetterMiddleware,
    roundGetterMiddleware,
    winnerSelectorMiddleware,
    winsIncreaserMiddleware,
    endCheckerMiddleware,
    (req, res) => {
    req.game.rounds.push({
        number: req.round.number + 1,
        movePlayer1: null,
        movePlayer2: null,
        winner: null
    })
    res.status(201).json(req.game)
})

app.get('/:id', gameGetterMiddleware, (req, res) => res.status(200).json(req.game))

app.get('/', (req, res) => res.status(200).json(games))

export default app