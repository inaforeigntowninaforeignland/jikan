import AbstractTopDetail from 'app/modules/top/models/base/impl/AbstractTopDetail';

import ITopMangaDetail from '../ITopMangaDetail';

class TopMangaDetailImpl extends AbstractTopDetail implements ITopMangaDetail {
  volumes: number;
}

export default TopMangaDetailImpl;
