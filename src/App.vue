<template>
  <div id="app">
    <img src="./assets/Plannit.png">
    <div>To do: {{incompleteTodosCount}} || Done: {{doneTodosCount}}</div>
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "app",
  components: {
    TodoList
  },
  computed: {
    incompleteTodosCount() {
      return this.$store.getters.incompleteTodosCount;
    },
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    }
  },
  data() {
    return {
      todos: [
        {
          title: "Todo A",
          done: false
        },
        {
          title: "Todo B",
          done: false
        },
        {
          title: "Todo C",
          done: false
        },
        {
          title: "Todo D",
          done: false
        }
      ]
    };
  }
};
</script>

<style>

</style>
