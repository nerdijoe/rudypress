import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: "Hello"
  },
  getters: {
    getMessage(state) {
      return state.message
    }
  },
  mutations: {

  },
  actions: {

  }

})

export default store
