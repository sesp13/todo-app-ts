import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { addTodo, store } from '../../store';
import { TodoEditComponent } from './TodoEditComponent';

const mockedDispatch = jest.fn();
const mockedNavigate = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch,
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Tests on <TodoEditComponent />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should init without data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <TodoEditComponent />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByDisplayValue('')).toBeTruthy();
  });

  test('should first call dispatch with a new todo', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <TodoEditComponent />
        </Provider>
      </BrowserRouter>
    );
    const todoText = 'My Todo';
    fireEvent.change(screen.getByDisplayValue(''), {
      target: { value: todoText },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(mockedDispatch).toHaveBeenCalled();
    expect(mockedDispatch.mock.lastCall[0]).toMatchObject({
      type: addTodo.type,
      payload: {
        text: todoText,
      },
    });
  });

  test('should reset clear the form after a submit', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <TodoEditComponent />
        </Provider>
      </BrowserRouter>
    );
    const todoText = 'My Todo';
    fireEvent.change(screen.getByDisplayValue(''), {
      target: { value: todoText },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByDisplayValue('')).toBeTruthy();
  });

  test('should redirect to "/pending" after the submit', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <TodoEditComponent />
        </Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockedNavigate).toHaveBeenCalledWith('/pending');
  });
});
