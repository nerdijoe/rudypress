<template>
  <form class="ui form" @submit.prevent="submitSignup">
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
export default {
  data() {
    return {
      userForm: {
        name: '',
        username: '',
        pasword: ''
      }
    }
  },
  methods: {
    submitSignup() {
      console.log("submitSignup")
    }
  }
}
</script>

<style lang="css">
</style>
