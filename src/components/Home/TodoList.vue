<template>
  <div class="todo-list">
    <div class="list-header">
      <div>To do: {{incompleteTodos.length}}</div>
      <div>Done: {{completeTodos.length}}</div>
    </div>
    <textarea class="new-todo" placeholder="Add new todo" v-model="todoText" @keypress.enter.prevent="addNewTodo"/>
    <draggable v-model="incompleteTodos" :options="{handle:'.handle'}">
      <todo 
        v-for="todo in incompleteTodos" 
        :key="todo.id" 
        :todo="todo" 
        class="incomplete"/>
      <hr class="separator" v-show="incompleteTodos.length !== 0 && completeTodos.length !== 0">
    </draggable> 
    <draggable v-model="completeTodos">
      <todo 
        v-for="todo in completeTodos" 
        :key="todo.id" 
        :todo="todo" 
        class="complete"/>
    </draggable>
  </div>
</template>

<script type="text/javascript">
import Todo from "./Todo";
import draggable from "vuedraggable";

export default {
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    addNewTodo() {
      if (this.todoText !== "") {
        this.$store.dispatch("addTodo", this.todoText);
        this.todoText = "";
      }
    }
  },
  components: {
    Todo,
    draggable
  },
  computed: {
    incompleteTodos: {
      get() {
        return this.$store.getters.incompleteTodos;
      },
      set(value) {
        this.$store.dispatch("updateIncompleteList", value);
      }
    },
    completeTodos: {
      get() {
        return this.$store.getters.completeTodos;
      },
      set(value) {
        this.$store.dispatch("updateCompleteList", value);
      }
    }
    // incompleteTodos() {
    //   return this.$store.getters.incompleteTodos;
    // },
    // completeTodos() {
    //   return this.$store.getters.completeTodos;
    // }
  }
};
</script>

<style>
.todo-list {
  width: 340px;
  max-height: 87vh;
  overflow-y: auto;
  border-right: solid 1px #bbb;
  padding: 20px;
}
.list-header {
  display: flex;
  justify-content: space-between;
}

.complete {
  text-decoration: line-through;
  color: grey;
  background-color: #efefef;
}

.incomplete {
  background-color: #fff;
}
.incomplete:hover {
  background-color: #efefef;
}

.separator {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-color: #aeaeae;
  border-width: 0.5px;
  border-style: solid;
  margin-top: 8px;
  margin-bottom: 8px;
}

.new-todo {
  width: fill;
  height: 1em;
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

  overflow-wrap: break-word;
  overflow-y: auto;
  overflow: hidden;
  resize: none;

  /* + Icon */
  background-image: url("../../assets/AddTodo.png");
  background-position: 5px 5px;
  background-size: 20px;
  background-repeat: no-repeat;
  padding-left: 30px;
}

.new-todo:focus {
  border-bottom: 2px solid #c7c7c7;
}
</style>
