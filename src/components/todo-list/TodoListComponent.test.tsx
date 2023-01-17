import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Todo } from '../../types';
import { TodoList } from './TodoListComponent';

const items: Todo[] = [
  {
    id: 1,
    done: true,
    text: 'The first Todo',
  },
  {
    id: 2,
    done: false,
    text: 'The second Todo',
  },
  {
    id: 3,
    done: false,
    text: 'The third Todo',
  },
];

describe('Tests on <TodoListComponent />', () => {
  test('should Render the Todos', () => {
    render(
      <Provider store={store}>
        <TodoList todos={items} />
      </Provider>
    );
    items.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeTruthy();
    });
  });
});
