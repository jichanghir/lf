const getArticles = require('../api/controllers/getArticles.js');

module.exports.page = (req, res) => {
    getArticles()
    .then((result) => {
        res.render('blog',{
           title: 'Blog',
           articles: result
        });
    })
    .catch((err) => {
        console.log("err", err);
        res.status(400).send(err);
    })
}
