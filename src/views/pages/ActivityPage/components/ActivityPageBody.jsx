import React from 'react';
import { Badge, Card, CardBody, CardHeader, CardImg, CardTitle, Col, Container, Progress, Row } from 'reactstrap';
import { convertDateToShow } from 'services/formatData';
import styled from 'styled-components';

const CardHover = styled.div`
  :hover {
    transform: scale(1.03);
    box-shadow: 0 4px 6px rgb(50 50 93 / 25%), 0 1px 3px rgb(0 0 0 / 8%);
  }
`;

const status = ['Mở đăng ký', 'Đóng đăng ký', 'Đang diễn ra', 'Đã kết thúc'];

export default function AcitivityPageBody(props) {
  const progressConvert = (partialValue, totalValue) => {
    if (partialValue === 0 && totalValue === 0) {
      return 'Không có hoạt động';
    } else {
      return `${partialValue}/${totalValue}`;
    }
  };
  React.useEffect(() => {
    console.log(props);
  }, []);

  return (
    <Container className="mt--4 bg-white" fluid>
      <Card className="pl-4">
        <CardHeader className="text-center mb-0">
          <h2 className="display-2 text-warning text-center mb-0" style={{ fontFamily: 'sans-serif', paddingTop: '20px' }}>
            Tiến Độ Hoạt Động
          </h2>
          <Row className="align-items-center mb-0 pb-0" style={{ width: '50%', margin: 'auto' }}>
            <Col className="mb-0 pb-0">
              <hr style={{ borderTop: '1px solid black', width: '80%' }} />
            </Col>
            <Col className="mb-0 pb-0" md="8" sm="8">
              <hr style={{ borderTop: '1px solid black', width: '80%' }} />
            </Col>
            <Col className="mb-0 pb-0">
              <hr style={{ borderTop: '1px solid black', width: '80%' }} />
            </Col>
          </Row>
        </CardHeader>
        <Row className="mb-5">
          {props.data && props.data.length > 0 ? (
            props.data.map((e, value) => {
              return (
                <Col xl="3" md="6" key={`ShowCompetition-${value}`}>
                  <CardHover className="card" style={{ height: '95%' }}>
                    <a href={`/admin/hoat-dong/chi-tiet/${e.id}`}>
                      <CardImg
                        alt="..."
                        src={
                          e.competition_entities.length > 0
                            ? e.competition_entities[0].image_url
                            : 'https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png'
                        }
                        style={{ height: '250px' }}
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
                        <span className="h5 font-weight-bold mb-0 text-default">
                          {e.total_activity !== 0 ? 'Tiến độ hoàn thành:' : ''} {progressConvert(e.finish_activity, e.total_activity)}
                        </span>
                        {e.total_activity !== 0 ? (
                          <Progress
                            className="progress-xs mt-3 mb-0"
                            max={e.total_activity}
                            value={e.finish_activity}
                            color={e.finish_activity === e.total_activity ? 'success' : 'info'}
                          />
                        ) : (
                          <></>
                        )}
                        <Row>
                          <Col className="col-auto">
                            <Badge
                              className="font-weight-bold"
                              color={e.status === 1 ? 'success' : e.status === 3 ? 'info' : 'warning'}
                              pill
                              style={{ fontFamily: 'sans-serif' }}
                            >
                              {status[e.status - 1]}
                            </Badge>
                          </Col>
                        </Row>
                      </CardBody>
                    </a>
                  </CardHover>
                </Col>
              );
            })
          ) : props.data && props.data.length === 0 ? (
            <Col md="12" className="text-center">
              <h2 className="display-4" style={{ margin: 'auto' }}>
                Danh sách trống
              </h2>
              <img alt="..." src={require('assets/img/icons/empty.jpg').default} style={{ width: '500px', height: '500px' }} />
            </Col>
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
