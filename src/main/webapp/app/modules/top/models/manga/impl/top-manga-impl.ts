import AbstractTop from 'app/modules/top/models/base/impl/abstract-top';

import TopMangaDetailImpl from '../impl/top-manga-detail-impl';
import ITopMangaDetail from '../top-manga-detail';

class TopMangaImpl extends AbstractTop<ITopMangaDetail> {
  constructor() {
    super(TopMangaDetailImpl);
  }
}

export default TopMangaImpl;
