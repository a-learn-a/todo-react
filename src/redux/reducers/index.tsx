import { combineReducers } from "redux";
import todoItems from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todoItems,
  visibilityFilter,
});
