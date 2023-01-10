import { Link, useNavigate } from 'react-router-dom';

export const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Todo App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/pending"
              >
                Pending Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/completed">
                Completed Todos
              </Link>
            </li>
          </ul>
          <button onClick={() => navigate('/new')} className="btn btn-primary">
            Create Todo
          </button>
        </div>
      </div>
    </nav>
  );
};
