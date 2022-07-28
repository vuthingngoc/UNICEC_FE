import React, { useEffect, useState } from 'react';
import AdminFooter from 'components/Footers/AdminFooter.js';
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import { useLocation } from 'react-router-dom';
import routes from 'routes/routes.js';
import CompetitionDetailHeader from './components/CompetitionDetailHeader';
import CompetitionDetailBody from './components/CompetitionDetailBody';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import { getDataByPath } from 'services/data.service';
import { Row } from 'reactstrap';
import { warningAlertConstants } from 'constants/alert.constants';
import { updateDataByPath } from 'services/data.service';
import { statusCode } from 'constants/status.constants';
import { createDataByPath } from 'services/data.service';
import { deleteDataByPathWithParam } from 'services/data.service';

export default function CompetitionDetailPage(props) {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const [alert, setalert] = React.useState(false);
  const [competitionDetail, setCompetitionDetail] = useState(null);
  const [banner, setBanner] = useState([]);
  const [sponsor, setSponsor] = useState([]);
  const [influencer, setInfluencer] = useState([]);
  const [competitionStatus, setCompetitionStatus] = useState(null);
  const [competitionClubs, setCompetitionClubs] = useState(null);
  const location = useLocation();
  const mainContentRef = React.useRef(null);

  async function loadDataCompetitionDetail(accessToken, competition_id) {
    setCompetitionStatus(null);
    setCompetitionClubs(null);
    if (accessToken) {
      const path = `api/v1/competitions/${competition_id}`;
      const res = await getDataByPath(`${path}`, accessToken, '');
      if (res && res.status === statusCode.success) {
        convertCompetitionEntities(res.data);
        setCompetitionStatus(res.data.status);
        setCompetitionClubs(res.data.clubs_in_competition);
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  async function updatePendingCompetition(accessToken, clubID, status) {
    if (accessToken) {
      const path = `api/v1/competitions/status`;
      const data = {
        id: parseInt(props.match.params.id),
        status: parseInt(status),
        club_id: parseInt(clubID),
      };
      const res = await updateDataByPath(`${path}`, accessToken, data);
      console.log(res);
      if (res && res.status === statusCode.success) {
        if (status === 7) successAlert('Nộp đơn xét duyệt thành công');
        else successAlert('Thao tác thành công');
        loadDataCompetitionDetail(accessToken, parseInt(props.match.params.id));
      } else if (res && res.status === statusCode.badrequest && res.data === 'Date Now < Time Register < Time Start < Time End') {
        warningAlert('Các cột mốc thời gian đã quá hạn vui lòng cập nhật lại');
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  async function addClubToCompetition(id) {
    if (localStorage && localStorage.getItem('accessToken') && id) {
      const accessToken = localStorage.getItem('accessToken');
      const clubId = localStorage.getItem('clubID');
      const path = 'api/v1/competitions/club';
      const data = {
        club_id_collaborate: parseInt(id),
        competition_id: parseInt(props.match.params.id),
        club_id: parseInt(clubId),
      };
      console.log(data);
      const res = await createDataByPath(path, accessToken, data);
      console.log(res);
      if (res && res.status === 200) {
        successAlert('Thêm câu lạc bộ thành công');
        loadDataCompetitionDetail(accessToken, parseInt(props.match.params.id));
      } else if (res && res.status === 400 && res.data === 'Club has join in Competition') {
        warningAlert('Câu lạc bộ đã có trong Cuộc thi hoặc sự kiện');
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  async function removeClubToCompetition(id) {
    if (localStorage && localStorage.getItem('accessToken') && id) {
      const accessToken = localStorage.getItem('accessToken');
      const clubId = localStorage.getItem('clubID');
      const path = 'api/v1/competitions/club';
      const data = `competitionInClubId=${id}&clubId=${clubId}`;
      console.log(data);
      const res = await deleteDataByPathWithParam(path, accessToken, data);
      console.log(res);
      if (res && res.status === 200) {
        successAlert('Xóa câu lạc bộ khỏi cuộc thi hoặc sự kiện thành công');
        loadDataCompetitionDetail(accessToken, parseInt(props.match.params.id));
      } else if (res && res.status === 400 && res.data === "Can't delete Club Owner Competition") {
        warningAlert('Không thể xóa câu lạc bộ tạo cuộc thi hoặc sự kiện');
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  async function cancelCompetition(id) {
    if (localStorage && localStorage.getItem('accessToken') && id) {
      const accessToken = localStorage.getItem('accessToken');
      const clubId = localStorage.getItem('clubID');
      const path = 'api/v1/competitions/status';
      const data = {
        id: parseInt(id),
        status: 12,
        club_id: parseInt(clubId),
      };
      const res = await updateDataByPath(path, accessToken, data);
      console.log(res);
      if (res && res.status === statusCode.success) {
        successAlert('Hủy cuộc thi thành công');
        setTimeout(() => {
          history.push('/admin/cuoc-thi');
        }, 2000);
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  const convertCompetitionEntities = (array) => {
    const banner = [];
    const sponsor = [];
    const influencer = [];
    array.competition_entities.forEach((e) => {
      switch (e.entity_type_id) {
        case 1:
          banner.push({ image_url: e.image_url });
          break;
        case 2:
          influencer.push({ name: e.name, image_url: e.image_url });
          break;
        case 3:
          sponsor.push({ name: e.name, image_url: e.image_url, email: e.email, website: e.website, description: e.description });
          break;
      }
    });
    setBanner(banner);
    setSponsor(sponsor);
    setInfluencer(influencer);
    setCompetitionDetail(array);
  };

  const warningAlert = (message) => {
    setalert(
      <ReactBSAlert
        warning
        style={{ display: 'block', marginTop: '-100px' }}
        title="Cảnh báo"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="warning"
        confirmBtnText="Ok"
        btnSize=""
      >
        {message}
      </ReactBSAlert>
    );
  };

  const handleRemoveClub = (id) => {
    console.log(id);
    setalert(
      <ReactBSAlert
        info
        style={{ display: 'block', marginTop: '-100px' }}
        title="Cảnh báo"
        onConfirm={() => removeClubToCompetition(id)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="warning"
        cancelBtnBsStyle="default"
        confirmBtnText="Có"
        cancelBtnText="Không"
        showCancel={true}
        btnSize=""
      >
        Bạn có chắc sẽ loại bỏ câu lạc bộ này khỏi cuộc thi không
      </ReactBSAlert>
    );
  };

  const handleRemoveCompetition = (id) => {
    setalert(
      <ReactBSAlert
        info
        style={{ display: 'block', marginTop: '-100px' }}
        title="Bạn có chắc hủy cuộc thi hoặc sự kiện này không"
        onConfirm={() => cancelCompetition(id)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="warning"
        cancelBtnBsStyle="default"
        confirmBtnText="Có"
        cancelBtnText="Không"
        showCancel={true}
        btnSize=""
      ></ReactBSAlert>
    );
  };

  const successAlert = (message) => {
    setalert(
      <ReactBSAlert
        success
        style={{ display: 'block', marginTop: '-100px' }}
        title={message}
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        showCancel={false}
        confirmBtnBsStyle="warning"
        confirmBtnText="Ok"
        btnSize=""
      ></ReactBSAlert>
    );
  };

  useEffect(() => {
    if (localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      if (competitionDetail === null) {
        loadDataCompetitionDetail(accessToken, props.match.params.id);
      }
    }
  }, []);

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
      {alert}
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
        {competitionDetail ? (
          <>
            <CompetitionDetailHeader data={competitionDetail} sponsor={sponsor} handleRemoveCompetition={handleRemoveCompetition} />
            <CompetitionDetailBody
              data={competitionDetail}
              banner={banner}
              influencer={influencer}
              updatePendingCompetition={updatePendingCompetition}
              competitionStatus={competitionStatus}
              addClubToCompetition={addClubToCompetition}
              competitionClubs={competitionClubs}
              handleRemoveClub={handleRemoveClub}
            />
          </>
        ) : (
          <Row>
            <img alt="..." src={require('assets/img/icons/Curve-Loading.gif').default} style={{ margin: 'auto' }} />
          </Row>
        )}
        <AdminFooter />
      </div>
      {sidenavOpen ? <div className="backdrop d-xl-none" onClick={toggleSidenav} /> : null}
    </>
  );
}
