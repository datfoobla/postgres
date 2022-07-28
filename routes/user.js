const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')

router.post('/create', userController.create)
router.get('/show', userController.show)


module.exports = router