<template>
  <div id="app">
    <img src="./assets/Plannit.png">
    <div>Todo list</div>
    <div>Calendar</div>
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
