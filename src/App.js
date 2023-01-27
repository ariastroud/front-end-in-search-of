import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NewPostForm from "./pages/NewPostForm";
import ItemsList from "./pages/ItemsList";
import Item from "./pages/Item";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";

const getAllItemsApi = async () => {
  const response = await axios.get("http://localhost:5000/items");
  return response.data;
};
function App() {
  const [allItemData, setAllItemData] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    const items = await getAllItemsApi();
    setAllItemData(items);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemsList getAllItems={getAllItems} allItemData={allItemData} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/newpostform" element={<NewPostForm />} />
      </Routes>
    </div>
  );
}

export default App;
