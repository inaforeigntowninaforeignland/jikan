import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import IBaseResponse from '../IBaseResponse';

abstract class AbstractBaseResponse implements IBaseResponse {
  @Expose({ name: ExposePropertyType.REQUEST_CACHE_EXPIRY })
  requestCacheExpiry: number;

  @Expose({ name: ExposePropertyType.REQUEST_CACHED })
  requestCached: boolean;

  @Expose({ name: ExposePropertyType.REQUEST_HASH })
  requestHash: string;

  @Type(() => Number)
  contentLength: number;
}

export default AbstractBaseResponse;
