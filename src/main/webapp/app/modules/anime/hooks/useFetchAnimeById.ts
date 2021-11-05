import { useQuery } from 'react-query';

import { CacheKey } from 'app/helpers/constants';

import animeService from '../services/anime.service';
import IAnime from '../models/IAnime';

/**
 * Fetch anime by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimeById = (id: number | string) => {
  return useQuery<IAnime, Error>([CacheKey.ANIME, id], () => animeService.getAnimeById(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
