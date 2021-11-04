import { IsDefined, IsNumber, IsOptional, IsUrl } from 'class-validator';
import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import IBaseTopDetail from '../IBaseTopDetail';

abstract class AbstractBaseTopDetail implements IBaseTopDetail {
  @IsDefined()
  @IsNumber()
  @Expose({ name: ExposePropertyType.MAL_ID })
  id: number;

  @IsOptional()
  @IsUrl()
  url: string;

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
