import Vue from 'vue'
import Vuex from 'vuex'
import skills from './modules/skills'
import notes from './modules/notes'
import works from './modules/works'

Vue.use(Vuex)

export const store = new Vuex.Store({
    getters: {},
    modules: {
        skills,
        notes,
        works
    }
})
