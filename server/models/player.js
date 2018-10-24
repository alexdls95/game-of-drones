import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const PlayerSchema = Schema ({
    name: { type: String, required: true, unique: true, index: true },
    rank: { type: Number, default: 0 }
})

PlayerSchema.plugin(uniqueValidator)

export default mongoose.model('Player', PlayerSchema)