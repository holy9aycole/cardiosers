import { makeStyles } from "@mui/styles";

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
