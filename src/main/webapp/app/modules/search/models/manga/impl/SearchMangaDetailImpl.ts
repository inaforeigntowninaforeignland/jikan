import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

import AbstractBaseSearchDetail from 'app/modules/search/models/base/impl/AbstractBaseSearchDetail';

import ISearchMangaDetail from '../ISearchMangaDetail';

class SearchMangaDetailImpl extends AbstractBaseSearchDetail implements ISearchMangaDetail {
  @IsOptional()
  @IsNumber()
  chapters: number;

  @IsOptional()
  @IsBoolean()
  publishing: boolean;

  @IsOptional()
  @IsNumber()
  volumes: number;
}

export default SearchMangaDetailImpl;
