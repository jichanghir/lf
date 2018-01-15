<template lang="pug">
    div
        .page-subtitle Добавить запись
        .form
            .form__row
                input(
                    type="text"
                    placeholder="Название"
                    v-model="noteName"
                ).new-note-input
            .form__row
                input(
                    type="date"
                    v-model="noteDate"
                ).new-note-input
            .form__row
                textarea(
                    placeholder="Содержание"
                    v-model="noteText"
                )

            c-button(
                text="Сохранить"
                @click="handleSaveNote"
            )
</template>

<script>
import Button from '../../ui/button/Button';

export default {
    props: {},
    data(){
        return {
            noteName: '',
            noteDate: '',
            noteText: ''
        }
    },
    methods: {

        handleSaveNote(...args) {
            if (this.noteName && this.noteDate && this.noteText) {
                console.log("this.noteDate", new Date(this.noteDate));

                const data = {
                    note_id: Date.now() * Math.random(),
                    note_name: this.noteName,
                    note_date: this.noteDate,
                    note_text: this.noteText
                };
                this.$emit('onSaveNote', data);
            }
            else {
                alert('Все поля должны быть заполнены');
            }
        }
    },
    components: {
        cButton: Button
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
