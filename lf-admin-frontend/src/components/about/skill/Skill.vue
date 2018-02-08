<template lang="pug">
    .skill
        .page-subtitle {{skillObj.skillType}}
        table.skill__table
            tr(
                v-for="item in skillObj.skills"
                :key="item.id"
            )
                td.skill__name {{item.name}}
                td.skill__input
                    input(
                        type="text"
                        :value="item.percent"
                        @blur="saveSkillPercent(skillObj.skillType, item.id, $event)"
                        @keyup.enter="saveSkillPercent(skillObj.skillType, item.id, $event)"
                    )
                td.skill__percent %
                td.skill__delete
                    button(
                        @click="deleteSkill(skillObj.skillType, item.id)"
                    ).skill__delete-btn x
        .skill__add-new
            input(
                type="text"
                v-model="newSkillName"
                placeholder="Имя скила"
            )
            cButton(
                text="Добавить"
                @click="addNewSkill(skillObj.skillType)"
            ).skill__add-btn

</template>

<script>
import Button from '../../ui/button/Button';

export default {
    props: {
        skillObj: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            newSkillName: ''
        }
    },
    methods: {
        addNewSkill(skillType) {

            if (this.newSkillName) {
                const newSkill = {
                    "id": Date.now() * Math.random(),
                    "name": this.newSkillName,
                    "percent": 0
                }

                this.$emit('addNewSkill', {skillType, newSkill});

                this.newSkillName = '';
            }
            else {
                alert('Введите новое имя скила');
            }

        },
        deleteSkill(skillType, skillId) {
            this.$emit('deleteSkill', {skillType, skillId});
        },
        saveSkillPercent(skillType, skillId, event) {
            const value = event.target.value;
            this.$emit('saveSkillPercent', {skillType, skillId, value})
        }
    },
    components: {
        cButton: Button
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
