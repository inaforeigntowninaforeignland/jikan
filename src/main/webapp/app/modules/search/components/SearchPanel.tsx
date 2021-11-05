import React, { useEffect } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AnimeSubtypeType from 'app/modules/top/enums/AnimeSubtypeType';

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

  const history = useHistory();

  const { isLoading, isRefetching, isError, refetch } = useSearchAnime(searchText, activeSearchType);

  const handleSearch = () => {
    refetch().then(result => {
      !result.isError && history.push('/anime');
    });
  };

  return (
    <InputGroup>
      <Input
        disabled={isLoading || isRefetching}
        placeholder="Search anime..."
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
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
