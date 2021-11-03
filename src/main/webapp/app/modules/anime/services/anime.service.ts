import RequestType from 'app/shared/utils/http-client/enums/request-type';
import { request } from 'app/shared/utils/http-client';

import PicturesContainerImpl from 'app/models/picture/impl/PicturesContainerImpl';
import IPicturesContainer from 'app/models/picture/IPicturesContainer';

import IAnime from '../models/IAnime';
import AnimeImpl from '../models/impl/AnimeImpl';
import IAnimeCharactersContainer from '../models/IAnimeCharactersContainer';
import AnimeCharactersContainerImpl from '../models/impl/AnimeCharactersContainerImpl';

/**
 * @see {@link https://jikan.docs.apiary.io/#reference/0/anime}
 */
export default Object.freeze({
  /**
   * Get anime by id
   * @param id {number | string} Anime id
   */
  getAnimeById(id: number | string) {
    return request<IAnime>(
      {
        method: RequestType.GET,
        url: `/anime/${id}`,
      },
      AnimeImpl
    );
  },
  /**
   * Get anime pictures by id
   * @param id {number | string} Anime id
   */
  getAnimePicturesById(id: number | string) {
    return request<IPicturesContainer>(
      {
        method: RequestType.GET,
        url: `/anime/${id}/pictures`,
      },
      PicturesContainerImpl
    );
  },
  /**
   * Get anime characters by id
   * @param id {number | string} Anime id
   */
  getAnimeCharactersById(id: number | string) {
    return request<IAnimeCharactersContainer>(
      {
        method: RequestType.GET,
        url: `/anime/${id}/characters_staff`,
      },
      AnimeCharactersContainerImpl
    );
  },
});
