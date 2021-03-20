import React,{useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getMoviesRequest } from "../store/state/movie";
import Movies from "../components/Movies"
import axios from 'axios'
import { UserContext } from "../index";

const MoviesContainer = () => {
    const movies = useSelector((state)=> state.moviesState)
    const { user } = useContext(UserContext);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getMoviesRequest());
      
    }, []);
    console.log("USEER HOME", user)
    
      const onClick=()=>{
        if(!user){return }
        axios.post(`/api/favorites/${user._id}`, {imdbID: movies.imdbID})
       .then((res)=>res.data
       ).then((movie)=> movie)
       .catch((err)=>{
         console.log(err)
       })
      }
      
    return (
        
        <Movies onClick={onClick} movies={movies}  />
    );
};







export default MoviesContainer;