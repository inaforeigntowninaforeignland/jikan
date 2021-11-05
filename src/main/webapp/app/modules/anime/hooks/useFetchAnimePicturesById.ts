import { useQuery } from 'react-query';

import IResponseError from 'app/errors/IResponseError';
import { CacheKey } from 'app/helpers/constants';
import IPicturesContainer from 'app/models/picture/IPicturesContainer';

import animeService from '../services/anime.service';

/**
 * Fetch anime pictures by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimePicturesById = (id: number | string) => {
  return useQuery<IPicturesContainer, IResponseError>([CacheKey.ANIME_PICTURES, id], () => animeService.getAnimePicturesById(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
