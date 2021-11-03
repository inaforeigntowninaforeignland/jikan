import create from 'zustand';
import produce from 'immer';

import { START_PAGE } from 'app/helpers/constants';

import AnimeSubtypeType from '../enums/AnimeSubtypeType';

/**
 * Top store
 */
interface ITopStore {
  activePage: number;
  activeSubtype: AnimeSubtypeType;
  isOpenSubtypeDropDown: boolean;
  setActivePage: (activePage: number) => void;
  setActiveSubtype: (activePage: AnimeSubtypeType) => void;
  toggleSubtypeDropDown: (isOpenSubtypeDropDown: boolean) => void;
}

const useTopStore = create<ITopStore>(set => ({
  activePage: START_PAGE,
  activeSubtype: AnimeSubtypeType.UPCOMING,
  isOpenSubtypeDropDown: false,
  setActivePage: activePage => set(() => ({ activePage })),
  setActiveSubtype: activeSubtype => set(() => ({ activeSubtype })),
  toggleSubtypeDropDown: isOpenSubtypeDropDown =>
    set(
      produce(state => {
        state.isOpenSubtypeDropDown = !isOpenSubtypeDropDown;
      })
    ),
}));

export default useTopStore;
