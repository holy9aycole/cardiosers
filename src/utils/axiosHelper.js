import axios from 'axios';
import { isDevelopment } from 'utils/helper';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: isDevelopment ? process.env.REACT_APP_BACKEND_URL : window.location.origin
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (isDevelopment) console.info(response.data);
    if (response.data.status === 1) return response.data?.data || 'Success';
    const error = response.data?.msg || 'Something went wrong';
    return Promise.reject(error);
  },
  (err) => {
    if (isDevelopment) console.info(err);
    const error = err.response?.data?.msg || 'Something went wrong';
    return Promise.reject(error);
  }
);

export default axiosInstance;