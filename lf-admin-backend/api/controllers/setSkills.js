const mongoose = require('mongoose');
const Skills = require('../models/skills');

module.exports = (req) => {
    return new Promise((resolve, reject) => {
        let newSkills = {};
        newSkills.skills = req.body.skills;

        Skills.update({ _id: req.body._id }, newSkills, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve('skills Saved');
            }
        });
    });
}


// оставлю тут на случай работы с файловой системой
//const fs = require('fs');

// const setSkills = (reqBody) => {
//     if (reqBody.skills) {
//         const path = `${process.cwd()}/assets/skills.json`;
//         fs.writeFile(path, JSON.stringify(reqBody.skills), (err) => {
//             if (err) return false;
//             else return true;
//         })
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// module.exports = setSkills;
