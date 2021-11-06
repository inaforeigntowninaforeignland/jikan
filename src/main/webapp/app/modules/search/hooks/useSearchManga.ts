import { useQuery } from 'react-query';

import IResponseError from 'app/errors/IResponseError';
import MangaSubtypeType from 'app/modules/top/enums/MangaSubtypeType';
import { CacheKey } from 'app/helpers/constants';

import searchService from '../services/search.service';
import IBaseSearchContainer from '../models/base/IBaseSearchContainer';
import ISearchMangaDetail from '../models/manga/ISearchMangaDetail';

/**
 * Search manga
 * @param [query] {string} Query
 * @param type {MangaSubtypeType} Manga subtype
 */
export const useSearchManga = (query?: string, type: MangaSubtypeType = MangaSubtypeType.MANGA) => {
  return useQuery<IBaseSearchContainer<ISearchMangaDetail>, IResponseError>(
    [CacheKey.SEARCH_MANGA, query ? { type, query } : { type }],
    () => searchService.searchManga(query, type),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 0,
    }
  );
};
