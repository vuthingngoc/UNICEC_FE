import AdminFooter from 'components/Footers/AdminFooter';
import AdminNavbar from 'components/Navbars/AdminNavbar';
import Sidebar from 'components/Sidebar/Sidebar';
import { statusCode } from 'constants/status.constants';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Col, Row } from 'reactstrap';
import routes from 'routes.js';
import { getDataByPath } from 'services/data.service';
import CompetitionRoundBody from './components/CompetitionRoundBody';
import CompetitionRoundHeader from './components/CompetitionRoundHeader';

export default function CompetitionRoundPage(props) {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const location = useLocation();
  const mainContentRef = React.useRef(null);
  const [competitionRound, setCompetitionRound] = useState(null);
  const [competitionData, setCompetitionData] = useState(null);

  async function loadCompetitionRound(competitionId) {
    if (competitionId && localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const path = `api/v1/competition-rounds/search`;
      const data = `competitionId=${competitionId}&pageSize=20&statuses=1&statuses=2&statuses=3`;
      const res = await getDataByPath(path, accessToken, data);
      console.log(res);
      if (res && res.status === statusCode.success) {
        if (res.data.items && res.data.items.length > 0) {
          setCompetitionRound(res.data.items);
        } else {
          setCompetitionRound([]);
        }
      }
    }
  }

  async function loadCompetitionDetail(competitionId) {
    if (competitionId && localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const path = `api/v1/competitions/${competitionId}`;
      const res = await getDataByPath(path, accessToken, '');
      console.log(res);
      if (res && res.status === statusCode.success) {
        setCompetitionData(res.data);
      }
    }
  }

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };
  //toggles collapse between mini sidenav and normal
  const toggleSidenav = () => {
    if (document.body.classList.contains('g-sidenav-pinned')) {
      document.body.classList.remove('g-sidenav-pinned');
      document.body.classList.add('g-sidenav-hidden');
    } else {
      document.body.classList.add('g-sidenav-pinned');
      document.body.classList.remove('g-sidenav-hidden');
    }
    setSidenavOpen(!sidenavOpen);
  };
  const getNavbarTheme = () => {
    return location.pathname.indexOf('admin/alternative-dashboard') === -1 ? 'dark' : 'light';
  };

  React.useEffect(() => {
    if (competitionRound === null) {
      loadCompetitionRound(props.match.params.id);
    }
    if (competitionData === null) {
      loadCompetitionDetail(props.match.params.id);
    }
  }, []);

  return (
    <>
      <Sidebar
        routes={routes}
        toggleSidenav={toggleSidenav}
        sidenavOpen={sidenavOpen}
        logo={{
          innerLink: '/',
          imgSrc: require('assets/img/brand/Logo text ngang.png').default,
          imgAlt: '...',
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar theme={getNavbarTheme()} toggleSidenav={toggleSidenav} sidenavOpen={sidenavOpen} brandText={getBrandText(location.pathname)} />
        <CompetitionRoundHeader {...props} />
        {competitionRound && competitionData ? (
          <CompetitionRoundBody
            CompetitionId={props.match.params.id}
            CompetitionRounds={competitionRound}
            loadCompetitionRound={loadCompetitionRound}
            CompetitionData={competitionData}
          />
        ) : (
          <Row>
            <Col className="text-center" lg="12" md="12">
              <img alt="..." src={require('assets/img/icons/Curve-Loading.gif').default} style={{ margin: 'auto' }} />
            </Col>
          </Row>
        )}
        <AdminFooter />
      </div>
      {sidenavOpen ? <div className="backdrop d-xl-none" onClick={toggleSidenav} /> : null}
    </>
  );
}
