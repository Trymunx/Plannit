<template>
  <div id="login-page">
    <div id="login-dialogue">
      <div class="login-header">
        <img class="logo" src="../../assets/Plannit.png">
        <span class="app-title">Plannit</span>
      </div>
      <login-form v-if="loginWindowDisplay === 'loginForm'"></login-form>
      <forgot-password v-else-if="loginWindowDisplay === 'forgotPassword'"></forgot-password>
      <signup-form v-else-if="loginWindowDisplay == 'signUp'"></signup-form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import LoginForm from "@/components/Login/LoginForm";
import SignupForm from "@/components/Login/SignupForm";
import ForgotPassword from "@/components/Login/ForgotPassword";
// import firebaseUI from "firebaseui";

//   created() {
//     var uiConfig = {
//       signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID
//       ]
//     }
//     var ui = new firebaseui.auth.AuthUI(firebase.auth());
//     ui.start("#firebaseui-auth-container", uiConfig);
//   }
// };
export default {
  components: {
    LoginForm,
    SignupForm,
    ForgotPassword
  },
  computed: {
    loginWindowDisplay() {
      return this.$store.getters.loginWindowDisplay;
    }
  }
};
</script>

<style>
.app-title {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 2.2em;
  color: #5b6670;
  padding: 10px;
  margin-left: 15px;
  margin-right: 50px;
  padding-top: 14px;
}

#login-page {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    -165deg,
    #d8d8d8 30%,
    #dddddd 25%,
    #efefef 75%,
    #ececec 70%,
    #fff
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
}

#login-dialogue {
  width: 400px;
  height: 500px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 3px 15px #a3a3a3;

  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-header {
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
}

.logo {
  height: 60px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  margin-bottom: auto;
}

h2 {
  font-size: 1.6em;
  font-weight: normal;
  color: #626e7a;
  margin-bottom: 25px;
}

h3 {
  font-size: 1.2em;
  font-weight: normal;
  color: #626e7a;
  margin-bottom: 25px;
}

.login-input {
  border: none;
  border-bottom: solid 2px #dfdfdf;
  width: 80%;
  height: 30px;
  padding: 0px 10px;
  margin: 8px;
  transition: border linear 200ms;
}

.buttons-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.form-button {
  width: 100px;
  height: 40px;
  margin: 20px;
  border: none;
  border-radius: 2px;
  font-size: 1.2em;
}

.login-button {
  color: #f5f5f5;
  background-color: #317bdb;
}

.cancel-button {
  color: #f5f5f5;
  background-color: #a3a3a3;
}

.login-input:focus {
  outline: none;
  border-bottom: solid 2px #317bdb;
}
</style>
