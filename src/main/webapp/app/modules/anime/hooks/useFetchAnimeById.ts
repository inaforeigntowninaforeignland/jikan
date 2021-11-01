import { useQuery } from 'react-query';

import animeService from '../services/anime.service';

/**
 * Fetch anime by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimeById = (id: number | string) => {
  return useQuery(['anime', id], () => animeService.getAnimeById(id));
};
