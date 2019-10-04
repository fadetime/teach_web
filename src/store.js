import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		language: 'English',
		showLoading: false
	},
	mutations: {
		setLanguage:(state , item) => {
			state.language = item
		},
		setLoading:(state , item) => {
			state.showLoading = item
		}
	},
	actions: {
		setLanguage: ({ commit }, item) => {
			commit('setLanguage', item)
		},
		setLoading: ({ commit }, item) => {
			commit('setLoading', item)
		}
	}
})
