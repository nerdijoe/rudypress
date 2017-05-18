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
    <a class="item">
      Friends
    </a>
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

      <a class="ui item">
        Sign up
      </a>



      <a class="ui item">
        Logout
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

  },
  created() {

  }
}
</script>

<style lang="css">
</style>
