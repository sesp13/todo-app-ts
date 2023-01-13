import { configureStore } from '@reduxjs/toolkit';
import { saveTodosMiddleware } from './middlewares';
import { rootReducer } from './rootReducer';
import { todoSlice } from './slices/todo';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveTodosMiddleware),
  
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;