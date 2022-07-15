import UniversityClubManager from 'views/pages/UniversityClubManager';
import UniversityCompetition from 'views/pages/UniversityCompetition';
const routes = [
  {
    collapse: true,
    name: 'Trường',
    icon: 'ni ni-briefcase-24 text-primary',
    state: 'dashboardsCollapse',
    views: [
      {
        path: '/quan-ly-clb',
        name: 'Quản lý câu lạc bộ',
        miniName: 'CLB',
        component: UniversityClubManager,
        layout: '/university',
      },
      {
        path: '/quan-ly-chuyen-nganh',
        name: 'Quản lý chuyên ngành',
        miniName: 'CN',
        component: UniversityClubManager,
        layout: '/university',
      },
      {
        path: '/quan-ly-tai-khoan',
        name: 'Quản lý tài khoảng',
        miniName: 'TK',
        component: UniversityClubManager,
        layout: '/university',
      },
    ],
  },
  {
    collapse: true,
    name: 'Cuộc thi và sự kiên',
    icon: 'ni ni-world-2 text-warning',
    state: 'competitionCollapse',
    views: [
      {
        path: '/xet-duyet',
        name: 'Xét duyệt',
        miniName: 'XD',
        component: UniversityCompetition,
        layout: '/university',
      },
    ],
  },
];

export default routes;
