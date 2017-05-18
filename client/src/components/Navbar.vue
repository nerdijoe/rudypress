<template>

  <div class="ui secondary  menu">
    <router-link
      to="/"
      class="ui item"
      active-class="active"
      exact
    >
      Home
    </router-link>

    <a class="item">
      Messages
    </a>
    <router-link
      v-if="is_login"
      to="articleform"
      class="ui item"
      active-class="active"
      exact
    >
      Write new article
    </router-link>


    <div class="right menu">

      <router-link
        v-if="!is_login"
        to="signin"
        class="ui item"
        active-class="active"
        exact
      >
        Sign in
      </router-link>

      <router-link
        v-if="!is_login"
        to="signup"
        class="ui item"
        active-class="active"
        exact
      >
        Sign up
      </router-link>




      <a class="ui item" v-if="is_login" @click="clickSignout">
        Sign out
      </a>
    </div>
  </div>


</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters({
    user: 'getUser',
    is_login: 'getLoginStatus'
  }),
  methods: {
    ...mapActions([
      'userSignout'
    ]),
    clickSignout() {
      console.log('clickSignout')
      this.userSignout()
    }
  },
  created() {

  }
}
</script>

<style lang="css">
</style>
