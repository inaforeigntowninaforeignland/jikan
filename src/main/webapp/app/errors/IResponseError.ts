import ResponseErrorStatusType from 'app/enums/ResponseErrorStatusType';
import ResponseErrorType from 'app/enums/ResponseErrorType';

interface IResponseError extends Error {
  type: ResponseErrorType;
  status: ResponseErrorStatusType;
}

export default IResponseError;
