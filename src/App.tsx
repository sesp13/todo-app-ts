import { TodoEditComponent, TodoList } from './components';

export const App = () => {
  return (
    <div className="container m-5 row">
      <div className="col-8">
        <TodoList />
      </div>
      <div className="col-4">
        <TodoEditComponent />
      </div>
    </div>
  );
};
