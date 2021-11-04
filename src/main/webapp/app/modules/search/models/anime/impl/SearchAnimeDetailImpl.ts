import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

import AbstractBaseSearchDetail from 'app/modules/search/models/base/impl/AbstractBaseSearchDetail';

import ISearchAnimeDetail from '../ISearchAnimeDetail';

class SearchAnimeDetailImpl extends AbstractBaseSearchDetail implements ISearchAnimeDetail {
  @IsOptional()
  @IsBoolean()
  airing: boolean;

  @IsOptional()
  @IsNumber()
  episodes: number;

  @IsOptional()
  @IsString()
  rated: string;
}

export default SearchAnimeDetailImpl;
