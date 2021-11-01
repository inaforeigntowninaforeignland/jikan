import { useQuery } from 'react-query';

import { START_PAGE } from 'app/config/constants';

import topService from '../services/top.service';

import MangaSubtypeType from '../enums/MangaSubtypeType';
import BothSubtypeType from '../enums/BothSubtypeType';

/**
 * Fetch top manga list
 * @param [subtype] {MangaSubtypeType | BothSubtypeType} Manga subtype
 * @param page {number} Page
 */
export const useFetchTopManga = (subtype?: MangaSubtypeType | BothSubtypeType, page = START_PAGE) => {
  return useQuery(['top-manga', page], () => topService.getTopManga(subtype, page));
};
