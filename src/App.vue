<template>
  <div id="app">
    <img src="./assets/Plannit.png">
    <div>To do: {{incompleteTodos.length}} || Done: {{doneTodos.length}}</div>
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: "app",
  components: {
    TodoList
  },
  computed: {
    incompleteTodos() {
      return this.$store.getters.incompleteTodos;
    },
    doneTodos() {
      return this.$store.getters.doneTodos;
    }
  },
  data() {}
};
</script>

<style>

</style>
