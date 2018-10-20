import express from 'express'
import { move } from './routes'

const app = express()

app.use('/api/moves', move)

export default app