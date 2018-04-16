<template>
  <div id="app">
    <login-window></login-window>
    <!-- <app-header></app-header>
    <app-contents>
    </app-contents> -->
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppContents from "@/components/AppContents";
import LoginWindow from "@/components/LoginWindow";

export default {
  name: "app",
  components: {
    AppHeader,
    AppContents,
    LoginWindow
  },
  computed: {}
};
</script>

<style>
body {
  overflow: hidden;
}
/* #app {
  margin: none;
  padding: 10px;
  border: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color: grey;
  height: fill-available;
  font-family: sans-serif;
} */
</style>
