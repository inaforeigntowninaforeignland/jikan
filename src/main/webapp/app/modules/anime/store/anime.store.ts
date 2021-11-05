import { devtools } from 'zustand/middleware';
import create from 'zustand';

import ISearchAnimeDetail from 'app/modules/search/models/anime/ISearchAnimeDetail';

import { ANIME_DETAIL_TAB } from '../helpers/constants';

/**
 * Anime store
 */
interface IAnimeStore {
  anime: ISearchAnimeDetail[];
  activeTab: string;
  setActiveTab: (activePage: string) => void;
  setAnime: (anime: ISearchAnimeDetail[]) => void;
}

const useAnimeStore = create<IAnimeStore>(
  devtools(set => ({
    anime: [],
    activeTab: ANIME_DETAIL_TAB.DETAILS,
    setActiveTab: activeTab => set(() => ({ activeTab })),
    setAnime: anime => set(() => ({ anime })),
  }))
);

export default useAnimeStore;
