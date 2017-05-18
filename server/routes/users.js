var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var passport = require('passport')

router.get('/', userController.getAll)
router.post('/signup', userController.signup)
router.post('/signin', passport.authenticate('local', {session: false}), userController.signin)

module.exports = router
