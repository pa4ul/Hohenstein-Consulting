import { createStore } from 'vuex'

export default createStore({
  state: {
    language: "de"
  },
  mutations: {
    changeLanguage(state, newLang){
      state.language = newLang
    },
  },
  actions: {
    changeLanguage({ commit }, newLanguage) {
      commit("changeLanguage", newLanguage)
    },
  },
  modules: {
  }
})
