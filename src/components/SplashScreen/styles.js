import {styled} from '@mui/material/styles'
import { Typography, Grid, Button } from "@mui/material";

export const MainContainer = styled('div')(() => ({
  height:"100vh",
  overflow:"hidden",
  position:"fixed",
  width:"100vw"
}));

export const Button1 = styled('img')(({theme}) => ({
  width:"12px",
  marginLeft:"18px",
  marginTop:"12px",
  [theme.breakpoints.down('sm')]:{
      width:"10px",
      marginLeft:"15px"
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
  [theme.breakpoints.down('sm')]:{
      marginLeft:"70%",
      width:"60px",
      height:"60px",
      marginTop:"10px"
  }
}));

export const ButtonLine = styled('img')(({theme}) => ({
 position:"relative",
 left:"16%",
 top:"-90px",
 display:"block",
  [theme.breakpoints.down('sm')]:{
      margin:"120px auto",
      width:"100vw",
      display:"none"
  }
}));

export const Text1 = styled(Typography)(({theme}) => ({
  fontSize:"50px",
  color:"#ffffff",
  marginLeft:"10%",
  marginTop:"60px",
  fontFamily:"IvyPresto",
  [theme.breakpoints.down('sm')]:{
      fontSize:"25px",
      marginTop:"30px"
  }
}));

export const Container2 = styled(Grid)(({theme}) => ({
  backgroundColor: "#2C2C7E",
  zIndex:10,
  [theme.breakpoints.down('sm')]:{
      borderTopLeftRadius:"50px",
      borderTopRightRadius:"50px",
      marginTop:"-70px",
      width:"100vw",
      height:"600px",
  }
}));

export const Image1 = styled('img')(({theme}) => ({
  width: "100%",
  height:"auto",
  [theme.breakpoints.down('sm')]:{
    height:"60vh",
    width:"100vw"
  }
}));

export const Logo = styled('img')(({theme}) => ({
  width: "15%",
  marginTop:"12%",
  marginLeft:"10%",
  [theme.breakpoints.down('sm')]:{
    
  }
}));

export const Image2 = styled('img')(() => ({
    position:"absolute",
    bottom:0,
    zIndex:-1
}));

export const SkipButton = styled(Button)(({theme}) => ({
  position:"relative",
    top:"50px",
    left:"10%",
    color:"white",
    display:"none",
    [theme.breakpoints.down('sm')]:{
      display:"block"
    }
}));



