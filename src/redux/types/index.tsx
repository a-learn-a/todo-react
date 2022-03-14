import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO, DELETE_ALL_TODO } from "../actions";
import rootReducer from "../reducers";

export interface AddItemAction {
  type: typeof ADD_TODO;
  nextId: number;
  value: string;
}

export interface ToggleAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export interface DeleteAction {
  type: typeof DELETE_TODO;
  id: number;
}

export interface DeleteAllAction {
  type: typeof DELETE_ALL_TODO;
}

export interface SetFilterAction {
  type: typeof SET_FILTER;
  value: string;
}

export type TodoActionTypes = AddItemAction | ToggleAction | SetFilterAction | DeleteAction | DeleteAllAction;

export type RootState = ReturnType<typeof rootReducer>;

export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface IState {
  todoItems: ITodo[],
  visibilityFilter: string
}

export interface IError {
  isShort: boolean,
    isIncorrect: boolean,
}

export interface IToDoFilter {
  all: { text: string, value: string },
  active: { text: string, value: string },
  completed: { text: string, value: string }
}

export interface IRootState {
  todoItems: []
  visibilityFilter: string
}
