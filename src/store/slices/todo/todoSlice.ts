import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../../types/todo";
import { TodoState } from "./todoState";

const initialState: TodoState = {
  todos: [],
  editTodo: null
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>) => { 
      state.todos = [...state.todos, action.payload]
    }
  }
})

export const {addTodo} = todoSlice.actions