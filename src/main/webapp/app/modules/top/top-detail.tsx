import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TopDetail = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  return (
    <Row>
      <Col md="8">
        <h2 data-cy="topDetailsHeading">Anime</h2>

        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>

          <dd>{match.params.id}</dd>
        </dl>

        <Button tag={Link} to="/top" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />

          <span className="d-none d-md-inline">Back</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TopDetail;
