export const addTodo = ({ dispatch }) => {
  dispatch("ADD_TODO");
}

export const editTodo = ({ dispatch }) => {
  dispatch("EDIT_TODO", e.target.value);
}

export const deleteTodo = ({ dispatch }) => {
  dispatch("DELETE_TODO");
}

export const updateActiveTodo = ({ dispatch }) => {
  dispatch("SET_ACTIVE_TODO", todo);
}

export const toggleComplete = ({ dispatch }) => {
  dispatch("TOGGLE_COMPLETE");
}