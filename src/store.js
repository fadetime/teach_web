import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		language: 'English'
	},
	mutations: {
		setLanguage:(state , item) => {
			state.language = item
		}
	},
	actions: {
		setLanguage: ({ commit }, item) => {
			commit('setLanguage', item)
		}
	}
})
