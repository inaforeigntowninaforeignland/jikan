import AbstractBaseTop from 'app/modules/top/models/base/impl/AbstractBaseTop';

import TopMangaDetailImpl from '../impl/TopMangaDetailImpl';
import ITopMangaDetail from '../ITopMangaDetail';

class TopMangaImpl extends AbstractBaseTop<ITopMangaDetail> {
  constructor() {
    super(TopMangaDetailImpl);
  }
}

export default TopMangaImpl;
