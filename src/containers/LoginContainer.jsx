import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../index";
import { useInput } from "../utils/custom-hook";
import { log, success, error } from "../utils/logs";

import Login from '../components/Login'





export default function LoginContainer() {
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    log("login attempt...");
    try {
      
      const { data } = await axios.post("/api/users/login", {
        email: email.value,
        password: password.value,
      });
     
      setUser(data);
      success(`logged user ${data.email}`);
      // Redirect to secret route!
      history.push("/users/secret");
    } catch ({ response }) {
      // something's not right...
      error(response.status, response.statusText);
    }
  };

  
  return (
    <Login handleSubmit={handleSubmit} email={email} password={password} />
  );
}