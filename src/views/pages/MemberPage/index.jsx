import React, { useEffect, useState } from 'react';
import { getDataByPath } from 'services/data.service.js';
import ClubMember from './components/ClubMember.jsx';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import SimpleHeader from 'components/Headers/SimpleHeader';
import { Modal } from 'reactstrap';
import ClubMemberDetail from './components/ClubMemberDetail.jsx';
import { warningAlertConstants } from 'constants/alert.constants.js';

function MemberPage() {
  const [alert, setAlert] = useState(null);
  const [members, setMembers] = useState(null);
  const [memberModal, setMemberModal] = useState(false);
  const [memberDetail, setMemberDetail] = useState(null);

  const warningAlert = (message) => {
    setAlert(
      <ReactBSAlert
        danger
        style={{ display: 'block', marginTop: '-100px' }}
        title="Good job!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="info"
        btnSize=""
      >
        {message}
      </ReactBSAlert>
    );
  };
  async function loadDataMember(page, search) {
    if (page && localStorage && localStorage.getItem('accessToken')) {
      setMembers(null);
      const accessToken = localStorage.getItem('accessToken');
      const clubId = localStorage.getItem('clubID');
      const path = `api/v1/members/search`;
      const data = `status=1&clubId=${clubId}&pageSize=10&currentPage=${page}&searchString=${search}`;
      const res = await getDataByPath(`${path}`, accessToken, data);
      console.log(res);
      if (res && res.status === 200) {
        setMembers(res.data);
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  async function loadDataMemberDetail(accessToken, id) {
    if (accessToken) {
      const path = `api/v1/members/${id}`;
      const res = await getDataByPath(`${path}`, accessToken, '');
      console.log(res);
      if (res !== null && res !== undefined && res.status === 200) {
        setMemberDetail(res.data);
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  const viewMemberDetail = (id) => {
    setMemberDetail(null);
    setMemberModal(true);
    if (id) {
      if (localStorage && localStorage.getItem('accessToken')) {
        const accessToken = localStorage.getItem('accessToken');
        loadDataMemberDetail(accessToken, id);
      }
    }
  };

  useEffect(() => {
    if (localStorage && localStorage.getItem('accessToken')) {
      if (members === null) {
        loadDataMember(1, '');
      }
    }
  }, []);

  return (
    <>
      {alert}
      <SimpleHeader name="Th??nh vi??n" parentName="C??u l???c b???" linkParent="/" />
      <ClubMember data={members} viewMemberDetail={viewMemberDetail} loadDataMember={loadDataMember} />
      <Modal className="modal-dialog-centered" size="lg" isOpen={memberModal} toggle={() => setMemberModal(false)}>
        <div className="modal-body p-0">
          <ClubMemberDetail data={memberDetail} setMemberModal={setMemberModal} />
        </div>
      </Modal>
    </>
  );
}

export default MemberPage;
