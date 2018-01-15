const mongoose = require('mongoose');
const Article = require('../models/article');

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        let article = new Article();

        article.title = req.body.note_name;
        article.body = req.body.note_text;
        article.date = req.body.note_date;

        article.save()
        .then(() => {
            resolve('Article saved');
        })
        .catch((err) => {
            reject(err);
        });
    });
}
