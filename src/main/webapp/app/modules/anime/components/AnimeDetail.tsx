import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Progress, UncontrolledCarousel } from 'reactstrap';

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

            <dt>
              <h5 id="period">Period:</h5>
            </dt>

            <dd>{animeDetail?.aired?.period ?? 'Empty :('} </dd>

            <dt>
              <h5 id="period">Producers:</h5>
            </dt>

            <dd>{animeDetail?.producers?.length > 0 ? animeDetail?.producers?.map(({ name }) => name).join(',') : 'Empty :('} </dd>

            {animePicturesContainer?.pictures?.length > 0 && !isErrorAnimeDetail ? (
              <>
                <dt>
                  <h5 id="pictures">Pictures:</h5>
                </dt>

                <dd>
                  <UncontrolledCarousel
                    items={animePicturesContainer?.pictures?.map((picture, i) => ({
                      caption: `#${i + 1}`,
                      altText: picture?.small,
                      key: i,
                      src: picture?.small,
                    }))}
                  />
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
