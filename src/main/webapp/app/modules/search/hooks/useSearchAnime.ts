import { useQuery } from 'react-query';

import AnimeSubtypeType from 'app/modules/top/enums/AnimeSubtypeType';
import { START_PAGE } from 'app/helpers/constants';

import searchService from '../services/search.service';

/**
 * Search anime
 * @param [query] {string} Query
 * @param type {AnimeSubtypeType} Anime subtype
 * @param page {number} Page
 */
export const useSearchAnime = (query?: string, type: AnimeSubtypeType = AnimeSubtypeType.UPCOMING, page: number = START_PAGE) => {
  return useQuery(['search-anime', query ? `${type}[${page}]:${query}` : `${type}[${page}]`], () =>
    searchService.searchAnime(query, type, page)
  );
};
