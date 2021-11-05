import { devtools } from 'zustand/middleware';
import create from 'zustand';
import produce from 'immer';

import ISearchAnimeDetail from 'app/modules/search/models/anime/ISearchAnimeDetail';

import { ANIME_DETAIL_TAB } from '../helpers/constants';

/**
 * Anime store
 */
interface IAnimeStore {
  anime: ISearchAnimeDetail[];
  prevTab: string;
  activeTab: string;
  setActiveTab: (activePage: string) => void;
  setAnime: (anime: ISearchAnimeDetail[]) => void;
}

const useAnimeStore = create<IAnimeStore>(
  devtools(set => ({
    anime: [],
    prevTab: ANIME_DETAIL_TAB.DETAILS,
    activeTab: ANIME_DETAIL_TAB.DETAILS,
    setActiveTab: activeTab =>
      set(
        produce(state => {
          state.prevTab = state.activeTab;
          state.activeTab = activeTab;
        })
      ),
    setAnime: anime => set(() => ({ anime })),
  }))
);

export default useAnimeStore;
