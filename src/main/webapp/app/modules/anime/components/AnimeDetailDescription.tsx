import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col, Progress } from 'reactstrap';

import { useFetchAnimeById } from '../hooks/useFetchAnimeById';

export const AnimeDetailDescription = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: animeDetail, isLoading, isError, error } = useFetchAnimeById(match.params.id);

  return isLoading ? (
    <Progress animated color="info" value="100" />
  ) : isError ? (
    <div className="alert alert-danger">{`${error} :(`}</div>
  ) : (
    <div>
      <h1 data-cy="animeDetailDescriptionHeading">{animeDetail?.title}</h1>

      <dl className="jh-entity-details">
        <dt>
          <h5 id="description">Description:</h5>
        </dt>

        <dd>{animeDetail?.synopsis ?? 'Empty :('} </dd>

        <dt>
          <h5 id="period">Period:</h5>
        </dt>

        <dd>{animeDetail?.aired?.period ?? 'Empty :('} </dd>

        <dt>
          <h5 id="period">Producers:</h5>
        </dt>

        <dd>{animeDetail?.producers?.length > 0 ? animeDetail?.producers?.map(({ name }) => name).join(',') : 'Empty :('} </dd>
      </dl>
    </div>
  );
};

export default AnimeDetailDescription;
