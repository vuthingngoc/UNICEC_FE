import React, { useEffect, useState } from 'react';
import { getDataByPath } from 'services/data.service';
import ActivityPageHeader from './components/AcitivityPageHeader';
import AcitivityPageBody from './components/ActivityPageBody';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import { Row } from 'reactstrap';

export default function ActivityPage() {
  const [competitionData, setCompetitionData] = useState(null);
  const [alert, setalert] = useState(null);

  async function loadDataCompetitions(accessToken, clubID) {
    if (accessToken) {
      let path = 'api/v1/competitions';
      let data = `clubId=${clubID}`;
      const res = await getDataByPath(`${path}`, accessToken, data);
      let items = [];
      if (res !== null && res !== undefined && res.status === 200) {
        //lọc competition đã bị hủy status === 5
        if (res.data.items) {
          items = res.data.items.filter((ele) => ele.status !== 5);
        }
      } else {
        warningAlert('Kết nối tới máy chủ quá hạn');
        return false;
      }
      path = 'api/v1/competition-activities';
      if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {
          const ele = items[i];
          data = `clubId=${clubID}&competitionId=${ele.competition_id}`;
          const res = await getDataByPath(`${path}`, accessToken, data);
          if (res && res.data.items && res.data.items.length > 0) {
            if (!items[i].finish_activity) {
              items[i] = { ...items[i], finish_activity: 0 };
            }
            if (res.data.items.process_activity_status === 1) {
              items[i].finish_activity = items[i].finish_activity + 1;
            }
            items[i] = { ...items[i], total_activity: res.data.items.length };
          } else if (res && res.data.length === 0) {
            items[i] = { ...items[i], finish_activity: 0 };
            items[i] = { ...items[i], total_activity: 0 };
          }
        }
      }
      setCompetitionData(items);
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
      if (competitionData === null) {
        loadDataCompetitions(accessToken, clubId);
      }
    }
  }, []);

  return (
    <>
      {alert}
      {competitionData ? (
        <>
          <ActivityPageHeader data={competitionData} />
          <AcitivityPageBody data={competitionData} />
        </>
      ) : (
        <Row>
          <img alt="..." src={require('assets/img/icons/Curve-Loading.gif').default} style={{ margin: 'auto' }} />
        </Row>
      )}
    </>
  );
}
