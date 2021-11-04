import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Fade, Progress, Table } from 'reactstrap';

import { useFetchAnimeCharactersById } from '../hooks/useFetchAnimeCharactersById';

export const AnimeDetailCharacters = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;

  const { data: container, isLoading, isError, error } = useFetchAnimeCharactersById(match.params.id);

  return isLoading ? (
    <Progress animated color="info" value="100" />
  ) : isError ? (
    <div className="alert alert-danger">{`${error} :(`}</div>
  ) : !(container?.characters?.length < 0) ? (
    <Fade>
      <dl className="jh-entity-details">
        <h1>Characters & Voice Actors & Staff</h1>

        <dt>
          <h5>Staff:</h5>
        </dt>

        <dd>
          {container?.staff?.length > 0
            ? container?.staff?.map(({ name, positions }) => `${name} (${positions.join(', ')})`).join('; ')
            : 'Empty :('}{' '}
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
  ) : (
    <div className="alert alert-info">{`Empty :(`}</div>
  );
};

export default AnimeDetailCharacters;
