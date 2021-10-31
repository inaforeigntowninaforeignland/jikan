import { Type } from 'class-transformer';

import BaseResponse from 'app/models/base-response';

import Top from './top';

class TopResponse extends BaseResponse {
  /**
   * Top list
   */
  @Type(() => Top)
  top: Top[];
}

export default TopResponse;
