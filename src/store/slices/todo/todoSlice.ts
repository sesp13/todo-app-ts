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
    },
    toggleTodo: (state: TodoState, action: PayloadAction<number>) => {
      const id = action.payload;
      state.todos = state.todos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    },
    deleteTodo: (state: TodoState, action: PayloadAction<number>) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
