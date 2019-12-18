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

//const IP = 'localhost'; // para emulador
const IP = '192.168.0.105'; // en red local

var PORT = process.env.PORT || 3000
var HOST = process.env.HOST || IP

console.log('Start on', HOST, PORT)
app.listen(PORT, HOST)