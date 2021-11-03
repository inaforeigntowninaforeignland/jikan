// import { useQueryClient } from 'react-query';
import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Progress, Row, Table } from 'reactstrap';
import { JhiItemCount, JhiPagination } from 'react-jhipster';

// import animeService from 'app/modules/anime/services/anime.service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFetchTopAnime } from '../hooks/useFetchTopAnime';
import AnimeSubtypeType from '../enums/AnimeSubtypeType';
import useTopStore from '../store/top.store';
import { TOP_ITEMS_PER_PAGE, MAX_PAGINATION_BUTTONS } from '../helpers/constants';

export const TopList = (props: RouteComponentProps<{ url: string }>) => {
  const { match } = props;

  const activePage = useTopStore(state => state.activePage);

  const activeSubtype = useTopStore(state => state.activeSubtype);

  const isOpenSubtypeDropDown = useTopStore(state => state.isOpenSubtypeDropDown);

  const setActivePage = useTopStore(state => state.setActivePage);

  const setActiveSubtype = useTopStore(state => state.setActiveSubtype);

  const toggleSubtypeDropDown = useTopStore(state => state.toggleSubtypeDropDown);

  const { data: response, isLoading, isRefetching, isError, error, refetch } = useFetchTopAnime(activeSubtype, activePage);

  // const queryClient = useQueryClient();
  //
  // const handlePrefetch = id => {
  //   queryClient.prefetchQuery(['anime', id], () => animeService.getAnimeById(id));
  // };

  const handleSyncList = () => {
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [activePage]);

  useEffect(() => {
    refetch();
  }, [activeSubtype]);

  return (
    <>
      <h2 id="top-list-heading" data-cy="TopListHeading">
        Top Anime
        <div className="d-flex justify-content-end">
          <Dropdown isOpen={isOpenSubtypeDropDown} toggle={() => toggleSubtypeDropDown(isOpenSubtypeDropDown)}>
            <DropdownToggle color="primary" caret className="dropdown-toggle text-capitalize">
              {activeSubtype}
            </DropdownToggle>

            <DropdownMenu className="currency-dropdown">
              {Object.keys(AnimeSubtypeType).map(key => {
                return (
                  <DropdownItem
                    key={`subtype-${key}`}
                    onClick={() => setActiveSubtype(AnimeSubtypeType[key])}
                    className={`text-capitalize ${activeSubtype === AnimeSubtypeType[key] ? 'active' : ''}`}
                  >
                    {AnimeSubtypeType[key]}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>

          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={isLoading || isRefetching}>
            <FontAwesomeIcon icon="sync" spin={isLoading || isRefetching} /> Refresh List
          </Button>
        </div>
      </h2>

      {isLoading || isRefetching ? (
        <Progress animated color="info" value="100" />
      ) : isError ? (
        <div className="alert alert-danger fade show">{`${error} :(`}</div>
      ) : response?.top?.length < 0 ? (
        <div className="alert alert-warning fade show">Nothing found</div>
      ) : (
        ''
      )}

      {response?.top?.length > 0 ? (
        <>
          <div className="table-bordered table-responsive text-center">
            <Table responsive>
              <tbody>
                {response?.top?.map((value, i, array) => {
                  if (i % 2) {
                    return (
                      <tr key={`top-list-${i}`} data-cy="topListTable">
                        <td>
                          <Button tag={Link} to={`${match.url}/${array[i].id}`} color="link" size="sm">
                            {array[i].title}
                          </Button>
                        </td>

                        <td>
                          <Button tag={Link} to={`${match.url}/${array[i - 1].id}`} color="link" size="sm">
                            {array[i - 1].title}
                          </Button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </div>

          <div className={response?.top?.length > 0 ? '' : 'd-none'}>
            <Row className="justify-content-center">
              <JhiItemCount page={activePage} total={response?.contentLength} itemsPerPage={TOP_ITEMS_PER_PAGE} />
            </Row>

            <Row className="justify-content-center">
              <JhiPagination
                activePage={activePage}
                onSelect={setActivePage}
                maxButtons={MAX_PAGINATION_BUTTONS}
                itemsPerPage={TOP_ITEMS_PER_PAGE}
                totalItems={response?.contentLength}
              />
            </Row>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default TopList;
