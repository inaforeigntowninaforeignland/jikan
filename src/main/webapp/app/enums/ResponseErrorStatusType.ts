/**
 * @enum {ResponseErrorStatusType}
 * @property {Number} OK 200
 * @property {Number} NOT_MODIFIED 304
 * @property {Number} BAD_REQUEST 400
 * @property {Number} NOT_FOUND 404
 * @property {Number} METHOD_NOT_ALLOWED 405
 * @property {Number} REQUEST_TIMEOUT 408
 * @property {Number} TOO_MANY_REQUEST 429
 * @property {Number} INTERNAL_SERVER_ERROR 500
 * @property {Number} SERVICE_UNAVAILABLE 503
 */
enum ResponseErrorStatusType {
  OK = 200,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  REQUEST_TIMEOUT = 408,
  TOO_MANY_REQUEST = 429,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}

export default ResponseErrorStatusType;
