const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

var app = express();

var router = require('./services/router')

mongoose.connect('mongodb://localhost:27017/miniapi-node-rn_mongodb_1')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use('/v1', router)

var PORT = process.env.PORT || 3000
var HOST = process.env.HOST || 'localhost'

console.log('Start on', HOST, PORT)
app.listen(PORT, HOST)