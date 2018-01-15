<template lang="pug">
    div
        .page-title Страница Блог
        new-note(
            @onSaveNote="handleSaveNewNote"
        )

</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import NewNote from './new_note/NewNote';

export default {
    props: {},
    data(){
        return {}
    },
    methods: {
        ...mapMutations(['addNewNotes']),
        handleSaveNewNote(data) {
            this.addNewNotes(data);
        }
    },
    components: {
        newNote: NewNote
    }
}
</script>

<style lang="scss" scoped>

</style>
