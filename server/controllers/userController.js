var User = require('../models/user')
var passwordHash = require('password-hash')

exports.create = (req, res, next) => {
  req.body.password = passwordHash.generate(req.body.password)

  User.create(req.body, (err, user) => {
    if(err) res.send(err)
    else {
      console.log('User create', user)
      res.send(user)
    }
  })
}

exports.getAll = (req, res, next) => {
  User.find( (err, users) => {
    if(err) res.send(err)
    else {
      res.send(users)
    }
  })
}
