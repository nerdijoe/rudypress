var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController');
var jwtAuth = require('../helpers/jwtAuth');

router.get('/', articleController.getAll)
router.post('/', jwtAuth.verifyUser, articleController.create)

module.exports = router
