<template>
  <form class="ui form" @submit.prevent="submitSignup">
    <div class="field">
      <label>Fullname</label>
      <input type="text" name="full-name" placeholder="Fullname" v-model="userForm.name">
    </div>

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
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      userForm: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'userSignup'
    ]),
    submitSignup() {
      console.log("submitSignup")
      this.userSignup(this.userForm)
      

    }
  }
}
</script>

<style lang="css">
</style>
