import "./App.css";
// import { signInWithGoogle } from "./Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import { useEffect } from "react";
import React from "react";
// import { GoogleAuthProvider } from "firebase/auth";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import axios from "axios";

function App() {
  const [loginData, setLoginData] = useState("");

  return (
    <div className="App">
      <Navbar />
      {!loginData ? (
        <GoogleLogin
          className="loginButton"
          onSuccess={(credentialResponse) => {
            // console.log(credentialResponse.credential);
            var user = jwt_decode(credentialResponse.credential);
            // console.log(user.email);
            // console.log(user.name);
            const name = user.name;
            const email = user.email;
            const requestBody = { name: name, email: email };

            return axios
              .post(`http://localhost:5000/users`, requestBody)
              .then((response) => {
                // console.log(response.data[0]);
                setLoginData(response.data[0]);
              });
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <section>Hello {loginData.name}</section>
      )}
    </div>
  );
}

export default App;
