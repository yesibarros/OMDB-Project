import { createReducer, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMoviesRequest = createAsyncThunk("MOVIES", () => {
    return axios.get(`http://www.omdbapi.com/?apikey=64b325d0&s=movie`)
    .then((movie)=>{return movie.data.Search});


})

export const getMoviesParamRequest = createAsyncThunk("MOVIES", (name) => {
    return axios.get(`http://www.omdbapi.com/?apikey=64b325d0&s=${name}`)
    .then((movie)=>{
      return movie.data.Search
     
    })
})


const movieReducer = createReducer([],{
    [getMoviesRequest.fulfilled]:(state, action)=> action.payload,
    [getMoviesParamRequest.fulfilled]:(state, action)=> action.payload,
    
} )


export default movieReducer