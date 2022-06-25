import React from 'react';
// react plugin that prints a given react component
import ReactToPrint from 'react-to-print';
// react component for creating dynamic tables
//import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Search } from 'react-bootstrap-table2-toolkit';
//import ToolkitProvider from 'react-bootstrap-table2-toolkit';
// react component used to create sweet alerts
import ReactBSAlert from 'react-bootstrap-sweetalert';
// reactstrap components
import { Card, CardHeader, UncontrolledTooltip, Table, Container, Col, Button, Row, ButtonGroup } from 'reactstrap';
// core components
//import SimpleHeader from 'components/Headers/SimpleHeader.js';

//import { dataTable } from 'variables/general';

const clubMember = [
  {
    id: '1',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '2',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '3',
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
    id: '4',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '5',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '6',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '7',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '8',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '9',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
  {
    id: '10',
    name: 'Huy',
    role: 'Trưởng CLB',
    gender: 'Nam',
    joinDate: '20-01-2000',
  },
];
const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  // eslint-disable-next-line
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        Show{' '}
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={(e) => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }{' '}
        entries.
      </label>
    </div>
  ),
});

const { SearchBar } = Search;

function ClubMember() {
  const [alert, setAlert] = React.useState(null);
  const componentRef = React.useRef(null);
  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
  const copyToClipboardAsTable = (el) => {
    var body = document.body,
      range,
      sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand('copy');
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand('Copy');
    }
    setAlert(
      <ReactBSAlert
        success
        style={{ display: 'block', marginTop: '-100px' }}
        title="Good job!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="info"
        btnSize=""
      >
        Copied to clipboard!
      </ReactBSAlert>
    );
  };
  return (
    <>
      {alert}
      {/* <SimpleHeader name="React Tables" parentName="Tables" /> */}
      <Container fluid>
        <Card>
          <Row className="ml-2 mr-2">
            <Col xl="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col className="mt-3 mt-md-0 text-md-right" lg="12" xs="0">
                      <h2 className>Danh sách các thành viên</h2>
                      <Button className="btn-neutral" color="default" size="sm">
                        New
                      </Button>
                      <Button className="btn-neutral" color="default" size="sm">
                        Filters
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <Row>
                  <Col xs={12} sm={6}>
                    <ButtonGroup>
                      <Button
                        className="buttons-copy buttons-html5"
                        color="default"
                        size="sm"
                        id="copy-tooltip"
                        onClick={() => copyToClipboardAsTable(document.getElementById('react-bs-table'))}
                      >
                        <span>Sao chép bảng</span>
                      </Button>
                      <ReactToPrint
                        trigger={() => (
                          <Button color="default" size="sm" className="buttons-copy buttons-html5" id="print-tooltip">
                            In danh sách
                          </Button>
                        )}
                        content={() => componentRef.current}
                      />
                    </ButtonGroup>
                    <UncontrolledTooltip placement="top" target="print-tooltip">
                      In danh sách các thành viên trong câu lạc bộ.
                    </UncontrolledTooltip>
                    <UncontrolledTooltip placement="top" target="copy-tooltip">
                      Sao chép toàn bộ danh sách các thành viên trong câu lạc bộ.
                    </UncontrolledTooltip>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1 float-right">
                      <label>
                        Tìm kiếm:
                        <SearchBar className="form-control-sm" placeholder="Nhập tên thành viên" />
                      </label>
                    </div>
                  </Col>
                </Row>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Họ và tên</th>
                      <th scope="col">Chức vụ</th>
                      <th scope="col">Giới tính</th>
                      <th scope="col">Ngày tham gia</th>
                      <th scope="col">Hành động</th>
                    </tr>
                  </thead>
                  <tbody bootstrap4={true} pagination={pagination}>
                    {clubMember ? (
                      clubMember.map((e, value) => {
                        return (
                          <tr key={`${value}`}>
                            <td> {e.id} </td>
                            <td> {e.name} </td>
                            <td> {e.role} </td>
                            <td> {e.gender} </td>
                            <td> {e.joinDate} </td>
                            <td className="table-actions">
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
                            </td>
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
        </Card>
      </Container>
    </>
  );
}

export default ClubMember;
