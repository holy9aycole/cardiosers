/* eslint-disable*/
import { useContext, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isValidToken, setSession } from 'utils/jwt';
import { useNavigate } from 'react-router-dom';
import { userSuccess, getInitialize as initialize } from 'redux/slices/authJwt';
import useControl from 'hooks/useControl';
import axios from 'utils/axios';
// ----------------------------------------------------------------------

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSnackbar } = useControl();

  const { isAuthenticated, user } = useSelector((state) => state.authJwt);

  const getOtp = useCallback(async (data, redirect) => {
    const response = await axios.post('/auth/get-otp', data);
    if (response) {
      if (redirect === false) {
        showSnackbar('otp send successfully');
      } else {
        navigate('/otp', { state: data });
      }
    }
  }, []);

  const verifyOtp = useCallback(async (data) => {
    const response = await axios.post('/auth/verifyOtp', data);
    if (response) {
      const { jwt, ...user } = response;
      window.localStorage.setItem('accessToken', jwt);
      showSnackbar('success');
      dispatch(
        userSuccess({
          user,
          isAuthenticated: true,
        })
      );
      console.log('calling navigate');
      navigate('/home');
    }
  }, []);

  const getInitialize = useCallback(async () => {
    const accessToken = window.localStorage.getItem('accessToken');
    setSession(accessToken);
    if (isValidToken(accessToken)) {
      setSession(accessToken);
      const response = await axios.get('/users/me', { showSnackbar: false });
      if (response) {
        dispatch(
          initialize({
            user: response,
            isAuthenticated: true,
          })
        );
      } else {
        dispatch(
          initialize({
            user: null,
            isAuthenticated: false,
          })
        );
      }
    } else {
      dispatch(
        initialize({
          user: null,
          isAuthenticated: false,
        })
      );
    }
  }, []);

  return {
    isAuthenticated,
    user,
    getOtp,
    getInitialize,
    verifyOtp,
  };
};

export default useAuth;
