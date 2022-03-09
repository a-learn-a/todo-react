import React, { useState, useRef, useContext, useEffect } from 'react'
import { TodoContext } from '../context/todoContext'
import { ITodo } from '../types/data'
import { IError } from '../types/data'
import { StyledDataEntryContainer } from '../styles/DataEntryContainer.styled'
import { StyledButton } from '../styles/Button.styled'

const DataEntry: React.FC = () => {
  const { todo, setTodo } = useContext(TodoContext)
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<IError>({
    isShort: false,
    isIncorrect: false,
  })
  const { isShort, isIncorrect } = error
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (value.match(/пить|курить/gim)) {
      setError({ isShort: false, isIncorrect: true })
      setValue('')
      return
    }
    if (value.trim()) {
      setError(
        value.trim().length < 5
          ? { isShort: true, isIncorrect: false }
          : { isShort: false, isIncorrect: false },
      )
    }
  }, [value])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const submit = () => {
    const newTodo: ITodo = {
      id: String(+Date.now()),
      isCompleted: false,
      value,
    }
    setTodo([...todo, newTodo])
    setValue('')
    inputRef.current!.focus()
  }

  const handleKeyUp: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (value.trim().length < 5) return
    if (e.code === 'Enter') submit()
  }

  return (
    <StyledDataEntryContainer onKeyUp={handleKeyUp}>
      <input type="text" value={value} ref={inputRef} onChange={handleChange} />
      <StyledButton primary onClick={submit} disabled={value.trim().length < 5}>
        +
      </StyledButton>
      {(isShort || isIncorrect) && (
        <div>
          {isShort
            ? 'задача должна быть от 5 символов'
            : 'Вы не можете добавить слова "пить / курить" в задачу'}
        </div>
      )}
    </StyledDataEntryContainer>
  )
}

export default DataEntry
