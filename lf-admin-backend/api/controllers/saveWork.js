const mongoose = require('mongoose');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const Work = require('../models/work');

module.exports = (req) => {
    return new Promise((resolve, reject) => {

        const form = new formidable.IncomingForm();
        form.uploadDir = path.join(process.cwd(), 'public/images/works');
        form.keepExtensions = true;

        form.parse(req, function(err, fields, files) {
            if (err) {
                reject(err);
            }
            if (!fields.name || !fields.technologies) {
                fs.unlink(files.file.path);
                reject('name and technologies are required');
            }

            fs.rename(files.file.path, path.join(process.cwd(), 'public/images/works', files.file.name), (err) => {
                if (err) {
                    reject(err);
                }

                let work = new Work();

                work.name = fields.name;
                work.technologies = fields.technologies;
                work.link = fields.link;
                work.img = files.file.name;

                work.save()
                .then(() => {
                    resolve('work saved');
                })
                .catch((err) => {
                    reject(err);
                });
            });

        });
    });
}
