import React, { useState ,useContext} from "react";
import { UserContext } from "../index";

import { useDispatch } from "react-redux";
import axios from 'axios'
import Navbar from "../components/Navbar";
import { log, success } from "../utils/logs";
import {  getMoviesParamRequest } from "../store/state/movie";
import { useHistory } from "react-router-dom";


const NavbarContainer = () => {
  const { user, setUser } = useContext(UserContext);
 
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState("");
 
  

  const onChange = (e) => {
    setInputSearch(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    if (inputSearch.length > 0) {
      e.preventDefault();
      dispatch(getMoviesParamRequest(inputSearch)).then(() =>
        setInputSearch("")
      );
    }
  };

  const handleLogout =  () => {
    
    log("logout attempt...");
    
     axios.post("/api/users/logout")
       .then(()=>{
        setUser(null);
        console.log("USERset", user)
        success("logged out");
        history.push("/login");
       })
      
   
  };



  return (
    <>
      <Navbar
        handleLogout={handleLogout}
        onChange={onChange}
        handleSubmit={handleSubmit}
        value={inputSearch}
      />
    </>
  );
};

export default NavbarContainer;
