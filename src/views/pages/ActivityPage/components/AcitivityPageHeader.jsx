// reactstrap components
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Progress, CardTitle } from 'reactstrap';

export default function ActivityPageHeader(props) {
  const [totalActivity, setTotalActivity] = useState(0);
  const [totalFinishActivity, setTotalFinishActivity] = useState(0);

  useEffect(() => {
    if (props.data && props.data.length > 0) {
      let total = 0;
      let finish = 0;
      props.data.forEach((e) => {
        total = total + e.total_activity;
        finish = finish + e.finish_activity;
      });
      setTotalActivity(total);
      setTotalFinishActivity(finish);
    }
  }, []);

  return (
    <>
      <Container className="bg-white" fluid>
        <Card>
          <div className="header pb-6">
            <Container fluid>
              <div className="header-body">
                <Row className="align-items-center py-4">
                  <Col lg="6" xs="7">
                    <h6 className="h2 d-inline-block mb-0">Hoạt đông câu lạc bộ</h6>{' '}
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <Container className="mt--6" fluid>
            <Row>
              <Col md="12" xl="4">
                <Card style={{ height: '85%' }} className="bg-gradient-primary border-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0 text-white">
                          Các hoạt động đã hoàn thành
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          {totalFinishActivity}/{totalActivity}
                        </span>
                        <Progress className="progress-xs mt-3 mb-0" max={totalActivity} value={totalFinishActivity} color="success" />
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <a className="text-nowrap text-white font-weight-600" href="#pablo" onClick={(e) => e.preventDefault()}>
                        Xem chi tiết
                      </a>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="12" xl="4">
                <Card style={{ height: '85%' }} className="bg-gradient-info border-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0 text-white">
                          Tổng số hoạt động đã tạo
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">5</span>
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <a className="text-nowrap text-white font-weight-600" href="#pablo" onClick={(e) => e.preventDefault()}>
                        Xem chi tiết
                      </a>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="12" xl="4">
                <Card style={{ height: '85%' }} className="bg-gradient-warning border-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0 text-white">
                          Các hoạt động trễ hạn
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">0</span>
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <a className="text-nowrap text-white font-weight-600" href="#pablo" onClick={(e) => e.preventDefault()}>
                        Xem chi tiết
                      </a>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>
    </>
  );
}
