import HTTPRequestType from 'app/shared/utils/http-client/enums/HTTPRequestType';
import { request } from 'app/shared/utils/http-client';

import { START_PAGE } from 'app/helpers/constants';
import EntityType from 'app/enums/EntityType';
import AnimeSubtypeType from 'app/modules/top/enums/AnimeSubtypeType';
import MangaSubtypeType from 'app/modules/top/enums/MangaSubtypeType';

import IBaseSearchContainer from '../models/base/IBaseSearchContainer';
import ISearchAnimeDetail from '../models/anime/ISearchAnimeDetail';
import ISearchMangaDetail from '../models/manga/ISearchMangaDetail';
import SearchAnimeContainerImpl from '../models/anime/impl/SearchAnimeContainerImpl';
import SearchMangaContainerImpl from '../models/manga/impl/SearchMangaContainerImpl';

const BASE_URL = 'search';

/**
 * @see {https://jikan.docs.apiary.io/#reference/0/search}
 */
export default Object.freeze({
  /**
   * Search anime
   * @param [query] {string} Query
   * @param type {AnimeSubtypeType} Anime subtype
   * @param page {number} Page
   */
  searchAnime(query?: string, type: AnimeSubtypeType = AnimeSubtypeType.UPCOMING, page: number = START_PAGE) {
    const url = `/${BASE_URL}/${EntityType.ANIME}?type=${type}&page=${page}`;

    query && url.concat(`&q=${query}`);

    return request<IBaseSearchContainer<ISearchAnimeDetail>>(
      {
        method: HTTPRequestType.GET,
        url,
      },
      SearchAnimeContainerImpl
    );
  },

  /**
   * Search manga
   * @param [query] {string} Query
   * @param type {MangaSubtypeType} Manga subtype
   * @param page {number} Page
   */
  searchManga(query?: string, type: MangaSubtypeType = MangaSubtypeType.MANGA, page: number = START_PAGE) {
    const url = `/${BASE_URL}/${EntityType.MANGA}?type=${type}&page=${page}`;

    query && url.concat(`&q=${query}`);

    return request<IBaseSearchContainer<ISearchMangaDetail>>(
      {
        method: HTTPRequestType.GET,
        url,
      },
      SearchMangaContainerImpl
    );
  },
});
