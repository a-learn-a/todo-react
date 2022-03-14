import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, DELETE_ALL_TODO } from "../actions";
import { TodoActionTypes, ITodo } from "../types";

const initialState: ITodo[] = [];

const todoItems = (
  state: ITodo[] = initialState,
  action: TodoActionTypes
): ITodo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: action.nextId, text: action.value, isCompleted: false },
      ];
    case TOGGLE_TODO:
      return state.map((todo: ITodo) =>
        todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      case DELETE_TODO:
      return state.filter((todo: ITodo) =>
        todo.id !== action.id
      );
      case DELETE_ALL_TODO:
        return [];
  }
  return state;
};

export default todoItems;
