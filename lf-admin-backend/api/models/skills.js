'use strict';

const mongoose = require('mongoose');
const skillsSchema = new mongoose.Schema({
    // _id: {type: Schema.Types.ObjectId, required: [true, '_id required']},
    skills: [
        {
            skillType: {type: String, required: [true, 'skillType are required']},
            skills: [
                {
                    name: String,
                    percent: Number
                }
            ]
        }
    ]

});

module.exports = mongoose.model('Skills', skillsSchema);
