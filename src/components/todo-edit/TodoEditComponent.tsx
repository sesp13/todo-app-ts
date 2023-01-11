import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store';
import { useNavigate } from 'react-router-dom';

interface editFormInterface {
  text?: string;
}

const initialForm: editFormInterface = {
  text: '',
};

export const TodoEditComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formState, onInputChange, onResetForm, text } = useForm(initialForm);

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    const action = addTodo({
      id: new Date().getTime(),
      done: false,
      text: formState.text,
    });
    dispatch(action);
    onResetForm();
    navigate('/pending');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="form-group mb-2">
          <label>Text</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={onInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input className="btn btn-success" type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};
