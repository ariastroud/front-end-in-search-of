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

  return (
    <form className="itemForm" onSubmit={submitPostData}>
      <label htmlFor="name">Title</label>
      <input name="title" id="title" value={postData.title} />
      <label htmlFor="name">Brand</label>
      <input name="Brand" id="brand" value={postData.brand} />
      <label htmlFor="name">Category</label>
      <input name="Category" id="category" value={postData.category} />
      <label htmlFor="name">Size</label>
      <input name="Size" id="size" value={postData.size} />
      <label htmlFor="name">Description</label>
      <input name="Description" id="description" value={postData.description} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;
