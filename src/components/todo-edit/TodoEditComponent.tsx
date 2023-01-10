import { useForm } from '../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../store';

interface editFormInterface {
  text?: string;
}

const initialForm: editFormInterface = {
  text: '',
};

export const TodoEditComponent = () => {
  const dispatch = useDispatch();
  const { formState, onInputChange, onResetForm } = useForm(initialForm);

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    const action = addTodo({
      id: 1,
      done: false,
      text: formState.text,
    });
    dispatch(action);
    onResetForm();
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="form-group mb-2">
          <label>Text</label>
          <input
            type="text"
            name="text"
            onChange={onInputChange}
            className="form-control"
          />
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Done
          </label>
        </div>
        <div className="form-group">
          <input className="btn btn-success" type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};
