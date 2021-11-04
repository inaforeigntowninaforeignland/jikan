import { IsDefined, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { Expose } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import IStaff from '../IStaff';
import PositionType from '../enums/PositionType';

class StaffImpl implements IStaff {
  @IsDefined()
  @IsNumber()
  @Expose({ name: ExposePropertyType.MAL_ID })
  id: number;

  @IsOptional()
  @IsUrl()
  url: string;

  @IsOptional()
  @IsUrl()
  @Expose({ name: ExposePropertyType.IMAGE_URL })
  imageUrl: string;

  positions: PositionType[];

  @IsOptional()
  @IsString()
  name: string;
}

export default StaffImpl;
