import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFetchTopAnime } from '../top/hooks/use-fetch-top-anime';
import AnimeSubtypeType from '../top/enums/anime-subtype-type';

export const Top = (props: RouteComponentProps<{ url: string }>) => {
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
              {response?.top?.map(({ id, title }, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${title}`} color="link" size="sm">
                      {title}
                    </Button>
                  </td>

                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />

                        <span className="d-none d-md-inline">View</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !isLoading && <div className="alert alert-warning">Nothing found</div>
        )}
      </div>
    </div>
  );
};

export default Top;
