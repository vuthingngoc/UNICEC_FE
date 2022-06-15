import React, { useEffect, useState } from 'react';
import { Button, Card, CardHeader, CardBody, ListGroupItem, ListGroup, Progress, Table, Container, Row, Col } from 'reactstrap';

// core components
import CardsHeader from 'components/Headers/CardsHeader.js';
import { getDataByPath } from 'services/data.service';
import { useHistory } from 'react-router';

function Dashboard() {
  const [clubHeadmasters, setClubHeadmasters] = useState(null);
  const [clubEventCompetitions, setClubEventCompetitions] = useState(null);
  const [clubActivity, setClubActivity] = useState(null);
  const [clubMembers, setClubMembers] = useState(null);
  const history = useHistory();

  async function loadDataHeadmasters(id, accessToken) {
    if (id !== 0) {
      const path = 'api/v1/members/leaders/club';
      const res = await getDataByPath(`${path}/${id}`, accessToken, '');
      if (res !== null && res.status === 200) {
        setClubHeadmasters(res.data);
      }
    }
  }

  async function loadDataMembers(clubId, accessToken) {
    if (clubId !== 0) {
      const path = 'api/v1/members/club';
      const res = await getDataByPath(`${path}/${clubId}`, accessToken, '');
      if (res !== null && res.status === 200) {
        setClubMembers(res.data);
      }
    }
  }

  async function loadDataEventCompetition(club_id, accessToken) {
    if (club_id !== null) {
      const path = 'api/v1/competitions/top3';
      const data = `clubId=${club_id}`;
      const res = await getDataByPath(`${path}`, accessToken, data);
      console.log(res);
      if (res !== null && res.status === 200) {
        setClubEventCompetitions(res.data);
      } else if (res !== null && res.status === 204) {
        setClubEventCompetitions([]);
      }
    }
  }

  async function loadClubActivity(clubId, accessToken) {
    if (clubId !== 0) {
      const path = 'api/v1/competition-activities/top4-process';
      const data = `clubId=${clubId}`;
      const res = await getDataByPath(`${path}`, accessToken, data);
      if (res !== null && res.status === 200) {
        setClubActivity(res.data);
      }
    }
  }
  useEffect(() => {
    if (localStorage && localStorage.getItem('accessToken')) {
      const club_id = localStorage.getItem('clubID');
      const accessToken = localStorage.getItem('accessToken');
      if (clubHeadmasters === null) {
        loadDataHeadmasters(club_id, accessToken);
      }
      if (clubEventCompetitions === null) {
        loadDataEventCompetition(club_id, accessToken);
      }
      if (clubActivity === null) {
        loadClubActivity(club_id, accessToken);
      }
      if (clubMembers === null) {
        loadDataMembers(club_id, accessToken);
      }
    }
  }, [clubHeadmasters]);

  return (
    <>
      <CardsHeader name="Default" parentName="Dashboards" />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="4">
            <Card style={{ height: '90%', paddingBottom: '10px' }}>
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
                              <span className={`${ele.isOnline === true ? 'text-success' : 'text-danger'}`}>●</span>{' '}
                              <small>{ele.isOnline === true ? 'Online' : 'Offline'}</small>
                            </div>
                          </Row>
                        </ListGroupItem>
                      );
                    })
                  ) : (
                    <Row>
                      <img
                        alt="..."
                        src={require('assets/img/icons/Curve-Loading.gif').default}
                        style={{ margin: 'auto', weight: '200px', height: '200px' }}
                      />
                    </Row>
                  )}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card style={{ height: '90%', paddingBottom: '10px' }}>
              <CardHeader>
                <h5 className="h3 mb-0">Sự kiện và cuộc thi</h5>
              </CardHeader>
              <CardBody className="p-0">
                <ListGroup data-toggle="checklist" flush>
                  {clubEventCompetitions ? (
                    clubEventCompetitions.length > 0 ? (
                      clubEventCompetitions.map((e, value) => {
                        return (
                          <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4" key={`Event-${value}`}>
                            <div className={`${e.type === 'Sự kiện' ? 'checklist-item-success' : 'checklist-item-info'} checklist-item`}>
                              <div className="checklist-info">
                                <h5 className="checklist-title mb-0" style={{ fontWeight: '700' }}>
                                  {e.name}
                                </h5>
                                <Row>
                                  <Col className="col-auto">
                                    <small>Thể loại: {e.competition_type_name}</small>
                                  </Col>
                                  {e.is_sponsor === true ? (
                                    <Col className="col-auto">
                                      <small className="text-success font-weight-bold">Được tài trợ</small>
                                    </Col>
                                  ) : (
                                    <></>
                                  )}
                                </Row>
                              </div>
                              <div>
                                <Col className="col-auto">
                                  <Button
                                    color="primary"
                                    size="sm"
                                    type="button"
                                    onClick={() => {
                                      history.push(`/admin/cuoc-thi/chi-tiet/${e.competition_id}`);
                                    }}
                                  >
                                    Xem
                                  </Button>
                                </Col>
                              </div>
                            </div>
                          </ListGroupItem>
                        );
                      })
                    ) : (
                      <h2 style={{ margin: 'auto' }}>Danh sách trống</h2>
                    )
                  ) : (
                    <Row>
                      <img
                        alt="..."
                        src={require('assets/img/icons/Curve-Loading.gif').default}
                        style={{ margin: 'auto', weight: '200px', height: '200px' }}
                      />
                    </Row>
                  )}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card style={{ height: '90%', paddingBottom: '10px' }}>
              <CardHeader>
                <h5 className="h3 mb-0">Tiến độ hoạt động</h5>
              </CardHeader>
              <CardBody>
                <ListGroup className="list my--3" flush>
                  {clubActivity ? (
                    clubActivity.length > 0 ? (
                      clubActivity.map((e, value) => {
                        return (
                          <ListGroupItem className="px-0" key={`activity-${value}`}>
                            <Row className="align-items-center">
                              <div className="col">
                                <h5>{e.name}</h5>
                                <Progress
                                  className="progress-xs mb-0"
                                  color={`${e.process / e.require === 1 ? 'green' : e.process / e.require >= 0.5 ? 'blue' : 'orange'}`}
                                  max={e.num_of_member_join}
                                  value={e.num_member_done_task}
                                />
                              </div>
                            </Row>
                          </ListGroupItem>
                        );
                      })
                    ) : (
                      <h2 style={{ margin: 'auto' }}>Danh sách trống</h2>
                    )
                  ) : (
                    <Row>
                      <img
                        alt="..."
                        src={require('assets/img/icons/Curve-Loading.gif').default}
                        style={{ margin: 'auto', weight: '200px', height: '200px' }}
                      />
                    </Row>
                  )}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="12">
            <Card style={{ paddingBottom: '10px' }}>
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
              {clubMembers ? (
                <Table className="align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">STT</th>
                      <th scope="col">Họ và tên</th>
                      <th scope="col">Chức vụ</th>
                      <th scope="col">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clubMembers.items.map((e, value) => {
                      return (
                        <tr key={`member-${value}`}>
                          <td> {value + 1} </td>
                          <td> {e.name} </td>
                          <td> {e.club_role_name} </td>
                          <td> {e.isOnline === true ? 'Online' : 'Offline'} </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                <Row>
                  <img
                    alt="..."
                    src={require('assets/img/icons/Curve-Loading.gif').default}
                    style={{ margin: 'auto', weight: '200px', height: '200px' }}
                  />
                </Row>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
