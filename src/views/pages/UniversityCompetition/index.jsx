import UniversityHeader from 'components/Headers/UnicersityHeader';
import { statusCode } from 'constants/status.constants';
import React, { useState } from 'react';
import { updateDataByPath } from 'services/data.service';
import { getDataByPath } from 'services/data.service';
import UniversityCompetitionBody from './components/UniversityCompetitionBody';
import ReactBSAlert from 'react-bootstrap-sweetalert';

export default function UniversityCompetition() {
  const [competitions, setCompetitions] = useState(null);
  const [alert, setalert] = useState(null);

  async function loadListCompetitions(accessToken, currentPage) {
    if (accessToken) {
      const path = 'api/v1/competitions/university-admin';
      const data = `currentPage=${currentPage}&pageSize=10`;
      const res = await getDataByPath(path, accessToken, data);
      console.log(res);
      if (res && res.status === statusCode.success) {
        if (res.data && res.data.items && res.data.items.length > 0) {
          setCompetitions(res.data.items);
        } else {
          setCompetitions([]);
        }
      }
    }
  }

  async function updateCompetitionsStatus(competitionID, action) {
    console.log(competitionID);
    if (localStorage && localStorage.getItem('accessToken') && competitionID) {
      const accessToken = localStorage.getItem('accessToken');
      const path = 'api/v1/competitions/university-admin';
      let status = 6;
      if (parseInt(action) === 1) {
        status = 8;
      }
      const data = {
        id: competitionID,
        status: status,
      };
      console.log(data);
      const res = await updateDataByPath(path, accessToken, data);
      console.log(res);
      if (res && res.status === statusCode.success) {
        successAlert(action === 1 ? 'Chấp thuận thành công' : 'Từ chối thành công');
        loadListCompetitions(accessToken, 1);
      } else {
        warningAlert('Có lỗi xảy ra khi thực hiện hành động');
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

  const successAlert = (message) => {
    setalert(
      <ReactBSAlert
        success
        style={{ display: 'block', marginTop: '-100px' }}
        title="Thành công"
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

  React.useEffect(() => {
    if (localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      if (competitions === null) {
        loadListCompetitions(accessToken, 1);
      }
    }
  }, []);

  return (
    <>
      {alert}
      <UniversityHeader />
      <UniversityCompetitionBody competitions={competitions} updateCompetitionsStatus={updateCompetitionsStatus} />
    </>
  );
}
