import { createReducer, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getRegisterRequest = createAsyncThunk("MOVIES", (name) => {
    
})

const movieReducer = createReducer([],{
    [getMoviesRequest.fulfilled]:(state, action)=> action.payload,
    [getMoviesParamRequest.fulfilled]:(state, action)=> action.payload,
    [getRegisterRequest.fulfilled]:(state,action)=> action.payload
} )


export default movieReducer