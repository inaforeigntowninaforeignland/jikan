import AbstractTop from 'app/modules/top/models/base/impl/AbstractTop';

import TopMangaDetailImpl from '../impl/TopMangaDetailImpl';
import ITopMangaDetail from '../ITopMangaDetail';

class TopMangaImpl extends AbstractTop<ITopMangaDetail> {
  constructor() {
    super(TopMangaDetailImpl);
  }
}

export default TopMangaImpl;
