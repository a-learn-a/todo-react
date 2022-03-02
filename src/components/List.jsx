import React, { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

const List = () => {
  const { todo, removeTodo, completeTodo, filter } = useContext(TodoContext)
  const list = todo.filter((el) => {
    if (filter === 'all') return el
    if (filter === 'active') return !el.completed
    if (filter === 'completed') return el.completed
  })

  return (
    <>
      {!list.length ? (
        <p className="empty-title">Список пуст</p>
      ) : (
        <ul className="list">
          {list.map((el, i) => (
            <li className="list-item" key={el.id}>
              <span className="list-item__number">{i + 1}</span>
              <span
                className={el.completed ? 'list-item__text' : ''}
                onClick={() => completeTodo(el.id)}
              >
                {el.value}
              </span>
              <button
                className="btn delete-btn"
                onClick={() => removeTodo(el.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default List
