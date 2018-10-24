import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const GameSchema = Schema ({
    player1: { type: ObjectId, ref: 'Player', required: true },
    player2: { type: ObjectId, ref: 'Player', required: true },
    rounds: [{ 
        number: { type: Number, required: true },
        movePlayer1: String,
        movePlayer2: String,
        winner: { type: ObjectId, ref: 'Player' }
    }],
    winner: { type: ObjectId, ref: 'Player' },
    wins: {
        player1: Number,
        player2: Number
    }
})

export default mongoose.model('Game', GameSchema)