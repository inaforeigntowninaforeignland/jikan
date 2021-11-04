import AbstractBaseSearchContainer from 'app/modules/search/models/base/impl/AbstractBaseSearchContainer';

import SearchAnimeDetailImpl from '../impl/SearchAnimeDetailImpl';
import ISearchAnimeDetail from '../ISearchAnimeDetail';

class SearchAnimeContainerImpl extends AbstractBaseSearchContainer<ISearchAnimeDetail> {
  constructor() {
    super(SearchAnimeDetailImpl);
  }
}

export default SearchAnimeContainerImpl;
