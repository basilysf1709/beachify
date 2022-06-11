require('dotenv').config()
let cors = require('cors')

const express = require('express')
const app = express()
app.use(cors())

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/beachify', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(5500, () => console.log('Server Started'))