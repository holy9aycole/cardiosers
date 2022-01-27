import { styled } from '@mui/material/styles';
import { Button, TextField, Typography } from '@mui/material'
import LoginBg from 'assets/images/login-web.png'


export const FormContainer = styled('div')(({ theme }) => ({
  border: '1px solid #3D3DD9',
  borderRadius: '30px',
  opacity: 1,
  backgroundColor: "#0f15a2",
  mixBlendMode: "luminosity",
  width: "40vw",
  padding: "50px 70px 20px 70px",
  margin: "40px auto",
  display: "block",
  [theme.breakpoints.down('sm')]: {
    width: "100vw",
    position: "absolute",
    bottom: 0,
    margin: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#2e2e80",
    mixBlendMode: "normal",
    padding: "80px 30px 50px 30px"
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
    },
    '&:hover fieldset': {
      borderColor: 'grey',
    },
  },
  '& input':{
    color:'white',
  }
}));

export const MainContainer = styled('div')(() => ({
  backgroundImage: `url(${LoginBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  paddingTop: "20px",
}));


export const Button1 = styled(Button)(() => ({
  backgroundColor: "#3d3dd9",
  color: "#ffffff",
  width: "100%",
  opacity: 1,
  marginTop: "15px",
  position: "relative",
  height: "45px",
  textDecorationLine: 'none',
  '&:hover': {
    backgroundColor: "#3d3dd9"
  }
}));

export const TextField1 = styled(TextField)(() => ({
  width: "100%",
  borderRadius: "6px",
  margin:'10px 0',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
    },
    '&:hover fieldset': {
      borderColor: 'grey',
    },
  },
}));

export const Text1 = styled(Typography)(() => ({
  color: "#ffffff",
  fontSize: "14px",
  textAlign: "center",
  marginTop: "10px",
  opacity: 0.8
}));

export const MailIcon = styled('img')(() => ({
  position: "relative",
  left: "90%",
  marginBottom: "-30px"
}));

export const ResendButton = styled(Button)(() => ({
  color: "#ffffff",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
}));

export const OtpInnerContainer = styled('div')(() => ({
  width: "70px",
  height: "55px",
  backgroundColor: "#3d3dd9",
  borderRadius: "10px",
  textAlign: "center",
  color: "white",
  fontSize: "24px",
}));

export const OtpContainer = styled('div')(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // marginTop: "25px",
  margin:"15px 0 30px 0",
}));

export const OtpTextField = styled(TextField)(() => ({
  fontSize: "30px",
  borderRadius: "10px",
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
      borderRadius: "10px",
    },
    '&:hover fieldset': {
      borderColor: 'grey',
      borderRadius: "10px",
    },
  },
}));


export const Logo = styled('img')(({ theme }) => ({
  display: "block",
  margin: "auto",
  width: "100px",
  [theme.breakpoints.up('xl')]: {
    width: "160px",
  },
  [theme.breakpoints.down('sm')]: {
    width: "120px",
  }
}));

