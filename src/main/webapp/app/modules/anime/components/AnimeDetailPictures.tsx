import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Progress, CardGroup, Card, CardImg, Fade } from 'reactstrap';

import { useFetchAnimePicturesById } from '../hooks/useFetchAnimePicturesById';

export const AnimeDetailPictures = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: container, isLoading, isError, error } = useFetchAnimePicturesById(match.params.id);

  return isLoading ? (
    <Progress animated color="info" value="100" />
  ) : isError ? (
    <div className="alert alert-danger">{`${error} :(`}</div>
  ) : container?.pictures?.length > 0 ? (
    <CardGroup>
      {container?.pictures?.map((value, i) => (
        <Card key={i}>
          <Fade>
            <CardImg alt={value?.small} src={value?.small} width="100%" />
          </Fade>
        </Card>
      ))}
    </CardGroup>
  ) : (
    <div className="alert alert-info">{`Empty :(`}</div>
  );
};

export default AnimeDetailPictures;
