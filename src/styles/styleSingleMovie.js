import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 600,
    },
    paperContainer: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/prueba4.jpg'})`,
      // backgroundRepeat: 'no-repeat',
    
  }
  });


  export default useStyles;