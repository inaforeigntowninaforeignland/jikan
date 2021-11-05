import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';

import { START_PAGE } from 'app/helpers/constants';

import AnimeSubtypeType from '../enums/AnimeSubtypeType';

/**
 * Top store
 */
interface ITopStore {
  activePage: number;
  activeSubtype: AnimeSubtypeType;
  isOpenSubtypeDropdown: boolean;
  setActivePage: (activePage: number) => void;
  setActiveSubtype: (activeSubtype: AnimeSubtypeType) => void;
  toggleSubtypeDropdown: (isOpenSubtypeDropdown: boolean) => void;
}

const useTopStore = create<ITopStore>(
  devtools(set => ({
    activePage: START_PAGE,
    activeSubtype: AnimeSubtypeType.UPCOMING,
    isOpenSubtypeDropdown: false,
    setActivePage: activePage => set(() => ({ activePage })),
    setActiveSubtype: activeSubtype => set(() => ({ activeSubtype })),
    toggleSubtypeDropdown: isOpenSubtypeDropdown =>
      set(
        produce(state => {
          state.isOpenSubtypeDropdown = !isOpenSubtypeDropdown;
        })
      ),
  }))
);

export default useTopStore;
