import AbstractBaseSearchContainer from 'app/modules/search/models/base/impl/AbstractBaseSearchContainer';

import SearchMangaDetailImpl from '../impl/SearchMangaDetailImpl';
import ISearchMangaDetail from '../ISearchMangaDetail';

class SearchMangaContainerImpl extends AbstractBaseSearchContainer<ISearchMangaDetail> {
  constructor() {
    super(SearchMangaDetailImpl);
  }
}

export default SearchMangaContainerImpl;
