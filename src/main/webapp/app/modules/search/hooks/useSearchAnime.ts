import { useQuery } from 'react-query';

import IResponseError from 'app/errors/IResponseError';
import AnimeSubtypeType from 'app/modules/top/enums/AnimeSubtypeType';
import { CacheKey } from 'app/helpers/constants';

import searchService from '../services/search.service';
import IBaseSearchContainer from '../models/base/IBaseSearchContainer';
import ISearchAnimeDetail from '../models/anime/ISearchAnimeDetail';

/**
 * Search anime
 * @param [query] {string} Query
 * @param type {AnimeSubtypeType} Anime subtype
 */
export const useSearchAnime = (query?: string, type: AnimeSubtypeType = AnimeSubtypeType.UPCOMING) => {
  return useQuery<IBaseSearchContainer<ISearchAnimeDetail>, IResponseError>(
    [CacheKey.SEARCH_ANIME, query ? `${type}:${query}` : type],
    () => searchService.searchAnime(query, type),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
};
