// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import { useState } from "react";

import { useEffect } from "react";

const Login = (props) => {
  // const [loginData, setLoginData] = useState("");

  // const login = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     try {
  //       const res = await axios.get(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${response.access_token}`,
  //           },
  //         }
  //       );

  //       const name = res.data.name;
  //       const email = res.data.email;

  //       addUser(name, email);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  // });

  // const addUser = async (name, email) => {
  //   const requestBody = { name: name, email: email };
  //   const response = await axios.post(
  //     `http://localhost:5000/users`,
  //     requestBody
  //   );
  //   const userData = response.data[0];
  //   console.log(userData);
  //   setLoginData(userData);
  // };
  // useEffect(() => {
  //   if (!props.loginData) {
  //     console.log("not logged in");
  //   }
  // }, []);

  return (
    <div>
      {/* <form>
        <label htmlFor="name">Name</label>
        <input name="name" id="name"></input>
      </form> */}
      {!props.loginData ? (
        <button onClick={() => props.login()}>Sign in With Google</button>
      ) : (
        <p>ur signed in</p>
      )}
    </div>
  );
};

export default Login;
