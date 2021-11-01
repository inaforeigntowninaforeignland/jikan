import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Table } from 'reactstrap';
import { JhiItemCount, JhiPagination } from 'react-jhipster';

import { ITEMS_PER_PAGE } from 'app/config/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFetchTopAnime } from '../hooks/useFetchTopAnime';
import AnimeSubtypeType from '../enums/AnimeSubtypeType';

export const TopList = (props: RouteComponentProps<{ url: string }>) => {
  const { data: response, isLoading } = useFetchTopAnime(AnimeSubtypeType.UPCOMING);

  const handleSyncList = () => {};

  const handlePagination = () => {};

  const { match } = props;

  return (
    <div>
      <h2 id="top-heading" data-cy="TopHeading">
        Top Anime
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={isLoading}>
            <FontAwesomeIcon icon="sync" spin={isLoading} /> Refresh List
          </Button>
        </div>
      </h2>

      <div className="table-responsive text-center">
        {response?.top?.length > 0 ? (
          <Table responsive>
            <tbody>
              {response?.top?.map((value, i, array) => {
                if (i % 2) {
                  return (
                    <tr key={`entity-${i}`} data-cy="entityTable">
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
        ) : (
          !isLoading && <div className="alert alert-warning">Nothing found</div>
        )}
      </div>

      {response?.contentLength ? (
        <div className={response?.top?.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={1} total={response?.contentLength} itemsPerPage={ITEMS_PER_PAGE} />
          </Row>

          <Row className="justify-content-center">
            <JhiPagination
              activePage={1}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={response?.contentLength}
            />
          </Row>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default TopList;
