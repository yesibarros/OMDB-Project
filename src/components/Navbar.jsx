import React, {useContext} from "react";
import {UserContext } from '../index'
import InputBase from "@material-ui/core/InputBase";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";

import { Link } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";


import useStyles from "../styles/styleNavbar";


const Navbar = ({ onChange, value, handleSubmit ,handleLogout}) => {
  const classes = useStyles();
  const { user } = useContext(UserContext); 
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <MovieIcon edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer" className={classes.icon} />


          <Typography className={classes.title} variant="h6" noWrap>
          <Link style={{ textDecoration: "none", color: "white"  }} to="/">OMDB</Link>
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
          
           
              <InputBase
              
                onChange={onChange}
                value={value}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </form>
          {
          (!user)?
          
          <Button type="submit" color="inherit">
          
           <Link  style={{ textDecoration: "none", color: "white" }} to="/login">
             LOG IN
           </Link>
           
           </Button>
            :
          
            <Button type="submit" color="inherit">
          
            <Link  onClick= {handleLogout} style={{ textDecoration: "none", color: "white" }} >
              LOG OUT
            </Link>
            
            </Button>
          
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;