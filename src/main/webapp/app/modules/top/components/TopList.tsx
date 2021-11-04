// import { useQueryClient } from 'react-query';
import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fade, Progress, Row, Table } from 'reactstrap';
import { JhiItemCount, JhiPagination } from 'react-jhipster';

// import animeService from 'app/modules/anime/services/anime.service';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFetchTopAnime } from '../hooks/useFetchTopAnime';
import AnimeSubtypeType from '../enums/AnimeSubtypeType';
import useTopStore from '../store/top.store';
import { TOP_ITEMS_PER_PAGE, MAX_PAGINATION_BUTTONS } from '../helpers/constants';

export const TopList = (props: RouteComponentProps<{ url: string }>) => {
  const { match } = props;

  // region Pagination

  const activePage = useTopStore(state => state.activePage);

  const setActivePage = useTopStore(state => state.setActivePage);

  // endregion

  // region Subtype DropDown

  const activeSubtype = useTopStore(state => state.activeSubtype);

  const isOpenSubtypeDropDown = useTopStore(state => state.isOpenSubtypeDropDown);

  const setActiveSubtype = useTopStore(state => state.setActiveSubtype);

  const toggleSubtypeDropDown = useTopStore(state => state.toggleSubtypeDropDown);

  // endregion

  const { data: container, isLoading, isRefetching, isError, error, refetch } = useFetchTopAnime(activeSubtype, activePage);

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
    <Fade>
      <h2>
        #Top Anime Series
        <div className="d-flex justify-content-end">
          <Dropdown isOpen={isOpenSubtypeDropDown} toggle={() => toggleSubtypeDropDown(isOpenSubtypeDropDown)}>
            <DropdownToggle color="primary" caret className="dropdown-toggle text-capitalize">
              {`Top ${activeSubtype}`}
            </DropdownToggle>

            <DropdownMenu className="currency-dropdown">
              {Object.keys(AnimeSubtypeType).map(key => {
                return (
                  <DropdownItem
                    key={key}
                    onClick={() => setActiveSubtype(AnimeSubtypeType[key])}
                    className={`text-capitalize ${activeSubtype === AnimeSubtypeType[key] ? 'active' : ''}`}
                  >
                    {`Top ${AnimeSubtypeType[key]}`}
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
      ) : container?.top?.length < 0 ? (
        <div className="alert alert-warning fade show">Nothing found</div>
      ) : (
        ''
      )}

      {container?.top?.length > 0 ? (
        <Fade>
          <div className="table-bordered table-responsive text-center">
            <Table responsive>
              <tbody>
                {container?.top?.map((value, i, array) => {
                  if (i % 2) {
                    return (
                      <tr key={i}>
                        <td>
                          <Button tag={Link} to={`${match.url}/${array[i].id}`} color="link" size="sm">
                            {`${array[i].title} / ${array[i].type}`}
                          </Button>
                        </td>

                        <td>
                          <Button tag={Link} to={`${match.url}/${array[i - 1].id}`} color="link" size="sm">
                            {`${array[i - 1].title} / ${array[i - 1].type}`}
                          </Button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </div>

          <div className={container?.top?.length > 0 ? '' : 'd-none'}>
            <Row className="justify-content-center">
              <JhiItemCount page={activePage} total={container?.contentLength} itemsPerPage={TOP_ITEMS_PER_PAGE} />
            </Row>

            <Row className="justify-content-center">
              <JhiPagination
                activePage={activePage}
                onSelect={setActivePage}
                maxButtons={MAX_PAGINATION_BUTTONS}
                itemsPerPage={TOP_ITEMS_PER_PAGE}
                totalItems={container?.contentLength}
              />
            </Row>
          </div>
        </Fade>
      ) : (
        ''
      )}
    </Fade>
  );
};

export default TopList;
