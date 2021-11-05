import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fade, Progress, Row, Table } from 'reactstrap';
import { JhiItemCount, JhiPagination } from 'react-jhipster';

import ErrorAlert from 'app/shared/error/ErrorAlert';

import { useFetchTopAnime } from '../hooks/useFetchTopAnime';
import AnimeSubtypeType from '../enums/AnimeSubtypeType';
import useTopStore from '../store/top.store';
import { TOP_ANIME_ITEMS_PER_PAGE, MAX_PAGINATION_BUTTONS } from '../helpers/constants';

export const TopList = (props: RouteComponentProps<{ url: string }>) => {
  const { match } = props;

  // region Pagination

  const activePage = useTopStore(state => state.activePage);

  const prevPage = useTopStore(state => state.prevPage);

  const setActivePage = useTopStore(state => state.setActivePage);

  // endregion

  // region Subtype dropdown

  const activeSubtype = useTopStore(state => state.activeSubtype);

  const isOpenSubtypeDropdown = useTopStore(state => state.isOpenSubtypeDropdown);

  const setActiveSubtype = useTopStore(state => state.setActiveSubtype);

  const toggleSubtypeDropdown = useTopStore(state => state.toggleSubtypeDropdown);

  // endregion

  const { data: container, isLoading, isRefetching, isError, error, refetch } = useFetchTopAnime(activeSubtype, activePage);

  useEffect(() => {
    refetch();
  }, [activePage, activeSubtype]);

  const handlerGoBack = () => {
    setActivePage(prevPage);
  };

  const handlerTryAgain = () => {
    refetch();
  };

  return (
    <Fade>
      <h2>
        Top Anime Series
        <div className="d-flex justify-content-end">
          <Dropdown isOpen={isOpenSubtypeDropdown} toggle={() => toggleSubtypeDropdown()}>
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
        </div>
      </h2>

      {isLoading || isRefetching ? (
        <Progress animated color="info" value="100" />
      ) : isError ? (
        <ErrorAlert error={error} tryAgain={handlerTryAgain} goBack={handlerGoBack} />
      ) : container?.top?.length < 0 ? (
        <div className="alert alert-info">Empty :(</div>
      ) : (
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
              <JhiItemCount page={activePage} total={container?.contentLength} itemsPerPage={TOP_ANIME_ITEMS_PER_PAGE} />
            </Row>

            <Row className="justify-content-center">
              <JhiPagination
                activePage={activePage}
                onSelect={setActivePage}
                maxButtons={MAX_PAGINATION_BUTTONS}
                itemsPerPage={TOP_ANIME_ITEMS_PER_PAGE}
                totalItems={container?.contentLength}
              />
            </Row>
          </div>
        </Fade>
      )}
    </Fade>
  );
};

export default TopList;
