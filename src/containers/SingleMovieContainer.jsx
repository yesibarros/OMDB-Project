import React , {useEffect}from 'react';
import SingleMovie from '../components/SingleMovie'
import {useParams } from "react-router-dom";
import {useDispatch }from 'react-redux'
import {getSingleMovieParamRequest} from '../store/state/singleMovie'

const SingleMovieContainer = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
        
    useEffect(() => {
        dispatch(getSingleMovieParamRequest(id));
      }, []);


   console.log(useParams())
    return (
        <>
        <SingleMovie />
        </>
    );
};

export default SingleMovieContainer;



