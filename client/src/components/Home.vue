<template>
  <div class="">
    <h2>Home</h2>
    <div class="" v-if="is_login">
      Hello {{user.name}}!
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters({
    message: 'getMessage',
    user: 'getUser',
    is_login: 'getLoginStatus'
  }),
  methods: {
    ...mapActions([

    ])
  }
}
</script>

<style scoped>
</style>
