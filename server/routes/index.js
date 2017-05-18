var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
  res.send("yay")
})

module.exports = router
