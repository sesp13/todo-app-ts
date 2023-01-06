import { TodoComponent } from '../todo/TodoComponent';

export const TodoList = () => {
  return (
    <section>
      <TodoComponent
        todoItem={{
          id: 1,
          done: false,
          text: 'Develop the todoApp',
        }}
      />
      <TodoComponent
        todoItem={{
          id: 2,
          done: false,
          text: 'Add redux',
        }}
      />
      <TodoComponent
        todoItem={{
          id: 2,
          done: false,
          text: 'Add testing',
        }}
      />
    </section>
  );
};
