import create from 'zustand';

import { ANIME_DETAIL_TAB } from '../helpers/constants';

const useTopStore = create(set => ({
  activeTab: ANIME_DETAIL_TAB.DETAILS,
  setActiveTab: tab => set(() => ({ activeTab: tab })),
}));

export default useTopStore;
