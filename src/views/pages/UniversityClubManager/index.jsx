import UniversityHeader from 'components/Headers/UnicersityHeader';
import { statusCode } from 'constants/status.constants';
import React, { useEffect, useState } from 'react';
import { getDataByPath } from 'services/data.service';
import UniversityClubBody from './components/UniversityClubBody';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import { warningAlertConstants } from 'constants/alert.constants';
import { Modal } from 'reactstrap';
import UniversityClubDetail from './components/UniversityClubDetail';

export default function UniversityClubManager() {
  const [clubs, setClubs] = useState(null);
  const [clubDetail, setClubDetail] = useState(null);
  const [clubModal, setClubModal] = useState(false);
  const [alert, setalert] = useState(false);

  async function loadListClub(search, currentPage) {
    if (currentPage && localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const universityID = localStorage.getItem('universityID');
      const path = 'api/v1/clubs/search';
      const data = `universityId=${universityID}&name=${search}&status=true&currentPage=${currentPage}&pageSize=10`;
      const res = await getDataByPath(path, accessToken, data);
      console.log(res);
      if (res && res.status === statusCode.success) {
        setClubs(res.data);
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  async function loadClubDetail(id) {
    if (id && localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const path = `api/v1/clubs/${id}`;
      const res = await getDataByPath(path, accessToken, '');
      console.log(res);
      if (res && res.status === statusCode.success) {
        setClubDetail(res.data);
        setClubModal(true);
      }
    }
  }

  const warningAlert = (message) => {
    setalert(
      <ReactBSAlert
        warning
        style={{ display: 'block', marginTop: '-100px' }}
        title={message}
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="warning"
        confirmBtnText="Ok"
        btnSize=""
      ></ReactBSAlert>
    );
  };

  // const successAlert = (message) => {
  //   setalert(
  //     <ReactBSAlert
  //       success
  //       style={{ display: 'block', marginTop: '-100px' }}
  //       title={message}
  //       onConfirm={() => setalert(null)}
  //       onCancel={() => setalert(null)}
  //       confirmBtnBsStyle="warning"
  //       confirmBtnText="Ok"
  //       btnSize=""
  //     >
  //     </ReactBSAlert>
  //   );
  // };

  useEffect(() => {
    if (clubs === null) {
      loadListClub('', 1);
    }
  }, []);

  return (
    <>
      {alert}
      <UniversityHeader />
      <UniversityClubBody clubs={clubs} loadListClub={loadListClub} loadClubDetail={loadClubDetail} />
      <Modal className="modal-dialog-centered" size="lg" isOpen={clubModal} toggle={() => setClubModal(false)}>
        <div className="modal-body p-0">
          <UniversityClubDetail data={clubDetail} setClubModal={setClubModal} />
        </div>
      </Modal>
    </>
  );
}
