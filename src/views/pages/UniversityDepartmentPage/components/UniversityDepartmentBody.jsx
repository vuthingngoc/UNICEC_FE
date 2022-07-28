import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  UncontrolledDropdown,
} from 'reactstrap';

export default function UniversityDepartmentBody(props) {
  const [search, setSearch] = useState('');
  const [pageNavigate, setPageNavigate] = useState([]);

  const renderPage = () => {
    const pageRender = [];
    for (let i = 1; i <= props.data.total_pages; i++) {
      pageRender.push(
        <PaginationItem className={i === props.data.current_page ? 'active' : ''} key={`page-${i}`}>
          <PaginationLink
            href="#page"
            onClick={(e) => {
              e.preventDefault();
              props.loadListDepartment(search, i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    setPageNavigate(pageRender);
  };

  React.useEffect(() => {
    if (props.data && props.data.items) {
      renderPage();
    }
  }, [props]);

  return (
    <>
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12" md="12">
            <Card style={{ paddingBottom: '10px' }}>
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Ngành học</h3>
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
                    <Button outline color="info" onClick={() => props.loadListDepartment(search, 1)}>
                      Tìm kiếm
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {props.data ? (
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã</th>
                        <th scope="col">Tên ngành học</th>
                        <th scope="col" className="text-center">
                          Chuyên ngành
                        </th>
                        <th scope="col" className="text-center">
                          Hành động
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.data.items ? (
                        props.data.items.map((e, value) => {
                          return (
                            <tr key={`department-${value}`}>
                              <td> {(props.data.current_page - 1) * 10 + value + 1} </td>
                              <td className="text-uppercase"> {e.department_code}</td>
                              <th> {e.name}</th>
                              <td className="text-center"> {e.major_code} </td>
                              <td className="text-center">
                                <UncontrolledDropdown>
                                  <DropdownToggle className="text-default font-weight-bold" size="md" tag="a">
                                    <i className="fa fa-caret-down fa-2x" />
                                  </DropdownToggle>
                                  <DropdownMenu right>
                                    <DropdownItem
                                      href="#pablo"
                                      onClick={(ele) => {
                                        ele.preventDefault();
                                        props.loadDepartmentDetail(e.id);
                                      }}
                                    >
                                      <span>Xem chi tiết</span>
                                    </DropdownItem>
                                    <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                      <span>Xóa</span>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="5">
                            <Row>
                              <Col className="text-center" md="12">
                                <h2 className="display-4 mb-0">Danh sách trống</h2>
                                <img
                                  alt="..."
                                  src={require('assets/img/icons/empty.jpg').default}
                                  style={{ width: '30%', margin: 'auto', maxHeight: '450px' }}
                                />
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      )}
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
              </CardBody>
              {props.data && props.data.items ? (
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                      <PaginationItem className={props.data.has_previous === false ? 'disabled' : ''}>
                        <PaginationLink
                          href="#previous"
                          onClick={(e) => {
                            e.preventDefault();
                            props.loadListDepartment(search, props.data.current_page - 1);
                          }}
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      {pageNavigate.length > 0 ? pageNavigate : <></>}
                      <PaginationItem className={props.data.has_next === false ? 'disabled' : ''}>
                        <PaginationLink
                          href="#next"
                          onClick={(e) => {
                            e.preventDefault();
                            props.loadListDepartment(search, props.data.current_page + 1);
                          }}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              ) : (
                <></>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
