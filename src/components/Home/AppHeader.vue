<template>
  <div class="app-header">
    <img class="logo" src="../../assets/Plannit.png">
    <div class="app-title">Plannit</div>
    <button class="logout-button" @click="logOut">Log Out</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    logOut() {
      firebase.auth().signOut()
        .then(() => {
          this.$store.dispatch("setUser");
          this.$router.replace("/login");
        });
    }
  }
}
</script>

<style>
.app-header {
  display: flex;
  justify-content: left;
  height:60px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid grey;
  box-shadow: 0px -1px 8px 2px grey;
}

.app-title {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 2em;
  color: #3e3e3e;
}

.logo {
  height: 60px;
}

.logout-button {
  margin: 5px;
  margin-left: auto;
  padding: 5px 12px;
  background-color: #b8403c;
  border: none;
  border-radius: 3px;
  color: #f5f5f5;
  font-family: sans-serif;
  font-size: 1em;
}
</style>

