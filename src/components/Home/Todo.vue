<template>
  <div class="todo-item">
    <span class="handle">::</span>
    <input type="checkbox" class="checkbox" @click="toggleComplete(todo)" :checked="todo.done">
    <div>
      <!-- <textarea v-model="todo.title" class="todo-text"></textarea> -->
      <!-- <div class="todo-text" contenteditable="true" :content="editText"></div> -->
      <div class="todo-text" contenteditable="true">{{todo.title}}</div>
      <div class="todo-title">{{todo.title}}</div>
    </div>
    <!-- <img class="delete-button" src="@/assets/RubbishBin.png" v-if="showDelete" @click="deleteTodo(todo)"/> -->
    <!-- <div class="delete-space" v-else></div> -->
    <!-- <div class="todo-details" v-if="showDetails">
      <div class="start-button" v-if="!todo.started && !todo.done" @click="startTodo(todo)">Start</div>
      <div class="status-bar" v-if="todo.started && !todo.done">Started</div>
      <div class="status-bar" v-if="todo.started && todo.done">{{elapsedTime}}</div>
    </div> -->
  </div>
</template>

<script type="text/javascript">
import { addTodo, deleteTodo, toggleComplete } from "@/vuex/actions";
import Duration from "duration-js";

export default {
  data() {
    return {
      // showDelete: false,
      // showDetails: false
    };
  },
  computed: {
    elapsedTime() {
      return new Duration(this.todo.finished - this.todo.started).toString();
    },
    editText(text) {
      console.log(text);
      // this.todo.title = text;
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
  border-radius: 2px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.todo-title {
  flex: 1;
  min-width: 200px;
  outline: none;
}

.handle {
  margin: 4px;
  cursor: move;
  color: #5f5f5f;
}

.todo-text {
  position: relative;
  background-color: #fff0;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

.delete-button {
  margin-left: auto;
  width: 20px;
  height: 20px;
}

.delete-space {
  width: 10px;
}

.checkbox {
  height: 20px;
  width: 20px;
  background-color: #eee;
}

.checkbox:hover {
  background-color: #ccc;
}
</style>
