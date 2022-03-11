import React, { createContext, useState, useEffect } from "react";
import { ToDoFilter } from "../constants/constants";
import { ITodo } from "../types/data";
import { ITodoContextType } from "../types/data";

const TodoContext = createContext<ITodoContextType>({
  todo: [],
  setTodo: () => {},
  filter: "",
  setFilter: () => {},
}); // null! - так делать не в коем случае нельзя

const TodoState: React.FC<React.ReactNode> = ({ children }) => {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<string>(ToDoFilter.all.value);

  useEffect(() => {
    if (localStorage.getItem("todo")) {
      const { filter, todos } = JSON.parse(localStorage.getItem("todo") || "");
      setFilter(filter);
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify({ todos: todo, filter }));
  }, [filter, todo]);

  return <TodoContext.Provider value={{ todo, setTodo, filter, setFilter }}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoState };
