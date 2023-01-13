import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./slices";

export const rootReducer = combineReducers({
  todos: todoSlice.reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>