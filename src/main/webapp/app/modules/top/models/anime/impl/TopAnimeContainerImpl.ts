import AbstractBaseTopContainer from 'app/modules/top/models/base/impl/AbstractBaseTopContainer';

import TopAnimeDetailImpl from '../impl/TopAnimeDetailImpl';
import ITopAnimeDetail from '../ITopAnimeDetail';

class TopAnimeContainerImpl extends AbstractBaseTopContainer<ITopAnimeDetail> {
  constructor() {
    super(TopAnimeDetailImpl);
  }
}

export default TopAnimeContainerImpl;
