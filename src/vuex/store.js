import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        title: "Todo A",
        done: false
      },
      {
        id: 1,
        title: "Todo B",
        done: false
      },
      {
        id: 2,
        title: "Todo C",
        done: false
      },
      {
        id: 3,
        title: "Todo D",
        done: false
      }
    ]
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    },
    incompleteTodos: (state) => {
      return state.todos.filter(todo => !todo.done)
    }
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
    addTodo({ dispatch }) {
      dispatch("ADD_TODO");
    },

    editTodo({ dispatch }) {
      dispatch("EDIT_TODO", e.target.value);
    },

    deleteTodo({ dispatch }) {
      dispatch("DELETE_TODO");
    },

    updateActiveTodo({ dispatch }) {
      dispatch("SET_ACTIVE_TODO", todo);
    },

    toggleComplete({ dispatch }) {
      dispatch("TOGGLE_COMPLETE");
    }
  }
})