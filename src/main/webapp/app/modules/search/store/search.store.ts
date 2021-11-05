import create from 'zustand';
import produce from 'immer';
import { devtools } from 'zustand/middleware';

import AnimeSubtypeType from 'app/modules/top/enums/AnimeSubtypeType';

/**
 * Search store
 */
interface ISearchStore {
  searchPanelStatus: boolean;
  searchText: string;
  activeSearchType: AnimeSubtypeType;
  isOpenSearchTypeDropdown: boolean;
  setSearchText: (searchText: string) => void;
  setActiveSearchType: (activeSearchType: AnimeSubtypeType) => void;
  toggleSearchTypeDropdown: () => void;
}

const useSearchStore = create<ISearchStore>(
  devtools(set => ({
    searchPanelStatus: false,
    searchText: '',
    activeSearchType: AnimeSubtypeType.UPCOMING,
    isOpenSearchTypeDropdown: false,
    setSearchText: searchText => set(() => ({ searchText })),
    setActiveSearchType: activeSearchType => set(() => ({ activeSearchType })),
    toggleSearchTypeDropdown: () =>
      set(
        produce(state => {
          state.isOpenSearchTypeDropdown = !state.isOpenSearchTypeDropdown;
        })
      ),
  }))
);

export default useSearchStore;
