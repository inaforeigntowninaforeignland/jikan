import { toast } from 'react-toastify';

import ResponseError from 'app/errors/ResponseError';

export const setupAxiosInterceptors = ({ interceptors }) => {
  const onResponseSuccess = response => ({
    ...response,
    data: {
      ...response.data,
      contentLength: response.headers['content-length'],
    },
  });

  const onResponseError = error => {
    const data = error?.response?.data;

    const message = data ? `${data.status}: ${data.message}` : 'Something went wrong. Try again.';

    if (process.env.NODE_ENV === 'development') {
      toast.error(message, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }

    return Promise.reject(new ResponseError(message));
  };

  interceptors.response.use(onResponseSuccess, onResponseError);
};
