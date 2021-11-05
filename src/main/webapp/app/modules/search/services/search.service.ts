import HTTPRequestType from 'app/enums/HTTPRequestType';
import { request } from 'app/helpers/http-client';

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
   */
  searchAnime(query?: string, type: AnimeSubtypeType = AnimeSubtypeType.UPCOMING) {
    let url = `/${BASE_URL}/${EntityType.ANIME}?`;

    url = url.concat(query ? `q=${query}` : 'q=');
    url = url.concat(`&type=${type}`);

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
   */
  searchManga(query?: string, type: MangaSubtypeType = MangaSubtypeType.MANGA) {
    let url = `/${BASE_URL}/${EntityType.MANGA}?`;

    url = url.concat(query ? `q=${query}` : 'q=');
    url = url.concat(`&type=${type}`);

    return request<IBaseSearchContainer<ISearchMangaDetail>>(
      {
        method: HTTPRequestType.GET,
        url,
      },
      SearchMangaContainerImpl
    );
  },
});
