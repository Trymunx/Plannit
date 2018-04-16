<template>
  <div class="app-contents">
    <todo-list></todo-list>
    <!-- <calendar></calendar> -->
</div>
</template>

<script>
import TodoList from "@/components/TodoList";

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
  margin: 5px;
  padding: 10px;
  border: none;
}
</style>

