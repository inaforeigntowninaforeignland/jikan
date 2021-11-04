import { IsDefined, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import IBaseSearchDetail from '../IBaseSearchDetail';

abstract class AbstractBaseSearchDetail implements IBaseSearchDetail {
  @IsOptional()
  @IsString()
  synopsis: string;

  @Expose({ name: ExposePropertyType.END_DATE })
  @Type(() => Date)
  endDate: Date;

  @IsDefined()
  @IsNumber()
  @Expose({ name: ExposePropertyType.MAL_ID })
  id: number;

  @IsOptional()
  @IsNumber()
  members: number;

  @IsOptional()
  @IsNumber()
  score: number;

  @Expose({ name: ExposePropertyType.START_DATE })
  @Type(() => Date)
  startDate: Date;

  @IsOptional()
  @IsString()
  title: string;

  type: string;

  @IsOptional()
  @IsUrl()
  url: string;

  @IsOptional()
  @IsUrl()
  @Expose({ name: ExposePropertyType.IMAGE_URL })
  imageUrl: string;
}

export default AbstractBaseSearchDetail;
