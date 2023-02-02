import React from "react";
import { useState } from "react";

const NewPostForm = ({ loginData, addPostCallBack }) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    brand: "",
    category: "Choose category...",
    size: "Choose size...",
    description: "",
    file: "",
    userId: loginData.id,
  });

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const submitPostData = (e) => {
    e.preventDefault();

    addPostCallBack(postData);
    setPostData({
      title: "",
      brand: "",
      category: "",
      size: "Choose size...",
      description: "",
      file: "",
      userId: "",
    });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "insearchof");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/damq79nod/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
    setPostData({ ...postData, [e.target.name]: file.secure_url });
  };

  return (
    <div className="container py-3 w-50">
      <h2>Create new post</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={handleChange}
            name="title"
            value={postData.title}
            placeholder="What are you searching for?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Brand</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={handleChange}
            name="brand"
            value={postData.brand}
            placeholder="Enter brand/designer"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={handleChange}
            name="category"
            value={postData.category}
          >
            <option disabled>Choose category...</option>
            <option>Clothing</option>
            <option>Handbags</option>
            <option>Jewelry</option>
            <option>Accessories</option>
            <option>Shoes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Size</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={handleChange}
            name="size"
            value={postData.size}
          >
            <option disabled>Choose size...</option>
            <option>XS (0-2)</option>
            <option>S (4-6)</option>
            <option>M (8-10)</option>
            <option>L (12-14)</option>
            <option>XL (16)</option>
            <option>2XL (18-20)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={handleChange}
            name="description"
            value={postData.description}
            placeholder="Describe what you're looking for! You can include the color, size, condition, style an any other details. "
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">
            Upload Image (.jpg, .jpeg, .png)
          </label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
            name="file"
            onChange={uploadImage}
          />
        </div>
        {image ? (
          <div>
            <p>Upload successful!</p>
            <p>Image preview:</p>
            <img
              className="pb-2"
              alt="uploaded"
              src={image}
              style={{ width: "300px" }}
            />
          </div>
        ) : (
          <p>Please wait while file is uploading...</p>
        )}
        <button onClick={submitPostData} className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
