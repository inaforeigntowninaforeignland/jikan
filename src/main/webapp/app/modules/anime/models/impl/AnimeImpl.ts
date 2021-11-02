import { Expose, Type } from 'class-transformer';

import AbstractBaseResponse from 'app/models/base/impl/AbstractBaseResponse';
import RelatedSubTypeImpl from 'app/models/base/impl/RelatedSubTypeImpl';
import IRelatedSubType from 'app/models/base/IRelatedSubType';
import PeriodImpl from 'app/models/period/impl/PeriodImpl';
import IPeriod from 'app/models/period/IPeriod';

import IAnime from '../IAnime';

class AnimeImpl extends AbstractBaseResponse implements IAnime {
  @Expose({ name: 'mal_id' })
  id: number;

  @Expose({ name: 'image_url' })
  imageUrl: string;

  @Expose({ name: 'trailer_url' })
  trailerUrl: string;

  title: string;

  @Expose({ name: 'title_english' })
  titleEnglish: string;

  @Expose({ name: 'title_japanese' })
  titleJapanese: string;

  @Expose({ name: 'title_synonyms' })
  titleSynonyms: string[];

  synopsis: string;

  score: number;

  @Type(() => RelatedSubTypeImpl)
  producers: IRelatedSubType[];

  @Type(() => PeriodImpl)
  aired: IPeriod;
}

export default AnimeImpl;
