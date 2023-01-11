import { useSelector } from 'react-redux';
import { TodoList } from '../../components';
import { TodoState } from '../../store';
import { Todo } from '../../types/todo';

export const PendingTodosPage = () => {
  const todoState: TodoState = useSelector((state: any) => state.todos);
  const pendingTodos = todoState.todos.filter((todo: Todo) => !todo.done);

  return (
    <div className="container m-5">
      <h1>Pending Todos</h1>
      <TodoList todos={pendingTodos} />
    </div>
  );
};
