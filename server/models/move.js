import mongoose, { Schema } from 'mongoose'

const MoveSchema = Schema ({
    move: { type: String, required: true },
    kills: { type: String, required: true }
})

export default mongoose.model('Move', MoveSchema)