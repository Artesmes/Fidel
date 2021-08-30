const express = require('express');
const clientRoutes = require('./routes/client.routes')
require('dotenv').config({path:'./config/.env'})
require('./config/db')
const app = express(); // app est le framework express

app.use(express.json())

// routes
app.use('/api/client', clientRoutes)

// server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})