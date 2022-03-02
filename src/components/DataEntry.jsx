import React, { useState, useRef, useContext } from 'react'
import { TodoContext } from '../context/todoContext'
import { v4 as uuidv4 } from 'uuid'

const DataEntry = () => {
  const { todo, setTodo } = useContext(TodoContext)
  const [value, setValue] = useState('')
  const inputRef = useRef()

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  const submit = () => {
    const newTodo = {
      id: uuidv4(),
      isCompleted: false,
      value,
    }
    setTodo([...todo, newTodo])
    setValue('')
    inputRef.current.focus()
  }

  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        value={value}
        ref={inputRef}
        onChange={handleChange}
      />
      <button
        className="btn submit-btn"
        onClick={submit}
        disabled={!value.trim()}
      >
        +
      </button>
    </div>
  )
}

export default DataEntry
