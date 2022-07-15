import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  UncontrolledTooltip,
  Table,
  Container,
  Col,
  Row,
  Input,
  CardBody,
  Button,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { convertDateToShow } from 'services/formatData';
import List from 'list.js';

export default function ClubMember(props) {
  const [pageNavigate, setPageNavigate] = useState([]);
  const [search, setSearch] = useState('');
  const firstListRef = React.useRef(null);
  React.useEffect(() => {
    new List(firstListRef.current, {
      valueNames: ['studentid', 'member', 'role', 'createtime'],
      listClass: 'list',
    });
  }, []);

  const renderPage = () => {
    const pageRender = [];
    for (let i = 1; i <= props.data.total_pages; i++) {
      pageRender.push(
        <PaginationItem className={i === props.data.current_page ? 'active' : ''} key={`page-${i}`}>
          <PaginationLink
            href="#page"
            onClick={(e) => {
              e.preventDefault();
              props.loadDataMember(i, '');
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
      <Container className="mt--6 bg-neutral" fluid>
        <Card>
          <CardHeader>
            <h3 className="mb-0">Danh sách thành viên</h3>
            <p className="text-sm mb-0">Danh sách các thành viên ở trong câu lạc bộ của bạn.</p>
          </CardHeader>
          <CardBody>
            <Row className="mb-2">
              <Col className="col-auto">
                <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1">
                  <label>Tìm kiếm:</label>
                  <Input className="form-control-md" placeholder="Tìm theo tên và mã" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </Col>
              <Col lg="4" md="12">
                <Button outline color="info" onClick={() => props.loadDataMember(1, search)}>
                  Tìm kiếm
                </Button>
              </Col>
            </Row>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Mã sinh viên</th>
                  <th scope="col">Họ và tên</th>
                  <th scope="col">Chức vụ</th>
                  <th className="text-center" scope="col">
                    Ngày tham gia
                  </th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {props && props.data && props.data.items ? (
                  props.data.items.map((e, value) => {
                    return (
                      <tr key={`${value}`}>
                        <td>
                          <span>{e.student_code}</span>
                        </td>
                        <td>
                          <span>{e.name}</span>
                        </td>
                        <td>
                          <span>{e.club_role_name}</span>
                        </td>
                        <td className="text-center">
                          <span>{convertDateToShow(e.start_time)}</span>
                        </td>
                        <td className="table-actions">
                          <a
                            className="table-action"
                            href="/"
                            id={`tooltip-fix${value}`}
                            onClick={(event) => {
                              event.preventDefault();
                              props.viewMemberDetail(e.id);
                            }}
                          >
                            <i className="fas fa-user" />
                          </a>
                          <UncontrolledTooltip delay={0} target={`tooltip-fix${value}`}>
                            Xem thông tin
                          </UncontrolledTooltip>
                          <a
                            className="table-action table-action-delete"
                            href="#pablo"
                            id={`tooltip-disable${value}`}
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-trash" />
                          </a>
                          <UncontrolledTooltip delay={0} target={`tooltip-disable${value}`}>
                            Xóa khỏi câu lạc bộ
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    );
                  })
                ) : props && props.data && props.data.length === 0 ? (
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
                ) : (
                  <tr>
                    <td colSpan="5">
                      <Row>
                        <img alt="..." src={require('assets/img/icons/Curve-Loading.gif').default} style={{ margin: 'auto', width: '50%' }} />
                      </Row>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
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
                        props.loadDataMember(props.data.current_page - 1, '');
                      }}
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  {pageNavigate.length > 0 ? pageNavigate : <></>}
                  <PaginationItem>
                    <PaginationLink
                      className={props.data.has_next === false ? 'disable' : ''}
                      href="#next"
                      onClick={(e) => {
                        e.preventDefault();
                        props.loadDataMember(props.data.current_page + 1, '');
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
      </Container>
    </>
  );
}
