import AbstractTop from 'app/modules/top/models/abstract-top';

import TopAnimeDetailImpl from '../impl/top-anime-detail-impl';
import ITopAnimeDetail from '../top-anime-detail';

class TopAnimeImpl extends AbstractTop<ITopAnimeDetail> {
  constructor() {
    super(TopAnimeDetailImpl);
  }
}

export default TopAnimeImpl;
