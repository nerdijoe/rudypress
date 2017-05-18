var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var passwordHash = require('password-hash');
var cors = require('cors');

require('dotenv').config();


passport.use(new Strategy(
  function(username, password, next) {
    let User = require('./models/user')

    User.findOne( {username: username}, (err, user) => {
      if(err) next(err);
      console.log(user)
      if(passwordHash.verify(password, user.password)) {
        next(null, user)
      } else {
        next("User entered wrong username and password");
      }
    })
  }
));



var index = require('./routes/index');
var users = require('./routes/users');
var articles = require('./routes/articles');

var app = express();

var mongoose = require('mongoose');
var mongoDbConfig = 'mongodb://localhost/rudypress'

mongoose.connect(mongoDbConfig, (err, res) => {
  console.log('connected to DB: ' + mongoDbConfig);
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', index);
app.use('/api/users', users);
app.use('/api/articles', articles);


app.listen(3000, () => {
  console.log('rudypress is listening on port 3000')
})


module.exports = app;
