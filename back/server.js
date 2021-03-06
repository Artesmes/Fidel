const express = require('express');
const clientRoutes = require('./routes/client.routes')
const restRoutes = require('./routes/rest.routes')


const cookieParser = require('cookie-parser')

require('dotenv').config({path:'./config/.env'})
require('./config/db')

const {checkUsers, requireAuth} = require('./middleware/auth.middleware')
const cors = require('cors')
const app = express(); // app est le framework express

const corsOptions = {
    origin: process.env.CLIENT_URL,
    Credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

//corss
app.use(cors('*'))

// middlewares
app.use(express.json())
app.use(cookieParser())

// jwt
app.get('*', checkUsers)
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
})

// routes
app.use('/api/client', clientRoutes)
app.use('/api/rest', restRoutes)


// server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})