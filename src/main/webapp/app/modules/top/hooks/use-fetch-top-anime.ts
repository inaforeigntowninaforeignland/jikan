import { useQuery } from 'react-query';

import topService from '../services/top-service';

import AnimeSubtypeType from '../enums/anime-subtype-type';
import BothSubtypeType from '../enums/both-subtype-type';

/**
 * Fetch top anime list
 * @param [page] {number} Page
 * @param [subtype] {AnimeSubtypeType | BothSubtypeType} Anime subtype
 */
export const useFetchTopAnime = (page?: number, subtype?: AnimeSubtypeType | BothSubtypeType) => {
  return useQuery('top-anime', () => topService.getTopAnime(page, subtype));
};
