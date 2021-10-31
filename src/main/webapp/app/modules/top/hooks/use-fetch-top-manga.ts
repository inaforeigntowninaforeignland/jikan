import { useQuery } from 'react-query';

import topService from '../services/top-service';

import MangaSubtypeType from '../enums/manga-subtype-type';
import BothSubtypeType from '../enums/both-subtype-type';

/**
 * Fetch top manga list
 * @param [page] {number} Page
 * @param [subtype] {MangaSubtypeType | BothSubtypeType} Manga subtype
 */
export const useFetchTopManga = (page?: number, subtype?: MangaSubtypeType | BothSubtypeType) => {
  return useQuery('top-manga', () => topService.getTopManga(page, subtype));
};
