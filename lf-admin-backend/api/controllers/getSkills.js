const mongoose = require('mongoose');
const Skills = require('../models/skills');

module.exports = () => {
    return new Promise((resolve, reject) => {
        Skills.find({}, (err, skills) => {
            console.log("err", err);
            console.log("skills", skills);
            if (err) {
                reject(err);
            }
            else {
                const responseSkills = {};
                // очищаем от всех лишних полей (пока только от _id)
                if (skills) {
                    responseSkills._id = skills[0]._id;
                    responseSkills.skills = skills[0].skills.map((requestedSkills) => {
                        let skillsObj = {};
                        skillsObj.skillType = requestedSkills.skillType;
                        skillsObj.skills = requestedSkills.skills.map((requestedOneSkill) => {
                            let oneSkillObj = {};
                            oneSkillObj.name = requestedOneSkill.name;
                            oneSkillObj.percent = requestedOneSkill.percent;
                            return oneSkillObj;
                        });
                        return skillsObj;
                    });
                }
                resolve(responseSkills);
            }
        });
    })

}



// оставлю тут на случай работы с файловой системой
//module.exports = require(`${process.cwd()}/assets/skills.json`);

