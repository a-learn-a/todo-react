import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoContext = createContext()

const TodoState = ({ children }) => {
  const [todo, setTodo] = useState([])
  const [filter, setFilter] = useState('all')

  const addTodo = (value) => {
    const newTodo = {
      id: uuidv4(),
      completed: false,
      value,
    }
    setTodo([...todo, newTodo])
  }

  const removeTodo = (id) => {
    setTodo(todo.filter((el) => el.id !== id))
  }

  const completeTodo = (id) => {
    const todoCopy = [...todo]
    const index = todoCopy.indexOf(todoCopy.find((el) => el.id === id))
    todoCopy[index].completed = !todoCopy[index].completed
    setTodo(todoCopy)
  }

  const filterTodo = (value) => {
    setFilter(value)
  }

  return (
    <TodoContext.Provider
      value={{ todo, addTodo, removeTodo, completeTodo, filter, filterTodo }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoState }
