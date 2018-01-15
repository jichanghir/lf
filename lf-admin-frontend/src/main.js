import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './router'
import { store } from './store/index'

new Vue({
  el: '#app',
  router: Router,
  store: store,
  render: h => h(App)
})
