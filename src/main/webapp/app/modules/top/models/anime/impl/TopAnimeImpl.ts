import AbstractBaseTop from 'app/modules/top/models/base/impl/AbstractBaseTop';

import TopAnimeDetailImpl from '../impl/TopAnimeDetailImpl';
import ITopAnimeDetail from '../ITopAnimeDetail';

class TopAnimeImpl extends AbstractBaseTop<ITopAnimeDetail> {
  constructor() {
    super(TopAnimeDetailImpl);
  }
}

export default TopAnimeImpl;
