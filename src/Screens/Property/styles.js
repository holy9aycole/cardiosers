import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Bg from '../../assets/images/Map-bg-web.png'


export const IndiaMap = styled('img')(({theme}) => ({
    display:"block",
    margin:"0px auto",
    width:"50vw",
    [theme.breakpoints.down('sm')]:{
        margin:"140px auto",
        width:"100vw"
    }
}));

export const MainContainer = styled('div')(({theme}) => ({
    backgroundImage:`url(${Bg})`,
        backgroundRepeat:"no-repeat",
        height:"100vh",
        backgroundSize:"cover",
        paddingTop:"140px",
        [theme.breakpoints.down('xs')]:{
            height:"100vw",
        }
}));

export const Text1 = styled(Typography)(({theme}) => ({
        color:"#3d3dd9",
        fontSize:"48px",
        fontFamily:"IvyPresto",
        letterSpacing:"0.48px",
        lineHeight:"50px",
        position:"absolute",
        marginLeft:"60px",
        [theme.breakpoints.down('sm')]:{
            fontSize:"35px",
            marginLeft:"30px",
            lineHeight:"40px"
        }
}));



 
