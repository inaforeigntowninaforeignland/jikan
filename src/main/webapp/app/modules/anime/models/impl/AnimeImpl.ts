import { IsDefined, IsOptional, IsNumber, IsString, IsUrl, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import AbstractBaseResponse from 'app/models/base/impl/AbstractBaseResponse';
import RelatedSubTypeImpl from 'app/models/base/impl/RelatedSubTypeImpl';
import IRelatedSubType from 'app/models/base/IRelatedSubType';
import PeriodImpl from 'app/models/period/impl/PeriodImpl';
import IPeriod from 'app/models/period/IPeriod';

import IAnime from '../IAnime';

class AnimeImpl extends AbstractBaseResponse implements IAnime {
  @IsDefined()
  @IsNumber()
  @Expose({ name: ExposePropertyType.MAL_ID })
  id: number;

  @IsOptional()
  @IsUrl()
  @Expose({ name: ExposePropertyType.IMAGE_URL })
  imageUrl: string;

  @IsDefined()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  @Expose({ name: ExposePropertyType.TITLE_ENGLISH })
  titleEnglish: string;

  @IsOptional()
  @IsString()
  @Expose({ name: ExposePropertyType.TITLE_JAPANESE })
  titleJapanese: string;

  @IsOptional()
  @IsString()
  synopsis: string;

  @IsOptional()
  @IsNumber()
  score: number;

  @ValidateNested()
  @Type(() => RelatedSubTypeImpl)
  producers: IRelatedSubType[];

  @ValidateNested()
  @Type(() => PeriodImpl)
  aired: IPeriod;
}

export default AnimeImpl;
