import "./App.css";
// import { signInWithGoogle } from "./Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import { useEffect } from "react";
import React from "react";
// import { GoogleAuthProvider } from "firebase/auth";
// import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";
import { useState } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import NewPostForm from "./components/NewPostForm";

function App() {
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
    setLoginData(userData);
  };

  return (
    <div className="App">
      <Navbar loginData={loginData} />
      <main className="main">
        {!loginData ? (
          <button onClick={() => login()}>Sign in With Google</button>
        ) : (
          <section>Hello, {loginData.name}</section>
          // get all posts for logged in user
        )}
      </main>
      <section>{/* <NewPostForm /> */}</section>
    </div>
  );
}

export default App;
