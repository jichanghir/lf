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
                        @blur="handleSavePercent(skillObj.skillType, item.id, $event)"
                        @keyup.enter="handleSavePercent(skillObj.skillType, item.id, $event)"
                    )
                td.skill__percent %
                td.skill__delete
                    button(
                        @click="handleDeleteSkill(skillObj.skillType, item.id)"
                    ).skill__delete-btn x
        .skill__add-new
            input(
                type="text"
                v-model="newSkillName"
                placeholder="Введите новое имя"
            )
            cButton(
                text="Добавить"
                @click="handleAddNewSkill(skillObj.skillType)"
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
        handleAddNewSkill(skillType) {

            if (this.newSkillName) {
                const newSkill = {
                    "id": Date.now() * Math.random(),
                    "name": this.newSkillName,
                    "percent": 0
                }

                this.$emit('onNewSkill', skillType, newSkill);

                this.newSkillName = '';
            }
            else {
                alert('Введите новое имя скила');
            }

        },
        handleDeleteSkill(skillType, skillId) {
            this.$emit('onDeleteSkill', skillType, skillId);
        },
        handleSavePercent(skillType, skillId, event) {
            const value = event.target.value;
            this.$emit('onSaveSkillPercent', skillType, skillId, value)
        }
    },
    components: {
        cButton: Button
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
