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
  Row,
  Table,
  UncontrolledDropdown,
} from 'reactstrap';

export default function UniversityCompetitionBody(props) {
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
                    <h3 className="mb-0">Duyệt cuộc thi và sự kiện</h3>
                  </div>
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
              {props.competitions ? (
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">STT</th>
                      <th scope="col">Tên</th>
                      <th scope="col" className="text-center">
                        Thể loại
                      </th>
                      <th scope="col" className="text-center">
                        Tài trợ
                      </th>
                      <th scope="col" className="text-center">
                        Quy mô
                      </th>
                      <th scope="col" className="text-center">
                        Hành động
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.competitions.map((e, value) => {
                      return (
                        <tr key={`member-${value}`}>
                          <td> {value + 1} </td>
                          <th scope="row">
                            <span className="name mb-0 text-sm">{e.name}</span>
                          </th>
                          <td className="text-center"> {e.competition_type_name} </td>
                          <td className={`text-center font-weight-bold ${e.is_sponsor ? 'text-success' : 'text-info'}`}>
                            {e.is_sponsor ? 'Có tài trợ' : 'Không tài trợ'}{' '}
                          </td>
                          <td className="text-center"> {e.scope === 0 ? 'Liên trường' : e.scope === 1 ? 'Trong trường' : 'Trong câu lạc bộ'} </td>
                          <td className="text-center">
                            <UncontrolledDropdown>
                              <DropdownToggle className="text-default font-weight-bold" size="md" tag="a">
                                <i className="fa fa-caret-down fa-2x" />
                              </DropdownToggle>
                              <DropdownMenu right>
                                <DropdownItem href="#detail" onClick={(e) => e.preventDefault()}>
                                  <span>Xem chi tiết</span>
                                </DropdownItem>
                                <DropdownItem
                                  href="#approve"
                                  onClick={(ele) => {
                                    props.updateCompetitionsStatus(e.id, 1);
                                    ele.preventDefault();
                                  }}
                                >
                                  <span>Chấp thuận</span>
                                </DropdownItem>
                                <DropdownItem
                                  href="#deny"
                                  onClick={(ele) => {
                                    props.updateCompetitionsStatus(e.id, 0);
                                    ele.preventDefault();
                                  }}
                                >
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
