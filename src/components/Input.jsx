import React, { useState, useRef, useEffect, useContext } from 'react'
import { TodoContext } from '../context/todoContext'

const Input = () => {
  const { addTodo } = useContext(TodoContext)
  const [value, setValue] = useState('')
  const inputRef = useRef()

  useEffect(() => inputRef.current.focus(), [value])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const submit = () => {
    addTodo(value)
    setValue('')
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

export default Input
