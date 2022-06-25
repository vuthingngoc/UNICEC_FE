// react library for routing
// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

function IndexHeader() {
  return (
    <>
      <div
        className="header pt-5 pb-7 cd-index"
        id="UNICEC"
        style={{
          backgroundImage: 'url("https://i.imgur.com/QdcLCTG.jpeg")',
        }}
      >
        <Container>
          <div className="header-body">
            <Row className="align-items-center">
              <Col lg="8">
                <div className="pr-5">
                  <h1 className="display-2 mb-0 text-warning mt-4" style={{ fontWeight: '900', fontFamily: 'sans-serif' }}>
                    UNICEC
                  </h1>
                  <p className="lead font-weight-bold text-neutral">
                    Nền tảng quản lý thông tin sự kiện và cuộc thi của Câu Lạc Bộ Sinh Viên hàng đầu tại Việt Nam.
                  </p>
                  <p className="lead font-weight-bold text-neutral">
                    Hỗ trợ tìm kiếm các cuộc thi và sự kiện để mang lại các phần thưởng dành cho người thắng cuộc từ những nhà tài trợ khác nhau.
                  </p>
                  <div className="mt-5">
                    <Button type="button" outline color="warning" href="/" style={{ margin: 'auto', borderWidth: '3px' }}>
                      <Row className="align-items-center text-center" style={{ textAlign: 'center' }}>
                        <h2 className="text-yellow" style={{ margin: 'auto', fontWeight: '900' }}>
                          <i className="fas fa-download " /> Tải UniCEC
                        </h2>
                      </Row>
                      <Row className="align-items-center text-center text-neutral">
                        <span style={{ margin: 'auto' }}>Android 7.1 2022-06-07 V1.0.0</span>
                      </Row>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Row className="pt-5">
                  <img alt="..." src={require('assets/img/brand/mobile_UNICEC.png').default} />
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="fill-warning" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
