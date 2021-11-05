import HTTPRequestType from 'app/enums/HTTPRequestType';
import { request } from 'app/helpers/http-client';
import { START_PAGE } from 'app/helpers/constants';
import EntityType from 'app/enums/EntityType';

import AnimeSubtypeType from '../enums/AnimeSubtypeType';
import MangaSubtypeType from '../enums/MangaSubtypeType';
import BothSubtypeType from '../enums/BothSubtypeType';
import TopAnimeContainerImpl from '../models/anime/impl/TopAnimeContainerImpl';
import TopMangaContainerImpl from '../models/manga/impl/TopMangaContainerImpl';
import ITopMangaDetail from '../models/manga/ITopMangaDetail';
import ITopAnimeDetail from '../models/anime/ITopAnimeDetail';
import IBaseTopContainer from '../models/base/IBaseTopContainer';

const BASE_URL = 'top';

/**
 * @see {@link https://jikan.docs.apiary.io/#reference/0/top}
 */
export default Object.freeze({
  /**
   * Get top anime
   * @param subtype {AnimeSubtypeType | BothSubtypeType} Anime subtype
   * @param page {number} Page
   */
  getTopAnime(subtype: AnimeSubtypeType | BothSubtypeType, page = START_PAGE) {
    const url = `/${BASE_URL}/${EntityType.ANIME}/${page}/${subtype}`;

    return request<IBaseTopContainer<ITopAnimeDetail>>(
      {
        method: HTTPRequestType.GET,
        url,
      },
      TopAnimeContainerImpl
    );
  },

  /**
   * Get top manga
   * @param subtype {AnimeSubtypeType | BothSubtypeType} Manga subtype
   * @param page {number} Page
   */
  getTopManga(subtype: MangaSubtypeType | BothSubtypeType = MangaSubtypeType.MANGA, page = START_PAGE) {
    const url = `/${BASE_URL}/${EntityType.MANGA}/${page}/${subtype}`;

    return request<IBaseTopContainer<ITopMangaDetail>>(
      {
        method: HTTPRequestType.GET,
        url,
      },
      TopMangaContainerImpl
    );
  },
});
