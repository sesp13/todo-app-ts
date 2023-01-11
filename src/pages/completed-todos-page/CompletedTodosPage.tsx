import { useSelector } from "react-redux";
import { TodoList } from "../../components"
import { TodoState } from "../../store";
import { Todo } from "../../types";

export const CompletedTodosPage = () => {
  const todoState: TodoState = useSelector((state: any) => state.todos);
  const completedTodos = todoState.todos.filter((todo: Todo) => todo.done);

  return (
    <div className="container m-5">
        <h1>Completed Todos</h1>
        <TodoList todos={completedTodos} />
    </div>
  )
}
