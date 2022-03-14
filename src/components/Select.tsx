import React from "react";
import { ToDoFilter } from "../constants/constants";
import { StyledSelectContainer } from "../styles/SelectContainer.styled";
import { useDispatch, useSelector } from "react-redux";
import {setFilter} from '../redux/actions'
import {IRootState} from '../redux/types'

const Select: React.FC = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state: IRootState) => state.visibilityFilter)

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setFilter(e.target.value))
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
