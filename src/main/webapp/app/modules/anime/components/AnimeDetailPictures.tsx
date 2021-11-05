import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Progress, CardGroup, Card, CardImg, Fade } from 'reactstrap';

import ErrorAlert from 'app/shared/error/ErrorAlert';

import { useFetchAnimePicturesById } from '../hooks/useFetchAnimePicturesById';
import useAnimeStore from '../store/anime.store';

export const AnimeDetailPictures = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: container, isLoading, isError, error, refetch } = useFetchAnimePicturesById(match.params.id);

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
    <div className="alert alert-info">Empty :(</div>
  );
};

export default AnimeDetailPictures;
