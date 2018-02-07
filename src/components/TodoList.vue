<template>
  <div>
    <todo id="todo-list" v-for="todo in todos" :key="todo.title" :todo="todo"></todo>
  </div>
</template>

<script type="text/javascript">
import Todo from "./Todo";

export default {
  props: ["todos"],
  components: {
    Todo
  }
};
</script>

<style>

</style>
