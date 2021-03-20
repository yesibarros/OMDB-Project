import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { useInput } from "../utils/custom-hook";
import { log, success, error } from "../utils/logs";

import Register from '../components/Register'
  


const RegisterContainer = () => {
  const history = useHistory();
  const name = useInput("name");
  const surname = useInput("surname");
  const email = useInput("email");
  const password = useInput("password");

  const handleSubmit = async (e) => {
    console.log("surname",surname)
    console.log("name",name)
    console.log("email",email)
    console.log("password",password)
    e.preventDefault();
    log("register attempt...");
    try {
      // POST user credentials
      await axios.post("/api/users/register", {
        name:name.value,
        surname:surname.value,
        email: email.value,
        password: password.value,
      });
      success(`new user registered`);
      // Redirect to login!
      history.push("/login");
    } catch (data) {
      // something's not right...
      // error(response.status, response.statusText);
      console.log(data)
    }
  }








    return (
      <div>
         <Register handleSubmit={handleSubmit} email={email} password={password}name={name}surname={surname}/>
      </div>
       
    );
};

export default RegisterContainer;