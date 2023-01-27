import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NewPostForm from "./pages/NewPostForm";
import ItemsList from "./pages/ItemsList";
import Item from "./pages/Item";
// import NavBar from "./components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import BasicExample from "./components/NavBarBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGoogleLogin } from "@react-oauth/google";

const getAllItemsApi = async () => {
  const response = await axios.get("http://localhost:5000/items");
  return response.data;
};

function App() {
  const [allItemData, setAllItemData] = useState([]);
  const [loginData, setLoginData] = useState("");

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

        addUser(name, email);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const addUser = async (name, email) => {
    const requestBody = { name: name, email: email };
    const response = await axios.post(
      `http://localhost:5000/users`,
      requestBody
    );
    const userData = response.data[0];
    console.log(userData);
    setLoginData(userData);
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
      {/* <NavBar /> */}
      <BasicExample loginData={loginData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/itemslist"
          element={
            <ItemsList getAllItems={getAllItems} allItemData={allItemData} />
          }
        />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/newpostform" element={<NewPostForm />} />
      </Routes>
    </div>
  );
}

export default App;
