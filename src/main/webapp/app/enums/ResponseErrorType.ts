/**
 * @enum {ResponseErrorType}
 * @property {String} TIME_OUT_EXCEPTION TimeOutException
 * @property {String} RATE_OUT_EXCEPTION RateLimitException
 */
// TODO Describe other enums
enum ResponseErrorType {
  TIME_OUT_EXCEPTION = 'TimeOutException',
  RATE_OUT_EXCEPTION = 'RateLimitException',
}

export default ResponseErrorType;
