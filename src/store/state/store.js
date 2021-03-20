import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import movieReducer from './movie'
import singleReducer from './singleMovie'

const store = configureStore({
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
  reducer:{
   moviesState: movieReducer,
   singleMovie: singleReducer
  }
})

export default store;