// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NewPostForm from "./pages/NewPostForm";
import ItemsList from "./pages/ItemsList";
import Item from "./pages/Item";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { googleLogout, useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

const getAllItemsApi = async () => {
  const response = await axios.get("http://localhost:5000/items");
  return response.data;
};

function App() {
  const [allItemData, setAllItemData] = useState([]);
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        const name = res.data.name;
        const email = res.data.email;
        const userDataLogin = await addUser(name, email);
        // await changeLoginUser(userDataLogin);
        // setLoginData(userDataLogin);
        // localStorage.setItem("email", userDataLogin.email);
        const data = await userDataLogin;
        setLoginData(data);
        localStorage.setItem("loginData", JSON.stringify(data));
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  const addUser = (name, email) => {
    const requestBody = { name: name, email: email };
    return axios
      .post(`http://localhost:5000/users`, requestBody)
      .then((response) => {
        return response.data[0];
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    const items = await getAllItemsApi();
    setAllItemData(items);
  };

  return (
    <div>
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
              <li className="nav-item">
                <Link to="/itemsList" className="nav-link">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/newpostform" className="nav-link">
                  Post Now
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
            {!loginData ? (
              <button
                onClick={() => login()}
                className="btn btn-outline-success my-2 my-sm-0"
                // type="submit"
              >
                {/* <Link to="/login" className="nav-link">
                  Sign In
                </Link> */}
                Sign In
              </button>
            ) : (
              <ul className="navbar-nav">
                {/* <li className="nav-item">Welcome, {loginData.name}</li> */}
                <li className="nav-item">
                  <Link to="/itemsList" className="nav-link">
                    My Items
                  </Link>
                </li>
                <button
                  onClick={() => handleLogout()}
                  className="btn btn-outline-success my-2 my-sm-0"
                  // type="submit"
                >
                  Sign Out
                </button>
              </ul>
            )}
            {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              // type="submit"
            >
              <Link to="/login" className="nav-link">
                Sign In
              </Link>
            </button> */}
          </div>
        </nav>
      </div>
      {/* <NavBar /> */}
      <div className="container py-3">
        {/* <button onClick={handleLogout}>Log out</button> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/itemslist"
            element={
              <ItemsList getAllItems={getAllItems} allItemData={allItemData} />
            }
          />
          {/* <Route
            path="/login"
            element={<Login loginData={loginData} login={login} />}
          /> */}
          <Route path="/items/:id" element={<Item />} />
          <Route
            path="/newpostform"
            element={<NewPostForm loginData={loginData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
