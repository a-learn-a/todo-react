import React, { useState, useRef, useContext, useEffect } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo } from "../types/data";
// import { IError } from '../types/data'
import { StyledDataEntryContainer } from "../styles/DataEntryContainer.styled";
import { IError } from "../types/data";
import { StyledButton } from "../styles/Button.styled";
import styled from "styled-components";

export const TypographyError = styled.p`
  color: red;
  font-size: 12px;
  // этот мой костыльнй маргин убрать, скорее всего нужно будет немного изменить структуру приложения
  margin-top: 55px;
`;

const DataEntry: React.FC = () => {
  // типизировать контекст
  const { todo, setTodo } = useContext(TodoContext);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<IError>({
    isShort: false,
    isIncorrect: false,
  });
  const { isShort, isIncorrect } = error;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value.match(/пить|курить/gim)) {
      setError({ isShort: false, isIncorrect: true });
      return;
    }
    if (value.trim().length < 5) {
      setError({ isShort: true, isIncorrect: false });
      return;
    }
    setError({ isShort: false, isIncorrect: false });
    // предлагаю перенести твои эти проверки на onChange и не очищать поле ввода, а просто отображать ошибку синзу
  }, [value]);

  // типизировать e
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const submit = () => {
    const newTodo: ITodo = {
      id: Date.now(), // зачем тут эти колдунские преобрахования ?
      isCompleted: false,
      value,
    };
    setTodo([...todo, newTodo]);
    setValue("");
    inputRef.current?.focus(); // такая проверка не верная в большенстве случчаев и по кодстайлу, может привести в критикал ерорам
  };

  // типизировать e
  const handleKeyUp: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (value.trim().length < 5) return;
    if (e.code === "Enter") submit();
  };

  return (
    <StyledDataEntryContainer onKeyUp={handleKeyUp}>
      <input value={value} ref={inputRef} onChange={handleChange} />
      <StyledButton primary onClick={submit}>
        +
      </StyledButton>
      {/* каждая проверка должна отвечать только за что надо */}
      {isIncorrect && <TypographyError>Вы не можете добавить слова "пить / курить" в задачу</TypographyError>}
      {isShort && <TypographyError>Задача должна быть не короче 5 символов</TypographyError>}
    </StyledDataEntryContainer>
  );
};

export default DataEntry;
