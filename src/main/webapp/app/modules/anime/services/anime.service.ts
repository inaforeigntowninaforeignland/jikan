import RequestType from 'app/shared/utils/http-client/enums/request-type';
import { request } from 'app/shared/utils/http-client';

import IAnime from '../models/IAnime';
import AnimeImpl from '../models/impl/AnimeImpl';

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
});
