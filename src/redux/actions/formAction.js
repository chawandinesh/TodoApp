export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO_BY_INDEX = "ADD_TODO_BY_INDEX";

export const changeInput = input => {
  return {
    type: ADD_TODO,
    value: input
  };
};

export const addTodoByIndex = todo => {
  return {
    type: ADD_TODO_BY_INDEX,
    todo
  };
};

export const removeTodo = (index, allTodos) => {
  const removedTodo = allTodos.splice(index, 1);
  return {
    type: REMOVE_TODO,
    removedTodos: removedTodo,
    payload: allTodos
  };
};
