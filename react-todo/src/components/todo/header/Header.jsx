import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

export default function Header() {
  const authContext = useAuth();
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="#">
              Labbi Ahmed
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {authContext.isAuthenticated && (
                    <Link
                      className="nav-link"
                      to={`welcome`}
                    >
                      Home
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                 
                  {authContext.isAuthenticated && (
                    <Link className="nav-link" to="/todos">
                      
                      Todos
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              {!authContext.isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {authContext.isAuthenticated && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/logout"
                    onClick={authContext.logout}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

{
  /* <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link"> labbiahmed</a>
          </li>
          <li className="nav-item">
            <Link to="welcome/labib" className="nav-link"> Home page</Link>
          </li>
          <li className="nav-item">
            <Link to="todos" className="nav-link"> Todos</Link>
          </li>
          <li className="nav-item">
            <Link to="login" className="nav-link"> Login</Link>
          </li>
          <li className="nav-item">
            <Link to="logout" className="nav-link"> Logout</Link>
          </li>
       
        </ul> */
}
