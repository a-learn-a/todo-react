import React from 'react'
import { ToDoFilter } from '../constants/constants'
import { StyledButton } from '../styles/Button.styled'
import { StyledListContainer } from '../styles/ListContainer.styled'
import { StyledLiContent } from '../styles/LiContent.styled'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import { ITodo } from '../redux/types'
import { deleteTodo, deleteAllTodo } from '../redux/actions'
import {IRootState} from '../redux/types'

const List: React.FC = () => {
  const dispatch = useDispatch()
  const todo = useSelector((state: IRootState) => state.todoItems)
  const filter = useSelector((state: IRootState) => state.visibilityFilter)

  const list = todo.filter((task: ITodo) => {
    switch (filter) {
      case ToDoFilter.all.value:
        return task
      case ToDoFilter.active.value:
        return !task.isCompleted
      case ToDoFilter.completed.value:
        return task.isCompleted
      default:
        return null
    }
  })

  const handleToggleTodo = (id: number) => () => {
    dispatch(toggleTodo(id))
  }

  const handleDeleteTodo = (id: number) => () => {
    dispatch(deleteTodo(id))
  }

  const handleDeleteAllTodo = () => {
    dispatch(deleteAllTodo())
  }
  
  return (
    <StyledListContainer>
      {list.length ? (
        <>
          <ul>
            {list.map(({ id, isCompleted, text }, index) => (
              <li key={id}>
                <StyledLiContent order={index}>{index + 1}</StyledLiContent>
                <StyledLiContent
                  isCompleted={isCompleted}
                  onClick={handleToggleTodo(id)}
                >
                  {text}
                </StyledLiContent>
                <StyledButton
                  danger
                  border="border-left"
                  onClick={handleDeleteTodo(id)}
                >
                  x
                </StyledButton>
              </li>
            ))}
          </ul>
          {list.length && filter === ToDoFilter.all.value && (
            <div>
              <StyledButton danger border="border" onClick={handleDeleteAllTodo}>
                удалить все задачи
              </StyledButton>
            </div>
          )}
        </>
      ) : (
        <p>Список пуст</p>
      )}
    </StyledListContainer>
  )
}

export default List

