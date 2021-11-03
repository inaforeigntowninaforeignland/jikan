import AbstractBaseTopDetail from 'app/modules/top/models/base/impl/AbstractBaseTopDetail';

import ITopMangaDetail from '../ITopMangaDetail';

class TopMangaDetailImpl extends AbstractBaseTopDetail implements ITopMangaDetail {
  volumes: number;
}

export default TopMangaDetailImpl;
