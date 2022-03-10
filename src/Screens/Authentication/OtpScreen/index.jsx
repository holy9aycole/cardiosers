/* eslint-disable */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import useControl from 'hooks/useControl';
import OtpInput from 'react-otp-input';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from 'assets/images/rmz-logo (1).svg';
import mailIcon from 'assets/images/email-icon.svg';
import { FormContainer, Logo, MainContainer, MailIcon, Button1, ResendButton } from './styles';

const theme = createTheme({
  components: {
    MuiInputBase: {
      color: '#ffffff',
    },
  },
});

function OtpScreen() {
  const location = useLocation();
  const { showSnackbar } = useControl();
  const navigate = useNavigate();
  const { verifyOtp, getOtp } = useAuth();
  const [otp, setOtp] = React.useState('');

  const onSubmit = () => {
    if (otp.length !== 4) {
      showSnackbar('Enter a valid otp', 'error');
      return;
    }
    verifyOtp({
      email: location.state?.email,
      otp: otp,
    });
  };

  if (!location.state?.email) return navigate('/login');
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Logo src={logo} alt="" />
          <FormContainer>
            <MailIcon src={mailIcon} alt="" />
            <OtpInput
              value={otp}
              onChange={(otp) => setOtp(otp)}
              numInputs={4}
              inputStyle={{
                width: '4rem',
                height: '4rem',
                margin: '0 1rem',
                fontSize: '2rem',
                borderRadius: 4,
                backgroundColor: 'red',
                color: 'white',
                border: '1px solid rgba(0,0,0,0.3)',
              }}
              containerStyle={{
                margin: '5px auto 20px auto',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
              focusStyle={{
                outline: 'none',
                color: 'white',
              }}
              isInputNum
            />
            <Button1 onClick={onSubmit}>Verify</Button1>
            <ResendButton onClick={() => getOtp({ email: location.state?.email }, false)}>RESEND</ResendButton>
          </FormContainer>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default OtpScreen;
