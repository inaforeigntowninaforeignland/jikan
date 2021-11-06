import { useQuery } from 'react-query';

import IResponseError from 'app/errors/IResponseError';
import { CacheKey } from 'app/helpers/constants';

import animeService from '../services/anime.service';
import IAnimeCharactersContainer from '../models/IAnimeCharactersContainer';

/**
 * Fetch anime characters by id
 * @param id {number | string} Anime id
 */
export const useFetchAnimeCharactersById = (id: number | string) => {
  return useQuery<IAnimeCharactersContainer, IResponseError>(
    [CacheKey.ANIME_CHARACTERS, { id }],
    () => animeService.getAnimeCharactersById(id),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
};
