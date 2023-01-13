import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export const saveTodosMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action: PayloadAction) => {
    // First perform the action
    next(action);
    // Then check the todo condition
    if (action.type?.startsWith('todo/')) {
      const state = store.getState().todos;
      const savedTodos = JSON.stringify(state.todos);
      localStorage.setItem('todos', savedTodos);
    }
  };
