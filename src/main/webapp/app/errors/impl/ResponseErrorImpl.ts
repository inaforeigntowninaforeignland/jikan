import { toast } from 'react-toastify';

import IErrorResponse from 'app/models/base/IErrorResponse';
import ResponseErrorType from 'app/enums/ResponseErrorType';
import ResponseErrorStatusType from 'app/enums/ResponseErrorStatusType';

import IResponseError from '../IResponseError';

class ResponseError extends Error implements IResponseError {
  type: ResponseErrorType;

  status: ResponseErrorStatusType;

  constructor(errorData: IErrorResponse) {
    const message = errorData ? errorData.message : 'The connection has timed out. The server is taking too long to respond.';

    super(message);

    this.status = errorData ? errorData.status : ResponseErrorStatusType.REQUEST_TIMEOUT;
    this.name = errorData ? errorData.type : ResponseErrorType.TIME_OUT_EXCEPTION;

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
  }
}

export default ResponseError;
