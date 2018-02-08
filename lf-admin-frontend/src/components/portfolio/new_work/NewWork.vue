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
                input(
                    type="text"
                    placeholder="Ссылка на сайт"
                    v-model="link"
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
                    @click="handleSave"
                )
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Button from '../../ui/button/Button';
import InputFile from '../../ui/input-file/InputFile';

export default {
    props: {},
    data(){
        return {
            name: '',
            technologies: '',
            link: '',
            file: {}
        }
    },
    methods: {
        ...mapMutations([
            'saveFile'
        ]),
        ...mapActions([
            'saveWork'
        ]),
        handleFile(file) {
            if (file.type === 'image/gif' ||
                file.type === 'image/jpeg' ||
                file.type === 'image/png')
            {
                this.file = file;
            }
            else {
                alert('supported formats: gif, jpeg, png');
            }
        },
        handleSave() {
            if (this.name && this.technologies && this.link && this.file.name) {
                const data = {
                    name: this.name,
                    technologies: this.technologies,
                    link: this.link,
                    file: this.file
                };

                this.name = '',
                this.technologies = '';
                this.link = '';
                this.file = {};

                this.saveWork(data);
            }
            else {
                alert('All fields are required');
            }
        }
    },
    components: {
        cButton: Button,
        cInputFile: InputFile
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
