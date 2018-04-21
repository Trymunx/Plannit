<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  created() {
    this.$store.dispatch("setUser");
  }
};
</script>

<style>
body {
  overflow: hidden;
}
* {
  margin: 0px;
  padding: 0px;
}
</style>
