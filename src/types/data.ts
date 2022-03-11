export interface ITodo {
  id: any;
  isCompleted: boolean;
  value: string;
}

export interface IError {
  isShort: boolean;
  isIncorrect: boolean;
}

export interface ITodoContextType {
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
