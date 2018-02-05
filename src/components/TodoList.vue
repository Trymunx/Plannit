<template>
  <div id="todo-list">
   {{ todo.title }}
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
