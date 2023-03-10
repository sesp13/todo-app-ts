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

const setUpTestComponent = (
  props: Partial<React.ComponentProps<typeof TodoComponent>> = { todoItem }
) =>
  render(
    <Provider store={store}>
      <TodoComponent todoItem={todoItem} {...props} />
    </Provider>
  );

describe('Tests on <TodoComponent />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should match the snapshot', () => {
    const { container } = setUpTestComponent();
    expect(container).toMatchSnapshot();
  });

  test('should call onToogle action', () => {
    setUpTestComponent();
    fireEvent.click(screen.getByLabelText('toggle-btn'));
    expect(mockedDispatch).toHaveBeenCalledWith(toggleTodo(todoItem.id));
  });

  test('should call onDelete action', () => {
    setUpTestComponent();
    fireEvent.click(screen.getByLabelText('delete-btn'));
    expect(mockedDispatch).toHaveBeenCalledWith(deleteTodo(todoItem.id));
  });

  test('should show "Done" on toggle button if the todo is not completed', () => {
    setUpTestComponent();
    const toggleButton = screen.getByLabelText('toggle-btn');
    expect(toggleButton.textContent).toBe('Done');
  });

  test('should show "Uncomplete" on toggle button if the todo is completed', () => {
    setUpTestComponent({ todoItem: { ...todoItem, done: true } });
    const toggleButton = screen.getByLabelText('toggle-btn');
    expect(toggleButton.textContent).toBe('Uncomplete');
  });
});
