<template>
  <form class="login-form" @submit.prevent>
    <h2>Login to Plannit</h2>
    <input name="email" v-model="email" id="login-email" type="email" autocomplete="email" placeholder="Email address" spellcheck="false" class="login-input">
    <input name="password" v-model="password" id="login-password" type="password" autocomplete="current-password" class="login-input" placeholder="Password">
    <div id="forgot-password" @click="showForgotPassword">Forgotten your password?</div>
    <div class="buttons-container">
      <input type="button" value="Sign Up" class="cancel-button form-button" @click="showSignUpForm">
      <input type="submit" value="Login" class="login-button form-button" @click="signIn">
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
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // this.$store.dispatch("setUser", user);
            // this.$router.replace("/");
          },
          error => {
            alert(error.message);
          });
    },
    showForgotPassword() {
      this.$store.dispatch("showForgotPassword");
    },
    showSignUpForm() {
      this.$store.dispatch("showSignupForm");
    }
  }
}
</script>

<style>
#forgot-password {
  margin: 10px;
  font-size: 0.8em;
  color: #8da7c9;
  text-decoration: underline;
  cursor: pointer;
}
</style>

