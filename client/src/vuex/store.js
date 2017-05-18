import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const store = new Vuex.Store({
  state: {
    message: "Hello",
    user: {
      _id: null,
      name: '',
      username: '',
      token: ''
    },
    is_login: false
  },
  getters: {
    getMessage(state) {
      return state.message
    },
    getUser(state) {
      return state.user
    },
    getLoginStatus(state) {
      return state.is_login
    }
  },
  mutations: {
    setSigninStuff(state) {
      state.user._id = localStorage._id
      state.user.name = localStorage.name
      state.user.username = localStorage.username
      state.user.token = localStorage.token

      state.is_login = true

      console.log('setSigninStuff', state.user)
    }
  },
  actions: {
    userSignin({commit}, user) {

      axios.post('http://localhost:3000/api/users/signin', {
        username: user.username,
        password: user.password
      })
      .then( response => {
        console.log("*** userSignin")
        console.log(response.data)

        // set to localStorage
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('_id', response.data._id)
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('username', response.data.username)

        commit('setSigninStuff')

      })
      .catch( err => {
        console.log(err)
      })

    },
    checkTokenfromLocalStorage({commit}) {
      if(localStorage.token != null){
        commit('setSigninStuff')
      }
    }
  } // end of actions

})

export default store
