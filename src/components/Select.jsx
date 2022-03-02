import React, { useContext } from 'react'
import { TodoContext } from '../context/todoContext'
import { ToDoFilter } from '../constants/constants'

const Select = () => {
  const { filter, setFilter } = useContext(TodoContext)
  
  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <select className="select" onChange={handleChange} defaultValue={filter}>
      {Object.values(ToDoFilter).map(({value, text}) => 
      <option key={value} className="option" value={value}>
        {text}
      </option>)}
    </select>
  )
}

export default Select
