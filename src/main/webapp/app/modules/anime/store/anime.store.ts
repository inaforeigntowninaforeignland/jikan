import { devtools } from 'zustand/middleware';
import create from 'zustand';

import { ANIME_DETAIL_TAB } from '../helpers/constants';

/**
 * Anime store
 */
interface IAnimeStore {
  activeTab: string;
  setActiveTab: (activePage: string) => void;
}

const useAnimeStore = create<IAnimeStore>(
  devtools(set => ({
    activeTab: ANIME_DETAIL_TAB.DETAILS,
    setActiveTab: activeTab => set(() => ({ activeTab })),
  }))
);

export default useAnimeStore;
