import AbstractBaseTopContainer from 'app/modules/top/models/base/impl/AbstractBaseTopContainer';

import TopMangaDetailImpl from '../impl/TopMangaDetailImpl';
import ITopMangaDetail from '../ITopMangaDetail';

class TopMangaContainerImpl extends AbstractBaseTopContainer<ITopMangaDetail> {
  constructor() {
    super(TopMangaDetailImpl);
  }
}

export default TopMangaContainerImpl;
