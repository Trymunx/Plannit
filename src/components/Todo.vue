<template>
  <div class="todo-item">
    <input type="checkbox" @click="toggleComplete(todo)" :checked="todo.done">
    <div>{{todo.title}}</div>
  </div>
</template>

<script type="text/javascript">
import { addTodo, deleteTodo, toggleComplete } from "@/vuex/actions";

export default {
  methods: {
    toggleComplete(todo) {
      this.$store.dispatch("toggleComplete", todo);
    }
  },
  props: ["todo"]
};
</script>

<style scoped>
.todo-item {
  display: flex;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}
</style>
