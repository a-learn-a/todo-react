import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { ToDoFilter } from "../constants/constants";
import { StyledSelectContainer } from "../styles/SelectContainer.styled";

const Select: React.FC = () => {
  const { filter, setFilter } = useContext(TodoContext);

  // типизировать e
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFilter(e.target.value);
  };

  return (
    <StyledSelectContainer>
      <select onChange={handleChange} value={filter}>
        {Object.values(ToDoFilter).map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </StyledSelectContainer>
  );
};

export default Select;
