import React from "react";
import { loginUrl } from "../spotify";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <img src="./logo.jpg" alt="spotify logo" />
      <a href={loginUrl}>Login with SPOTIFY</a>
    </div>
  );
}

export default Login;
