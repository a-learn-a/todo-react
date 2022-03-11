import { IToDoFilter } from "../types/data"

export const ToDoFilter: IToDoFilter = {
    all: { text: 'Все задачи', value: 'all' },
    active: { text: 'Активные задачи', value: 'active' },
    completed: { text: 'Выполненые задачи', value: 'completed' }
  }