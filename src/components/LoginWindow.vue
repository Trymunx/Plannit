<template>
  <div id="login-page">
    <div id="login-dialogue">
      <div class="login-header">
        <img class="logo" src="../assets/Plannit.png">
        <span class="app-title">Plannit</span>
      </div>
      <form class="login-form">
        <input type="email" placeholder="Email" class="login-input">
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  margin-bottom: 50px;
}

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

.logo {
  height: 60px;
}

.login-form {
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  margin-bottom: auto;
}

.login-input {
  border: none;
  border-bottom: solid 2px #dfdfdf;
  width: 80%;
  height: 30px;
  transition: border linear 200ms;
}

.login-input:focus {
  outline: none;
  border-bottom: solid 2px #317bdb;
}
</style>
