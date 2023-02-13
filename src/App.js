import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home";
import MyItems from "./pages/MyItems";
import SearchResults from "./pages/SearchResults";
import NewPostForm from "./pages/NewPostForm";
import ItemsList from "./pages/ItemsList";
import {
  getAllItemsApi,
  getAllItemsByUserApi,
  addPostApi,
  searchApi,
  markFoundApi,
  addUser,
} from "./api/ApiFunctions";

function App() {
  const [items, setItems] = useState([]);
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [searchString, setSearchString] = useState("");
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();

  const updateItem = async (id) => {
    const newItem = await markFoundApi(id);
    setItems((oldItems) => {
      return oldItems.map((item) => {
        if (item.id === newItem.id) {
          return newItem;
        } else {
          return item;
        }
      });
    });
  };

  const submitSearch = async (e) => {
    e.preventDefault();

    const results = await searchApi(searchString);
    setItems(results);
    setFilter("searchItems");
    navigate("/search");
  };

  const filterCallback = (filteredArray) => {
    setItems(filteredArray);
  };

  const addPostCallBack = async (postData) => {
    const response = await addPostApi(postData);
    const newPost = [...items];
    newPost.push({ ...response.data.item });
    setItems(newPost);
  };

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
    navigate("/");
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    const items = await getAllItemsApi();
    setItems(items);
    setFilter("defaultFilter");
  };

  const getAllItemsByUser = async () => {
    const userId = loginData.id;
    const items = await getAllItemsByUserApi(userId);
    setItems(items);
    setFilter("userItems");
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-light navbar-expand-lg px-3 py-2 bg-light">
          <Link to="/" className="link-dark text-decoration-none navbar-brand">
            In Search Of
          </Link>
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

          {!loginData ? (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto"></ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button
                    onClick={() => login()}
                    className="btn btn-light my-2 my-sm-0"
                  >
                    Sign In
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearchString(e.target.value)}
                  name="search"
                  value={searchString}
                />
                <button
                  onClick={submitSearch}
                  className="btn btn-light my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <ul className="navbar-nav mr-auto"></ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/itemslist"
                    className="nav-link"
                    onClick={getAllItems}
                  >
                    All Items
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/myitems"
                    className="nav-link"
                    onClick={getAllItemsByUser}
                  >
                    My Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/newpostform" className="nav-link">
                    Post Now
                  </Link>
                </li>
                <button
                  onClick={() => handleLogout()}
                  className="btn btn-light my-2 my-sm-0"
                >
                  Sign Out
                </button>
              </ul>
            </div>
          )}
        </nav>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/itemslist"
            element={
              <ItemsList
                items={items}
                filterCallback={filterCallback}
                loginData={loginData}
                searchString={searchString}
                updateItem={updateItem}
                filter={filter}
              />
            }
          />
          <Route
            path="/newpostform"
            element={
              <NewPostForm
                loginData={loginData}
                addPostCallBack={addPostCallBack}
                getAllItemsByUser={getAllItemsByUser}
              />
            }
          />
          <Route
            path="/myitems"
            element={
              <MyItems
                items={items}
                loginData={loginData}
                updateItem={updateItem}
                filter={filter}
                filterCallback={filterCallback}
              />
            }
          ></Route>
          <Route
            path="/search"
            element={
              <SearchResults
                filterCallback={filterCallback}
                items={items}
                searchString={searchString}
                loginData={loginData}
                filter={filter}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
