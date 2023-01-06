import './TodoComponent.scss';
import { TodoComponentProps } from './TodoComponentProps';

export const TodoComponent = ({ todoItem }: TodoComponentProps) => {
  return (
    <div className="row todo-box">
      <div className="col-6">
        <p>{todoItem.text}</p>
      </div>
      <div className="col-6 buttons-box">
        <button className="btn btn-primary">Done</button>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};
