import { useQuery } from 'react-query';

import { CacheKey } from 'app/helpers/constants';

import animeService from '../services/anime.service';

/**
 * Fetch anime pictures by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimePicturesById = (id: number | string) => {
  return useQuery([CacheKey.ANIME_PICTURES, id], () => animeService.getAnimePicturesById(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
