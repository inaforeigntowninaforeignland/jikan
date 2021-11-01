import AbstractTopDetail from 'app/modules/top/models/base/impl/AbstractTopDetail';

import ITopAnimeDetail from '../ITopAnimeDetail';

class TopAnimeDetailImpl extends AbstractTopDetail implements ITopAnimeDetail {
  episodes: number;
}

export default TopAnimeDetailImpl;
