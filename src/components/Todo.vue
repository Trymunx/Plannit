<template>
  <div class="todo">
    <input type="checkbox" @click="toggleComplete">
    <input type="text" v-model="todo.title">
    {{ todo.done }}
  </div>
</template>

<script type="text/javascript">
import { addTodo, deleteTodo, toggleComplete } from "../vuex/actions";

export default {
  vuex: {
    getters: {
      activeTodo: state => state.activeTodo
    },
    actions: {
      addTodo,
      deleteTodo,
      toggleComplete
    }
  },
  props: ["todo"]
};
</script>

<style scoped>
.todo {
  padding: 5px;
  margin: 5px;
  border-radius: 2px;
  background-color: #dfdfdf;
  width: 200px;
}
</style>
