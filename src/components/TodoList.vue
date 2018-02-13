<template>
  <div class="todo-list">
    <div class="list-header">
      <div>To do: {{incompleteTodos.length}}</div>
      <div>Done: {{completeTodos.length}}</div>
    </div>
    <input class="new-todo" placeholder="Add new todo">
    <todo 
      v-for="todo in incompleteTodos" 
      :key="todo.id" 
      :todo="todo" 
      class="incomplete"/>
    <hr class="separator" v-show="incompleteTodos.length !== 0 && completeTodos.length !== 0">
    <todo 
      v-for="todo in completeTodos" 
      :key="todo.id" 
      :todo="todo" 
      class="complete"/>
  </div>
</template>

<script type="text/javascript">
import Todo from "./Todo";

export default {
  // props: ["todos"],
  components: {
    Todo
  },
  computed: {
    incompleteTodos() {
      return this.$store.getters.incompleteTodos;
    },
    completeTodos() {
      return this.$store.getters.completeTodos;
    }
  }
};
</script>

<style>
.todo-list {
  width: 250px;
  border: solid;
  border-width: 1px;
  border-radius: 8px;
  padding: 10px;
}
.list-header {
  display: flex;
  justify-content: space-between;
}

.complete {
  text-decoration: line-through;
  color: grey;
  background-color: #dfdfdf;
}

.incomplete {
  background-color: #dcf5da;
}

.separator {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-color: #aeaeae;
  border-width: 0.5px;
  border-style: solid;
}

.new-todo {
  width: fill;
  padding: 8px;
  margin: 5px 5px 10px;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  color: rgb(37, 37, 37);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #eee;
  font-family: sans-serif;
  font-size: 1em;

  background-image: url("../assets/AddTodo.png");
  background-position: 5px 7px;
  background-size: 20px;
  background-repeat: no-repeat;
  padding-left: 30px;
}

.new-todo:focus {
  border-bottom: 2px solid #c7c7c7;
}
</style>
