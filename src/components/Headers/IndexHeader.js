// import { Link } from 'react-router-dom';
// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

function IndexHeader() {
  return (
    <>
      <div className="header bg-neutral pt-5 pb-7">
        <Container>
          <div className="header-body">
            <Row className="align-items-center">
              <Col lg="8">
                <div className="pr-5">
                  <h1 className="display-2 mb-0" style={{ fontWeight: '900', fontFamily: 'sans-serif' }}>
                    UNICEC
                  </h1>
                  <p className="lead">Nền tảng quản lý thông tin sự kiện và cuộc thi của Câu Lạc Bộ Sinh Viên hàng đầu tại Việt Nam.</p>
                  <p className="lead">
                    Hỗ trợ tìm kiếm các cuộc thi và sự kiện để mang lại các phần thưởng dành cho người thắng cuộc từ những nhà tài trợ khác nhau.
                  </p>
                  <div className="mt-5">
                    <Button type="button" outline color="success" href="/" style={{ margin: 'auto', borderWidth: '3px' }}>
                      <Row className="align-items-center text-center" style={{ textAlign: 'center' }}>
                        <h2 style={{ margin: 'auto', fontWeight: '900' }}>
                          <i className="fas fa-download" /> Tải UniCEC
                        </h2>
                      </Row>
                      <Row className="align-items-center text-center">
                        <span style={{ margin: 'auto' }}>Android 7.1 2022-04-21 V1.0.0</span>
                      </Row>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Row className="pt-5">
                  {/* <Col md="6">
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Quản lý câu lạc bộ</h5>
                        <p>Hỗ trợ quản lý thành viên và hoạt động cho các chủ nhiệm câu lạc bộ.</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Quản lý cuộc thi</h5>
                        <p>Hỗ trợ tạo và quản lý các cuộc thi và sự kiện trong và ngoài trường.</p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="pt-lg-5 pt-4" md="6">
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Cung cấp thông tin cuộc thi</h5>
                        <p>Hệ thống thông tin về các cuộc thi từ khắp các trường đại học và doanh nghiệp.</p>
                      </CardBody>
                    </Card>
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Hỗ trợ thành viên trong câu lạc bộ</h5>
                        <p>Các thành viên sẽ dễ dàng tiếp cận các thông tin và hoạt đông trong câu lạc bộ.</p>
                      </CardBody>
                    </Card>
                  </Col> */}
                  <img alt="..." src={require('assets/img/brand/mobile_UNICEC.png').default} />
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
