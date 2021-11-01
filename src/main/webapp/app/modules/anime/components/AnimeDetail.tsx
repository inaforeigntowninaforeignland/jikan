import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Progress } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFetchAnimeById } from '../hooks/useFetchAnimeById';

export const AnimeDetail = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: response, isLoading, isRefetching, isError, error } = useFetchAnimeById(match.params.id);

  return (
    <Row>
      <Col md="8">
        {isLoading || isRefetching ? (
          <Progress animated color="info" value="100" />
        ) : isError ? (
          <div className="alert alert-danger">{`${error} :(`}</div>
        ) : (
          ''
        )}

        <div>
          <h2 data-cy="topDetailsHeading">{response?.title}</h2>

          <dl className="jh-entity-details">
            <dt>
              <span id="title">Description:</span>
            </dt>

            <dd>{response?.synopsis ?? 'Empty :('}</dd>
          </dl>
        </div>

        <Button tag={Link} to="/top" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />

          <span className="d-none d-md-inline">Back</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AnimeDetail;
