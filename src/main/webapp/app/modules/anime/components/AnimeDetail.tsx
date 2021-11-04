import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Nav, NavLink, NavItem, TabPane, TabContent, Button, Fade } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useAnimeStore from '../store/anime.store';
import { ANIME_DETAIL_TAB } from '../helpers/constants';
import AnimeDetailPictures from '../components/AnimeDetailPictures';
import AnimeDetailDescription from '../components/AnimeDetailDescription';
import AnimeDetailCharacters from '../components/AnimeDetailCharacters';

export const AnimeDetail = (props: RouteComponentProps<{ id: string }>) => {
  const activeTab = useAnimeStore(state => state.activeTab);

  const setActiveTab = useAnimeStore(state => state.setActiveTab);

  const handleActiveTab = currentTab => {
    setActiveTab(currentTab);
  };

  useEffect(() => {
    setActiveTab(ANIME_DETAIL_TAB.DETAILS);
  }, []);

  return (
    <Fade>
      <Nav tabs>
        <NavItem>
          <Button tag={Link} to="/top" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />

            <span className="d-none d-md-inline">Back</span>
          </Button>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab === ANIME_DETAIL_TAB.DETAILS ? 'active' : ''}
            onClick={() => handleActiveTab(ANIME_DETAIL_TAB.DETAILS)}
          >
            Details
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab === ANIME_DETAIL_TAB.CHARACTERS_STAFF ? 'active' : ''}
            onClick={() => handleActiveTab(ANIME_DETAIL_TAB.CHARACTERS_STAFF)}
          >
            Characters & Staff
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab === ANIME_DETAIL_TAB.PICTURES ? 'active' : ''}
            onClick={() => handleActiveTab(ANIME_DETAIL_TAB.PICTURES)}
          >
            Pictures
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId={ANIME_DETAIL_TAB.DETAILS}>
          <AnimeDetailDescription history={props.history} location={props.location} match={props.match} />
        </TabPane>

        <TabPane tabId={ANIME_DETAIL_TAB.CHARACTERS_STAFF}>
          <AnimeDetailCharacters history={props.history} location={props.location} match={props.match} />
        </TabPane>

        <TabPane tabId={ANIME_DETAIL_TAB.PICTURES}>
          <AnimeDetailPictures history={props.history} location={props.location} match={props.match} />
        </TabPane>
      </TabContent>
    </Fade>
  );
};

export default AnimeDetail;
