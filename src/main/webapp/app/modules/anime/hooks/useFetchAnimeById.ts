import { useQuery } from 'react-query';

import CacheKeyType from 'app/enums/CacheKeyType';

import animeService from '../services/anime.service';

/**
 * Fetch anime by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimeById = (id: number | string) => {
  return useQuery([CacheKeyType.ANIME, id], () => animeService.getAnimeById(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
