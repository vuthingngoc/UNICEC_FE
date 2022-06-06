import React from 'react';
import moment from 'moment';
import 'moment/locale/vi';

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

const competitionHeader = {
  id: '1',
  title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
  banner: 'assets/img/theme/img-1-1000x600.jpg',
  type: 'Tài năng',
  startTime: '20/6/2022',
  club_name: 'FU Guitar Club',
  club_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
  create_time: '2022-05-23',
  location: 'Đại học FPT',
  address: 'Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh',
  marjors: ['Kỹ Thuật', 'Ngôn ngữ'],
  sponsor: [
    {
      name: 'HUTECH',
      logo: 'https://logovina.com/wp-content/uploads/2020/06/logo-hutech.jpg',
      contract: 'https://www.facebook.com/hutechuniversity',
    },
    {
      name: 'FPT University',
      logo: 'https://pbs.twimg.com/profile_images/1230021618698600448/fJ0IeKqc_400x400.jpg',
      contract: 'https://hcmuni.fpt.edu.vn/',
    },
  ],
  fee: '10000',
};

export default function CompetitionDetailHeader() {
  const convertDateFormat = (date) => {
    const arr = date.split('/');
    return `${arr[0]} - ${arr[1]} - ${arr[2]}`;
  };

  const covertDatePassed = (date) => {
    const ago = moment(date, 'YYYY-MM-DD').fromNow();
    return ago;
  };

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
            {competitionHeader ? (
              <Row className="align-items-center" style={{ marginLeft: '50px' }}>
                <Col md="8" lg="8" sm="8" className="text-left">
                  <Card style={{ padding: '25px 25px' }}>
                    <Row>
                      <Col md="9" lg="9" sm="9">
                        <h2 className="display-4" style={{ color: 'red', fontWeight: 'bold' }}>
                          @ {competitionHeader.type}
                        </h2>
                      </Col>
                      <Col md="3" lg="3" sm="3" className="text-right">
                        <Badge
                          className="font-weight-bold"
                          color={competitionHeader.fee ? 'info' : 'success'}
                          pill
                          style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}
                        >
                          {competitionHeader.fee ? 'Có phí tham gia' : 'Không phí tham gia'}
                        </Badge>
                      </Col>
                    </Row>
                    <Row className="text-left" style={{ marginBottom: '20px' }}>
                      <h3 className="display-3">{competitionHeader.title}</h3>
                    </Row>
                    <Row className="text-left" style={{ marginBottom: '10px' }}>
                      <Col className="col-auto">
                        <i className="ni ni-calendar-grid-58 text-danger" style={{ marginTop: '3px' }} />
                      </Col>
                      <Col className="col-auto">
                        <Row>
                          <span style={{ fontWeight: '900', fontFamily: 'sans-serif' }}>{convertDateFormat(competitionHeader.startTime)}</span>

                          <Badge className="font-weight-bold" color="info" pill style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}>
                            Sắp diễn ra
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
                          <span style={{ fontWeight: '900', fontFamily: 'revert' }}>{competitionHeader.location}</span>
                        </Row>
                        <Row>
                          <span style={{ fontWeight: '900', fontFamily: 'revert', color: 'grey' }}>{competitionHeader.address}</span>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="text-left" md="4" lg="4" sm="4">
                  <Card>
                    <CardHeader>
                      <Row className="align-items-center">
                        <Col className="col-auto mb-0" style={{ padding: '0px 0px 0px 0px' }}>
                          <span className="avatar avatar-lg rounded-circle">
                            <img
                              alt="..."
                              src={
                                competitionHeader.club_avatar
                                  ? competitionHeader.club_avatar
                                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                              }
                            />
                          </span>
                        </Col>
                        <Col className="col-auto mb-0">
                          <h3 className="font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                            {competitionHeader.club_name}
                          </h3>
                          <span className="text-lg" style={{ fontWeight: 'lighter', color: 'darkgrey' }}>
                            {covertDatePassed(competitionHeader.create_time)}
                          </span>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <CardTitle className="font-weight-bold text-default text-lg">Chuyên ngành:</CardTitle>
                      <Row className="align-items-center" style={{ marginBlock: '20px' }}>
                        {competitionHeader.marjors !== 'ALL' ? (
                          competitionHeader.marjors.map((ele, value) => {
                            return (
                              <Col className="col-auto" key={`major-${value}`}>
                                <Badge className="font-weight-bold" color="warning" pill style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}>
                                  {ele}
                                </Badge>
                              </Col>
                            );
                          })
                        ) : (
                          <Col className="text-center col-auto">
                            <Badge className="font-weight-bold" color="success" pill style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}>
                              ALL
                            </Badge>
                          </Col>
                        )}
                      </Row>
                      {competitionHeader.sponsor.length > 0 ? (
                        <>
                          <CardTitle className="font-weight-bold text-default text-lg">Tài trợ bởi</CardTitle>
                          <Row className="align-items-center mb-0">
                            {competitionHeader.sponsor.map((ele, value) => {
                              return (
                                <Col className="col-auto" key={`sponsor-${value}`}>
                                  <a href={ele.contract} target="_blank" id="tooltip374813717" rel="noreferrer">
                                    <img
                                      alt="..."
                                      className="img-fluid rounded-circle md"
                                      src={ele.logo}
                                      style={{ backgroundColor: 'white', width: '80px', height: '80px' }}
                                    />
                                  </a>
                                  <UncontrolledTooltip delay={0} target="tooltip374813717">
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
