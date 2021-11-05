import { useQuery } from 'react-query';

import CacheKeyType from 'app/enums/CacheKeyType';

import animeService from '../services/anime.service';

/**
 * Fetch anime characters by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimeCharactersById = (id: number | string) => {
  return useQuery([CacheKeyType.ANIME_CHARACTERS, id], () => animeService.getAnimeCharactersById(id), {
    refetchOnWindowFocus: false,
  });
};
