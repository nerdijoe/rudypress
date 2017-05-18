var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

router.get('/', userController.getAll)
router.post('/signup', userController.create)

module.exports = router
