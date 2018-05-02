<template>
  <form class="login-form" @submit.prevent>
    <h2>Sign up for Plannit</h2>
    <input name="email" v-model="email" id="signup-email" type="email" autocomplete="email" placeholder="Email address" spellcheck="false" class="login-input">
    <input name="password" v-model="password" id="signup-password" type="password" autocomplete="new-password" class="login-input" placeholder="Password">
    <div class="buttons-container">
      <input type="button" value="Back" class="cancel-button form-button" @click="showLoginForm">
      <input type="submit" value="Sign Up" class="login-button form-button" @click="signUp">
    </div>
  </form>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // this.$store.dispatch("setUser", user);
            // this.$router.replace("/");
            this.showLoginForm();
          },
          error => {
            alert(error.message);
          });
    },
    showLoginForm() {
      this.$store.dispatch("showLoginForm");
    }
  }
}
</script>

<style>
</style>
