import { TodoActionTypes } from "../types";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_ALL_TODO = "DELETE_ALL_TODO";

export const SET_FILTER = "SET_FILTER";
export const FILTER_ALL = "FILTER_ALL";

export const addTodo = (value: string): TodoActionTypes => ({
  type: ADD_TODO,
  nextId: Date.now(),
  value,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = (id: number): TodoActionTypes => ({
  type: DELETE_TODO,
  id,
});

export const deleteAllTodo = () => ({
  type: DELETE_ALL_TODO 
})

export const setFilter = (filter: string): TodoActionTypes => ({
  type: SET_FILTER,
  value: filter,
});
