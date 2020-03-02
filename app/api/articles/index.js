const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

const controller = require('./article.controller')

module.exports = router

router.post('/create', controller.create)
router.get('/articles', controller.articles)