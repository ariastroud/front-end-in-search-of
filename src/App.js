import { Routes, Route } from "react-router-dom";
import NewPostForm from "./pages/NewPostForm";
import ItemsList from "./pages/ItemsList";
import Item from "./pages/Item";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import MyItems from "./pages/MyItems";
import SideNav from "./components/SideNav";

const getAllItemsApi = async () => {
  const response = await axios.get("http://localhost:5000/items");
  return response.data;
};

const getAllItemsByUserApi = async (id) => {
  const response = await axios.get(`http://127.0.0.1:5000/users/${id}/items`);
  return response.data;
};

const addPostApi = async (postData) => {
  const response = await axios.post(
    `http://127.0.0.1:5000/users/${postData.userId}/items`,
    postData
  );
  return response;
};

function App() {
  const [allItemData, setAllItemData] = useState([]);
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [itemsByUser, setItemsByUser] = useState([]);

  const addPostCallBack = async (postData) => {
    const response = await addPostApi(postData);
    const newPost = [...allItemData];
    const newPostUser = [...itemsByUser];
    newPost.push({ ...response.data.item });
    newPostUser.push({ ...response.data.item });
    setAllItemData(newPost);
    setItemsByUser(newPostUser);
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
    getAllItemsByUser();
  }, []);

  const getAllItems = async () => {
    const items = await getAllItemsApi();
    setAllItemData(items);
  };

  const getAllItemsByUser = async () => {
    const userId = loginData.id;
    const items = await getAllItemsByUserApi(userId);
    setItemsByUser(items);
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 py-2">
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
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
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/itemsList" className="nav-link">
                  All Items
                </Link>
              </li>
            </ul>
            {!loginData ? (
              <button
                onClick={() => login()}
                className="btn btn-outline-success my-2 my-sm-0"
                // type="submit"
              >
                Sign In
              </button>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/myitems" className="nav-link">
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
                  className="btn btn-outline-success my-2 my-sm-0"
                  // type="submit"
                >
                  Sign Out
                </button>
              </ul>
            )}
          </div>
        </nav>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/itemslist"
            element={
              <ItemsList getAllItems={getAllItems} allItemData={allItemData} />
            }
          />
          <Route path="/items/:id" element={<Item />} />
          <Route
            path="/newpostform"
            element={
              <NewPostForm
                loginData={loginData}
                addPostCallBack={addPostCallBack}
              />
            }
          />
          <Route
            path="/myitems"
            element={<MyItems itemsByUser={itemsByUser} />}
          ></Route>
          <Route path="/test" element={<SideNav />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
