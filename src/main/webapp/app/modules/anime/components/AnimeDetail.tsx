import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFetchAnimeById } from '../hooks/useFetchAnimeById';

export const AnimeDetail = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: response, isLoading } = useFetchAnimeById(match.params.id);

  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topDetailsHeading">Anime</h2>

        {isLoading ? (
          <div className="alert alert-info">Loading...</div>
        ) : (
          <dl className="jh-entity-details">
            <dt>
              <span id="title">Title:</span>
            </dt>

            <dd>{response?.title}</dd>

            <dt>
              <span id="title">Description:</span>
            </dt>

            <dd>{response?.synopsis}</dd>
          </dl>
        )}

        <Button tag={Link} to="/top" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />

          <span className="d-none d-md-inline">Back</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AnimeDetail;
