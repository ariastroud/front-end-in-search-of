import React from "react";
import axios from "axios";
import { useState } from "react";

const addPostApi = async (postData) => {
  const response = await axios.post(
    `http://127.0.0.1:5000/users/${postData.userId}/items`,
    postData
  );
  console.log(response);
};

const NewPostForm = ({ loginData }) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    brand: "",
    category: "",
    size: "XS (0-2)",
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

    console.log(postData);
    addPostApi(postData);
    setPostData({
      title: "",
      brand: "",
      category: "",
      size: "XS (0-2)",
      description: "",
      file: "",
      userId: "",
    });
  };

  const uploadImage = async (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const files = e.target.files;
    console.log(files);
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
    console.log(file.secure_url);
    setImage(file.secure_url);
    setLoading(false);
    setPostData({ ...postData, [e.target.name]: file.secure_url });
  };

  return (
    <div>
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
            // placeholder="name@example.com"
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
            // placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Category</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={handleChange}
            name="category"
            value={postData.category}
            // placeholder="name@example.com"
          />
        </div>
        {/* <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Size</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={handleChange}
            name="size"
            value={postData.size}
          >
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
            // value={image.secure_url}
          />
        </div>
        {image ? (
          <p>Upload successful!</p>
        ) : (
          <p>Please wait while file is uploading...</p>
        )}
        {/* <button
          as="label"
          htmlFor="exampleFormControlFile1"
          // onClick={uploadFile}
        >
          Upload
        </button> */}
        <button onClick={submitPostData} className="btn btn-primary">
          Post
        </button>
      </form>
      <div>
        <img alt="idk" src={image} style={{ width: "300px" }} />
      </div>
    </div>
  );
};

export default NewPostForm;
