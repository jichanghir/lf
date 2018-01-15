import Vue from 'vue';
import VueRouter from 'vue-router';

import About from './components/about/About';
import Blog from './components/blog/Blog';
import Portfolio from './components/portfolio/Portfolio';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: About
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/portfolio',
            component: Portfolio
        }
    ]
})
