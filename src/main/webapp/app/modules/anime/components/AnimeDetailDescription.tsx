import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Fade, Progress } from 'reactstrap';

import ErrorAlert from 'app/shared/error/ErrorAlert';

import { useFetchAnimeById } from '../hooks/useFetchAnimeById';
import useAnimeStore from '../store/anime.store';

export const AnimeDetailDescription = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: animeDetail, isLoading, isError, error, refetch } = useFetchAnimeById(match.params.id);

  const prevTab = useAnimeStore(state => state.prevTab);

  const setActiveTab = useAnimeStore(state => state.setActiveTab);

  const handlerTryAgain = () => {
    refetch();
  };

  const handlerGoBack = () => {
    setActiveTab(prevTab);
  };

  return isLoading ? (
    <Progress animated color="info" value="100" />
  ) : isError ? (
    <ErrorAlert error={error} tryAgain={handlerTryAgain} goBack={handlerGoBack} />
  ) : (
    <Fade>
      <h1>{animeDetail?.title}</h1>
      <h2>{animeDetail?.titleJapanese}</h2>

      <dl className="jh-entity-details">
        <dt>
          <h5>Description:</h5>
        </dt>

        <dd>{animeDetail?.synopsis || 'Empty :('} </dd>

        <dt>
          <h5>Period:</h5>
        </dt>

        <dd>{animeDetail?.aired?.period || 'Empty :('} </dd>

        <dt>
          <h5>Producers:</h5>
        </dt>

        <dd>{animeDetail?.producers?.length > 0 ? animeDetail?.producers?.map(({ name }) => name).join(',') : 'Empty :('} </dd>
      </dl>
    </Fade>
  );
};

export default AnimeDetailDescription;
