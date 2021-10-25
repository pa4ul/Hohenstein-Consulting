import { createStore } from 'vuex'

export default createStore({
  state: {
    language: "en"
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
