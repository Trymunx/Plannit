<template>
  <div class="todo-item" @mouseover="toggleDeleteButton" @mouseout="toggleDeleteButton">
    <input type="checkbox" @click="toggleComplete(todo)" :checked="todo.done">
    <div>{{todo.title}}</div>
    <div class="delete-button" v-show="showDelete" @click="deleteTodo(todo)">X</div>
  </div>
</template>

<script type="text/javascript">
import { addTodo, deleteTodo, toggleComplete } from "@/vuex/actions";

export default {
  data() {
    return {
      showDelete: false
    }
  },
  methods: {
    toggleComplete(todo) {
      this.$store.dispatch("toggleComplete", todo);
    },

    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo);
    },

    toggleDeleteButton() {
      this.showDelete = !this.showDelete;
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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.delete-button {
  margin-left: auto;
}
</style>
