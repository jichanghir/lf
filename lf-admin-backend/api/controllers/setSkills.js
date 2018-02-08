const mongoose = require('mongoose');
const Skills = require('../models/skills');

module.exports = (req) => {
    return new Promise((resolve) => {

        Skills.findOne()
        .then((result) => {
            if (result) {
                result.set(req.body);

                return result;
            }
            else {
                const cards = new Skills(req.body);
                return cards;
            }
        })
        .then((skills) => skills.save())
        .then(() => resolve('skills Saved'))
        .catch((err) => {throw new Error(err)});
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
