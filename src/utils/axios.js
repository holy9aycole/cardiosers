import axios from 'axios';
import { store } from 'redux/store';
import { isDevelopment } from 'utils/helper';

const axiosInstance = axios.create({
  baseURL: isDevelopment ? process.env.REACT_APP_BACKEND_URL : window.location.origin
});

const errorHandler = (err) => {
  if (isDevelopment) console.info(err);
  const error = 'Something went wrong';
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
  if (response.data) return response.data?.data || 'Success';
  const error = response.data?.msg || 'Something went wrong';
  if (response.config.showSnackbar !== false)
    store.dispatch({ type: 'control/showSnackbar', payload: { text: error, type: 'error' } });
  return null;
}, errorHandler);

export default axiosInstance;


