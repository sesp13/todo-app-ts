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

const saveTodos = (todos: Todo[]) => {
  // Question: Where Should I implement the saving in the localstorage
  const newTodos = JSON.stringify(todos);
  localStorage.setItem('todos', newTodos);
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: getInitialState(),
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload);
      saveTodos(state.todos);
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
      saveTodos(state.todos);
    },
    deleteTodo: (state: TodoState, action: PayloadAction<number>) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      saveTodos(state.todos);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
