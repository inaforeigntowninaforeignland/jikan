import { useQuery } from 'react-query';

import animeService from '../services/anime-service';

/**
 * Fetch anime by id
 * @param id {number} Anime id
 */
export const useFetchAnimeById = (id: number) => {
  return useQuery(['anime', id], () => animeService.getAnimeById(id));
};
