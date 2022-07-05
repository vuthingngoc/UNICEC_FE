import React, { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/vi';
import no_image from 'assets/img/icons/avatar/No_image_available.png';

// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  UncontrolledTooltip,
  Badge,
} from 'reactstrap';
import { convertDateFormat } from 'services/formatData';

export default function CompetitionDetailHeader(data) {
  const covertDatePassed = (date) => {
    const ago = moment(date, 'YYYY-MM-DDThh:mm:ss').fromNow();
    return ago;
  };

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <div className="header header-dark bg-neutral pb-6 content__title content__title--calendar">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <Breadcrumb className="d-none d-md-inline-block ml-lg-4" listClassName="breadcrumb-links breadcrumb-dark">
                  <BreadcrumbItem>
                    <a className="text-default font-weight-bold" href="/admin/thong-tin-clb">
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a className="text-default font-weight-bold" href="/admin/cuoc-thi">
                      Cuộc thi
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active" style={{ color: 'grey' }}>
                    Chi tiết
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col className="mt-3 mt-md-0 text-md-right" lg="6" xs="5">
                <Button className="btn-success" color="success" size="sm">
                  Chỉnh sửa
                </Button>
                <Button className="btn-warning" color="warning" size="sm">
                  Xóa
                </Button>
              </Col>
            </Row>
            {data.data ? (
              <Row>
                <Col md="8" className="text-left">
                  <Card style={{ padding: '25px 25px', height: '100%' }}>
                    <Row>
                      <Col md="9" lg="9" sm="9">
                        <h2 className="display-4" style={{ color: 'red', fontWeight: 'bold' }}>
                          @ {data.data.competition_type_name}
                        </h2>
                      </Col>
                      <Col md="3" lg="3" sm="3" className="text-right">
                        <Badge
                          className="font-weight-bold"
                          color={data.data.fee !== 0 ? 'info' : 'success'}
                          pill
                          style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}
                        >
                          {data.data.fee !== 0 ? 'Có phí tham gia' : 'Không phí tham gia'}
                        </Badge>
                      </Col>
                    </Row>
                    <Row className="text-left" style={{ marginBottom: '20px' }}>
                      <h3 className="display-3">{data.data.name}</h3>
                    </Row>
                    <Row className="text-left" style={{ marginBottom: '10px' }}>
                      <Col className="col-auto">
                        <i className="ni ni-calendar-grid-58 text-danger" style={{ marginTop: '3px' }} />
                      </Col>
                      <Col className="col-auto">
                        <Row>
                          <span style={{ fontWeight: '900', fontFamily: 'sans-serif' }}>{convertDateFormat(data.data.start_time)}</span>

                          <Badge color="info" pill style={{ marginLeft: '10px', fontFamily: 'revert-layer', fontWeight: '800', paddingTop: '7px' }}>
                            {covertDatePassed(data.data.start_time)}
                          </Badge>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="text-left mb-0">
                      <Col className="col-auto">
                        <i className="ni ni-compass-04 text-danger" style={{ marginTop: '3px' }} />
                      </Col>
                      <Col>
                        <Row>
                          <span style={{ fontWeight: '900', fontFamily: 'revert' }}>{data.data.address_name}</span>
                        </Row>
                        <Row>
                          <span style={{ fontWeight: '900', fontFamily: 'revert', color: 'grey' }}>{data.data.address}</span>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="text-left" md="4">
                  <Card style={{ height: '100%' }}>
                    {data.data.clubs_in_competition && data.data.clubs_in_competition.length > 0 ? (
                      data.data.clubs_in_competition.map((e, value) => {
                        if (e.is_owner) {
                          return (
                            <CardHeader key={`club-${value}`}>
                              <Row className="align-items-center">
                                <Col className="col-auto mb-0" style={{ padding: '0px 0px 0px 0px' }}>
                                  <span className="avatar avatar-lg rounded-circle">
                                    <img alt="..." src={e.image ? e.image : no_image} />
                                  </span>
                                </Col>
                                <Col className="col-auto mb-0">
                                  <h3 className="font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                                    {e.name}
                                  </h3>
                                  <span className="text-lg" style={{ fontWeight: 'lighter', color: 'darkgrey' }}>
                                    {covertDatePassed(data.data.create_time)}
                                  </span>
                                </Col>
                              </Row>
                            </CardHeader>
                          );
                        }
                      })
                    ) : (
                      <></>
                    )}
                    <CardBody>
                      <CardTitle className="font-weight-bold text-default text-lg">Chuyên ngành:</CardTitle>
                      <Row className="align-items-center" style={{ marginBlock: '20px' }}>
                        {data.data.departments_in_competition.length > 0 ? (
                          data.data.departments_in_competition.map((ele, value) => {
                            return (
                              <Col className="col-auto" key={`major-${value}`}>
                                <Badge className="font-weight-bold" color="warning" pill style={{ fontFamily: 'sans-serif' }}>
                                  {ele.name}
                                </Badge>
                              </Col>
                            );
                          })
                        ) : (
                          <Col className="text-center col-auto">
                            <Badge className="font-weight-bold" color="success" pill style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}>
                              Tất cả
                            </Badge>
                          </Col>
                        )}
                      </Row>
                      {data.data.sponsors_in_competition && data.data.sponsors_in_competition.length > 0 ? (
                        <>
                          <CardTitle className="font-weight-bold text-default text-lg">Đơn vị tài trợ</CardTitle>
                          <Row className="align-items-center mb-0">
                            {data.data.sponsors_in_competition.map((ele, value) => {
                              return (
                                <Col className="col-auto" key={`sponsor-${value}`}>
                                  <a href="/" onClick={(e) => e.preventDefault()} id={`tooltip-sponsor${value}`} rel="noreferrer">
                                    <img
                                      alt="..."
                                      className="img-fluid rounded-circle md"
                                      src={ele.logo ? ele.logo : no_image}
                                      style={{ backgroundColor: 'white', width: '80px', height: '80px' }}
                                    />
                                  </a>
                                  <UncontrolledTooltip delay={0} target={`tooltip-sponsor${value}`}>
                                    {ele.name}
                                  </UncontrolledTooltip>
                                </Col>
                              );
                            })}
                          </Row>
                        </>
                      ) : (
                        <></>
                      )}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : (
              <></>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
