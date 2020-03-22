import {
  ADD_TODO,
  REMOVE_TODO,
  ADD_TODO_BY_INDEX
} from "../actions/formAction";
import _ from "lodash";

const initialState = {
  id: "",
  removedTodos: [],
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.value]
      };
    case REMOVE_TODO:
      return {
        ...state,
        removedTodos: [...state.removedTodos, _.head(action.removedTodos)],
        todos: action.payload
      };
    case ADD_TODO_BY_INDEX:
      return {
        ...state,
        todos: action.todo
      };
    default:
      return state;
  }
};

export default reducer;
