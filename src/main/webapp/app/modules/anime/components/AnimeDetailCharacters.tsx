import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Fade, Progress, Table } from 'reactstrap';

import ErrorAlert from 'app/shared/error/ErrorAlert';

import { useFetchAnimeCharactersById } from '../hooks/useFetchAnimeCharactersById';
import useAnimeStore from '../store/anime.store';

export const AnimeDetailCharacters = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: container, isLoading, isError, error, refetch } = useFetchAnimeCharactersById(match.params.id);

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
  ) : container?.characters?.length < 0 ? (
    <div className="alert alert-info">Empty :(</div>
  ) : (
    <Fade>
      <dl className="jh-entity-details">
        <h1>Characters & Voice Actors & Staff</h1>

        <dt>
          <h5>Staff:</h5>
        </dt>

        <dd>
          {container?.staff?.length > 0
            ? container?.staff?.map(({ name, positions }) => `${name} (${positions.join(', ')})`).join('; ')
            : 'Empty :('}
        </dd>

        <dt>
          <h5>Characters & Voice Actors:</h5>
        </dt>

        <dd>
          {container?.characters?.length > 0 ? (
            <div className="table-bordered table-responsive text-center">
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Character</td>

                    <td>Voice Actors</td>
                  </tr>

                  {container?.characters?.map((value, i) => {
                    return (
                      <tr key={i}>
                        <td>{`${value.name} / ${value.role}`}</td>

                        {value.voiceActors.length > 0 ? (
                          <td>
                            <Table responsive>
                              <tbody>
                                {value.voiceActors?.map(({ name, language }, j) => {
                                  return (
                                    <tr key={j}>
                                      <td>{`${name} / ${language}`}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </td>
                        ) : (
                          <></>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          ) : (
            'Empty :('
          )}
        </dd>
      </dl>
    </Fade>
  );
};

export default AnimeDetailCharacters;
