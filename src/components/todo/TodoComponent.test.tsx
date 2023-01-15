import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { deleteTodo, store, toggleTodo } from '../../store';
import { Todo } from '../../types';
import { TodoComponent } from './TodoComponent';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch,
}));

const todoItem: Todo = {
  done: false,
  text: 'My testing todo',
  id: 1,
};

describe('Tests on <TodoComponent />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <TodoComponent todoItem={todoItem} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test('should call onToogle action', () => {
    render(
      <Provider store={store}>
        <TodoComponent todoItem={todoItem} />
      </Provider>
    );
    fireEvent.click(screen.getByLabelText('toggle-btn'));
    expect(mockedDispatch).toHaveBeenCalledWith(toggleTodo(todoItem.id));
  });

  test('should call onDelete action', () => {
    render(
      <Provider store={store}>
        <TodoComponent todoItem={todoItem} />
      </Provider>
    );
    fireEvent.click(screen.getByLabelText('delete-btn'));
    expect(mockedDispatch).toHaveBeenCalledWith(deleteTodo(todoItem.id));
  });

  test('should show "Done" on toggle button if the todo is not completed', () => {
    render(
      <Provider store={store}>
        <TodoComponent todoItem={todoItem} />
      </Provider>
    );
    const toggleButton: HTMLElement = screen.getByLabelText('toggle-btn');
    expect(toggleButton.textContent).toBe('Done');
  });

  test('should show "Uncomplete" on toggle button if the todo is completed', () => {
    render(
      <Provider store={store}>
        <TodoComponent todoItem={{ ...todoItem, done: true }} />
      </Provider>
    );
    const toggleButton: HTMLElement = screen.getByLabelText('toggle-btn');
    expect(toggleButton.textContent).toBe('Uncomplete');
  });
});
