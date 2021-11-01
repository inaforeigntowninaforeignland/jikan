import { toast } from 'react-toastify';

export const setupAxiosInterceptors = axiosInstance => {
  const onResponseSuccess = response => {
    return {
      ...response,
      data: {
        ...response.data,
        contentLength: response.headers['content-length'],
      },
    };
  };

  const onResponseError = error => {
    toast.error(`${error.message}`, {
      position: 'top-left',
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });

    return Promise.reject(error);
  };

  axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError);
};