const path = require('path')
const express = require('express')

const fruitsRouter = require('./routes/fruits')
const userRouter = require('./routes/users')

const server = express()

// MIDDLEWARE
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/fruits', fruitsRouter)
server.use('/api/v1/users', userRouter)

module.exports = server
