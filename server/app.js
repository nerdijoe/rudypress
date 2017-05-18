var express = require('express');
var bodyParser = require('body-parser')

var index = require('./routes/index')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', index);


app.listen(3000, () => {
  console.log('rudypress is listening on port 3000')
})


module.exports = app;
