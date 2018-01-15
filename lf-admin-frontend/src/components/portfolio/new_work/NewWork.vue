<template lang="pug">
    div
        .page-subtitle Добавить работу
        .form
            .form__row
                input(
                    type="text"
                    placeholder="Название проэкта"
                    v-model="name"
                )
            .form__row
                input(
                    type="text"
                    placeholder="Технологии"
                    v-model="technologies"
                )
            .form__row
                .upload-work
                    .upload-work__img
                    c-input-file(
                        @change="handleFile"
                        text="Загрузить картинку"
                    )


                c-button(
                    text="Добавить"
                    @click="handleAdd"
                )
</template>

<script>
import Button from '../../ui/button/Button';
import InputFile from '../../ui/input-file/InputFile';

export default {
    props: {},
    data(){
        return {
            name: '',
            technologies: ''
        }
    },
    methods: {
        handleFile(file) {
            // todo: продумать как будет загружаться файл и нужен ли он как required
            console.log("file", file);
        },
        handleAdd() {
            // todo: Добавить нормальную валидацию
            const data = {
                work_name: this.name,
                work_technologies: this.technologies
            }
            console.log('data', data);
        }
    },
    components: {
        cButton: Button,
        cInputFile: InputFile
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
