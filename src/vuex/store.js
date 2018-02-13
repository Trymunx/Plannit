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
        title: "Todo C is a really long test todo that should overflow over a couple of lines or maybe some more let's see what we can do with it",
        done: false
      },
      {
        id: 3,
        title: "Todo D",
        done: false
      },
      {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis vel ex et gravida. Donec lacus neque, vestibulum non imperdiet sed, condimentum quis urna. Aliquam vestibulum nisl vel sem egestas malesuada.",
        done: false
      }
    ]
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
    addTodo({ commit }) {
      commit("ADD_TODO");
    },

    toggleComplete({ commit }, todo) {
      commit("TOGGLE_COMPLETE", todo);
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

    TOGGLE_COMPLETE(state, todo) {
      state.todos[todo.id].done = !state.todos[todo.id].done;
    }
  }
})