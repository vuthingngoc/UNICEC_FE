import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { convertDateToShow } from 'services/formatData';

export default function ClubMemberDetail(props) {
  return (
    <>
      <Card className="bg-secondary border-0 mb-0" lg="9">
        <CardHeader className="bg-transparent pb-5">
          <div className="text-center">
            <h3>Thông tin chi tiết:</h3>
          </div>
        </CardHeader>
        {props.data ? (
          <CardBody className="px-lg-5 py-lg-5">
            <Row className="mb-2">
              <Col className="text-center" lg="4" md="12" style={{ borderRightStyle: 'solid', borderRightWidth: '2px', width: '95%' }}>
                <img
                  className="mb-2"
                  alt="..."
                  src={props.data.avatar ? props.data.avatar : require('assets/img/icons/avatar/No_image_available.png').default}
                  style={{ width: '85%' }}
                />
              </Col>
              <Col className="text-left ml-3" lg="6" md="12">
                <h3 className="mb-1">Tên: {props.data.name}</h3>
                <h3 className="mb-1">
                  Chức vụ: <span className="text-gray">{props.data.club_role_name}</span>
                </h3>
                <h3>
                  Email: <span>{props.data.email}</span>
                </h3>
                <h3>Số điện thoại: {props.data.phone_number ? props.data.phone_number : 'không có'}</h3>
                <h3>Ngày tham gia câu lạc bộ: {convertDateToShow(props.data.join_date)}</h3>
                <Row>
                  <div className="col">
                    <h3>
                      Trạng thái:
                      <span className={`${props.data.is_online === true ? 'text-success' : 'text-danger'} ml-2`}>●</span>{' '}
                      <span className="font-weight-bold">{props.data.is_online === true ? 'Online' : 'Offline'}</span>
                    </h3>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col className="text-center" lg="6" md="12">
                <Button color="warning" outline>
                  <i className="fas fa-trash mr-2" />
                  Xóa khỏi câu lạc bộ
                </Button>
              </Col>
              <Col className="text-center" lg="6" md="12">
                <Button
                  color="warning"
                  onClick={() => {
                    props.setMemberModal(false);
                  }}
                >
                  Đóng
                </Button>
              </Col>
            </Row>
          </CardBody>
        ) : (
          <Row>
            <img alt="..." src={require('assets/img/icons/Curve-Loading.gif').default} style={{ margin: 'auto', width: '30%' }} />
          </Row>
        )}
      </Card>
    </>
  );
}
