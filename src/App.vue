<template>
  <div id="app">
    <img src="./assets/Plannit.png">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: "app",
  components: {
    TodoList
  },
  computed: {}
};
</script>

<style>
/* body {
  overflow: hidden;
} */
#app {
  margin: none;
  padding: 10px;
  border: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color: grey;
  /* height: fill-available; */
  font-family: sans-serif;
}
</style>
