var User = require('../models/user')
var passwordHash = require('password-hash')
var jwt = require('jsonwebtoken')


exports.signup = (req, res, next) => {
  req.body.password = passwordHash.generate(req.body.password)

  User.create(req.body, (err, user) => {
    if(err) res.send(err)
    else {
      console.log('User create', user)
      res.send(user)
    }
  })
}

exports.signin = (req, res, next) => {
  console.log('signin', req.user)

  let user = req.user
  var token = jwt.sign(
  {
    _id: user._id,
    name: user.name,
    username: user.username,
  },
  process.env.TOKEN_SECRET,
  { expiresIn: '1h' }
);

  let userObj = {
    _id: user._id,
    name: user.name,
    username: user.username,
    token: token
  }

  res.send(userObj)
}

exports.getAll = (req, res, next) => {
  User.find( (err, users) => {
    if(err) res.send(err)
    else {
      res.send(users)
    }
  })
}
