import React from 'react';




import {Card, CardActionArea,Typography, Grid, CardMedia, CardContent, CardActions }from '@material-ui/core/';
import useStyles from "../styles/styleSingleMovie";
import {useSelector}from 'react-redux'

const SingleMovie = () => {
  const singleMovie = useSelector((state)=> state.moviesState)
console.log("SINGLE", singleMovie)
    const classes = useStyles();
    return (
      <Grid className={classes.paperContainer} align='center'>
        <Card  className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={singleMovie.Poster}
            title={singleMovie.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {singleMovie.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card >
      </Grid>
    );
};

export default SingleMovie;