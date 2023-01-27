import React from "react";
import "./NewPostForm.css";
import { useState } from "react";

const NewPostForm = ({ addPostCallback }) => {
  const [postData, setPostData] = useState({});

  const submitPostData = (e) => {
    e.preventDefault();

    addPostCallback(postData);
    setPostData({});
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <form className="itemForm" onSubmit={submitPostData}>
      <label htmlFor="name">Title</label>
      <input
        name="title"
        id="title"
        value={postData.title}
        onChange={handleChange}
      />
      <label htmlFor="name">Brand</label>
      <input
        name="Brand"
        id="brand"
        value={postData.brand}
        onChange={handleChange}
      />
      <label htmlFor="name">Category</label>
      <input
        name="Category"
        id="category"
        value={postData.category}
        onChange={handleChange}
      />
      <label htmlFor="name">Size</label>
      <input
        name="Size"
        // id="size"
        value={postData.size}
        onChange={handleChange}
      />
      <label htmlFor="name">Description</label>
      <input
        name="Description"
        id="description"
        value={postData.description}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;
