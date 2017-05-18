var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  category: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: 'User'}
})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
