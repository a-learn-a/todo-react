import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { ToDoFilter } from "../constants/constants";
import { ITodo } from "../types/data";
import { StyledButton } from "../styles/Button.styled";
import { StyledListContainer } from "../styles/ListContainer.styled";
import { StyledLiContent } from "../styles/LiContent.styled";
import { ITodoContextType } from "../types/data";

const List: React.FC = () => {
  const { todo, setTodo, filter } = useContext<ITodoContextType>(TodoContext);
  const list = todo.filter((task) => {
    switch (filter) {
      case ToDoFilter.all.value:
        return task;
      case ToDoFilter.active.value:
        return !task.isCompleted;
      case ToDoFilter.completed.value:
        return task.isCompleted;
      default:
        return null;
    }
  });

  const completeTodo = (id: string) => () => {
    const todoCopy = [...todo];
    const index = todoCopy.indexOf(todoCopy.find((el: ITodo) => el.id === id) || ({} as ITodo));
    todoCopy[index].isCompleted = !todoCopy[index].isCompleted;
    setTodo(todoCopy);
  };

  const removeTodo = (id: string) => () => {
    setTodo(todo.filter((el: ITodo) => el.id !== id));
  };

  const removeAllTodo = () => {
    setTodo([]);
  };

  return (
    <StyledListContainer>
      {list.length ? (
        <>
          <ul>
            {list.map(({ id, isCompleted, value }, index) => (
              <li key={id}>
                <StyledLiContent order>{index + 1}</StyledLiContent>
                <StyledLiContent isCompleted={isCompleted} onClick={completeTodo(id)}>
                  {value}
                </StyledLiContent>
                <StyledButton danger border="border-left" onClick={removeTodo(id)}>
                  x
                </StyledButton>
              </li>
            ))}
          </ul>
          {list.length && filter === ToDoFilter.all.value && (
            <div>
              <StyledButton danger border="border" onClick={removeAllTodo}>
                удалить все задачи
              </StyledButton>
            </div>
          )}
        </>
      ) : (
        <p>Список пуст</p>
      )}
    </StyledListContainer>
  );
};

export default List;
