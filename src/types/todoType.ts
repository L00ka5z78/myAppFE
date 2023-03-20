export interface ITodo {
  id: string;
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  user: any;
  createdAt?: string;
  updatedAt?: string;
  todo?: any; //dopisalem przed chwila
}

export interface TodoProps {
  todo?: ITodo;
}

export type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
export type ICreateTask = {
  title: string;
  description: string;
};
export type IUpdateTask = Omit<ITodo, 'id' | '_id' | 'user'>;
