import React, { useEffect, useState } from 'react';
import { getDataByPath } from 'services/data.service.js';
import CompetitionHeader from './components/CompetitionHeader.js';
import CompetitionPageBody from './components/CompetitionPageBody.jsx';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import { Row } from 'reactstrap';

function CompetitionPage() {
  const [alert, setalert] = React.useState(false);
  const [competitionList1, setCompetitionList1] = useState(null);
  const [competitionList2, setCompetitionList2] = useState(null);
  const [competitionList3, setCompetitionList3] = useState(null);
  const [competitionList4, setCompetitionList4] = useState(null);
  const [competitionList5, setCompetitionList5] = useState(null);
  const [competitionList6, setCompetitionList6] = useState(null);
  const [clubData, setClubData] = useState(null);

  async function loadDataListCompetition(accessToken, clubId, status) {
    if (accessToken) {
      const path = 'api/v1/competitions';
      const data = `clubId=${clubId}&event=false&status=${status}`;
      const res = await getDataByPath(`${path}`, accessToken, data);
      if (res !== null && res !== undefined && res.status === 200) {
        let newData = [];
        if (res.data.items && res.data.items.length > 0) {
          newData = res.data.items;
        }
        switch (status) {
          case 1:
            setCompetitionList1(newData);
            break;
          case 2:
            setCompetitionList2(newData);
            break;
          case 3:
            setCompetitionList3(newData);
            break;
          case 4:
            setCompetitionList4(newData);
            break;
          case 5:
            setCompetitionList5(newData);
            break;
          case 6:
            setCompetitionList6(newData);
            break;
        }
      } else {
        warningAlert(warningAlert.timeout);
      }
    }
  }

  async function loadDataClubs(accessToken, studentID) {
    if (accessToken !== null) {
      const path = `api/v1/clubs/user/${studentID}`;
      const res = await getDataByPath(`${path}`, accessToken, '');
      if (res !== null && res.status === 200) {
        setClubData(res.data[0]);
      } else {
        warningAlert(warningAlert.timeout);
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
      const studentID = localStorage.getItem('studentID');
      if (competitionList1 === null) {
        loadDataListCompetition(accessToken, clubId, 1);
        loadDataListCompetition(accessToken, clubId, 2);
        loadDataListCompetition(accessToken, clubId, 3);
        loadDataListCompetition(accessToken, clubId, 4);
        loadDataListCompetition(accessToken, clubId, 5);
        loadDataListCompetition(accessToken, clubId, 6);
      }
      if (clubData === null) {
        loadDataClubs(accessToken, studentID);
      }
    }
  }, []);

  return (
    <>
      {alert}
      {clubData && competitionList1 ? (
        <>
          <CompetitionHeader
            clubData={clubData}
            competitionList1={competitionList1}
            competitionList2={competitionList2}
            competitionList3={competitionList3}
            competitionList4={competitionList4}
          />
          <CompetitionPageBody
            competitionList1={competitionList1}
            competitionList2={competitionList2}
            competitionList3={competitionList3}
            competitionList4={competitionList4}
            competitionList5={competitionList5}
            competitionList6={competitionList6}
          />
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
