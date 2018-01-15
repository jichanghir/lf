<template lang="pug">
    #app
        app-header

        app-tabs

        .content
            router-view

</template>

<script>
import Header from './components/header/Header';
import Tabs from './components/tabs/Tabs';

export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        appHeader: Header,
        appTabs: Tabs
    }
}
</script>

<style lang="scss">

</style>

