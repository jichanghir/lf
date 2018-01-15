<template lang="pug">
    div
        .page-title Страница "Обо мне"
        .skills
            skill(
                v-for="(item, index) in skills"
                :key="index"
                :skillObj="item"
                @onNewSkill="handleAddNewSkill"
                @onDeleteSkill="handleDeleteSkill"
                @onSaveSkillPercent="handleSaveSkillPercent"
            )
        c-button(
            text="Сохранить"
            @click="handleSaveNotes"
        )
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Skill from './skill/Skill';
import Button from '../ui/button/Button';

export default {
    props: {},
    data(){
        return {}
    },
    computed: {
        ...mapGetters(['skills'])
    },
    methods: {
        ...mapActions(['controllerFetchSkills']),
        ...mapMutations([
            'controllerAddNewSkill',
            'controllerDeleteSkill',
            'controllerSaveSkills',
            'controllerSaveSkill'
        ]),
        handleAddNewSkill(skillType, newSkill) {
            this.controllerAddNewSkill({skillType, newSkill});
        },
        handleDeleteSkill(skillType, skillId) {
            this.controllerDeleteSkill({skillType, skillId});
        },
        handleSaveNotes() {
            this.controllerSaveSkills();
        },
        handleSaveSkillPercent(skillType, skillId, value) {
            this.controllerSaveSkill({skillType, skillId, value});
        }
    },
    created() {
        this.controllerFetchSkills();
    },
    components: {
        skill: Skill,
        cButton: Button
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
