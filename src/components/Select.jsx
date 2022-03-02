import React, { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

const Select = () => {
  const { filter, filterTodo } = useContext(TodoContext)
  const handleChange = (e) => {
    filterTodo(e.target.value)
  }

  return (
    <select className="select" onChange={handleChange} defaultValue={filter}>
      <option className="option" value="all">
        все
      </option>
      <option className="option" value="active">
        активные
      </option>
      <option className="option" value="completed">
        выполненные
      </option>
    </select>
  )
}

export default Select
