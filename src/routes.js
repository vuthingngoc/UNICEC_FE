import Alternative from 'views/pages/dashboards/Alternative.js';

import Dashboard from 'views/pages/dashboards/Dashboard.js';
import Lock from 'views/pages/examples/Lock.js';
//import Login from 'views/pages/examples/Login.jsx';
import Pricing from 'views/pages/examples/Pricing.js';
// import Profile from 'views/pages/examples/Profile.js';
import Register from 'views/pages/examples/Register.js';
//LoginPagef
import LoginPage from 'views/pages/LoginPage/LoginPage.jsx';

//ClubMember
//import ClubMember from 'views/pages/MemberPage/ClubMember.jsx';

//ShowAllClub
//import AllClubPage from 'views/pages/AllCLubPage/AllClubPage.jsx';

const routes = [
  {
    collapse: true,
    name: 'Câu lạc bộ',
    icon: 'ni ni-briefcase-24 text-primary',
    state: 'dashboardsCollapse',
    views: [
      {
        path: '/clb-tham-gia',
        name: 'Câu lạc bộ tham gia',
        miniName: 'C',
        component: Dashboard,
        layout: '/admin',
      },
      {
        path: '/hoat-dong-clb',
        name: 'Hoạt động câu lạc bộ',
        miniName: 'H',
        component: Alternative,
        layout: '/admin',
      },
      {
        path: '/tat-ca-clb',
        name: 'Tất cả câu lạc bộ',
        miniName: 'T',
        component: Alternative,
        layout: '/admin',
      },
      // {
      //   path: '/tat-ca',
      //   name: 'ClucMemer',
      //   miniName: 'T',
      //   component: ClubMember,
      //   layout: '/admin',
      // },
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
        component: Pricing,
        layout: '/auth',
      },
      {
        path: '/su-kien',
        name: 'Sự kiện',
        miniName: 'S',
        component: LoginPage,
        layout: '/auth',
      },
      {
        path: '/da-tham-gia',
        name: 'Đã tham gia',
        miniName: 'TH',
        component: Register,
        layout: '/auth',
      },
      {
        path: '/tao-cuoc-thi',
        name: 'Tạo Cuộc thi',
        miniName: 'T',
        component: Lock,
        layout: '/auth',
      },
    ],
  },
];

export default routes;
