/* eslint-disable*/
import { useContext, useCallback, useState } from "react";
// import { AuthContext } from "../contexts/JWTContext";
import { useSelector, useDispatch } from 'react-redux';
// import { AuthContext } from '../contexts/FirebaseContext';
// import { AuthContext } from '../contexts/AwsCognitoContext';
// import { AuthContext } from '../contexts/Auth0Context';
import { isValidToken, setSession } from 'utils/jwt';
import { showSnackbar } from 'redux/slices/control';


import {registerSuccess,getInitialize as initialize} from 'redux/slices/authJwt';
import axios from "utils/axios";

// ----------------------------------------------------------------------

const useAuth = () => {
  const [isInitialized, setIsInitialized] = useState(true);

  const dispatch = useDispatch();
  const { isAuthenticated, user} = useSelector((state) => state.authJwt);

  const getOtp = useCallback(async (data) => {
    const response = await axios.post("/auth/get-otp", data);
    console.log(response);
  },[]);

  const register = useCallback(async (data)=>{
    console.log(data,"this is the data");
    const response = await axios.post('/auth/local/register',data);
    if (response) {
      const { jwt,user } = response;
      window.localStorage.setItem('accessToken', jwt);
      dispatch(registerSuccess({ user }));
    }
  },[])

  const getInitialize = useCallback(async () => {
    const accessToken = window.localStorage.getItem('accessToken');
    if (isValidToken(accessToken)) {
      setSession(accessToken);
      const response = await axios.get('/users/me', { showSnackbar: false });
      console.log(response,"this is initaialize response");
      if (response) {
        dispatch(
          initialize({
            user:response,
            isAuthenticated: true
          })
        );
      } else {
        dispatch(
          initialize({
            user: null,
            isAuthenticated: false
          })
        );
      }
    } else {
      dispatch(
        initialize({
          user: null,
          isAuthenticated: false
        })
      );
    }
  }, []);

  return {
    getOtp,
    register,
    isInitialized,
    getInitialize,
  };
};

export default useAuth;
