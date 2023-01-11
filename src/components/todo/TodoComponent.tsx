import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store';
import './TodoComponent.scss';
import { TodoComponentProps } from './TodoComponentProps';

export const TodoComponent = ({ todoItem }: TodoComponentProps) => {
  const dispatch = useDispatch();

  const onToggleTodo = () => {
    const action = toggleTodo(todoItem.id);
    dispatch(action);
  };

  const onDeleteTodo = () => {
    const action = deleteTodo(todoItem.id);
    dispatch(action);
  };

  return (
    <div className="row todo-box">
      <div className="col-6">
        <p>{todoItem.text}</p>
      </div>
      <div className="col-6 buttons-box">
        <button className="btn btn-primary" onClick={() => onToggleTodo()}>
          {todoItem.done ? 'Uncomplete' : 'Done'}
        </button>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-danger" onClick={() => onDeleteTodo()}>
          Delete
        </button>
      </div>
    </div>
  );
};
