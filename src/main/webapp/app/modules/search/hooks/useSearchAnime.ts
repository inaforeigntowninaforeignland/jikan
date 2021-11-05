import { useQuery } from 'react-query';

import AnimeSubtypeType from 'app/modules/top/enums/AnimeSubtypeType';
import CacheKeyType from 'app/enums/CacheKeyType';

import searchService from '../services/search.service';
import useSearchStore from '../store/search.store';

/**
 * Search anime
 * @param [query] {string} Query
 * @param type {AnimeSubtypeType} Anime subtype
 */
export const useSearchAnime = (query?: string, type: AnimeSubtypeType = AnimeSubtypeType.UPCOMING) => {
  const searchPanelStatus = useSearchStore(state => state.searchPanelStatus);

  return useQuery([CacheKeyType.SEARCH_ANIME, query ? `${type}:${query}` : type], () => searchService.searchAnime(query, type), {
    enabled: searchPanelStatus,
    refetchOnWindowFocus: false,
  });
};
