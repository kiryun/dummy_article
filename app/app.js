const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/user', require('./api/users'))
app.use('/article', require('./api/articles'))

module.exports = app