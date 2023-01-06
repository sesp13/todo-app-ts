export const TodoEditComponent = () => {
  return (
    <div>
      <h2>Add/Edit Todo</h2>
      <form>
        <div className="form-group mb-2">
          <label>Text</label>
          <input type="text" name="" className="form-control" />
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
