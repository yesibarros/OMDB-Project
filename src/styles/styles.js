import {fade, makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
  container:{
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5,0,1)
  },
  icon: {
      marginRight: '20px',
  },
  cardGrid:{
      padding:'20px 0'
  },
  card:{
      height:'100%',
      display:'flex',
      flexDirection:'column'
  },
  cardMedia:{
      paddingTop: '140%'
  },
  cardContent:{
      flexGrow:1,
  },

  root: {
    padding: '2px 4px',
    display: 'flex',
    width: 400,
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  ButtonFav:{
    
    height: '3',
    paddingRight:'40px'
  },
  paperContainer: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/prueba3.jpg'})`,
    // backgroundRepeat: 'no-repeat',
  
}

  
  
}))


export default useStyles;


