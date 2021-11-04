import { useQuery } from 'react-query';

import MangaSubtypeType from 'app/modules/top/enums/MangaSubtypeType';
import { START_PAGE } from 'app/helpers/constants';

import searchService from '../services/search.service';

/**
 * Search manga
 * @param [query] {string} Query
 * @param type {MangaSubtypeType} Manga subtype
 * @param page {number} Page
 */
export const useSearchManga = (query?: string, type: MangaSubtypeType = MangaSubtypeType.MANGA, page: number = START_PAGE) => {
  return useQuery(['search-manga', query ? `${type}[${page}]:${query}` : `${type}[${page}]`], () =>
    searchService.searchManga(query, type, page)
  );
};
