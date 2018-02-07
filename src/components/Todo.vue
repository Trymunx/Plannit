<template>
  <div class="todo">
    <input type="checkbox" v-model="todo.done">
    <input type="text" v-model="todo.title">
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["todo"]
};
</script>

<style scoped>
.todo {
  padding: 5px;
  margin: 5px;
  border-radius: 2px;
  background-color: #dfdfdf;
  width: 200px;
}
</style>
