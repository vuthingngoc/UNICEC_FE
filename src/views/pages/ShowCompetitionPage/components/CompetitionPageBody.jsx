import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/vi';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from 'reactstrap';
import { convertDateToShow } from 'services/formatData';

const CardHover = styled.div`
  :hover {
    transform: scale(1.03);
    box-shadow: 0 4px 6px rgb(50 50 93 / 25%), 0 1px 3px rgb(0 0 0 / 8%);
  }
`;

export default function CompetitionPageBody(data) {
  const covertDatePassed = (date) => {
    const ago = moment(date, 'YYYY-MM-DDThh:mm:ss').fromNow();
    return ago;
  };

  React.useEffect(() => {
    console.log(data.competitionList1);
  }, []);

  return (
    <Container className="mt--6 bg-white" fluid>
      <Card className="pl-4">
        <h2 className="display-2 text-warning text-center mb-0" style={{ fontFamily: 'sans-serif', paddingTop: '20px' }}>
          Cuộc Thi Của Câu Lạc Bộ
        </h2>
        <Row className="align-items-center mb-0" style={{ width: '50%', margin: 'auto' }}>
          <Col className="mb-0">
            <hr style={{ borderTop: '1px solid black', width: '80%' }} />
          </Col>
          <Col className="mb-0" md="8" sm="8">
            <hr style={{ borderTop: '1px solid black', width: '80%' }} />
          </Col>
          <Col className="mb-0">
            <hr style={{ borderTop: '1px solid black', width: '80%' }} />
          </Col>
        </Row>
        {/*status 1*/}
        <Row>
          <Col>
            <h2 className="mb-0 display-4" style={{ fontFamily: 'sans-serif' }}>
              Mở đăng ký
            </h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <span style={{ fontFamily: 'sans-serif' }}>Danh sách các cuộc thi đang trong thời gian đăng ký</span>
          </Col>
        </Row>
        <Row className="mb-5">
          {data.competitionList1 && data.competitionList1.length > 0 ? (
            data.competitionList1.map((e, value) => {
              return (
                <Col xl="3" md="3" sm="3" key={`ShowCompetition-${value}`}>
                  <CardHover className="card" style={{ height: '95%' }}>
                    <CardHeader style={{ fontFamily: 'inherit' }}>
                      <Row className="align-items-center mb-0">
                        <Col className="col-auto mb-0" style={{ padding: '0px 0px 0px 0px' }}>
                          <span className="avatar avatar-sm rounded-circle">
                            <img
                              alt="..."
                              src={
                                e.clubs_in_competition[0].image
                                  ? e.clubs_in_competition[0].image
                                  : require('assets/img/icons/avatar/No_image_available.png').default
                              }
                            />
                          </span>
                        </Col>
                        <div className="col mb-0">
                          <h6 className="text-sm font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                            {e.clubs_in_competition[0].name} ·{' '}
                            <span className="text-sm" style={{ fontWeight: 'lighter', color: 'darkgrey' }}>
                              {covertDatePassed(e.create_time)}
                            </span>
                          </h6>
                        </div>
                        <Col className="text-right col-auto mb-0">
                          <UncontrolledDropdown>
                            <DropdownToggle className="text-default font-weight-bold" size="sm" tag="a">
                              <i className="fas fa-ellipsis-h" />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Chỉnh sửa</span>
                              </DropdownItem>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Xóa</span>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </CardHeader>
                    <a href={`/admin/cuoc-thi/chi-tiet/${e.competition_id}`}>
                      <CardImg
                        alt="..."
                        src={
                          e.competition_entities.length > 0
                            ? e.competition_entities[0].image_url
                            : 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'
                        }
                      />
                      <CardBody>
                        <Row>
                          <Col className="text-left" xl="6" md="6" xs="6">
                            <span style={{ fontFamily: 'cursive', color: 'lightsalmon' }}>@ {e.competition_type_name}</span>
                          </Col>
                          <Col className="text-right" xl="6" md="6" xs="6">
                            <label
                              className="text-neutral mb-0 font-weight-bold text-sm"
                              style={{ backgroundColor: 'red', borderRadius: '5px', padding: '2px 5px', fontFamily: 'cursive' }}
                            >
                              {convertDateToShow(e.start_time)}
                            </label>
                          </Col>
                        </Row>

                        <CardTitle className="h4 mb-2">{e.name}</CardTitle>
                        <Row>
                          <Col className="col-auto">
                            <Badge
                              className="font-weight-bold"
                              color={e.scope === 0 ? 'info' : e.scope === 1 ? 'warning' : 'success'}
                              pill
                              style={{ fontFamily: 'sans-serif' }}
                            >
                              {e.scope === 0 ? 'Liên Trường' : e.scope === 1 ? 'Trong Trường' : 'Trong Câu Lạc Bộ'}
                            </Badge>
                          </Col>
                          {e.is_sponsor === true ? (
                            <Col className="col-auto" key={`major-${value}`}>
                              <Badge className="font-weight-bold" color="success" pill style={{ fontFamily: 'sans-serif' }}>
                                Được tài trợ
                              </Badge>
                            </Col>
                          ) : (
                            <></>
                          )}
                        </Row>
                      </CardBody>
                    </a>
                  </CardHover>
                </Col>
              );
            })
          ) : data.competitionList1 && data.competitionList1.length === 0 ? (
            <h2 className="display-3" style={{ margin: 'auto', marginBottom: '100px', marginTop: '100px' }}>
              Danh sách trống
            </h2>
          ) : (
            <Row>
              <img
                alt="..."
                src={require('assets/img/icons/Curve-Loading.gif').default}
                style={{ margin: 'auto', weight: '200px', height: '200px' }}
              />
            </Row>
          )}
        </Row>
        {/*status 2*/}
        <Row>
          <Col>
            <h2 className="mb-0 display-4" style={{ fontFamily: 'sans-serif' }}>
              Đóng đăng ký
            </h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <span style={{ fontFamily: 'sans-serif' }}>Danh sách các cuộc thi đã đóng đăng ký và sắp diễn ra</span>
          </Col>
        </Row>
        <Row className="mb-5">
          {data.competitionList2 && data.competitionList2.length > 0 ? (
            data.competitionList2.map((e, value) => {
              return (
                <Col xl="3" md="3" sm="3" key={`ShowCompetition-${value}`}>
                  <CardHover className="card" style={{ height: '95%' }}>
                    <CardHeader style={{ fontFamily: 'inherit' }}>
                      <Row className="align-items-center mb-0">
                        <Col className="col-auto mb-0" style={{ padding: '0px 0px 0px 0px' }}>
                          <span className="avatar avatar-sm rounded-circle">
                            <img
                              alt="..."
                              src={
                                e.clubs_in_competition[0].image
                                  ? e.clubs_in_competition[0].image
                                  : require('assets/img/icons/avatar/No_image_available.png').default
                              }
                            />
                          </span>
                        </Col>
                        <div className="col mb-0">
                          <h6 className="text-sm font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                            {e.clubs_in_competition[0].name} ·{' '}
                            <span className="text-sm" style={{ fontWeight: 'lighter', color: 'darkgrey' }}>
                              {covertDatePassed(e.create_time)}
                            </span>
                          </h6>
                        </div>
                        <Col className="text-right col-auto mb-0">
                          <UncontrolledDropdown>
                            <DropdownToggle className="text-default font-weight-bold" size="sm" tag="a">
                              <i className="fas fa-ellipsis-h" />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Chỉnh sửa</span>
                              </DropdownItem>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Xóa</span>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </CardHeader>
                    <a href={`/admin/cuoc-thi/chi-tiet/${e.competition_id}`}>
                      <CardImg
                        alt="..."
                        src={
                          e.competition_entities.length > 0
                            ? e.competition_entities[0].image_url
                            : 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'
                        }
                      />
                      <CardBody>
                        <Row>
                          <Col className="text-left" xl="6" md="6" xs="6">
                            <span style={{ fontFamily: 'cursive', color: 'lightsalmon' }}>@ {e.competition_type_name}</span>
                          </Col>
                          <Col className="text-right" xl="6" md="6" xs="6">
                            <label
                              className="text-neutral mb-0 font-weight-bold text-sm"
                              style={{ backgroundColor: 'red', borderRadius: '5px', padding: '2px 5px', fontFamily: 'cursive' }}
                            >
                              {convertDateToShow(e.start_time)}
                            </label>
                          </Col>
                        </Row>

                        <CardTitle className="h4 mb-2">{e.name}</CardTitle>
                        <Row>
                          <Col className="col-auto">
                            <Badge
                              className="font-weight-bold"
                              color={e.scope === 0 ? 'info' : e.scope === 1 ? 'warning' : 'success'}
                              pill
                              style={{ fontFamily: 'sans-serif' }}
                            >
                              {e.scope === 0 ? 'Liên Trường' : e.scope === 1 ? 'Trong Trường' : 'Trong Câu Lạc Bộ'}
                            </Badge>
                          </Col>
                          {e.is_sponsor === true ? (
                            <Col className="col-auto" key={`major-${value}`}>
                              <Badge className="font-weight-bold" color="success" pill style={{ fontFamily: 'sans-serif' }}>
                                Được tài trợ
                              </Badge>
                            </Col>
                          ) : (
                            <></>
                          )}
                        </Row>
                      </CardBody>
                    </a>
                  </CardHover>
                </Col>
              );
            })
          ) : data.competitionList2 && data.competitionList2.length === 0 ? (
            <h2 className="display-3" style={{ margin: 'auto', marginBottom: '100px', marginTop: '100px' }}>
              Danh sách trống
            </h2>
          ) : (
            <Row>
              <img
                alt="..."
                src={require('assets/img/icons/Curve-Loading.gif').default}
                style={{ margin: 'auto', weight: '200px', height: '200px' }}
              />
            </Row>
          )}
        </Row>
        {/*status 3*/}
        <Row>
          <Col>
            <h2 className="mb-0 display-4" style={{ fontFamily: 'sans-serif' }}>
              Đang diễn ra
            </h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <span style={{ fontFamily: 'sans-serif' }}>Danh sách các cuộc thi đang diễn ra</span>
          </Col>
        </Row>
        <Row className="mb-5">
          {data.competitionList3 && data.competitionList3.length > 0 ? (
            data.competitionList3.map((e, value) => {
              return (
                <Col xl="3" md="3" sm="3" key={`ShowCompetition-${value}`}>
                  <CardHover className="card" style={{ height: '95%' }}>
                    <CardHeader style={{ fontFamily: 'inherit' }}>
                      <Row className="align-items-center mb-0">
                        <Col className="col-auto mb-0" style={{ padding: '0px 0px 0px 0px' }}>
                          <span className="avatar avatar-sm rounded-circle">
                            <img
                              alt="..."
                              src={
                                e.clubs_in_competition[0].image
                                  ? e.clubs_in_competition[0].image
                                  : require('assets/img/icons/avatar/No_image_available.png').default
                              }
                            />
                          </span>
                        </Col>
                        <div className="col mb-0">
                          <h6 className="text-sm font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                            {e.clubs_in_competition[0].name} ·{' '}
                            <span className="text-sm" style={{ fontWeight: 'lighter', color: 'darkgrey' }}>
                              {covertDatePassed(e.create_time)}
                            </span>
                          </h6>
                        </div>
                        <Col className="text-right col-auto mb-0">
                          <UncontrolledDropdown>
                            <DropdownToggle className="text-default font-weight-bold" size="sm" tag="a">
                              <i className="fas fa-ellipsis-h" />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Chỉnh sửa</span>
                              </DropdownItem>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Xóa</span>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </CardHeader>
                    <a href={`/admin/cuoc-thi/chi-tiet/${e.competition_id}`}>
                      <CardImg
                        alt="..."
                        src={
                          e.competition_entities.length > 0
                            ? e.competition_entities[0].image_url
                            : 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'
                        }
                      />
                      <CardBody>
                        <Row>
                          <Col className="text-left" xl="6" md="6" xs="6">
                            <span style={{ fontFamily: 'cursive', color: 'lightsalmon' }}>@ {e.competition_type_name}</span>
                          </Col>
                          <Col className="text-right" xl="6" md="6" xs="6">
                            <label
                              className="text-neutral mb-0 font-weight-bold text-sm"
                              style={{ backgroundColor: 'red', borderRadius: '5px', padding: '2px 5px', fontFamily: 'cursive' }}
                            >
                              {convertDateToShow(e.start_time)}
                            </label>
                          </Col>
                        </Row>

                        <CardTitle className="h4 mb-2">{e.name}</CardTitle>
                        <Row>
                          <Col className="col-auto">
                            <Badge
                              className="font-weight-bold"
                              color={e.scope === 0 ? 'info' : e.scope === 1 ? 'warning' : 'success'}
                              pill
                              style={{ fontFamily: 'sans-serif' }}
                            >
                              {e.scope === 0 ? 'Liên Trường' : e.scope === 1 ? 'Trong Trường' : 'Trong Câu Lạc Bộ'}
                            </Badge>
                          </Col>
                          {e.is_sponsor === true ? (
                            <Col className="col-auto" key={`major-${value}`}>
                              <Badge className="font-weight-bold" color="success" pill style={{ fontFamily: 'sans-serif' }}>
                                Được tài trợ
                              </Badge>
                            </Col>
                          ) : (
                            <></>
                          )}
                        </Row>
                      </CardBody>
                    </a>
                  </CardHover>
                </Col>
              );
            })
          ) : data.competitionList3 && data.competitionList3.length === 0 ? (
            <h2 className="display-3" style={{ margin: 'auto', marginBottom: '100px', marginTop: '100px' }}>
              Danh sách trống
            </h2>
          ) : (
            <Row>
              <img
                alt="..."
                src={require('assets/img/icons/Curve-Loading.gif').default}
                style={{ margin: 'auto', weight: '200px', height: '200px' }}
              />
            </Row>
          )}
        </Row>
        {/*status 4*/}
        <Row>
          <Col>
            <h2 className="mb-0 display-4" style={{ fontFamily: 'sans-serif' }}>
              Đã kết thúc
            </h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <span style={{ fontFamily: 'sans-serif' }}>Danh sách các cuộc thi đã diễn ra và kết thúc</span>
          </Col>
        </Row>
        <Row className="mb-5">
          {data.competitionList4 && data.competitionList4.length > 0 ? (
            data.competitionList4.map((e, value) => {
              return (
                <Col xl="3" md="3" sm="3" key={`ShowCompetition-${value}`}>
                  <CardHover className="card" style={{ height: '95%' }}>
                    <CardHeader style={{ fontFamily: 'inherit' }}>
                      <Row className="align-items-center mb-0">
                        <Col className="col-auto mb-0" style={{ padding: '0px 0px 0px 0px' }}>
                          <span className="avatar avatar-sm rounded-circle">
                            <img
                              alt="..."
                              src={
                                e.clubs_in_competition[0].image
                                  ? e.clubs_in_competition[0].image
                                  : require('assets/img/icons/avatar/No_image_available.png').default
                              }
                            />
                          </span>
                        </Col>
                        <div className="col mb-0">
                          <h6 className="text-sm font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                            {e.clubs_in_competition[0].name} ·{' '}
                            <span className="text-sm" style={{ fontWeight: 'lighter', color: 'darkgrey' }}>
                              {covertDatePassed(e.create_time)}
                            </span>
                          </h6>
                        </div>
                        <Col className="text-right col-auto mb-0">
                          <UncontrolledDropdown>
                            <DropdownToggle className="text-default font-weight-bold" size="sm" tag="a">
                              <i className="fas fa-ellipsis-h" />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Chỉnh sửa</span>
                              </DropdownItem>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Xóa</span>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </CardHeader>
                    <a href={`/admin/cuoc-thi/chi-tiet/${e.competition_id}`}>
                      <CardImg
                        alt="..."
                        src={
                          e.competition_entities.length > 0
                            ? e.competition_entities[0].image_url
                            : 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'
                        }
                      />
                      <CardBody>
                        <Row>
                          <Col className="text-left" xl="6" md="6" xs="6">
                            <span style={{ fontFamily: 'cursive', color: 'lightsalmon' }}>@ {e.competition_type_name}</span>
                          </Col>
                          <Col className="text-right" xl="6" md="6" xs="6">
                            <label
                              className="text-neutral mb-0 font-weight-bold text-sm"
                              style={{ backgroundColor: 'red', borderRadius: '5px', padding: '2px 5px', fontFamily: 'cursive' }}
                            >
                              {convertDateToShow(e.start_time)}
                            </label>
                          </Col>
                        </Row>

                        <CardTitle className="h4 mb-2">{e.name}</CardTitle>
                        <Row>
                          <Col className="col-auto">
                            <Badge
                              className="font-weight-bold"
                              color={e.scope === 0 ? 'info' : e.scope === 1 ? 'warning' : 'success'}
                              pill
                              style={{ fontFamily: 'sans-serif' }}
                            >
                              {e.scope === 0 ? 'Liên Trường' : e.scope === 1 ? 'Trong Trường' : 'Trong Câu Lạc Bộ'}
                            </Badge>
                          </Col>
                          {e.is_sponsor === true ? (
                            <Col className="col-auto" key={`major-${value}`}>
                              <Badge className="font-weight-bold" color="success" pill style={{ fontFamily: 'sans-serif' }}>
                                Được tài trợ
                              </Badge>
                            </Col>
                          ) : (
                            <></>
                          )}
                        </Row>
                      </CardBody>
                    </a>
                  </CardHover>
                </Col>
              );
            })
          ) : data.competitionList4 && data.competitionList4.length === 0 ? (
            <h2 className="display-3" style={{ margin: 'auto', marginBottom: '100px', marginTop: '100px' }}>
              Danh sách trống
            </h2>
          ) : (
            <Row>
              <img
                alt="..."
                src={require('assets/img/icons/Curve-Loading.gif').default}
                style={{ margin: 'auto', weight: '200px', height: '200px' }}
              />
            </Row>
          )}
        </Row>
        {/*status 5*/}
        <Row>
          <Col>
            <h2 className="mb-0 display-4" style={{ fontFamily: 'sans-serif' }}>
              Đã hủy
            </h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <span style={{ fontFamily: 'sans-serif' }}>Danh sách các cuộc thi đã bị hủy bỏ</span>
          </Col>
        </Row>
        <Row className="mb-5">
          {data.competitionList5 && data.competitionList5.length > 0 ? (
            data.competitionList5.map((e, value) => {
              return (
                <Col xl="3" md="3" sm="3" key={`ShowCompetition-${value}`}>
                  <CardHover className="card" style={{ height: '95%' }}>
                    <CardHeader style={{ fontFamily: 'inherit' }}>
                      <Row className="align-items-center mb-0">
                        <Col className="col-auto mb-0" style={{ padding: '0px 0px 0px 0px' }}>
                          <span className="avatar avatar-sm rounded-circle">
                            <img
                              alt="..."
                              src={
                                e.clubs_in_competition[0].image
                                  ? e.clubs_in_competition[0].image
                                  : require('assets/img/icons/avatar/No_image_available.png').default
                              }
                            />
                          </span>
                        </Col>
                        <div className="col mb-0">
                          <h6 className="text-sm font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                            {e.clubs_in_competition[0].name} ·{' '}
                            <span className="text-sm" style={{ fontWeight: 'lighter', color: 'darkgrey' }}>
                              {covertDatePassed(e.create_time)}
                            </span>
                          </h6>
                        </div>
                        <Col className="text-right col-auto mb-0">
                          <UncontrolledDropdown>
                            <DropdownToggle className="text-default font-weight-bold" size="sm" tag="a">
                              <i className="fas fa-ellipsis-h" />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Chỉnh sửa</span>
                              </DropdownItem>
                              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                <span>Xóa</span>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </CardHeader>
                    <a href={`/admin/cuoc-thi/chi-tiet/${e.competition_id}`}>
                      <CardImg
                        alt="..."
                        src={
                          e.competition_entities.length > 0
                            ? e.competition_entities[0].image_url
                            : 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'
                        }
                      />
                      <CardBody>
                        <Row>
                          <Col className="text-left" xl="6" md="6" xs="6">
                            <span style={{ fontFamily: 'cursive', color: 'lightsalmon' }}>@ {e.competition_type_name}</span>
                          </Col>
                          <Col className="text-right" xl="6" md="6" xs="6">
                            <label
                              className="text-neutral mb-0 font-weight-bold text-sm"
                              style={{ backgroundColor: 'red', borderRadius: '5px', padding: '2px 5px', fontFamily: 'cursive' }}
                            >
                              {convertDateToShow(e.start_time)}
                            </label>
                          </Col>
                        </Row>

                        <CardTitle className="h4 mb-2">{e.name}</CardTitle>
                        <Row>
                          <Col className="col-auto">
                            <Badge
                              className="font-weight-bold"
                              color={e.scope === 0 ? 'info' : e.scope === 1 ? 'warning' : 'success'}
                              pill
                              style={{ fontFamily: 'sans-serif' }}
                            >
                              {e.scope === 0 ? 'Liên Trường' : e.scope === 1 ? 'Trong Trường' : 'Trong Câu Lạc Bộ'}
                            </Badge>
                          </Col>
                          {e.is_sponsor === true ? (
                            <Col className="col-auto" key={`major-${value}`}>
                              <Badge className="font-weight-bold" color="success" pill style={{ fontFamily: 'sans-serif' }}>
                                Được tài trợ
                              </Badge>
                            </Col>
                          ) : (
                            <></>
                          )}
                        </Row>
                      </CardBody>
                    </a>
                  </CardHover>
                </Col>
              );
            })
          ) : data.competitionList5 && data.competitionList5.length === 0 ? (
            <h2 className="display-3" style={{ margin: 'auto', marginBottom: '100px', marginTop: '100px' }}>
              Danh sách trống
            </h2>
          ) : (
            <Row>
              <img
                alt="..."
                src={require('assets/img/icons/Curve-Loading.gif').default}
                style={{ margin: 'auto', weight: '200px', height: '200px' }}
              />
            </Row>
          )}
        </Row>
      </Card>
    </Container>
  );
}
