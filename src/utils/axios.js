import axios from 'axios';
import { store } from 'redux/store';
import { isDevelopment } from 'utils/helper';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const errorHandler = (err) => {
  if (isDevelopment) console.info(err);
  const error = err?.response?.data?.msg || 'Something went wrong';
  store.dispatch({ type: 'control/stopLoading' });
  store.dispatch({ type: 'control/showSnackbar', payload: { text: error, type: 'error' } });
  return null;
};

axiosInstance.interceptors.request.use((config) => {
  if (!config.backGround) store.dispatch({ type: 'control/startLoading' });
  return config;
}, errorHandler);

axiosInstance.interceptors.response.use((response) => {
  if (isDevelopment) console.info(response.data);
  if (!response.config.backGround) store.dispatch({ type: 'control/stopLoading' });
  return response.data || 'Success';
}, errorHandler);

export default axiosInstance;
