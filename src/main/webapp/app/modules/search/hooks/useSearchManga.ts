import { useQuery } from 'react-query';

import MangaSubtypeType from 'app/modules/top/enums/MangaSubtypeType';
import CacheKeyType from 'app/enums/CacheKeyType';

import searchService from '../services/search.service';
import useSearchStore from '../store/search.store';

/**
 * Search manga
 * @param [query] {string} Query
 * @param type {MangaSubtypeType} Manga subtype
 */
export const useSearchManga = (query?: string, type: MangaSubtypeType = MangaSubtypeType.MANGA) => {
  const searchPanelStatus = useSearchStore(state => state.searchPanelStatus);

  return useQuery([CacheKeyType.SEARCH_MANGA, query ? `${type}:${query}` : type], () => searchService.searchManga(query, type), {
    enabled: searchPanelStatus,
    refetchOnWindowFocus: false,
  });
};
