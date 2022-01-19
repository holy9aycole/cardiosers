/* eslint-disable*/
import { useContext, useCallback, useState } from "react";
import { AuthContext } from "../contexts/JWTContext";
// import { AuthContext } from '../contexts/FirebaseContext';
// import { AuthContext } from '../contexts/AwsCognitoContext';
// import { AuthContext } from '../contexts/Auth0Context';
import axios from "utils/axios";

// ----------------------------------------------------------------------

const useAuth = () => {
  const [isInitialized, setIsInitialized] = useState(true);

  const getOtp = useCallback(async (data) => {
    const response = await axios.post("/auth/get-otp", data);
    console.log(response);
  });

  const register = useCallback(async (data)=>{
    const resposne = await axios.post('/auth/local/register',data);
    console.log(resposne);
  })

  return {
    getOtp,
    register,
    isInitialized,
  };
};

export default useAuth;
