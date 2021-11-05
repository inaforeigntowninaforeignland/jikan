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
  toggleSearchTypeDropdown: (isOpenSearchTypeDropdown: boolean) => void;
  toggleSearchPanelStatus: (searchPanelStatus: boolean) => void;
}

const useSearchStore = create<ISearchStore>(
  devtools(set => ({
    searchPanelStatus: false,
    searchText: '',
    activeSearchType: AnimeSubtypeType.UPCOMING,
    isOpenSearchTypeDropdown: false,
    setSearchText: searchText => set(() => ({ searchText })),
    setActiveSearchType: activeSearchType => set(() => ({ activeSearchType })),
    toggleSearchPanelStatus: searchPanelStatus =>
      set(
        produce(state => {
          state.searchPanelStatus = !searchPanelStatus;
        })
      ),
    toggleSearchTypeDropdown: isOpenSearchTypeDropdown =>
      set(
        produce(state => {
          state.isOpenSearchTypeDropdown = !isOpenSearchTypeDropdown;
        })
      ),
  }))
);

export default useSearchStore;
