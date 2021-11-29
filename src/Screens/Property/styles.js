import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Bg from '../../assets/images/Map-bg-web.png'


export const IndiaMap = styled('img')(({theme}) => ({
    display:"block",
    margin:"0px auto",
    width:"50vw",
    [theme.breakpoints.down('sm')]:{
        margin:"120px auto",
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
        [theme.breakpoints.down('xs')]:{
            fontSize:"24px",
            marginLeft:"30px"
        }
}));



 export const useStyles = makeStyles((theme) => ({
    mainContainer:{
        backgroundImage:`url(${Bg})`,
        backgroundRepeat:"no-repeat",
        height:"100vh",
        backgroundSize:"cover",
        paddingTop:"140px",
        [theme.breakpoints.down('xs')]:{
            height:"100vw",
        }
    },
    indiaMap:{
        display:"block",
        margin:"0px auto",
        width:"50vw",
        [theme.breakpoints.down('xs')]:{
            margin:"50px auto",
            width:"100vw"
        }
    },
    location1:{
        position:"fixed",
        left:"45.5%",
        marginTop:"-26%",
        display:"block",
        [theme.breakpoints.down('xs')]:{
            display:"none"
        }
    },
    locationPoint1:{
        position:"absolute",
        left:"50%",
        marginTop:"-8%"
    },
    border1:{
        borderLeft:"1px solid blue",
        position:"fixed",
        left:"51%",
        height:"200px",
        marginTop:"-23%"
    },
    text1:{
        color:"#3d3dd9",
        fontSize:"48px",
        fontFamily:"IvyPresto",
        letterSpacing:"0.48px",
        lineHeight:"50px",
        position:"absolute",
        marginLeft:"60px"
    }
}))

