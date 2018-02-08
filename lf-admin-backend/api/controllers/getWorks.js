const mongoose = require('mongoose');
const Work = require('../models/work');

module.exports = () => {
    return new Promise((resolve, reject) => {
        Work.find({})
        .then((result) => {
            resolve(result);
        })
        .catch((err) => reject(err));
    });
}
