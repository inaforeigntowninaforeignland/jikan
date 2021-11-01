import AbstractTop from 'app/modules/top/models/base/impl/AbstractTop';

import TopAnimeDetailImpl from '../impl/TopAnimeDetailImpl';
import ITopAnimeDetail from '../ITopAnimeDetail';

class TopAnimeImpl extends AbstractTop<ITopAnimeDetail> {
  constructor() {
    super(TopAnimeDetailImpl);
  }
}

export default TopAnimeImpl;
