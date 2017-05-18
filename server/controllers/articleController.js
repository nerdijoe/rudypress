var Article = require('../models/article')

exports.create = (req, res, next) => {

  let user = req.decoded;
  console.log(`create Article`, user)

  var newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: user._id
  })

  console.log("create article", newArticle)
  // res.send('create article')

  newArticle.save( (err, article) => {
    if(err) res.send(err)
    else {
      res.send(article)
    }
  })
}

exports.getAll = (req, res, next) => {
  Article.find()
  .populate("author")
  .exec( (err, articles) => {
    if(err) res.send(err)
    else {
      res.send(articles)
    }
  })
}
