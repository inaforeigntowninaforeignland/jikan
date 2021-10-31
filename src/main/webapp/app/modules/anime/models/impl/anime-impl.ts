import { Expose } from 'class-transformer';

import AbstractBaseResponse from 'app/models/impl/abstract-base-response';

import IAnime from '../anime';

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
}

export default AnimeImpl;
