import moment from 'moment';
import React from 'react';
import ReactQuill from 'react-quill';
import { Badge, Button, Card, CardBody, CardHeader, CardImg, CardTitle, Col, Container, Row, UncontrolledTooltip } from 'reactstrap';

export default function CompetitionDetailBody(data) {
  const convertDateFormat = (date) => {
    const arr = date.split('T');
    const day = arr[0].split('-');
    const time = arr[1].split(':');
    return `${day[2]}-${day[1]}-${day[0]} ${time[0]}:${time[1]}:${time[2]}`;
  };

  const covertDatePassed = (date) => {
    const ago = moment(date, 'YYYY-MM-DDThh:mm:ss').fromNow();
    return ago;
  };

  const convertFee = (fee) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(fee);
  };
  return (
    <>
      <Container className="mt--6" fluid>
        {data.data ? (
          <Row className="justify-content-center">
            <Col className="card-wrapper" lg="8">
              <Card>
                <CardHeader>
                  <Row>
                    <Col md="6">
                      <h3 className="mb-0">Thông tin cuộc thi</h3>
                    </Col>
                    <Col md="6" className="text-right">
                      <label
                        className="text-neutral mb-0 font-weight-bold text-sm"
                        style={{ backgroundColor: 'red', borderRadius: '5px', padding: '2px 5px', fontFamily: 'sans-serif' }}
                      >
                        Hạn cuối đăng ký: {convertDateFormat(data.data.end_time_register)}
                      </label>
                    </Col>
                  </Row>
                </CardHeader>
                {data.data.competition_entities.length > 0 ? <CardImg alt="..." src={data.data.competition_entities[0].image_url} /> : <></>}
                <CardBody>
                  <Row>
                    <Col md="12">
                      <ReactQuill
                        style={{ borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
                        value={data.data.content}
                        theme="bubble"
                        readOnly
                      />
                    </Col>
                  </Row>
                  {data.data.view ? (
                    <span className="text-sm" style={{ color: 'gray' }}>
                      {data.data.view} lượt xem
                    </span>
                  ) : (
                    <></>
                  )}
                </CardBody>
                <Row></Row>
              </Card>
            </Col>
            <Col className="card-wrapper" lg="4">
              <Card style={{ position: 'sticky', top: '10px' }}>
                <CardHeader>
                  <Row className="text-left" style={{ marginBottom: '20px' }}>
                    <h4 className="display-4">{data.data.name}</h4>
                  </Row>
                  <Row className="text-left" style={{ marginBottom: '10px' }}>
                    <Col className="col-auto">
                      <i className="ni ni-calendar-grid-58 text-danger" style={{ marginTop: '3px' }} />
                    </Col>
                    <Col className="col-auto">
                      <Row>
                        <span style={{ fontWeight: '900', fontFamily: 'sans-serif' }}>{convertDateFormat(data.data.start_time)}</span>

                        <Badge className="font-weight-bold" color="info" pill style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}>
                          {covertDatePassed(data.data.start_time)}
                        </Badge>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="text-left" style={{ marginBottom: '20px' }}>
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
                </CardHeader>
                <CardBody>
                  <CardTitle className="mb-0">
                    <h3>Các câu lạc bộ tham gia và tổ chức</h3>
                  </CardTitle>
                  {data.data.clubs_in_competition && data.data.clubs_in_competition.length > 0 ? (
                    <Row className="align-items-center mb-3">
                      {data.data.clubs_in_competition.map((e, value) => {
                        return (
                          <Col className="col-auto" key={`sponsor-${value}`}>
                            <a href="/" onClick={(e) => e.preventDefault()} id={`tooltip-${value}`} rel="noreferrer">
                              <img
                                alt="..."
                                className="img-fluid rounded-circle md"
                                src={
                                  e.image
                                    ? e.image
                                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                                }
                                style={{ backgroundColor: 'white', width: '60px', height: '60px' }}
                              />
                            </a>
                            <UncontrolledTooltip delay={0} target={`tooltip-${value}`}>
                              {e.is_owner === true ? `Câu lạc bộ tạo: ${e.name}` : `${e.name}`}
                            </UncontrolledTooltip>
                          </Col>
                        );
                      })}
                    </Row>
                  ) : (
                    <></>
                  )}
                  {data.data.fee ? (
                    <CardTitle className="mb-0">
                      <h3>
                        Phí tham gia: <span className="text-success">{convertFee(data.data.fee)}</span>
                      </h3>
                    </CardTitle>
                  ) : (
                    <></>
                  )}
                  <CardTitle className="mb-0">
                    <h3>
                      Quy mô:{' '}
                      <span className="text-warning">
                        {data.data.scope === 0 ? 'Liên trường' : data.data.scope === 1 ? 'Trong trường' : 'Trong câu lạc bộ'}
                      </span>
                    </h3>
                  </CardTitle>
                  <CardTitle className="mb-0">
                    <h3>Ban giám khảo:</h3>
                  </CardTitle>
                  {data.data.influencers_in_competition && data.data.influencers_in_competition.length > 0 ? (
                    <Row className="align-items-center mb-3">
                      {data.data.influencers_in_competition.map((ele, value) => {
                        return (
                          <Col className="col-auto mb-1" key={`influ-${value}`}>
                            <a
                              href="/"
                              id={`tooltip-${value}`}
                              onClick={(e) => {
                                e.preventDefault(e);
                              }}
                            >
                              <img style={{ width: '50px', height: '50px' }} alt="..." className="img-fluid rounded-circle" src={ele.image_url} />
                            </a>
                            <UncontrolledTooltip delay={0} target={`tooltip-${value}`}>
                              {ele.name} <br />
                            </UncontrolledTooltip>
                          </Col>
                        );
                      })}
                    </Row>
                  ) : (
                    <></>
                  )}
                  <CardTitle className="mb-0" style={{ marginTop: '10px' }}>
                    <h3>
                      Số thành viên đã đăng ký: <span className="text-warning">{data.data.number_of_participant_join} người</span>
                    </h3>
                  </CardTitle>
                  <Row className="align-items-center justify-content-lg-between" style={{ marginTop: '20px' }}>
                    <Button className="btn-icon" color="warning" type="button" style={{ margin: 'auto' }}>
                      <span className="btn-inner--icon mr-1">
                        <i className="fas fa-users" />
                      </span>
                      <span className="btn-inner--text">Quản lý nhóm</span>
                    </Button>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}
