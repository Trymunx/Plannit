<template>
  <form class="login-form" @submit.prevent>
    <h3>Enter email to receive a password reset link:</h3>
    <input name="email" v-model="email" type="email" autocomplete="email" placeholder="Email address" spellcheck="false" class="login-input">
    <div class="buttons-container">
      <input type="button" value="Back" class="cancel-button form-button" @click="showLoginForm">
      <input type="submit" value="Reset" class="login-button form-button" @click="resetPassword">
    </div>
  </form>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: ""
    }
  },
  methods: {
    showLoginForm() {
      this.$store.dispatch("showLoginForm");
    },
    resetPassword() {
      firebase.auth().sendPasswordResetEmail(this.email)
        .then(() => {
          alert("Password reset link has been sent, please check your emails to reset your password, then login with your new password.")
          this.showLoginForm();
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
}
</script>

<style scoped>
</style>
