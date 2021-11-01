import { useQuery } from 'react-query';

import animeService from '../services/anime.service';

/**
 * Fetch anime pictures by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimePicturesById = (id: number | string) => {
  return useQuery(['anime-pictures', id], () => animeService.getAnimePicturesById(id));
};
