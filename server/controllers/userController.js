var User = require('../models/user')


exports.create = (req, res, next) => {
  User.create(req.body, (err, user) => {
    if(err) res.send(err)
    else {
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
