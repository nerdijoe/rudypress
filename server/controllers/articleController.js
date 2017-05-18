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

exports.getOne = (req, res, next) => {
  Article.findById(req.params.id)
  .populate("author")
  .exec( (err, article) => {
    if(err) res.send(err)
    else {
      res.send(article)
    }
  })
}

exports.update = (req, res, next) => {
  // author must be the same as the signed in user
  let user = req.decoded;

  Article.findById(req.params.id, (err, article) => {
    if(err) res.send(err)
    else {
      if(article.author == user._id) {
        //edit
        article.title = req.body.title || article.title;
        article.content = req.body.content || article.content;
        article.category = req.body.category || article.category;

        article.save( (err, updatedArticle) => {
          if(err) res.send(err)
          else {
            res.send(updatedArticle);
          }
        })
      }
      else {
        // author is not the signed in user
        // cannot edit
        res.send({message: "Sorry, You cannot edit this article. You are not the author of this article"})
      }
    }
  })
}

exports.delete = (req, res, next) => {
  let user = req.decoded;

  Article.findById(req.params.id, (err, article) => {
    if(err) res.send(err)
    else {
      if(article.author == user._id) {
        // can delete
      }
      else {
        // author is not the signed in user
        // cannot edit
        res.send({message: "Sorry, You cannot delete this article. You are not the author of this article"})
      }
    }
  })
}
