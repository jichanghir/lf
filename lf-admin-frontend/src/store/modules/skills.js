import axios from 'axios';
import config from '../config';

export default {
    state: {
        skills: []
    },
    getters: {
        skills(state) {
            return state.skills;
        }
    },
    mutations: {
        addNewSkill(state, {skillType, newSkill} ) {
            state.skills.forEach((obj) => {
                if (obj.skillType === skillType) {
                    obj.skills.push(newSkill);
                }
            });
        },

        deleteSkill(state, {skillType, skillId}) {
            state.skills.forEach((obj) => {
                if (obj.skillType === skillType) {
                    obj.skills = obj.skills.filter((skill) => skill.id !== skillId);
                }
            });
        },

        saveSkillPercent(state, {skillType, skillId, value}) {
            state.skills.forEach((obj) => {
                if (obj.skillType === skillType) {
                    obj.skills.forEach((skill) => {
                        if (+skill.id === +skillId) {
                            skill.percent = +value;
                        }
                    });
                }
            });
        },

        addSkillType(state, newSkillType) {
            state.skills.push({
                skillType: newSkillType,
                skills: []
            });
        },

        initStateSkills(state, baseSkills) {
            if (baseSkills) {
                baseSkills.forEach((responsesSkills) => {
                    responsesSkills.id = Date.now() * Math.random();
                    responsesSkills.skills.forEach((responsesSkill) => {
                        responsesSkill.id = Date.now() * Math.random();
                    });
                });
                state.skills = baseSkills;
            }
        }
    },
    actions: {
        fetchSkills({state, rootGetters, commit}) {

            axios.get(`${config.API_URL}/api/getSkills`)
            .then((response) => {
                commit('initStateSkills', response.data.result.skills);
            })
            .catch((error) => console.error(error) );

        },

        saveSkills({state}) {
            axios.post(`${config.API_URL}/api/setSkills`,
                {
                    skills: state.skills
                })
            .then((response) => {
                console.log("response", response);
            })
            .catch(function (error) {
                console.error(error);
            });
        },
    }
}
