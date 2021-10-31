import { Expose } from 'class-transformer';

import IBaseResponse from '../base-response';

abstract class AbstractBaseResponse implements IBaseResponse {
  @Expose({ name: 'request_cache_expiry' })
  requestCacheExpiry: number;

  @Expose({ name: 'request_cached' })
  requestCached: boolean;

  @Expose({ name: 'request_hash' })
  requestHash: string;
}

export default AbstractBaseResponse;
