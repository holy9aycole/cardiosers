import { makeStyles } from "@mui/styles";
import LoginBg from '../../assets/images/login-web.png'


export const useStyles = makeStyles((theme) => ({
  mainContainer:{
    backgroundImage: `url(${LoginBg})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100vh",
    paddingTop:"100px",
  },
  logo:{
   // position:"absolute",
    display:"block",
    margin:"auto",
    width:"100px",
    [theme.breakpoints.up('xl')]:{
      width:"160px",
    },
    [theme.breakpoints.down('sm')]:{
      width:"120px",
    }
  },
  formContainer:{
    border: '1px solid #3D3DD9',
    borderRadius: '30px',
    opacity: 1,
    backgroundColor:"#0f15a2",
    mixBlendMode:"luminosity",
    width:"40vw",
    padding:"80px 70px 40px 70px",
    margin:"40px auto",
    display:"block",
    [theme.breakpoints.down('sm')]:{
      width:"100vw",
      position:"absolute",
      bottom:0,
      margin:0,
      borderBottomLeftRadius:0,
      borderBottomRightRadius:0,
      backgroundColor:"#2e2e80",
      mixBlendMode:"normal",
      padding:"80px 30px 100px 30px"
    }
  },
  button:{
    backgroundColor:"#3d3dd9",
    color:"#ffffff",
    width:"100%",
    opacity:1,
    marginTop:"2rem",
    position:"relative",
    height:"45px"
  },
  textField:{
    // backgroundColor:"#3dedd9",
    width:"100%",
    borderRadius:"6px"
  },
  text1:{
    color:"#ffffff",
    fontSize:"14px",
    textAlign:"center",
    marginTop:"10px",
    opacity:0.8
  },
  mailicon:{
    position:"relative",
    left:"90%",
    marginBottom:"-30px"
  },
  text2:{
    color:"#ffffff",
    textAlign:"center"
  }
}));

