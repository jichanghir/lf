<template lang="pug">
    button(
        type="button"
        @click="handleClick"
    ).button {{text}}
</template>

<script>
export default {
    props: {
        text: String
    },
    data(){
        return {}
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
