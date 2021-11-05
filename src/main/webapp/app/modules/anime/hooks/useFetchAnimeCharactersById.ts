import { useQuery } from 'react-query';

import { CacheKey } from 'app/helpers/constants';

import animeService from '../services/anime.service';

/**
 * Fetch anime characters by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimeCharactersById = (id: number | string) => {
  return useQuery([CacheKey.ANIME_CHARACTERS, id], () => animeService.getAnimeCharactersById(id), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
