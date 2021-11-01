import RequestType from 'app/shared/utils/http-client/enums/request-type';
import { request } from 'app/shared/utils/http-client';

import AnimeSubtypeType from '../enums/AnimeSubtypeType';
import MangaSubtypeType from '../enums/MangaSubtypeType';
import BothSubtypeType from '../enums/BothSubtypeType';
import TopType from '../enums/TopType';
import TopAnimeImpl from '../models/anime/impl/TopAnimeImpl';
import TopMangaImpl from '../models/manga/impl/TopMangaImpl';
import ITopMangaDetail from '../models/manga/ITopMangaDetail';
import ITopAnimeDetail from '../models/anime/ITopAnimeDetail';
import ITop from '../models/base/ITop';

/**
 * @see {@link https://jikan.docs.apiary.io/#reference/0/top}
 */
export default Object.freeze({
  /**
   * Get top anime list
   * @param page {number} Page
   * @param [subtype] {AnimeSubtypeType | BothSubtypeType} Anime subtype
   */
  getTopAnime(subtype?: AnimeSubtypeType | BothSubtypeType, page = 0) {
    return request<ITop<ITopAnimeDetail>>(
      {
        method: RequestType.GET,
        url: `/top/${TopType.ANIME}/${page}/${subtype}`,
      },
      TopAnimeImpl
    );
  },

  /**
   * Get top manga list
   * @param page {number} Page
   * @param [subtype] {AnimeSubtypeType | BothSubtypeType} Manga subtype
   */
  getTopManga(subtype?: MangaSubtypeType | BothSubtypeType, page = 0) {
    return request<ITop<ITopMangaDetail>>(
      {
        method: RequestType.GET,
        url: `/top/${TopType.MANGA}/${page}/${subtype}`,
      },
      TopMangaImpl
    );
  },
});
