import React, { useEffect, useState } from 'react';
import { Button, Card, CardHeader, CardBody, ListGroupItem, ListGroup, Progress, Table, Container, Row, Col } from 'reactstrap';

// core components
import CardsHeader from 'components/Headers/CardsHeader.js';
import { getDataByPath } from 'services/data.service';

const university_id = 1;
const club_id = 1;

const clubMember = [
  {
    id: '1',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '1',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '1',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '1',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '1',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '1',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '1',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
];

function Dashboard() {
  const [clubHeadmasters, setClubHeadmasters] = useState(null);
  const [clubEventCompetitions, setClubEventCompetitions] = useState(null);
  const [clubActivity, setClubActivity] = useState(null);

  async function loadDataHeadmasters(id) {
    if (id !== null) {
      const path = 'api/v1/member/leaders/club/';
      const res = await getDataByPath(`${path}${id}`, '', '');
      if (res !== null && res.status === 200) {
        setClubHeadmasters(res.data);
      }
    }
  }

  async function loadDataEventCompetition(id) {
    if (id !== null) {
      const path = 'api/v1/competition/top3';
      const data = 'event=true';
      const res = await getDataByPath(`${path}${id}`, '', data);
      if (res !== null && res.status === 200) {
        setClubEventCompetitions(res.data);
      }
    }
  }

  async function loadClubActivity(universityId, clubId) {
    if (universityId !== null && clubId !== null) {
      const path = 'api/v1/club-activity/top4';
      const data = `universityId=${universityId}&clubId=${clubId}`;
      const res = await getDataByPath(`${path}`, '', data);
      console.log(res.data);
      if (res !== null && res.status === 200) {
        setClubActivity(res.data);
      }
    }
  }

  useEffect(() => {
    if (clubHeadmasters === null) {
      loadDataHeadmasters(university_id);
    }
    if (clubEventCompetitions === null) {
      loadDataEventCompetition('');
    }
    if (clubActivity === null) {
      loadClubActivity(university_id, club_id);
    }
  });

  return (
    <>
      <CardsHeader name="Default" parentName="Dashboards" />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="4">
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Ban Quản Lý</h5>
              </CardHeader>
              <CardBody>
                <ListGroup className="list my--3" flush>
                  {clubHeadmasters ? (
                    clubHeadmasters.map((ele, value) => {
                      return (
                        <ListGroupItem className="px-0" key={`Headmasters-${value}`}>
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <a className="avatar rounded-circle" href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img alt="..." src={ele.avatar} />
                              </a>
                            </Col>
                            <div className="col ml--2">
                              <h4 className="mb-0">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  {ele.name}
                                </a>
                                <span className="text-muted">{`   (${ele.club_role_name})`}</span>
                              </h4>
                              <span className={`${ele.status === true ? 'text-success' : 'text-danger'}`}>●</span>{' '}
                              <small>{ele.status === true ? 'Online' : 'Offline'}</small>
                            </div>
                          </Row>
                        </ListGroupItem>
                      );
                    })
                  ) : (
                    <img
                      alt="loading"
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                      style={{ display: 'block', margin: 'auto', width: '50%', height: '50%' }}
                    />
                  )}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Sự kiện và cuộc thi</h5>
              </CardHeader>
              <CardBody className="p-0">
                <ListGroup data-toggle="checklist" flush>
                  {clubEventCompetitions ? (
                    clubEventCompetitions.map((e, value) => {
                      return (
                        <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4" key={`Event-${value}`}>
                          <div className={`${e.type === 'Sự kiện' ? 'checklist-item-success' : 'checklist-item-info'} checklist-item`}>
                            <div className="checklist-info">
                              <h5 className="checklist-title mb-0">{e.name}</h5>
                              <small>{e.time}</small>
                            </div>
                            <div>
                              <Col className="col-auto">
                                <Button color="primary" size="sm" type="button">
                                  Xem
                                </Button>
                              </Col>
                            </div>
                          </div>
                        </ListGroupItem>
                      );
                    })
                  ) : (
                    <img
                      alt="loading"
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                      style={{ display: 'block', margin: 'auto', width: '50%', height: '50%' }}
                    />
                  )}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Tiến độ hoạt động</h5>
              </CardHeader>
              <CardBody>
                <ListGroup className="list my--3" flush>
                  {clubActivity ? (
                    clubActivity.map((e, value) => {
                      return (
                        <ListGroupItem className="px-0" key={`activity-${value}`}>
                          <Row className="align-items-center">
                            <div className="col">
                              <h5>{e.name}</h5>
                              <Progress
                                className="progress-xs mb-0"
                                color={`${e.process / e.require === 1 ? 'green' : e.process / e.require >= 0.5 ? 'blue' : 'orange'}`}
                                max={e.require}
                                value={e.process}
                              />
                            </div>
                          </Row>
                        </ListGroupItem>
                      );
                    })
                  ) : (
                    <img
                      alt="loading"
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                      style={{ display: 'block', margin: 'auto', width: '50%', height: '50%' }}
                    />
                  )}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Thành viên</h3>
                  </div>
                  <div className="col text-right">
                    <Button color="primary" href="/clubMember" size="sm">
                      Xem tất cả
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Chức vụ</th>
                    <th scope="col">Giới tính</th>
                    <th scope="col">Ngày tham gia</th>
                    {/* <th scope="col">Hành động</th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" />
                      46,53%
                    </td>
                  </tr> */}
                  {clubMember ? (
                    clubMember.map((e, value) => {
                      return (
                        <tr key={`${value}`}>
                          <td> {e.id} </td>
                          <td> {e.name} </td>
                          <td> {e.role} </td>
                          <td> {e.gender} </td>
                          <td> {e.joinDate} </td>
                          {/* <td className="table-actions">
                            <a className="table-action" href="#pablo" id="tooltip564981685" onClick={(e) => e.preventDefault()}>
                              <i className="fas fa-user-edit" />
                            </a>
                            <UncontrolledTooltip delay={0} target="tooltip564981685">
                              Sửa thông tin
                            </UncontrolledTooltip>
                            <a className="table-action table-action-delete" href="#pablo" id="tooltip601065234" onClick={(e) => e.preventDefault()}>
                              <i className="fas fa-trash" />
                            </a>
                            <UncontrolledTooltip delay={0} target="tooltip601065234">
                              Vô hiệu hóa tài khoản
                            </UncontrolledTooltip>
                          </td> */}
                        </tr>
                      );
                    })
                  ) : (
                    <h2>Chưa có dữ liệu</h2>
                  )}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
