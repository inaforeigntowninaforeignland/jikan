import HTTPRequestType from 'app/shared/utils/http-client/enums/HTTPRequestType';
import { request } from 'app/shared/utils/http-client';
import { START_PAGE } from 'app/helpers/constants';

import AnimeSubtypeType from '../enums/AnimeSubtypeType';
import MangaSubtypeType from '../enums/MangaSubtypeType';
import BothSubtypeType from '../enums/BothSubtypeType';
import TopType from '../enums/TopType';
import TopAnimeContainerImpl from '../models/anime/impl/TopAnimeContainerImpl';
import TopMangaContainerImpl from '../models/manga/impl/TopMangaContainerImpl';
import ITopMangaDetail from '../models/manga/ITopMangaDetail';
import ITopAnimeDetail from '../models/anime/ITopAnimeDetail';
import IBaseTopContainer from '../models/base/IBaseTopContainer';

/**
 * @see {@link https://jikan.docs.apiary.io/#reference/0/top}
 */
export default Object.freeze({
  /**
   * Get top anime list
   * @param page {number} Page
   * @param [subtype] {AnimeSubtypeType | BothSubtypeType} Anime subtype
   */
  getTopAnime(subtype?: AnimeSubtypeType | BothSubtypeType, page = START_PAGE) {
    return request<IBaseTopContainer<ITopAnimeDetail>>(
      {
        method: HTTPRequestType.GET,
        url: `/top/${TopType.ANIME}/${page}/${subtype}`,
      },
      TopAnimeContainerImpl
    );
  },

  /**
   * Get top manga list
   * @param page {number} Page
   * @param [subtype] {AnimeSubtypeType | BothSubtypeType} Manga subtype
   */
  getTopManga(subtype?: MangaSubtypeType | BothSubtypeType, page = START_PAGE) {
    return request<IBaseTopContainer<ITopMangaDetail>>(
      {
        method: HTTPRequestType.GET,
        url: `/top/${TopType.MANGA}/${page}/${subtype}`,
      },
      TopMangaContainerImpl
    );
  },
});
