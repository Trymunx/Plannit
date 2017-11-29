import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    activeTodo: {}
  },
  mutations: {
    ADD_TODO(state) {
      const newTodo = {
        text: "What needs to be done?",
        done: false
      }
      state.todos.push(newTodo);
      state.activeTodo = newTodo;
    },
    EDIT_TODO(state, text) {
      state.activeTodo.text = text;
    },
    DELETE_TODO(state) {
      state.todos.$remove(state.activeTodo);
      state.activeTodo = state.todos[0];
    },
    SET_ACTIVE_TODO(state, todo) {
      state.activeTodo = todo;
    },
    TOGGLE_COMPLETE(state) {
      state.activeTodo.done = !state.activeTodo.done;
    }
  },
  actions: {

  }
})