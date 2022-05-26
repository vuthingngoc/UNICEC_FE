import React from 'react';
import ReactDOM from 'react-dom';
// react library for routing
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// plugins styles from node_modules
import 'react-notification-alert/dist/animate.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '@fullcalendar/common/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'select2/dist/css/select2.min.css';
import 'quill/dist/quill.core.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// plugins styles downloaded
import 'assets/vendor/nucleo/css/nucleo.css';
// core styles
import 'assets/scss/argon-dashboard-pro-react.scss?v1.2.0';

import AdminLayout from 'layouts/Admin.js';
import RTLLayout from 'layouts/RTL.js';
import AuthLayout from 'layouts/Auth.js';
import Homepage from 'views/pages/homepage/index';
import AuthContextProvider from 'contexts/AuthContext';
import MemberPage from 'views/pages/MemberPage/index';
import LoginPage from 'views/pages/LoginPage/LoginPage';
import CompetitionDetailPage from 'views/pages/CompetitionDetailPage';

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/admin/cuoc-thi/chi-tiet/:id" render={(props) => <CompetitionDetailPage {...props} />} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/clubMember" render={(props) => <MemberPage {...props} />} />
        <Route path="/login" render={(props) => <LoginPage {...props} />} />
        <Route path="/" render={(props) => <Homepage {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
);
