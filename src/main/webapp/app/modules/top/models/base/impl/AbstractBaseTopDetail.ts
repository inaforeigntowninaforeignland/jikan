import { Expose, Type } from 'class-transformer';

import AbstractBaseModel from 'app/models/base/impl/AbstractBaseModel';

import IBaseTopDetail from '../IBaseTopDetail';

abstract class AbstractBaseTopDetail extends AbstractBaseModel implements IBaseTopDetail {
  rank: number;

  title: string;

  @Expose({ name: 'image_url' })
  imageUrl: string;

  type: string;

  @Expose({ name: 'start_date' })
  @Type(() => Date)
  startDate: Date;

  @Expose({ name: 'end_date' })
  @Type(() => Date)
  endDate: Date;

  members: number;

  score: number;
}

export default AbstractBaseTopDetail;
