<template lang="pug">
    div
        .page-title Портфолио
        new-work
</template>

<script>
import NewWork from './new_work/NewWork';

export default {
    props: {},
    data(){
        return {}
    },
    computed: {},
    methods: {},
    components: {
        newWork: NewWork
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
