<template>
  <form class="ui form" @submit.prevent="submitSignin">
    <div class="field">
      <label>Username</label>
      <input type="text" name="first-name" placeholder="Username" v-model="userForm.username">
    </div>
    <div class="field">
      <label>Password</label>
      <input type="password" name="last-name" placeholder="Password" v-model="userForm.password">
    </div>

    <button class="ui button" type="submit">Submit</button>
  </form>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      userForm: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions([
      'userSignin'
    ]),
    submitSignin() {
      console.log("submitSignin")

      console.log(this.userForm);

      this.userSignin(this.userForm);

      this.$router.push('/')

    }
  }
}
</script>

<style lang="css">
</style>
