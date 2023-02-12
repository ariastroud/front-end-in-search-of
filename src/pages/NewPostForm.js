import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewPostForm = ({ loginData, addPostCallBack, getAllItemsByUser }) => {
  const [image, setImage] = useState("");
  const [postData, setPostData] = useState({
    title: "",
    brand: "",
    category: "Choose category...",
    size: "",
    description: "",
    file: "",
    userId: loginData.id,
  });

  const [category, setCategory] = useState("");
  const [alert, setAlert] = useState("");

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });

    if (e.target.value === "Clothing") {
      setCategory("clothing");
    } else if (e.target.value === "Handbags") {
      setCategory("handbags");
    } else if (e.target.value === "Jewelry") {
      setCategory("jewelry");
    } else if (e.target.value === "Shoes") {
      setCategory("shoes");
    }
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
    setImage("");
    setAlert("postSubmitted");
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "insearchof");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/damq79nod/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setPostData({ ...postData, [e.target.name]: file.secure_url });
  };

  let sizeSelect;
  if (category === "clothing") {
    sizeSelect = (
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Size</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={handleChange}
          name="size"
          defaultValue={"default"}
        >
          <option value={"default"} disabled>
            Choose size...
          </option>
          <option value={"XS (0-2)"}>XS (0-2)</option>
          <option value={"S (4-6)"}>S (4-6)</option>
          <option value={"M (8-10)"}>M (8-10)</option>
          <option value={"L (12-14)"}>L (12-14)</option>
          <option value={"XL (16)"}>XL (16)</option>
          <option value={"2XL (18-20)"}>2XL (18-20)</option>
        </select>
      </div>
    );
  } else if (category === "handbags" || category === "jewelry") {
    sizeSelect = (
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Size</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={handleChange}
          name="size"
          defaultValue={"default"}
        >
          <option value={"default"} disabled>
            Choose size...
          </option>
          <option value={"N/A"}>N/A</option>
        </select>
      </div>
    );
  } else if (category === "shoes") {
    sizeSelect = (
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Size</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={handleChange}
          name="size"
          defaultValue={"default"}
        >
          <option disabled value={"default"}>
            Choose size...
          </option>
          <option value={"5"}>5</option>
          <option value={"6"}>6</option>
          <option value={"7"}>7</option>
          <option value={"8"}>8</option>
          <option value={"9"}>9</option>
          <option value={"10"}>10</option>
          <option value={"11"}>11</option>
        </select>
      </div>
    );
  } else {
    sizeSelect = (
      <></>
      // <div className="form-group">
      //   <label htmlFor="exampleFormControlSelect1">Size</label>
      //   <select
      //     className="form-control"
      //     id="exampleFormControlSelect1"
      //     onChange={handleChange}
      //     name="size"
      //     value={postData.size}
      //   >
      //     <option disabled>Select category first</option>
      //   </select>
      // </div>
    );
  }
  return (
    <div className="container py-3 w-50">
      <h2>Create new post</h2>
      <form onSubmit={submitPostData}>
        <div className="form-group">
          <label htmlFor="formTitle">Title</label>
          <input
            type="text"
            required
            className="form-control"
            id="formTitle"
            onChange={handleChange}
            name="title"
            value={postData.title}
            placeholder="What are you searching for?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formBrand">Brand</label>
          <input
            type="text"
            required
            className="form-control"
            id="formBrand"
            onChange={handleChange}
            name="brand"
            value={postData.brand}
            placeholder="Enter brand/designer"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formCategory">Category</label>
          <select
            className="form-control"
            id="formCategory"
            onChange={handleChange}
            name="category"
            value={postData.category}
          >
            <option disabled>Choose category...</option>
            <option>Clothing</option>
            <option>Handbags</option>
            <option>Jewelry</option>
            <option>Shoes</option>
          </select>
        </div>
        {sizeSelect}
        <div className="form-group">
          <label htmlFor="formDescription">Description</label>
          <textarea
            required
            className="form-control"
            id="formDescription"
            rows="3"
            onChange={handleChange}
            name="description"
            value={postData.description}
            placeholder="Describe what you're looking for! You can include the color, size, condition, style and any other details. "
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="formImage">
            Please wait while the image uploads...
          </label>
          <input
            required
            type="file"
            className="form-control-file"
            id="formImage"
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
          <></>
        )}
        {alert ? (
          <div className="alert alert-success" role="alert">
            Item posted!{" "}
            <Link
              to="/myitems"
              className="alert-link"
              onClick={getAllItemsByUser}
            >
              Take me to my items!
            </Link>
          </div>
        ) : (
          <button type="submit" className="btn btn-dark">
            Post
          </button>
        )}
      </form>
    </div>
  );
};

export default NewPostForm;
