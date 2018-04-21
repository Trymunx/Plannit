<template>
  <div class="app-contents">
    <todo-list></todo-list>
    <!-- <calendar></calendar> -->
</div>
</template>

<script>
import TodoList from "./TodoList";

export default {
  components: {
    TodoList
  }
};
</script>

<style>
.app-contents {
  display: flex;
  justify-content: left;
  width: 100%;
  border: none;
}
</style>

