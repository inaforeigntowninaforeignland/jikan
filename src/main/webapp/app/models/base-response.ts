import { Expose } from 'class-transformer';

interface IBaseResponse {
  requestCacheExpiry: number;

  requestCached: boolean;

  requestHash: string;
}

// TODO Add JSDoc
class BaseResponse implements IBaseResponse {
  @Expose({ name: 'request_cache_expiry' })
  requestCacheExpiry: number;

  @Expose({ name: 'request_cached' })
  requestCached: boolean;

  @Expose({ name: 'request_hash' })
  requestHash: string;
}

export default BaseResponse;
