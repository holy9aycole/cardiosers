/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, TextField } from 'components/custom';
import useAuth from 'hooks/useAuth';
import logo from 'assets/images/rmz-logo (1).svg';
import mailIcon from 'assets/images/email-icon.svg';
import { MainContainer, Logo, FormContainer, MailIcon, TextField1, Button1, Text1 } from './styles';

function LoginScreen() {
  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string()
          .email()
          .required('email is required!')
          .test('rmz', 'Only @rmzcorp email is allowed', (email) => {
            if (email.indexOf('@rmzcorp.com', email.length - '@@rmzcorp.com'.length) !== -1) {
              return true;
            }
            console.log('returning false');
            return false;
          }),
      })
    ),
  });

  const { getOtp } = useAuth();

  const onSubmit = async (data) => {
    getOtp(data);
  };

  return (
    <>
      <MainContainer>
        <Logo src={logo} alt="" />
        <Form methods={methods} onSubmit={onSubmit}>
          <FormContainer>
            <MailIcon src={mailIcon} alt="" />
            {/* <TextField1 label="Enter you Email" /> */}
            <TextField name="email" variant="outlined" label="Enter your Email" fullWidth sx={{ color: 'white' }} />
            <Button1 type="submit">GET OTP</Button1>
          </FormContainer>
        </Form>
      </MainContainer>
    </>
  );
}

export default LoginScreen;
