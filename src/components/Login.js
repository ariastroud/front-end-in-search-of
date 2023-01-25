import React from "react";
import "./Login.css";
import { signInWithGoogle } from "../Firebase";
// import purseImg from "./assets/main.jpg";

const Login = () => {
  return (
    <section className="mainSection">
      <img
        className="mainPhoto"
        alt="purses"
        src="https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80"
      ></img>
      <section className="mainText">
        <h2>What are you searching for?</h2>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </section>
    </section>
  );
};

export default Login;
