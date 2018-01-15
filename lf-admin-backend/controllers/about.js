//const skills = require('../assets/skills.json');

const getSkills = require('../api/controllers/getSkills');

module.exports.page = (req, res) => {

    getSkills()
    .then((result) => {
        console.log("result", result);
        res.render('about', {
            title: 'About',
            skills: result.skills
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
};
