const mongoose = require('mongoose');
const Article = require('../models/article');

module.exports = () => {
    return new Promise((resolve, reject) => {
        Article.find({})
        .then((result) => {
            resolve(result);
        })
        .catch((err) => reject(err));
    });
}
