import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        title: "Todo A",
        done: false,
        started: false,
        finished: false
      },
      {
        id: 1,
        title: "Todo B",
        done: false,
        started: false,
        finished: false
      },
      {
        id: 2,
        title: "Todo C is a really long test todo that should overflow over a couple of lines or maybe some more let's see what we can do with it",
        done: false,
        started: false,
        finished: false
      },
      {
        id: 3,
        title: "Todo D",
        done: false,
        started: false,
        finished: false
      },
      {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis vel ex et gravida. Donec lacus neque, vestibulum non imperdiet sed, condimentum quis urna. Aliquam vestibulum nisl vel sem egestas malesuada.",
        done: false,
        started: false,
        finished: false
      }
    ],
    idCounter: 5
  },

  getters: {
    completeTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    },
    incompleteTodos: (state) => {
      return state.todos.filter(todo => !todo.done)
    }
  },

  actions: {
    addTodo({ commit }, text) {
      commit("ADD_TODO", text);
    },

    deleteTodo({ commit }, todo) {
      commit("DELETE_TODO", todo);
    },

    toggleComplete({ commit }, todo) {
      if (!todo.done) commit("FINISH_TODO", todo);
      else commit("START_TODO", todo);
      commit("TOGGLE_COMPLETE", todo);
    },

    startTodo({commit}, todo) {
      commit("START_TODO", todo);
    },

    finishTodo({commit}, todo) {
      commit("FINISH_TODO", todo);
    }
  },


  mutations: {
    ADD_TODO(state, text) {
      state.todos.push({
        id: state.idCounter,
        title: text,
        done: false,
        started: 0,
        finished: 0
      });
      state.idCounter++;
    },

    DELETE_TODO(state, todo) {
      let index = state.todos.indexOf(todo);
      state.todos.splice(index, 1);
    },

    TOGGLE_COMPLETE(state, todo) {
      let index = state.todos.indexOf(todo);
      state.todos[index].done = !state.todos[index].done;
    },

    START_TODO(state, todo) {
      let index = state.todos.indexOf(todo);
      state.todos[index].started = new Date();
    },

    FINISH_TODO(state, todo) {
      let index = state.todos.indexOf(todo);
      state.todos[index].finished = new Date();
    }
  }
})