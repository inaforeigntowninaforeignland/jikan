import { IsDefined, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { Expose } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import IRelatedSubType from '../IRelatedSubType';

class RelatedSubTypeImpl implements IRelatedSubType {
  @IsDefined()
  @IsNumber()
  @Expose({ name: ExposePropertyType.MAL_ID })
  id: number;

  @IsOptional()
  @IsUrl()
  url: string;

  type: string;

  @IsOptional()
  @IsString()
  name: string;
}

export default RelatedSubTypeImpl;
