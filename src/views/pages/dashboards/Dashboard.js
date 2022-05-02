import React from 'react';
import { Button, Card, CardHeader, CardBody, ListGroupItem, ListGroup, Progress, Table, Container, Row, Col } from 'reactstrap';

// core components
import CardsHeader from 'components/Headers/CardsHeader.js';

const clubHeadmaster = [
  {
    id: '1',
    name: 'Huy',
    role: 'Chủ nhiệm',
    avartar:
      'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/275005018_3058643097691973_1254205249411315442_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=KvkJ0Cjv28AAX_GCdYK&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9cvhzxTdFOU6gnuCJPyuJ6TqhIczL8fUlFL9RblJj7aw&oe=6273E1F9',
    status: 'Online',
  },
  {
    id: '2',
    name: 'Khánh Đoan',
    role: 'Phó chủ nhiệm',
    avartar:
      'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/278009236_1595037880860181_5461611636136109196_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=_4WcgjzAo-UAX9ZZkTW&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT-A3_phDxOObN6r3wyObDbbL86VSkB_uxHb0OXA0IliAA&oe=62747836',
    status: 'Online',
  },

  {
    id: '3',
    name: 'Nguyễn Trọng Nghĩa',
    role: 'Phó chủ nhiệm',
    avartar:
      'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/279079864_3202727029977265_4694133876640596616_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=OqvKvVbVmMgAX_P4P0n&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT8cnN5mvXHtiQ-UBajNxeakKUrdBMCD6Ln4Bgho6o7ipg&oe=6273B924',
    status: 'Offline',
  },
];

const clubEventCompetition = [
  {
    id: '1',
    name: 'CODEKITTEN TPHCM',
    type: 'Cuộc thi',
    time: '3:30 PM 28/4/2022',
  },
  {
    id: '2',
    name: 'F-CODE TECH EXHIBITION',
    type: 'Sự kiện',
    time: 'ALL DAY 24/4/2022',
  },
  {
    id: '3',
    name: 'HỖ TRỢ TRUYỀN THÔNG K17',
    type: 'Sự kiện',
    time: 'ALL DAY 24/4/2022',
  },
];

const clubActivity = [
  {
    id: '1',
    name: 'Chuẩn bị ELYMPICS',
    require: '20',
    process: '20',
  },
  {
    id: '2',
    name: 'Duyệt đơn gia nhập',
    require: '100',
    process: '45',
  },
  {
    id: '3',
    name: 'Chuẩn bị F-CODE TECH EXHIBTION',
    require: '35',
    process: '18',
  },
  {
    id: '4',
    name: 'Chuẩn bị chủ đề SPRING WITH FRONT-END',
    require: '10',
    process: '8',
  },
];

function Dashboard() {
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
                  {clubHeadmaster ? (
                    clubHeadmaster.map((e, value) => {
                      return (
                        <ListGroupItem className="px-0" key={`Headmaster-${value}`}>
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <a className="avatar rounded-circle" href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img alt="..." src={e.avartar} />
                              </a>
                            </Col>
                            <div className="col ml--2">
                              <h4 className="mb-0">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  {e.name}
                                </a>
                                <span className="text-muted">{`   (${e.role})`}</span>
                              </h4>
                              <span className={`${e.status === 'Online' ? 'text-success' : 'text-danger'}`}>●</span> <small>{e.status}</small>
                            </div>
                          </Row>
                        </ListGroupItem>
                      );
                    })
                  ) : (
                    <h2>Please wait</h2>
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
                  {clubEventCompetition ? (
                    clubEventCompetition.map((e, value) => {
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
                    <h2>Please wait</h2>
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
                    <h2>Please Wait</h2>
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
                    <Button color="primary" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                      Xem tất cả
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" />
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" />
                      50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />
                      46,53%
                    </td>
                  </tr>
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
