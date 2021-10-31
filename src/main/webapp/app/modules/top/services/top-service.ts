import RequestType from 'app/shared/utils/http-client/enums/request-type';
import { request } from 'app/shared/utils/http-client';

import AnimeSubtypeType from '../enums/anime-subtype-type';
import MangaSubtypeType from '../enums/manga-subtype-type';
import BothSubtypeType from '../enums/both-subtype-type';
import TopType from '../enums/top-type';
import TopAnimeImpl from '../models/anime/impl/top-anime-impl';
import TopMangaImpl from '../models/manga/impl/top-manga-impl';
import ITopMangaDetail from '../models/manga/top-manga-detail';
import ITopAnimeDetail from '../models/anime/top-anime-detail';
import ITop from '../models/base/top';

/**
 * @see {@link https://jikan.docs.apiary.io/#reference/0/top}
 */
export default Object.freeze({
  /**
   * Get top anime list
   * @param [page] {number} Page
   * @param [subtype] {AnimeSubtypeType | BothSubtypeType} Anime subtype
   */
  getTopAnime(page?: number, subtype?: AnimeSubtypeType | BothSubtypeType) {
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
   * @param [page] {number} Page
   * @param [subtype] {AnimeSubtypeType | BothSubtypeType} Manga subtype
   */
  getTopManga(page?: number, subtype?: MangaSubtypeType | BothSubtypeType) {
    return request<ITop<ITopMangaDetail>>(
      {
        method: RequestType.GET,
        url: `/top/${TopType.MANGA}/${page}/${subtype}`,
      },
      TopMangaImpl
    );
  },
});
