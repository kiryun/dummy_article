const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

const controller = require('./user.controller')

module.exports = router

router.post('/signUp', controller.signUp)

router.post('/logIn', controller.logIn)