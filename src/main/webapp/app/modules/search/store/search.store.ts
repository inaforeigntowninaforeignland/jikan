import create from 'zustand';
import produce from 'immer';

import AnimeSubtypeType from 'app/modules/top/enums/AnimeSubtypeType';

/**
 * Search store
 */
interface ISearchStore {
  searchText: string;
  activeSearchType: AnimeSubtypeType;
  isOpenSearchTypeDropdown: boolean;
  setSearchText: (searchText: string) => void;
  setActiveSearchType: (activeSearchType: AnimeSubtypeType) => void;
  toggleSearchTypeDropdown: (isOpenSearchTypeDropdown: boolean) => void;
}

const useSearchStore = create<ISearchStore>(set => ({
  searchText: '',
  activeSearchType: AnimeSubtypeType.UPCOMING,
  isOpenSearchTypeDropdown: false,
  setSearchText: searchText => set(() => ({ searchText })),
  setActiveSearchType: activeSearchType => set(() => ({ activeSearchType })),
  toggleSearchTypeDropdown: isOpenSearchTypeDropdown =>
    set(
      produce(state => {
        state.isOpenSearchTypeDropdown = !isOpenSearchTypeDropdown;
      })
    ),
}));

export default useSearchStore;
