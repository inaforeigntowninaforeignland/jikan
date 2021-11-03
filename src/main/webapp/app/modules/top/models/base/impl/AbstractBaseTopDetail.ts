import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import AbstractBaseModel from 'app/models/base/impl/AbstractBaseModel';

import IBaseTopDetail from '../IBaseTopDetail';

abstract class AbstractBaseTopDetail extends AbstractBaseModel implements IBaseTopDetail {
  rank: number;

  title: string;

  @Expose({ name: ExposePropertyType.IMAGE_URL })
  imageUrl: string;

  type: string;

  @Expose({ name: ExposePropertyType.START_DATE })
  @Type(() => Date)
  startDate: Date;

  @Expose({ name: ExposePropertyType.END_DATE })
  @Type(() => Date)
  endDate: Date;

  members: number;

  score: number;
}

export default AbstractBaseTopDetail;
