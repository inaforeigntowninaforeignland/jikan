import AbstractTopDetail from 'app/modules/top/models/abstract-top-detail';

import ITopAnimeDetail from '../top-anime-detail';

class TopAnimeDetailImpl extends AbstractTopDetail implements ITopAnimeDetail {
  episodes: number;
}

export default TopAnimeDetailImpl;
