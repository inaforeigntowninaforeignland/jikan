import { useQuery } from 'react-query';

import { START_PAGE } from 'app/helpers/constants';

import topService from '../services/top.service';
import AnimeSubtypeType from '../enums/AnimeSubtypeType';
import BothSubtypeType from '../enums/BothSubtypeType';

/**
 * Fetch top anime list
 * @param subtype {AnimeSubtypeType | BothSubtypeType} Anime subtype
 * @param page {number} Page
 */
export const useFetchTopAnime = (subtype: AnimeSubtypeType | BothSubtypeType = AnimeSubtypeType.UPCOMING, page = START_PAGE) => {
  return useQuery(['top-anime', subtype ? `${subtype}[${page}]` : page], () => topService.getTopAnime(subtype, page));
};
