import React, { useEffect, useContext } from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import NavbarContainer from '../containers/NavbarContainer';
import MoviesContainer from '../containers/MoviesContainer';
import FooterContainer from '../containers/FooterContainer';
import PrivateContainer from './PrivateContainer.jsx';
import FavoriteContainer from './FavoriteContainer'
import SingleMovieContainer from '../containers/SingleMovieContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginContainer from './LoginContainer';
import { UserContext } from "../index";
import { log, success, error } from "../utils/logs";
import axios from "axios";


import useStyles from "../styles/styles";

const Main = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    log(`fetching user...`);
    axios
      .get("/api/users/me")
      .then((res) => res.data)
      .then((user) => {
        success(`found user ${user.mail}`);
        setUser(user);
      })
      .catch(({ response }) => {
        error(response.status, response.statusText);
      });
  }, []);

  const classes = useStyles();
  return (
    <>
  
      
      <NavbarContainer/>
      <Switch>
        <Route exact path='/' component={MoviesContainer}/>
        <Route path='/movies/:id' component={SingleMovieContainer}/>
        <Route path='/register' component={RegisterContainer}/>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/favorites' component={FavoriteContainer}/>
        <Route path='/users/secret' component={PrivateContainer}/>
        <Redirect to='/'/>
      </Switch> 
      <FooterContainer /> 
    </>
  );
};

export default Main;


