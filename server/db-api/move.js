import Debug from 'debug'
import { Move } from '../models'

const debug = new Debug('game-of-drones:db-api:move')

export default async function findAll() {
    debug('Finding all moves...')
    return await Move.find()
}