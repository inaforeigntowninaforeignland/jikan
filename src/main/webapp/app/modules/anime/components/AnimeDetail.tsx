import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Progress, CardGroup, Card, CardImg } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFetchAnimeById } from '../hooks/useFetchAnimeById';
import { useFetchAnimePicturesById } from '../hooks/useFetchAnimePicturesById';

export const AnimeDetail = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const {
    data: animeDetail,
    isLoading: isLoadingAnimeDetail,
    isError: isErrorAnimeDetail,
    error: errorAnimeDetail,
  } = useFetchAnimeById(match.params.id);

  const { data: animePicturesContainer, isLoading: isLoadingAnimePicturesContainer } = useFetchAnimePicturesById(match.params.id);

  return (
    <Row>
      <Col md="8">
        {isLoadingAnimePicturesContainer || isLoadingAnimeDetail ? (
          <Progress animated color="info" value="100" />
        ) : isErrorAnimeDetail ? (
          <div className="alert alert-danger">{`${errorAnimeDetail} :(`}</div>
        ) : (
          ''
        )}

        <div>
          <h1 data-cy="topDetailsHeading">{animeDetail?.title}</h1>

          <dl className="jh-entity-details">
            <dt>
              <h5 id="description">Description:</h5>
            </dt>

            <dd>{animeDetail?.synopsis ?? 'Empty :('} </dd>

            {animePicturesContainer?.pictures?.length > 0 && !isErrorAnimeDetail ? (
              <>
                <dt>
                  <h5 id="pictures">Pictures:</h5>
                </dt>

                <dd>
                  <CardGroup>
                    {animePicturesContainer?.pictures?.map((picture, i) => (
                      <Card key={`picture-${i}`}>
                        <CardImg alt={picture?.small} src={picture?.small} width="100%" />
                      </Card>
                    ))}
                  </CardGroup>
                </dd>
              </>
            ) : (
              ''
            )}
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
