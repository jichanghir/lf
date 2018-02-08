<template lang="pug">
    div
        .page-title Страница "Обо мне"
        .skills
            skill(
                v-for="(item, index) in skills"
                :key="index"
                :skillObj="item"
                @addNewSkill="addNewSkill"
                @deleteSkill="deleteSkill"
                @saveSkillPercent="saveSkillPercent"
            )
            .skill
                input(
                    type="text"
                    v-model="newSkillType"
                    placeholder="Имя раздела"
                )
                c-button(
                    text="Добавить раздел"
                    @click="onAddSkillType"
                ).skills__add-category
        c-button(
            text="Сохранить"
            @click="saveSkills"
        )
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Skill from './skill/Skill';
import Button from '../ui/button/Button';

export default {
    props: {},
    data(){
        return {
            newSkillType: ''
        }
    },
    computed: {
        ...mapGetters(['skills'])
    },
    methods: {
        ...mapActions([
            'fetchSkills',
            'saveSkills'
        ]),
        ...mapMutations([
            'addNewSkill',
            'deleteSkill',
            'saveSkillPercent',
            'addSkillType'
        ]),
        onAddSkillType() {
            if (this.newSkillType) {
                this.addSkillType(this.newSkillType);
                this.newSkillType = '';
            }
            else {
                alert('skill category name are required')
            }
        }
    },
    created() {
        this.fetchSkills();
    },
    components: {
        skill: Skill,
        cButton: Button
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
