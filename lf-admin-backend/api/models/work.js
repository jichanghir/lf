'use strict';

const mongoose = require('mongoose');
const WorkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name are required']
    },
    technologies: {
        type: String,
        required: [true, 'Technologies text are required']
    },
    img: {
        type: String,
        required: [true, 'File are required']
    },
    link: {
        type: String,
        required: [true, 'Link are required']
    }
});

module.exports = mongoose.model('work', WorkSchema);
