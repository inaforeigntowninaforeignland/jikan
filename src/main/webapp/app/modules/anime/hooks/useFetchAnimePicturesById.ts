import { useQuery } from 'react-query';

import CacheKeyType from 'app/enums/CacheKeyType';

import animeService from '../services/anime.service';

/**
 * Fetch anime pictures by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimePicturesById = (id: number | string) => {
  return useQuery([CacheKeyType.ANIME_PICTURES, id], () => animeService.getAnimePicturesById(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
