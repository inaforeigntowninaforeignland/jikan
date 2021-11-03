import AbstractBaseTopDetail from 'app/modules/top/models/base/impl/AbstractBaseTopDetail';

import ITopAnimeDetail from '../ITopAnimeDetail';

class TopAnimeDetailImpl extends AbstractBaseTopDetail implements ITopAnimeDetail {
  episodes: number;
}

export default TopAnimeDetailImpl;
