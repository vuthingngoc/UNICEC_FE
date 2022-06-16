import Alternative from 'views/pages/dashboards/Alternative.js';

import Dashboard from 'views/pages/dashboards/Dashboard.js';
// import Lock from 'views/pages/examples/Lock.js';
//LoginPagef
//import LoginPage from 'views/pages/LoginPage/LoginPage.jsx';

//import CreateClubActivityIndex from 'views/pages/CreateClubActivity';

import CreateClubActivity from 'views/pages/CreateClubActivity/CreateClubActivity';

import ShowCompetition from 'views/pages/ShowCompetitionPage/CompetitionPage.jsx';
import CreateCompetionPage from 'views/pages/CreateCompetitionPage';

import ShowlistTeamPage from 'views/pages/ShowListTeamPage/index.jsx';

const routes = [
  {
    collapse: true,
    name: 'Câu lạc bộ',
    icon: 'ni ni-briefcase-24 text-primary',
    state: 'dashboardsCollapse',
    views: [
      {
        path: '/thong-tin-clb',
        name: 'Thông tin câu lạc bộ',
        miniName: 'C',
        component: Dashboard,
        layout: '/admin',
      },
      {
        path: '/hoat-dong-clb',
        name: 'Hoạt động',
        miniName: 'H',
        component: Alternative,
        layout: '/admin',
      },
      {
        path: '/thanh-vien',
        name: 'Thành viên',
        miniName: 'T',
        component: Alternative,
        layout: '/admin',
      },
    ],
  },
  {
    collapse: true,
    name: 'Cuộc thi và sự kiện',
    icon: 'ni ni-trophy text-orange',
    state: 'examplesCollapse',
    views: [
      {
        path: '/cuoc-thi',
        name: 'Cuộc thi',
        miniName: 'C',
        component: ShowCompetition,
        layout: '/admin',
      },
      {
        path: '/su-kien',
        name: 'Sự kiện',
        miniName: 'S',
        component: CreateClubActivity,
        layout: '/admin',
      },
      {
        path: '/tao-cuoc-thi',
        name: 'Tạo cuộc thi',
        miniName: 'TC',
        component: CreateCompetionPage,
        layout: '/admin',
      },
      {
        path: '/tao-su-kien',
        name: 'Tạo sự kiện',
        miniName: 'TS',
        component: ShowlistTeamPage,
        layout: '/admin',
      },
    ],
  },
];

export default routes;
