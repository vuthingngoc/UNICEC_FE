/*eslint-disable*/
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Table,
  Container,
  Row,
  Col,
  Modal,
  UncontrolledTooltip,
  CardBody,
  Form,
} from 'reactstrap';
import React, { useState } from 'react';

const ListTeam = [
  {
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Team 1',
    numberOfParticipants: '4',
    status: 'Pending',
    createDate: '10-05-2022',
  },
  {
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Team 1',
    numberOfParticipants: '4',
    status: 'Pending',
    createDate: '10-05-2022',
  },
  {
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Team 1',
    numberOfParticipants: '4',
    status: 'Pending',
    createDate: '10-05-2022',
  },
  {
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Team 1',
    numberOfParticipants: '4',
    status: 'Pending',
    createDate: '10-05-2022',
  },
  {
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Team 1',
    numberOfParticipants: '4',
    status: 'Pending',
    createDate: '10-05-2022',
  },
];

const ParticipantsInTeam = [
  {
    parName: 'Ryan Tompson',
    parImg: 'assets/img/theme/team-1.jpg',
  },
  {
    parName: 'Romina Hadid',
    parImg: 'assets/img/theme/team-2.jpg',
  },
  {
    parName: 'Alexander Smith',
    parImg: 'assets/img/theme/team-3.jpg',
  },
  {
    parName: 'Jessica Doe',
    parImg: 'assets/img/theme/team-4.jpg',
  },
];

const clubMember = [
  {
    id: 'SE140164',
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Lê Thị Mộng Cầm',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: 'SE140164',
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Huy ',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: 'SE140164',
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Huy',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: 'SE140164',
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Huy',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: 'SE140164',
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    name: 'Huy',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
];

export default function ShowListTeamBody() {
  const [teamDetailModal, setTeamDetailModal] = useState(false);
  return (
    <>
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader className="border-0">
                <h3 className="mb-0">Danh sách các đội dự thi</h3>
              </CardHeader>

              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th className="sort" data-sort="name" scope="col">
                      Tên
                    </th>
                    <th className="sort" data-sort="budget" scope="col">
                      Số lượng
                    </th>
                    <th className="sort" data-sort="status" scope="col">
                      Trạng thái
                    </th>
                    <th scope="col">Thành viên</th>
                    <th className="sort" data-sort="completion" scope="col">
                      Ngày thành lập
                    </th>
                    <th scope="col">Hành động</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="list">
                  {ListTeam ? (
                    ListTeam.map((e, value) => {
                      return (
                        <tr>
                          <th scope="row">
                            <Media className="align-items-center">
                              <a className="avatar rounded-circle mr-3" href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img alt="..." src={e.img} />
                              </a>
                              <Media>
                                <span className="name mb-0 text-sm">{e.name}</span>
                              </Media>
                            </Media>
                          </th>
                          <td>{e.numberOfParticipants}</td>
                          <td>
                            <Badge color="" className="badge-dot mr-4">
                              <i className="bg-warning" />
                              <span className="status">{e.status}</span>
                            </Badge>
                          </td>
                          <td>
                            <div className="avatar-group">
                              {ParticipantsInTeam ? (
                                ParticipantsInTeam.map((parInTeam, value) => {
                                  return (
                                    <>
                                      <a
                                        className="avatar avatar-sm rounded-circle"
                                        href="#pablo"
                                        id="tooltip160923422"
                                        onClick={(e) => e.preventDefault()}
                                      >
                                        <img alt="..." src={parInTeam.parImg}></img>
                                      </a>
                                      <UncontrolledTooltip delay={0} target="tooltip160923422">
                                        {parInTeam.parName}
                                      </UncontrolledTooltip>
                                    </>
                                  );
                                })
                              ) : (
                                <h2></h2>
                              )}
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="completion mr-2"> {e.createDate} </span>
                              {/* <div>
                                <Progress max="100" value="60" color="warning" />
                              </div> */}
                            </div>
                          </td>
                          <td>
                            <a
                              className="table-action table-action-delete"
                              href="#pablo"
                              id="tooltip601065234"
                              onClick={() => {
                                setTeamDetailModal(true);
                              }}
                            >
                              <i className="fas fa-eye" />
                            </a>
                            <UncontrolledTooltip delay={0} target="tooltip601065234">
                              Xem chi tiết thành viên nhóm
                            </UncontrolledTooltip>
                            <a className="table-action table-action-delete" href="#pablo" id="deleteTeam" onClick={(e) => e.preventDefault()}>
                              <i className="fas fa-trash" />
                            </a>
                            <UncontrolledTooltip delay={0} target="deleteTeam">
                              Xóa tài khoản khỏi team
                            </UncontrolledTooltip>
                          </td>
                          {/* <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle className="btn-icon-only text-light" color="" role="button" size="sm">
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                  Action
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                  Another action
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                  Something else here
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td> */}
                        </tr>
                      );
                    })
                  ) : (
                    <h2> Chưa có dữ liệu </h2>
                  )}
                </tbody>
              </Table>

              <Modal className="modal-dialog-centered" size="lg" isOpen={teamDetailModal} toggle={() => setTeamDetailModal(false)}>
                <div className="modal-body p-0">
                  <Card className="bg-secondary border-0 mb-0" lg="9">
                    <CardHeader className="bg-transparent pb-5">
                      <div className="text-center">
                        <h3>Thông tin các thành viên trong nhóm:</h3>
                      </div>
                      <Form>
                        <Row style={{ marginLeft: '0px' }}>
                          <label className="form-control-label mr-3" htmlFor="max-participant">
                            Khóa nhóm <span className="text-warning">*</span>
                          </label>
                          <label style={{ marginLeft: '10px' }} className="custom-toggle mr-1">
                            <input type="checkbox" />
                            <span className="custom-toggle-slider rounded-circle" />
                          </label>{' '}
                          
                        </Row>
                        <Button class="btn btn-default">Thêm thành viên</Button>
                      </Form>
                    </CardHeader>
                    <CardBody>
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">MSSV</th>
                            <th scope="col">Ngày tham gia</th>
                            <th scope="col">Hành động</th>
                          </tr>
                        </thead>
                        <tbody bootstrap4={true}>
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
                                  <th scope="row">
                                    <Media className="align-items-center">
                                      <a className="avatar rounded-circle mr-3" href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img alt="..." src={e.img} />
                                      </a>
                                      <Media>
                                        <span className="name mb-0 text-sm">{e.name}</span>
                                      </Media>
                                    </Media>
                                  </th>
                                  <td> {e.id} </td>
                                  <td> {e.joinDate} </td>
                                  <td className="table-actions">
                                    <a
                                      className="table-action table-action-delete"
                                      href="#pablo"
                                      id="tooltip601065234"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <i className="fas fa-trash" />
                                    </a>
                                    <UncontrolledTooltip delay={0} target="tooltip601065234">
                                      Xóa tài khoản khỏi team
                                    </UncontrolledTooltip>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <h2>Chưa có dữ liệu</h2>
                          )}
                        </tbody>
                      </Table>
                      <Row>
                        <Col className="text-center" md="12">
                          <Button className="my-4" color="danger" type="button" onClick={() => setTeamDetailModal(false)}>
                            Đóng
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              </Modal>

              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                    <PaginationItem className="disabled">
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()} tabIndex="-1">
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}
