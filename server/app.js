import express from 'express'
import { move } from './routes'

const app = express()

// Uncomment this block to avoid browser access problems due to security protocols.
// if (process.env.NODE_ENV === 'development') {
//     app.use((req, res, next) => {
//         res.setHeader('Access-Control-Allow-Origin', '*')
//         res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
//         res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS')
//         next()
//     })
// }

app.use('/api/moves', move)

export default app