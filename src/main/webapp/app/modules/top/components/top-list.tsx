import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFetchTopAnime } from '../hooks/use-fetch-top-anime';
import AnimeSubtypeType from '../enums/anime-subtype-type';

export const TopList = (props: RouteComponentProps<{ url: string }>) => {
  const { data: response, isLoading } = useFetchTopAnime(1, AnimeSubtypeType.OVA);

  const handleSyncList = () => {};

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

      <div className="table-responsive">
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
    </div>
  );
};

export default TopList;
