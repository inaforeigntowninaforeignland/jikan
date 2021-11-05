import { useQuery } from 'react-query';

import CacheKeyType from 'app/enums/CacheKeyType';
import { START_PAGE } from 'app/helpers/constants';

import topService from '../services/top.service';
import MangaSubtypeType from '../enums/MangaSubtypeType';
import BothSubtypeType from '../enums/BothSubtypeType';

/**
 * Fetch top manga list
 * @param subtype {MangaSubtypeType | BothSubtypeType} Manga subtype
 * @param page {number} Page
 */
export const useFetchTopManga = (subtype: MangaSubtypeType | BothSubtypeType = MangaSubtypeType.MANGA, page = START_PAGE) => {
  return useQuery([CacheKeyType.TOP_MANGA, subtype ? `${subtype}[${page}]` : page], () => topService.getTopManga(subtype, page), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
