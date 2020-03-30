const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

const controller = require('./user.controller')

module.exports = router

//for test
//email: test@gmail.com
//password: test

//return to client: id, email
router.post('/signUp', controller.signUp)

//return to client: id, email
router.post('/logIn', controller.logIn)

router.post('/signOut', controller.signOut)
