import React, { useState, useRef } from "react";
import { StyledDataEntryContainer } from "../styles/DataEntryContainer.styled";
import { StyledButton } from "../styles/Button.styled";
import { useDispatch } from "react-redux";
import {addTodo} from '../redux/actions'
import {IError} from '../redux/types'

const DataEntry: React.FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<IError>({
    isShort: false,
    isIncorrect: false,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value
    setValue(inputValue);
    if (inputValue.match(/пить|курить/gim)) {
      setError({ isShort: false, isIncorrect: true });
      return;
    }
    if (inputValue && inputValue.trim().length < 5) {
      setError({ isShort: true, isIncorrect: false });
      return;
    }
    setError({ isShort: false, isIncorrect: false }); 
    inputRef.current?.focus()
  };

  const submit = () => { 
    dispatch(addTodo(value))
    setValue("");
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (value.trim().length < 5 || value.match(/пить|курить/gim)) return;
    if (e.code === "Enter") submit(); 
  };

  const disabled = value.trim().length < 5 || value.match(/пить|курить/gim)
  const { isShort, isIncorrect } = error;

  return (
    <StyledDataEntryContainer onKeyUp={handleKeyUp}>
      <input value={value} ref={inputRef} onChange={handleChange} />
      <StyledButton primary onClick={submit} disabled={!!disabled}>
        +
      </StyledButton>
      {isIncorrect && <p>Вы не можете добавить слова "пить / курить" в задачу</p>}
      {isShort && <p>Задача должна быть не короче 5 символов</p>}
    </StyledDataEntryContainer>
  );
};

export default DataEntry;
