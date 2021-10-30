import axios from 'axios';

import { SERVER_API_URL } from 'app/config/constants';

const TIMEOUT = 60 * 1000;

axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = SERVER_API_URL;

const setupAxiosInterceptors = () => {
  const onRequestSuccess = config => config;
  const onResponseSuccess = response => response;
  const onResponseError = error => Promise.reject(error);

  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
