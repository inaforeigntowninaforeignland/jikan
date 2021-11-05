import { queryClient } from 'app/shared/utils/query-client';
import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Fade, Table } from 'reactstrap';

import CacheKeyType from 'app/enums/CacheKeyType';
import IBaseSearchContainer from 'app/modules/search/models/base/IBaseSearchContainer';
import ISearchAnimeDetail from 'app/modules/search/models/anime/ISearchAnimeDetail';
import useSearchStore from 'app/modules/search/store/search.store';

import useAnimeStore from '../store/anime.store';

export const AnimeList = (props: RouteComponentProps<{ url: string }>) => {
  const { match } = props;

  const searchText = useSearchStore(state => state.searchText);

  const activeSearchType = useSearchStore(state => state.activeSearchType);

  const anime = useAnimeStore(state => state.anime);

  const setAnime = useAnimeStore(state => state.setAnime);

  const container = queryClient.getQueryData<IBaseSearchContainer<ISearchAnimeDetail>>([
    CacheKeyType.SEARCH_ANIME,
    searchText ? `${activeSearchType}:${searchText}` : `${activeSearchType}`,
  ]);

  useEffect(() => {
    container && setAnime(container.results);
  }, [container]);

  return (
    <Fade>
      {anime.length > 0 ? (
        <div className="table-bordered table-responsive text-center">
          <Table responsive>
            <tbody>
              {anime.map((value, i, array) => {
                return (
                  <tr key={i}>
                    <td>
                      <img alt={array[i].imageUrl} src={array[i].imageUrl} />
                    </td>

                    <td className="text-left">
                      <dl>
                        <dt>
                          <h5>Title:</h5>
                        </dt>

                        <dd>{array[i].title || 'Empty :('} </dd>

                        <dt>
                          <h5>⭐</h5>
                        </dt>

                        <dd>{array[i].score ?? 'Empty :('} </dd>

                        <dt>
                          <h5>Description:</h5>
                        </dt>

                        <dd>{array[i].synopsis || 'Empty :('} </dd>
                      </dl>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : (
        <div className="alert alert-info">Empty :(</div>
      )}
    </Fade>
  );
};

export default AnimeList;
