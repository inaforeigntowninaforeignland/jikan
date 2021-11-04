import React, { useEffect } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupText } from 'reactstrap';

import AnimeSubtypeType from 'app/modules/top/enums/AnimeSubtypeType';

import useSearchStore from '../store/search.store';

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

  useEffect(() => {
    setSearchText('');
  }, []);

  return (
    <InputGroup>
      <Input placeholder="Search Anime..." value={searchText} onChange={event => setSearchText(event.target.value)} />

      <InputGroupText>Search</InputGroupText>

      <Dropdown isOpen={isOpenSearchTypeDropdown} toggle={() => toggleSearchTypeDropdown(isOpenSearchTypeDropdown)}>
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
