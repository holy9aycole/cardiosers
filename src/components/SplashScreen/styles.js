import { makeStyles } from "@mui/styles";
import {styled} from '@mui/material/styles'
import { Typography, Grid } from "@mui/material";

export const Button = styled('img')(({theme}) => ({
  width:"12px",
  marginLeft:"18px",
  marginTop:"12px",
  [theme.breakpoints.down('sm')]:{
      
  }
}));

export const ButtonContainer = styled('div')(({theme}) => ({
  width:"70px",
  height:"70px",
  backgroundColor:"#3d3dd9",
  padding:"10px",
  borderRadius:"50%",
  position:"relative",
  marginLeft:"10%",
  marginTop:"50px",
  boxShadow: '0px 15px 20px #00000033',
  [theme.breakpoints.down('xs')]:{
      marginLeft:"90%",
  }
}));

export const ButtonLine = styled('img')(({theme}) => ({
 position:"relative",
 left:"16%",
 top:"-90px",
  [theme.breakpoints.down('sm')]:{
      margin:"120px auto",
      width:"100vw"
  }
}));

export const Text1 = styled(Typography)(({theme}) => ({
  fontSize:"50px",
  color:"#ffffff",
  marginLeft:"10%",
  marginTop:"60px",
  [theme.breakpoints.down('sm')]:{
      fontSize:"30px",
  }
}));

export const Container2 = styled(Grid)(({theme}) => ({
  backgroundColor: "#2C2C7E",
  zIndex:10,
  
  [theme.breakpoints.down('xs')]:{
      borderTopLeftRadius:"50px",
  }
}));

export const useStyles = makeStyles(() => ({
  image1: {
    width: "100%",
    height:"auto"
  },
  container2: {
      backgroundColor: "#2C2C7E",
      zIndex:10
  },
  logo: {
      width: "15%",
      marginTop:"12%",
      marginLeft:"10%"
  },
  image2:{
    position:"absolute",
    bottom:0,
    zIndex:-1
  },
  mainContainer:{
    height:"100vh",
    overflow:"hidden",
  },
  text1:{
    fontSize:"50px",
    color:"#ffffff",
    marginLeft:"10%",
    marginTop:"60px",
    
  }
}));
