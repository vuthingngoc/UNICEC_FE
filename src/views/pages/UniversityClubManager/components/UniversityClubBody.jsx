import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Media,
  Row,
  Table,
  UncontrolledDropdown,
} from 'reactstrap';

export default function UniversityClubBody(props) {
  const [search, setSearch] = useState('');

  return (
    <>
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12" md="12">
            <Card style={{ paddingBottom: '10px' }}>
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Câu lạc bộ</h3>
                  </div>
                  <Col className="text-right">
                    <Button color="success">Thêm mới</Button>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-auto text-right">
                    <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1">
                      <label>Tìm kiếm:</label>
                      <Input
                        className="form-control-md"
                        style={{ borderRadius: '20px' }}
                        placeholder="Tìm theo tên"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col lg="4" md="12">
                    <Button outline color="info">
                      Tìm kiếm
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              {props.clubs ? (
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">STT</th>
                      <th scope="col">Tên câu lạc bộ</th>
                      <th scope="col" className="text-center">
                        Thành viên
                      </th>
                      <th scope="col" className="text-center">
                        Hành động
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.clubs.map((e, value) => {
                      return (
                        <tr key={`member-${value}`}>
                          <td> {value + 1} </td>
                          <th scope="row">
                            <Media className="align-items-center">
                              <a className="avatar rounded-circle mr-3" href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img alt="..." src={e.image ?? require('assets/img/icons/avatar/No_image_available.png').default} />
                              </a>
                              <Media>
                                <span className="name mb-0 text-sm">{e.name}</span>
                              </Media>
                            </Media>
                          </th>
                          <td className="text-center"> {e.total_member} </td>
                          <td className="text-center">
                            <UncontrolledDropdown>
                              <DropdownToggle className="text-default font-weight-bold" size="md" tag="a">
                                <i className="fa fa-caret-down fa-2x" />
                              </DropdownToggle>
                              <DropdownMenu right>
                                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                  <span>Xem chi tiết</span>
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                  <span>Chỉnh sửa</span>
                                </DropdownItem>
                                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                  <span>Xóa</span>
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
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
