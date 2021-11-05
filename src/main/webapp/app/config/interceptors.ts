import ResponseErrorImpl from 'app/errors/impl/ResponseErrorImpl';

export const setupAxiosInterceptors = ({ interceptors }) => {
  const onResponseSuccess = response => ({
    ...response,
    data: {
      ...response.data,
      contentLength: response.headers['content-length'],
    },
  });

  const onResponseError = error => {
    return Promise.reject(new ResponseErrorImpl(error?.response?.data));
  };

  interceptors.response.use(onResponseSuccess, onResponseError);
};
