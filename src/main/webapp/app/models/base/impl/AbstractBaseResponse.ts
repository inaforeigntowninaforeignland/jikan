import { IsDefined, IsBoolean, IsNumber } from 'class-validator';
import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import IBaseResponse from '../IBaseResponse';

abstract class AbstractBaseResponse implements IBaseResponse {
  @IsDefined()
  @IsNumber()
  @Expose({ name: ExposePropertyType.REQUEST_CACHE_EXPIRY })
  requestCacheExpiry: number;

  @IsDefined()
  @IsBoolean()
  @Expose({ name: ExposePropertyType.REQUEST_CACHED })
  requestCached: boolean;

  @Expose({ name: ExposePropertyType.REQUEST_HASH })
  requestHash: string;

  @Type(() => Number)
  contentLength: number;
}

export default AbstractBaseResponse;
