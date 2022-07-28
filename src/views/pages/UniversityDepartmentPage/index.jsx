import UniversityHeader from 'components/Headers/UnicersityHeader';
import { statusCode } from 'constants/status.constants';
import React, { useEffect, useState } from 'react';
import { getDataByPath } from 'services/data.service';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import { warningAlertConstants } from 'constants/alert.constants';
import { Modal } from 'reactstrap';
import UniversityDepartmentBody from './components/UniversityDepartmentBody';
import UniversityDepartmentDetail from './components/UniversityDepartmentDetail';

export default function UniversityDepartmentManager() {
  const [departments, setDepartments] = useState(null);
  const [alert, setalert] = useState(false);
  const [departmentModal, setDepartmentModal] = useState(false);
  const [departmentDetail, setDepartmentDetail] = useState(null);

  async function loadListDepartment(search, currentPage) {
    if (currentPage && localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const universityID = localStorage.getItem('universityID');
      const path = 'api/v1/departments/search';
      const data = `universityId=${universityID}&name=${search}&status=true&currentPage=${currentPage}&pageSize=10`;
      const res = await getDataByPath(path, accessToken, data);
      console.log(res);
      if (res && res.status === statusCode.success) {
        setDepartments(res.data);
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  async function loadDepartmentDetail(id) {
    if (id && localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const path = `api/v1/departments/${id}`;
      const res = await getDataByPath(path, accessToken, '');
      console.log(res);
      if (res && res.status === statusCode.success) {
        setDepartmentDetail(res.data);
        setDepartmentModal(true);
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
    if (departments === null) {
      loadListDepartment('', 1);
    }
  }, []);

  return (
    <>
      {alert}
      <UniversityHeader />
      <UniversityDepartmentBody data={departments} loadListDepartment={loadListDepartment} loadDepartmentDetail={loadDepartmentDetail} />
      <Modal className="modal-dialog-centered" size="md" isOpen={departmentModal} toggle={() => setDepartmentModal(false)}>
        <div className="modal-body p-0">
          <UniversityDepartmentDetail data={departmentDetail} setDepartmentModal={setDepartmentModal} />
        </div>
      </Modal>
    </>
  );
}
