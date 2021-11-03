import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col, Progress, CardGroup, Card, CardImg } from 'reactstrap';

import { useFetchAnimePicturesById } from '../hooks/useFetchAnimePicturesById';

export const AnimeDetailPictures = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: picturesContainer, isLoading, isError, error } = useFetchAnimePicturesById(match.params.id);

  return isLoading ? (
    <Progress animated color="info" value="100" />
  ) : isError ? (
    <div className="alert alert-danger">{`${error} :(`}</div>
  ) : picturesContainer?.pictures?.length > 0 ? (
    <CardGroup>
      {picturesContainer?.pictures?.map((picture, i) => (
        <Card key={`picture-${i}`}>
          <CardImg alt={picture?.small} src={picture?.small} width="100%" />
        </Card>
      ))}
    </CardGroup>
  ) : (
    'Empty :('
  );
};

export default AnimeDetailPictures;
