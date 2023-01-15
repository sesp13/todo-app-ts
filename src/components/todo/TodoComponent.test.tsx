import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Todo } from '../../types';
import { TodoComponent } from './TodoComponent';

const todoItem: Todo = {
  done: false,
  text: 'My testing todo',
  id: 1,
};

describe('Tests on <TodoComponent />', () => {
  test('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <TodoComponent todoItem={todoItem} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
