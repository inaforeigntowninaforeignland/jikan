import { useQuery } from 'react-query';

import topService from '../services/top.service';

import MangaSubtypeType from '../enums/MangaSubtypeType';
import BothSubtypeType from '../enums/BothSubtypeType';

/**
 * Fetch top manga list
 * @param [subtype] {MangaSubtypeType | BothSubtypeType} Manga subtype
 * @param page {number} Page
 */
export const useFetchTopManga = (subtype?: MangaSubtypeType | BothSubtypeType, page = 0) => {
  return useQuery('top-manga', () => topService.getTopManga(subtype, page));
};
