<template lang="pug">
    div
        .page-title Страница Блог
        new-note(
            @onSaveNote="addArticle"
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
        ...mapActions(['addArticle'])
    },
    components: {
        newNote: NewNote
    }
}
</script>

<style lang="scss" scoped>

</style>
