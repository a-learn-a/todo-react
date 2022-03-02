import React, { useContext } from 'react'
import { TodoContext } from '../context/todoContext'
import { ToDoFilter } from '../constants/constants'


const List = () => {
  const { todo, setTodo, filter } = useContext(TodoContext)
  const list = todo.filter((task) => {
    switch(filter) {
      case ToDoFilter.all.value: 
        return task
      case ToDoFilter.active.value: 
        return !task.isCompleted
      case ToDoFilter.completed.value: 
        return task.isCompleted
      default: 
        return null
    }
  })
  
  const completeTodo = (id) => () => {
    const todoCopy = [...todo]
    const index = todoCopy.indexOf(todoCopy.find((el) => el.id === id))
    todoCopy[index].isCompleted = !todoCopy[index].isCompleted
    setTodo(todoCopy)
  }

  const removeTodo = (id) => () => {
    setTodo(todo.filter((el) => el.id !== id))
  }

  return (
    <>
      {list.length ? (
        <ul className="list">
          {list.map(({id, isCompleted, value}, ind) => (
            <li className="list-item" key={id}>
              <span className="list-item__number">{ind + 1}</span>
              <span
                className={isCompleted ? 'list-item__text' : ''}
                onClick={completeTodo(id)}
              >
                {value}
              </span>
              <button
                className="btn delete-btn"
                onClick={removeTodo(id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-title">Список пуст</p>
      )}
    </>
  )
}

export default List
