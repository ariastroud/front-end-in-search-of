import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavBar = () => {
  // useEffect(() => {});
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 py-2">
        <li className="navbar-brand">
          <Link to="/" className="link-dark text-decoration-none">
            In Search Of
          </Link>
        </li>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/itemsList" className="nav-link">
                All Items
              </Link>
            </li>
            {/* <li>
              <form className="form-inline my-2 my-lg-0">
                <label htmlFor="name"></label>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li> */}
          </ul>
          {/* {!props.loginData ? (
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              // type="submit"
            >
              <Link to="/login" className="nav-link">
                Sign In
              </Link>
            </button>
          ) : (
            <button
              onClick={props.handleLogout()}
              className="btn btn-outline-success my-2 my-sm-0"
              // type="submit"
            >
              Sign Out
            </button>
          )} */}
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            // type="submit"
          >
            <Link to="/login" className="nav-link">
              Sign In
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

{
  /* // const NavBar = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/">In Search Of</Link>
        </li>
        <li>
          <Link to="/newpostform">Post Now</Link>
        </li>
        <li>
          <Link to="/itemslist">Items</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}; */
}

export default NavBar;
