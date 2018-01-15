<template lang="pug">
    div
        input(
            type="file"
            id="input-file"
            @change="handleUpload"
        ).input
        label(
            for="input-file"
        ).label {{fileName}}
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Upload'
        }
    },
    data(){
        return {
            file: null
        }
    },
    computed: {
        fileName() {
            return this.file ? this.file.name : this.text;
        }
    },
    methods: {
        handleUpload(e) {
            this.file = e.target.files[0];

            this.$emit('change', e.target.files[0]);
        }
    },
    components: {}
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
