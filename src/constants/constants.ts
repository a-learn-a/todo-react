import { IToDoFilter } from "../redux/types"

export const ToDoFilter: IToDoFilter = {
    all: { text: 'Все задачи', value: 'FILTER_ALL' },
    active: { text: 'Активные задачи', value: 'FILTER_ACTIVE' },
    completed: { text: 'Выполненые задачи', value: 'FILTER_COMPLETE' }
  }