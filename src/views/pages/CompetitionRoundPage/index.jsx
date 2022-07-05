import AdminFooter from 'components/Footers/AdminFooter';
import AdminNavbar from 'components/Navbars/AdminNavbar';
import Sidebar from 'components/Sidebar/Sidebar';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import routes from 'routes.js';
import CompetitionRoundBod from './components/CompetitionRoundBody';
import CompetitionRoundHeader from './components/CompetitionRoundHeader';

const CompetitionRound = [
  { title: 'Vòng 1', description: 'Khởi động', start_time: '2022-06-27T14:33:07.639Z', end_time: '2022-06-27T15:33:07.639Z', seeds_point: 100 },
  { title: 'Vòng 2', description: 'Tăng tốc', start_time: '2022-06-27T16:33:07.639Z', end_time: '2022-06-27T17:33:07.639Z', seeds_point: 150 },
  { title: 'Vòng 3', description: 'Về đích', start_time: '2022-06-27T18:33:07.639Z', end_time: '2022-06-27T19:33:07.639Z', seeds_point: 200 },
];

export default function CompetitionRoundPage(props) {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const location = useLocation();
  const mainContentRef = React.useRef(null);

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
        <CompetitionRoundBod CompetitionRounds={CompetitionRound} />
        <AdminFooter />
      </div>
      {sidenavOpen ? <div className="backdrop d-xl-none" onClick={toggleSidenav} /> : null}
    </>
  );
}
