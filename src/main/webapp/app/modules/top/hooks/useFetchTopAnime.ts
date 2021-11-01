import { useQuery } from 'react-query';

import { START_PAGE } from 'app/config/constants';

import topService from '../services/top.service';

import AnimeSubtypeType from '../enums/AnimeSubtypeType';
import BothSubtypeType from '../enums/BothSubtypeType';

/**
 * Fetch top anime list
 * @param [subtype] {AnimeSubtypeType | BothSubtypeType} Anime subtype
 * @param page {number} Page
 */
export const useFetchTopAnime = (subtype?: AnimeSubtypeType | BothSubtypeType, page = START_PAGE) => {
  return useQuery(['top-anime', page], () => topService.getTopAnime(subtype, page));
};
