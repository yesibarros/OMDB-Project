import React from 'react';
import { Link } from "react-router-dom";
import {
    Typography,
    Card,
    
    CardContent,
    CardMedia,
    Grid,
    Container,
    Button
  } from "@material-ui/core";
  import Box from '@material-ui/core/Box';
 
  
  import useStyles from "../styles/styles";
  import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
const Movies = ({movies, onClick}) => {
  
    const classes = useStyles();
    return (
        <main  className={classes.paperContainer}>
        <div className={classes.paperContainer} >
          <Container  maxWidth="sm">
            <Typography
              variant="h4"
              align="center"
              color="testPrimary"
              gutterBottom
            >
             <Typography component="div">
      <Box  boxShadow={40} letterSpacing={6} m={1}>
      YOUR FAVORITES FILMS
      </Box>
      <Box boxShadow={8}fontStyle="italic" letterSpacing={5} m={1}>
        all in one place
      </Box>
    </Typography>
              
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={8}>
            {movies.length>0 ?movies.map((movie)=>(
              <Grid item key={movie.imdbID} xs={12} sm={3}>
              
                  <Button className={classes.ButtonFav}>
                  <FavoriteTwoToneIcon onClick={onClick} />
                  </Button>
              <Link to = {`/movies/${movie.imdbID}`}>
              <Card className={classes.movie} >
                <CardMedia
                  className={classes.cardMedia}
                  image={movie.Poster}
                  title={movie.Title}
                />
                <CardContent className={classes.CardContent}>
                  <Typography gutterBottom variant="h7">
                  {movie.Title}
                  </Typography>
                  
              
                
                </CardContent>
              </Card>
            </Link>
            </Grid>



            )): null}
          </Grid>
        </Container>
      </main>
      
    );
};

export default Movies;