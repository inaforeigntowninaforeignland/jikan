import { Expose, Type } from 'class-transformer';

import IBaseResponse from '../IBaseResponse';

abstract class AbstractBaseResponse implements IBaseResponse {
  @Expose({ name: 'request_cache_expiry' })
  requestCacheExpiry: number;

  @Expose({ name: 'request_cached' })
  requestCached: boolean;

  @Expose({ name: 'request_hash' })
  requestHash: string;

  @Type(() => Number)
  contentLength: number;
}

export default AbstractBaseResponse;
