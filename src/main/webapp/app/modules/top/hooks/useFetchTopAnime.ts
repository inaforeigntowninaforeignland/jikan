import { useQuery } from 'react-query';

import topService from '../services/top.service';

import AnimeSubtypeType from '../enums/AnimeSubtypeType';
import BothSubtypeType from '../enums/BothSubtypeType';

/**
 * Fetch top anime list
 * @param [subtype] {AnimeSubtypeType | BothSubtypeType} Anime subtype
 * @param page {number} Page
 */
export const useFetchTopAnime = (subtype?: AnimeSubtypeType | BothSubtypeType, page = 0) => {
  return useQuery('top-anime', () => topService.getTopAnime(subtype, page));
};
