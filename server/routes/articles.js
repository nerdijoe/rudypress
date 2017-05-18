var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController');
var jwtAuth = require('../helpers/jwtAuth');

router.get('/', articleController.getAll);
router.get('/:id', articleController.getOne);
router.post('/', jwtAuth.verifyUser, articleController.create);
router.put('/:id', jwtAuth.verifyUser, articleController.update);
router.delete('/:id', jwtAuth.verifyUser, articleController.delete);

module.exports = router
