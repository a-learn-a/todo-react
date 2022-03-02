import React, { createContext, useState } from 'react'
import { ToDoFilter } from '../constants/constants'

const TodoContext = createContext()

const TodoState = ({ children }) => {
  const [todo, setTodo] = useState([])
  const [filter, setFilter] = useState(ToDoFilter.all.value)

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, filter, setFilter }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoState }
