import React, { useEffect, useState } from 'react';
import { getDataByPath } from 'services/data.service.js';
import CompetitionHeader from './components/CompetitionHeader.js';
import CompetitionPageBody from './components/CompetitionPageBody.jsx';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import { Row } from 'reactstrap';

function CompetitionPage() {
  const [alert, setalert] = React.useState(false);
  const [competitionList, setCompetitionList] = useState(null);

  async function loadDataListCompetition(accessToken, clubId) {
    if (accessToken) {
      const path = 'api/v1/competitions';
      const data = `clubId=${clubId}&event=false`;
      const res = await getDataByPath(`${path}`, accessToken, data);
      console.log(res);
      if (res !== null && res !== undefined && res.status === 200) {
        setCompetitionList(res.data.items);
      } else {
        warningAlert('Kết nối tới máy chủ quá hạn');
      }
    }
  }

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

  useEffect(() => {
    if (localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const clubId = localStorage.getItem('clubID');
      if (competitionList === null) {
        loadDataListCompetition(accessToken, clubId);
      }
    }
  }, []);

  return (
    <>
      {alert}
      {competitionList ? (
        <>
          <CompetitionHeader />
          <CompetitionPageBody data={competitionList} />
        </>
      ) : (
        <Row>
          <img alt="..." src={require('assets/img/icons/Curve-Loading.gif').default} style={{ margin: 'auto' }} />
        </Row>
      )}
    </>
  );
}

export default CompetitionPage;
