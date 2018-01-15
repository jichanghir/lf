<template lang="pug">
    .tabs
        router-link(
            v-for="tab in tabs"
            :to="tab.href"
            v-bind:class="{ active: tab === activeTab }"
            :key="tab.tabName"
        ).tabs__link {{tab.tabName}}
</template>

<script>
export default {
    props: {},
    data(){
        return {
            tabs: [
                {tabName: 'about', href: '/'},
                {tabName: 'blog', href: '/blog'},
                {tabName: 'portfolio', href: '/portfolio'}
            ],
            activeTab: 'tab1'
        }
    },
    methods: {}
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
