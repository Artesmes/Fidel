const express = require('express');
const clientRoutes = require('./routes/client.routes')

const cookieParser = require('cookie-parser')

require('dotenv').config({path:'./config/.env'})
require('./config/db')

const {checkUsers} = require('./middleware/auth.middleware')
const app = express(); // app est le framework express

// middlewares
app.use(express.json())
app.use(cookieParser())

// jwt
app.get('*', checkUsers)

// routes
app.use('/api/client', clientRoutes)

// server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})