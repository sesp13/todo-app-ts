import { TodoComponent } from '../todo/TodoComponent';
import { TodoListComponentProps } from './TodoListComponentProps';

export const TodoList = ({ todos }: TodoListComponentProps) => {
  return (
    <section>
      {todos.map(todo => (
        <TodoComponent key={todo.id} todoItem={todo} />
      ))}
    </section>
  );
};
