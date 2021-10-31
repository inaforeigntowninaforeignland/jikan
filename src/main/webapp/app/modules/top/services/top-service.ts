import RequestType from 'app/shared/utils/http-client/enums/request-type';
import { request } from 'app/shared/utils/http-client';

import TopResponse from '../models/top-response';
import SubtypeType from '../enums/subtype-type';
import TopType from '../enums/top-type';

export default {
  /**
   * Top items on MyAnimeList
   * @param type {TopType} Top items of this type
   * @param [page] {number} The Top page on MyAnimeList is paginated offers 50 items per page
   * @param [subtype] {SubtypeType}
   */
  getTopList(type: TopType, page?: number, subtype?: SubtypeType) {
    return request<TopResponse>(
      {
        method: RequestType.GET,
        url: `/top/${type}/${page}/${subtype}`,
      },
      TopResponse
    );
  },
};
