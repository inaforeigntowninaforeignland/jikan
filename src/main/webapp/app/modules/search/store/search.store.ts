import create from 'zustand';

/**
 * Search store
 */
interface ISearchStore {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

const useSearchStore = create<ISearchStore>(set => ({
  searchText: '',
  setSearchText: searchText => set(() => ({ searchText })),
}));

export default useSearchStore;
