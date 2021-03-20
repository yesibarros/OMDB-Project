import { createReducer, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getSingleMovieParamRequest = createAsyncThunk("MOVIES", (name) => {
    return axios.get(`http://www.omdbapi.com/?apikey=64b325d0&i=${name}`)
    
    .then((movie)=>{
      return movie.data
    })
})


 const singleReducer=createReducer({},{
    [getSingleMovieParamRequest.fulfilled]:(state, action)=> action.payload,
    
} )

export default singleReducer