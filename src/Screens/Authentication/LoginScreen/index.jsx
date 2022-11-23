/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, TextField } from 'components/custom';
import useAuth from 'hooks/useAuth';
import logo from 'assets/images/rmz-logo (1).svg';
import mailIcon from 'assets/images/email-icon.svg';
import { MainContainer, Logo, FormContainer, MailIcon, TextField1, Button1, Text1 } from './styles';

function LoginScreen() {
  const { getOtp, login, isAuthenticated } = useAuth();

  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        identifier: Yup.string().required('identifier name is required'),
        password: Yup.string().required('Password is required'),
      })
    ),
  });

  const onSubmit = (data) => {
    login(data);
  };
  if (isAuthenticated) return <Navigate to="/profile" />;
  return (
    <>
      <MainContainer>
        <Logo src={logo} alt="" />
        <Form methods={methods} onSubmit={onSubmit}>
          <FormContainer>
            <TextField name="identifier" variant="outlined" label="Enter your Username" fullWidth sx={{ color: 'white' }} />
            <TextField name="password" variant="outlined" label="Password" fullWidth sx={{ color: 'white' }} />
            <Button1 type="submit">Submit</Button1>
          </FormContainer>
        </Form>
      </MainContainer>
    </>
  );
}

export default LoginScreen;
