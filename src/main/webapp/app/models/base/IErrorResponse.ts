import ResponseErrorStatusType from 'app/enums/ResponseErrorStatusType';
import ResponseErrorType from 'app/enums/ResponseErrorType';

interface IErrorResponse {
  status: ResponseErrorStatusType;
  type: ResponseErrorType;
  message: string;
}

export default IErrorResponse;
