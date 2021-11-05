import React from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RouteKey, START_PAGE } from 'app/helpers/constants';
import AnimeSubtypeType from 'app/modules/top/enums/AnimeSubtypeType';
import useTopStore from 'app/modules/top/store/top.store';

import useSearchStore from '../store/search.store';
import { useSearchAnime } from '../hooks/useSearchAnime';

export const SearchPanel = () => {
  // region Search input

  const searchText = useSearchStore(state => state.searchText);

  const setSearchText = useSearchStore(state => state.setSearchText);

  // endregion

  // region Search type dropdown

  const activeSearchType = useSearchStore(state => state.activeSearchType);

  const isOpenSearchTypeDropdown = useSearchStore(state => state.isOpenSearchTypeDropdown);

  const setActiveSearchType = useSearchStore(state => state.setActiveSearchType);

  const toggleSearchTypeDropdown = useSearchStore(state => state.toggleSearchTypeDropdown);

  // endregion

  const setActivePage = useTopStore(state => state.setActivePage);

  const history = useHistory();

  const { isLoading, isRefetching, isError, refetch } = useSearchAnime(searchText, activeSearchType);

  const handleSearch = () => {
    refetch().then(result => {
      !result.isError && history.push(`/${RouteKey.ANIME}`);
    });
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleHome = () => {
    setActivePage(START_PAGE);
    history.push(`/${RouteKey.TOP}`);
  };

  return (
    <InputGroup>
      <Button onClick={() => handleHome()} className="mr-2" color="info">
        🏠
      </Button>

      <Input
        type="search"
        disabled={isLoading || isRefetching}
        placeholder="Search anime..."
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button className="mr-2" color={isError ? 'danger' : 'info'} onClick={() => handleSearch()} disabled={isLoading || isRefetching}>
        <FontAwesomeIcon icon="sync" spin={isLoading || isRefetching} /> Search
      </Button>

      <Dropdown isOpen={isOpenSearchTypeDropdown} toggle={() => toggleSearchTypeDropdown()} disabled={isLoading || isRefetching}>
        <DropdownToggle color="primary" caret className="dropdown-toggle text-capitalize">
          {`${activeSearchType}`}
        </DropdownToggle>

        <DropdownMenu className="currency-dropdown">
          {Object.keys(AnimeSubtypeType).map(key => {
            return (
              <DropdownItem
                key={key}
                onClick={() => setActiveSearchType(AnimeSubtypeType[key])}
                className={`text-capitalize ${activeSearchType === AnimeSubtypeType[key] ? 'active' : ''}`}
              >
                {`${AnimeSubtypeType[key]}`}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </InputGroup>
  );
};

export default SearchPanel;
