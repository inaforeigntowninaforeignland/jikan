import { useQuery } from 'react-query';

import animeService from '../services/anime.service';

/**
 * Fetch anime characters by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimeCharactersById = (id: number | string) => {
  return useQuery(['anime-characters', id], () => animeService.getAnimeCharactersById(id));
};
