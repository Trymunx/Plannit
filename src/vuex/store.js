import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    incompleteTodos: [
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
    completeTodos: [],
    idCounter: 5,
    addToTop: true
  },

  getters: {
    completeTodos: (state) => {
      return state.completeTodos;
    },
    incompleteTodos: (state) => {
      return state.incompleteTodos;
    }
  },

  actions: {
    addTodo({ commit }, text) {
      commit("ADD_TODO", text);
    },

    deleteTodo({ commit }, todo) {
      if (!todo.done) {
        commit("DELETE_INCOMPLETE_TODO", todo);
      } else {
        commit("DELETE_COMPLETE_TODO", todo);
      }
    },

    toggleComplete({ commit }, todo) {
      if (!todo.done) {
        // commit("FINISH_TODO", todo);
        commit("COMPLETE_TODO", todo);
      } else {
        // commit("START_TODO", todo);
        commit("UNDO_COMPLETE_TODO", todo);
      }
    },

    startTodo({ commit }, todo) {
      commit("START_TODO", todo);
    },

    finishTodo({ commit }, todo) {
      commit("FINISH_TODO", todo);
    },

    updateIncompleteList({ commit }, value) {
      commit("UPDATE_INCOMPLETE_LIST", value);
    },

    updateCompleteList({ commit }, value) {
      commit("UPDATE_COMPLETE_LIST", value);
    }
  },


  mutations: {
    ADD_TODO(state, text) {
      let todo = {
        id: state.idCounter++,
        title: text,
        done: false,
        started: 0,
        finished: 0
      };
      if (state.addToTop) {
        state.incompleteTodos.unshift(todo);
      } else {
        state.incompleteTodos.push(todo);
      }
    },

    DELETE_INCOMPLETE_TODO(state, todo) {
      let index = state.incompleteTodos.indexOf(todo);
      state.incompleteTodos.splice(index, 1);
    },

    DELETE_COMPLETE_TODO(state, todo) {
      let index = state.completeTodos.indexOf(todo);
      state.completeTodos.splice(index, 1);
    },

    COMPLETE_TODO(state, todo) {
      let index = state.incompleteTodos.indexOf(todo);
      state.incompleteTodos.splice(index, 1);
      todo.done = true;
      state.completeTodos.push(todo);
    },

    UNDO_COMPLETE_TODO(state, todo) {
      let index = state.completeTodos.indexOf(todo);
      state.completeTodos.splice(index, 1);
      todo.done = false;
      state.incompleteTodos.push(todo);
    },

    START_TODO(state, todo) {
      let index = state.incompleteTodos.indexOf(todo);
      state.incompleTodos[index].started = new Date();
    },

    FINISH_TODO(state, todo) {
      let index = state.incompleteTodos.indexOf(todo);
      state.incompleteTodos[index].finished = new Date();
    },

    UPDATE_INCOMPLETE_LIST(state, value) {
      state.incompleteTodos = value;
    },

    UPDATE_COMPLETE_LIST(state, value) {
      state.completeTodos = value;
    }
  }
})
