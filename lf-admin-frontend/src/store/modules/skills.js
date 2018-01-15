import axios from 'axios';
import config from '../config';

export default {
    state: {
        _skillsId: 0, // нужен для поиска значения в базе
        skills: []
    },
    getters: {
        skills(state) {
            return state.skills;
        }
    },
    mutations: {
        controllerAddNewSkill(state, {skillType, newSkill} ) {
            state.skills.forEach((obj) => {
                if (obj.skillType === skillType) {
                    obj.skills.push(newSkill);
                }
            });
        },
        controllerDeleteSkill(state, {skillType, skillId}) {
            state.skills.forEach((obj) => {
                if (obj.skillType === skillType) {
                    obj.skills = obj.skills.filter((skill) => skill.id !== skillId);
                }
            });
        },
        controllerSaveSkills(state) {
            axios.post(`${config.API_URL}/api/setSkills`,
                {
                    _id: state._skillsId,
                    skills: state.skills
                })
            .then((response) => {
                console.log("response", response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        controllerSaveSkill(state, {skillType, skillId, value}) {

            state.skills.forEach((obj) => {
                if (obj.skillType === skillType) {
                    obj.skills.forEach((skill) => {
                        if (+skill.id === +skillId) {
                            console.log("skill", skill);
                            skill.percent = +value;
                        }
                    });
                }
            });
        }
    },
    actions: {
        controllerFetchSkills({state, rootGetters}) {

            axios.get(`${config.API_URL}/api/getSkills`)
            .then((response) => {
                let skillsWithIds = response.data.result.skills;
                skillsWithIds.forEach((responsesSkills) => {
                    responsesSkills.id = Date.now() * Math.random();
                    responsesSkills.skills.forEach((responsesSkill) => {
                        responsesSkill.id = Date.now() * Math.random();
                    });
                });
                console.log('skillsWithIds', skillsWithIds);
                state.skills = skillsWithIds;
                state._skillsId = response.data.result._id;
            })
            .catch(function (error) {
                console.log(error);
            });

        }
    }
}
