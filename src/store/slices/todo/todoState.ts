import { Todo } from "../../../types/todo";

export interface TodoState {
  todos: Todo[],
  editTodo: Todo | null
}