import { Expose, Type } from 'class-transformer';

import ExposePropertyType from 'app/enums/ExposePropertyType';

import AbstractBaseResponse from 'app/models/base/impl/AbstractBaseResponse';
import RelatedSubTypeImpl from 'app/models/base/impl/RelatedSubTypeImpl';
import IRelatedSubType from 'app/models/base/IRelatedSubType';
import PeriodImpl from 'app/models/period/impl/PeriodImpl';
import IPeriod from 'app/models/period/IPeriod';

import IAnime from '../IAnime';

class AnimeImpl extends AbstractBaseResponse implements IAnime {
  @Expose({ name: ExposePropertyType.MAL_ID })
  id: number;

  @Expose({ name: ExposePropertyType.IMAGE_URL })
  imageUrl: string;

  @Expose({ name: ExposePropertyType.TRAILER_URL })
  trailerUrl: string;

  title: string;

  @Expose({ name: ExposePropertyType.TITLE_ENGLISH })
  titleEnglish: string;

  @Expose({ name: ExposePropertyType.TITLE_JAPANESE })
  titleJapanese: string;

  @Expose({ name: ExposePropertyType.TITLE_SYNONYMS })
  titleSynonyms: string[];

  synopsis: string;

  score: number;

  @Type(() => RelatedSubTypeImpl)
  producers: IRelatedSubType[];

  @Type(() => PeriodImpl)
  aired: IPeriod;
}

export default AnimeImpl;
