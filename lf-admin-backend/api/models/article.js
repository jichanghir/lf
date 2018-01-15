'use strict';

const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title are required']
    },
    body: {
        type: String,
        required: [true, 'Body text are required']
    },
    date: {
        type: Date,
        default: Date.now(),
        required: [true, 'Date are required']
    }
});

module.exports = mongoose.model('article', ArticleSchema);
