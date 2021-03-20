import React,{ useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {useSelector, useDispatch} from 'react-redux'
import { getMoviesRequest } from "../store/state/movie";
import { UserContext } from "../index";



import '../styles/stylephoto.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
   

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));



export default function FavoriteContainer() {
  const movies = useSelector((state)=> state.moviesState)
  const { user } = useContext(UserContext);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesRequest());
    
  }, []);
  if(user){

    console.log("USERFAV", user.favorites)
  }
 
  return (
    <div className='favorite'>
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={9} >
        { movies.map((movie) => (
          <GridListTile key={movie.imdbID}>
            <img  src={movie.Poster} alt={movie.Title} />
            <GridListTileBar
              title={movie.Title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}
