<template>
  <div class="todo-item" @mouseover="toggleDeleteButton" @mouseout="toggleDeleteButton">
    <input type="checkbox" @click="toggleComplete(todo)" :checked="todo.done">
    <div class="todo-title" @click="toggleDetails">{{todo.title}}</div>
    <div class="delete-button" v-if="showDelete" @click="deleteTodo(todo)">X</div>
    <div class="delete-space" v-else></div>
    <div class="todo-details" v-if="showDetails">
      <div class="start-button" v-if="!todo.started && !todo.done" @click="startTodo(todo)">Start</div>
      <div class="status-bar" v-if="todo.started && !todo.done">Started</div>
      <div class="status-bar" v-if="todo.started && todo.done">{{elapsedTime}}</div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { addTodo, deleteTodo, toggleComplete } from "@/vuex/actions";
import Duration from "duration-js";

export default {
  data() {
    return {
      showDelete: false,
      showDetails: false
    }
  },
  computed: {
    elapsedTime() {
      return new Duration(this.todo.finished - this.todo.started).toString();
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
    },

    toggleDetails() {
      this.showDetails = !this.showDetails;
    },

    startTodo(todo) {
      this.$store.dispatch("startTodo", todo);
    },

    finishTodo(todo) {
      this.$store.dispatch("finishTodo", todo);
    }
  },
  props: ["todo"]
};
</script>

<style scoped>
.todo-item {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.todo-title {
  flex: 1;
  min-width: 200px;
}

.delete-button {
  margin-left: auto;
  width: 10px;
}

.delete-space {
  width: 10px;
}
</style>
