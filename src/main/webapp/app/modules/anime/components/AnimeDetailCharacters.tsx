import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { useFetchAnimeCharactersById } from '../hooks/useFetchAnimeCharactersById';

export const AnimeDetailCharacters = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: animeCharactersContainer, isLoading, isError, error } = useFetchAnimeCharactersById(match.params.id);

  return (
    <Row>
      <Col md="8"></Col>
    </Row>
  );
};

export default AnimeDetailCharacters;
