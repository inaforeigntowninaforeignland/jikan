import create from 'zustand';

import { START_PAGE } from 'app/helpers/constants';

const useTopStore = create(set => ({
  activePage: START_PAGE,
  setActivePage: page => set(() => ({ activePage: page })),
}));

export default useTopStore;
