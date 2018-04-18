<template>
  <div id="login-page">
    <div id="login-dialogue">
      <div class="login-header">
        <img class="logo" src="../../assets/Plannit.png">
        <span class="app-title">Plannit</span>
      </div>
      <form class="login-form">
        <input name="email" id="login-email" type="email" autocomplete="email" placeholder="Email address" spellcheck="false" class="login-input">
        <input name="password" id="login-password" type="password" autocomplete="current-password" class="login-input" placeholder="Password">
        <a href="https:google.com/search?q=Define+unlucky" id="forgot-password">Forgotten your password?</a>
        <input type="submit" value="Login" class="login-button">
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-title {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 2.2em;
  color: #404242;
  padding: 10px;
  margin-left: 15px;
  margin-right: 50px;
  padding-top: 14px;
}

#forgot-password {
  margin: 10px;
  font-size: 0.8em;
  color: #8da7c9;
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

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  margin-bottom: auto;
}

.login-input {
  border: none;
  border-bottom: solid 2px #dfdfdf;
  width: 80%;
  height: 30px;
  padding: 0px 10px;
  margin: 5px;
  transition: border linear 200ms;
}

.login-button {
  width: 80px;
  height: 40px;
  margin: 20px;
  background-color: #317bdb;
  border: none;
  color: #f5f5f5;
  font-family: sans-serif;
  font-size: 1.2em;
}

.login-input:focus {
  outline: none;
  border-bottom: solid 2px #317bdb;
}
</style>
