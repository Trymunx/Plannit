<template>
  <div class="todo">
    {{todo.title}}
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
}
</style>
