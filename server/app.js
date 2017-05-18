var express = require('express');
var bodyParser = require('body-parser')

var index = require('./routes/index')
var users = require('./routes/users')

var app = express();

var mongoose = require('mongoose');
var mongoDbConfig = 'mongodb://localhost/rudypress'

mongoose.connect(mongoDbConfig, (err, res) => {
  console.log('connected to DB: ' + mongoDbConfig);
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', index);
app.use('/api/users', users);

app.listen(3000, () => {
  console.log('rudypress is listening on port 3000')
})


module.exports = app;
