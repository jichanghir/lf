import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import skills from './modules/skills'
import notes from './modules/notes'

Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
    getters: {
        $http: () => (VueResource)
    },
    modules: {
        skills,
        notes
    }
})
