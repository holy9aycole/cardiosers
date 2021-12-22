import { Avatar, Badge, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Profile from 'assets/images/profile-back.png'

export const ProfileBackground = styled('div')(({ theme }) => ({
    backgroundImage: `url(${Profile})`,
    backgroundRepeat: "no-repeat",
    height: "42vh",
    backgroundSize: "cover",
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        height: "30vh",
    }
}));

export const SmallAvatar = styled(Avatar)(({ theme }) => ({
    height: '15px',
    width: '15px',
    zIndex: 11,
    backgroundColor: '#90A4AE',
    [theme.breakpoints.down('md')]: {
        width: '15px',
        height: '15px',
    }
}));

export const DisplayPic = styled(Avatar)(({ theme }) => ({
    width: 120,
    height: 120,
    [theme.breakpoints.down('md')]: {
        width: 120,
        height: 120,
    }
}));

export const BadgeStyle = styled(Badge)(({ theme }) => ({
    position: 'absolute',
    left: 100,
    top: "35vh",
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        left: 40,
        top: "21vh",
    },
}));

export const GridStyle = styled(Grid)(({ theme }) => ({
    padding: '100px 200px 100px 100px',
    [theme.breakpoints.down('md')]: {
        padding: '50px',
    },
}));

export const FormField = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '30px 0px',
    [theme.breakpoints.down('md')]: {
        padding: '10px 0px',
    },
}));

export const Circle = styled('div')(({ theme }) => ({
    borderRadius: '20px',
    height: '36px',
    width: '36px',
    backgroundColor: '#90A4AE',
    paddingTop: '8px',
    [theme.breakpoints.down('md')]: {
        left: 40,
        top: "21vh",
    },
}));

export const Icon = styled('img')(({ theme }) => ({
    height: '18px',
    width: '18px',
    margin: 'auto',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        left: 40,
        top: "21vh",
    },
}));

export const Text = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins',
    fontSize: '16px',
    color: '#202020',
    fontWeight: 600,
    margin: '6px 0px 0px 10px',
    [theme.breakpoints.down('md')]: {
        fontSize: '13px',
        margin: '8px 0px 0px 10px',
    },
}));

export const Edit = styled('img')(({ theme }) => ({
    height: '18px',
    width: '18px',
    float: 'right',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}));

export const EditMobile = styled('img')(({ theme }) => ({
    height: '18px',
    width: '18px',
    marginTop: '15px',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
        display: 'none'
    },
}));

export const GridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
    },
}));

export const LogOut = styled(Button)(({ theme }) => ({
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 600,
    backgroundColor: '#3D3DD9',
    boxShadow: '0px 6px 15px #09094766',
    borderRadius: '12px',
    padding: '15px 115px',
    color: '#FFFFFF',
    display: 'block',
    margin: 'auto',
    marginBottom: '50px',
    '&:hover': {
        backgroundColor: '#3D3DD9',
    },
    [theme.breakpoints.up('md')]: {
        display: 'none'
    },
}));