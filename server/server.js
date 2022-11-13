const path = require('path')
const express = require('express')

const fruitsRouter = require('./routes/fruits')

const server = express()

// MIDDLEWARE
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/', fruitsRouter)

module.exports = server
