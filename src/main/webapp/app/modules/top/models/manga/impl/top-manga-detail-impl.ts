import AbstractTopDetail from 'app/modules/top/models/base/impl/abstract-top-detail';

import ITopMangaDetail from '../top-manga-detail';

class TopMangaDetailImpl extends AbstractTopDetail implements ITopMangaDetail {
  volumes: number;
}

export default TopMangaDetailImpl;
