import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose'
import { mongoUrl } from './config'

const PORT = 3000
const debug = new Debug('game-of-drones:root')

mongoose.Promise = global.Promise

async function start() {
    await mongoose.connect(mongoUrl)

    app.listen(PORT, () => {
        debug('Server running at port ' + PORT);
    })
}

start()



