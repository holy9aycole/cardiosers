/* eslint-disable*/
import { useContext, useCallback, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { isValidToken, setSession } from 'utils/jwt';
import { showSnackbar } from 'redux/slices/control';
import { useNavigate } from 'react-router-dom';

import { registerSuccess, getInitialize as initialize } from 'redux/slices/authJwt';
import axios from 'utils/axios';

// ----------------------------------------------------------------------

const useAuth = () => {
  const navigate = useNavigate();
  const [isInitialized, setIsInitialized] = useState(true);

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.authJwt);

  const getOtp = useCallback(async (data) => {
    const response = await axios.post('/auth/get-otp', data);
    if (response) navigate('/otp');
  }, []);

  const register = useCallback(async (data) => {
    console.log(data, 'this is the data');
    const response = await axios.post('/auth/local/register', data);
    if (response) {
      const { jwt, user } = response;
      window.localStorage.setItem('accessToken', jwt);
      dispatch(registerSuccess({ user }));
    }
  }, []);

  const getInitialize = useCallback(async () => {
    // const accessToken = window.localStorage.getItem('accessToken');
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY0NjY0OTY1MSwiZXhwIjoxNjQ5MjQxNjUxfQ.Vbpaeg2P8VBRpK8kFcIgY3i_3wuoi_5VqqiaFMbe7Mg';
    setSession(accessToken);
    // if (isValidToken(accessToken)) {
    //   setSession(accessToken);
    //   const response = await axios.get('/users/me', { showSnackbar: false });
    //   console.log(response, 'this is initaialize response');
    //   if (response) {
    //     dispatch(
    //       initialize({
    //         user: response,
    //         isAuthenticated: true,
    //       })
    //     );
    //   } else {
    //     dispatch(
    //       initialize({
    //         user: null,
    //         isAuthenticated: false,
    //       })
    //     );
    //   }
    // } else {
    //   dispatch(
    //     initialize({
    //       user: null,
    //       isAuthenticated: false,
    //     })
    //   );
    // }
  }, []);

  return {
    getOtp,
    register,
    isInitialized,
    getInitialize,
  };
};

export default useAuth;
