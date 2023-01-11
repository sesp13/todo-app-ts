import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../../types/todo';
import { TodoState } from './todoState';

const getInitialState = (): TodoState => {
  const todosStr: string | null = localStorage.getItem('todos');
  let todos: Todo[] = [];

  if (todosStr !== null) {
    todos = JSON.parse(todosStr) as Todo[];
  }

  return {
    todos,
    editTodo: null,
  };
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: getInitialState(),
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload);
      // Question: Where Should I implement the saving in the localstorage
      const newTodos = JSON.stringify(state.todos);
      localStorage.setItem('todos', newTodos);
    },
  },
});

export const { addTodo } = todoSlice.actions;
