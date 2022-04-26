import { Link } from 'react-router-dom';
// reactstrap components
import { Badge, Card, CardBody, Container, Row, Col, UncontrolledTooltip } from 'reactstrap';

function HomepageBody() {
  return (
    <>
      <div className="cd-index" id="gioi-thieu">
        <section className="py-6 pb-9 bg-default">
          <Container fluid style={{ paddingTop: '50px' }}>
            <Row className="justify-content-center text-center">
              <Col md="6">
                <h2 className="display-4 text-white">Giải pháp hoàn hảo cho quản lý câu lạc bộ và cuộc thi</h2>
                <p className="lead text-white">
                  UNICEC là một nền tảng giúp bạn quản lý các thành viên trong câu lạc bộ về các mặt như tuyển thành viên, thông báo và tổ chức hoạt
                  động trong câu lạc bộ. Không chỉ thế đây còn là một sân chơi dành cho các bạn muốn tham gia những cuộc thi được tổ chức và tài trợ
                  bởi các trường đại học hoặc các nhà tài trợ đến từ nhiều doanh nghiệp khác nhau.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg pt-lg-0 mt--7">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h4 className="h3 text-info text-uppercase">Quản lý câu lạc bộ</h4>
                        <p className="description mt-3">Hỗ trợ quản lý thành viên và hoạt động cho các chủ nhiệm câu lạc bộ.</p>
                        <div>
                          <Badge color="info" pill>
                            CLUB
                          </Badge>
                          <Badge color="info" pill>
                            Nhóm
                          </Badge>
                          <Badge color="info" pill>
                            Hoạt động
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                          <i className="ni ni-trophy" />
                        </div>
                        <h4 className="h3 text-success text-uppercase">Tổ chức và quản lý cuộc thi</h4>
                        <p className="description mt-3">Hỗ trợ tạo và quản lý các cuộc thi và sự kiện trong và ngoài trường.</p>
                        <div>
                          <Badge color="success" pill>
                            Cuộc thi
                          </Badge>
                          <Badge color="success" pill>
                            Sự kiện
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                          <i className="ni ni-circle-08" />
                        </div>
                        <h4 className="h3 text-warning text-uppercase">Hỗ trợ thành viên câu lạc bộ</h4>
                        <p className="description mt-3">Các thành viên sẽ dễ dàng tiếp cận các thông tin và hoạt đông trong câu lạc bộ.</p>
                        <div>
                          <Badge color="warning" pill>
                            Thành viên
                          </Badge>
                          <Badge color="warning" pill>
                            Ứng tuyển
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <div className="cd-index" id="tinh-nang">
        <section className="py-6">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img alt="..." className="img-fluid" src={require('assets/img/theme/landing-1.png').default} />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <h1>Quản lý câu lạc bộ</h1>
                  <p>Hỗ trợ quản lý thành viên và hoạt động cho các chủ nhiệm câu lạc bộ.</p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-settings-gear-65" />
                          </Badge>
                        </div>
                        <div>
                          <h4 className="mb-0">Dễ dàng theo dõi thành viên</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-ruler-pencil" />
                          </Badge>
                        </div>
                        <div>
                          <h4 className="mb-0">Chia hoạt động cho các thành viên nhanh hơn</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-send" />
                          </Badge>
                        </div>
                        <div>
                          <h4 className="mb-0">Hỗ trợ hệ thống tạo phiếu cho việc duyệt thành viên</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-6">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <img alt="..." className="img-fluid" src={require('assets/img/theme/landing-2.png').default} />
              </Col>
              <Col md="6">
                <div className="pr-md-5">
                  <h1>Tổ chức và quản lý cuộc thi</h1>
                  <p>Hỗ trợ tạo và quản lý các cuộc thi và sự kiện trong và ngoài trường.</p>
                  <Link className="font-weight-bold text-warning mt-5" to="/">
                    Trở thành nhà tài trợ
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-6">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img alt="..." className="img-fluid" src={require('assets/img/theme/landing-3.png').default} />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <h1>Hỗ trợ thành viên câu lạc bộ</h1>
                  <p>Các thành viên sẽ dễ dàng tiếp cận các thông tin và hoạt đông trong câu lạc bộ.</p>
                  <Link className="font-weight-bold text-info mt-5" to="/">
                    Tải ứng dụng ngay
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      {/* <section className="py-7 section-nucleo-icons bg-white overflow-hidden">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">Nucleo Icons</h2>
                <p className="lead">
                  The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check
                  all of them and use those that you like the most.
                </p>
                <div className="btn-wrapper">
                  <Button
                    color="info"
                    href="https://demos.creative-tim.com/argon-dashboard-pro-react/#/documentation/icons?ref=adpr-index-page"
                    target="_blank"
                  >
                    View demo icons
                  </Button>
                  <Button className="mt-3 mt-md-0" color="default" href="https://nucleoapp.com/?ref=1712" target="_blank">
                    View all icons
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="blur--hover">
              <a href="https://demos.creative-tim.com/argon-dashboard-pro-react/#/documentation/icons?ref=adpr-index-page">
                <div className="icons-container blur-item mt-5">
                  <i className="icon ni ni-diamond" />

                  <i className="icon icon-sm ni ni-album-2" />
                  <i className="icon icon-sm ni ni-app" />
                  <i className="icon icon-sm ni ni-atom" />

                  <i className="icon ni ni-bag-17" />
                  <i className="icon ni ni-bell-55" />
                  <i className="icon ni ni-credit-card" />

                  <i className="icon icon-sm ni ni-briefcase-24" />
                  <i className="icon icon-sm ni ni-building" />
                  <i className="icon icon-sm ni ni-button-play" />

                  <i className="icon ni ni-calendar-grid-58" />
                  <i className="icon ni ni-camera-compact" />
                  <i className="icon ni ni-chart-bar-32" />
                </div>
                <span className="blur-hidden h5 text-success">Eplore all the 21.000+ Nucleo Icons</span>
              </a>
            </div>
          </Container>
        </section> */}
      <section className="py-7">
        <Container>
          <Row className="row-grid justify-content-center">
            <Col className="text-center" lg="10">
              <h2 className="display-3">
                Nền tảng quản lý Câu lạc bộ và cuộc thi đáng tin cậy nhất Việt Nam
                <span className="text-success">University Club&apos;s Events and Competitions Platform</span>
              </h2>
              <Row
                style={{
                  marginTop: '20px',
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(140,255,140,0.4) 26%, rgba(255,255,255,1) 50%, rgba(140,255,140,0.4) 76%, rgba(255,255,255,0) 100%)',
                  padding: '10px 10px 10px 10px',
                }}
              >
                <Col className="text-center" lg="4">
                  <Row className="text-center">
                    <h2 className="font-weight-bold" style={{ color: 'orange', margin: 'auto' }}>
                      10 lượt
                    </h2>
                  </Row>
                  <Row className="text-center">
                    <p className="font-weight-bold" style={{ margin: 'auto' }}>
                      Cài đặt
                    </p>
                  </Row>
                </Col>
                <Col className="text-center" lg="4">
                  <Row className="text-center">
                    <h2 className="font-weight-bold" style={{ color: 'orange', margin: 'auto' }}>
                      32
                    </h2>
                  </Row>
                  <Row className="text-center">
                    <p className="font-weight-bold" style={{ margin: 'auto' }}>
                      Người dùng hoạt động hằng ngày
                    </p>
                  </Row>
                </Col>
                <Col className="text-center" lg="4">
                  <Row className="text-center">
                    <h2 className="font-weight-bold" style={{ color: 'orange', margin: 'auto' }}>
                      8
                    </h2>
                  </Row>
                  <Row className="text-center">
                    <p className="font-weight-bold" style={{ margin: 'auto' }}>
                      Câu lạc bộ tham gia
                    </p>
                  </Row>
                </Col>
              </Row>
              <div className="text-center">
                <h4 className="display-4 mb-5 mt-5">Các câu lạc bộ liên kết</h4>
                <Row className="justify-content-center">
                  <Col className="my-2" md="2" xs="3">
                    <a href="https://www.facebook.com/fcodefpt/" id="tooltip170669606">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow shadow-lg--hover"
                        src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/241277567_2935941399955753_2523832604141178857_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=86wYDNMBdOsAX_oeWxv&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT_VvtAE6O9W-5KUeId3v50zfG7hYX_802GjQnZ6R8_OeA&oe=62670EB9"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip170669606">
                      BF-Code (FPTU)
                    </UncontrolledTooltip>
                  </Col>
                  <Col className="my-2" md="2" xs="3">
                    <a href="https://www.facebook.com/HebeFPT/" id="tooltip374813715">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle"
                        src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/78794861_1401071720053762_2383132169770893312_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MlL7_8zE3tQAX-DuIzc&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT_C0culXkRW4nJYATKt03eiiF0D_MhF6bwLp4kVpY_ubg&oe=6287344A"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip374813715">
                      CLUB Hebe (FPTU)
                    </UncontrolledTooltip>
                  </Col>
                  <Col className="my-2" md="2" xs="3">
                    <a href="https://www.facebook.com/fptgoclub/" id="tooltip374813716">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle"
                        src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t39.30808-6/272784309_2766636626963183_7780236095711902715_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zQdN-pwlgSkAX-irdsW&tn=lee7gutsvP7t0wfU&_nc_ht=scontent.fsgn5-7.fna&oh=00_AT8bRxMt1MMx07zm2-MlLsitH-8inJblXKAPShFSRPHD9g&oe=626738BE"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip374813716">
                      CLB Cờ vây (FPTU)
                    </UncontrolledTooltip>
                  </Col>
                  <Col className="my-2" md="2" xs="3">
                    <a href="https://www.facebook.com/fptu.melody.club/" id="tooltip374813717">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle"
                        src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/275375133_468347551505740_2131455553827243807_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FHP-3bDEdpQAX9jqGfF&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8fuaEIrKXLYgAgjZxnL3G8TpV-Ol4VQGHiWs_TnQSH1w&oe=6267D342"
                        style={{ backgroundColor: 'white' }}
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip374813717">
                      FPT Melody Club (FPTU)
                    </UncontrolledTooltip>
                  </Col>
                  <Col className="my-2" md="2" xs="3">
                    <a href="https://www.facebook.com/tiengtrungFPT/" id="tooltip616015001">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle"
                        src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/130757038_2968507013435767_3598620208958254404_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gCfVsVHDa0QAX-Uw6HT&_nc_oc=AQmSdK6kzc3_-lavVycG0xF93g5xiEJhJSTBNihtLlrnzdEwiQwzv1K8Mux_hVS62gQ&tn=lee7gutsvP7t0wfU&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT_YxlRuBNQgeQ33WrXnyEwbz7pRvMggVPQqjiDHQVeM7g&oe=6288AC39"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip616015001">
                      CLB Tiếng Trung (FPTU)
                    </UncontrolledTooltip>
                  </Col>
                  <Col className="my-2" md="2" xs="3">
                    <a href="https://www.facebook.com/FU.Business/" id="tooltip211254026">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle"
                        src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.18169-9/17022409_1316021248481954_6660646335865381717_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xxxbqD-M2pcAX8zElM8&_nc_ht=scontent.fsgn5-7.fna&oh=00_AT8e9ObL0gKWbpRLPZ53sDs_xWDbOhCz-MM7-yIyuCws4A&oe=6289CA1E"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip211254026">
                      FPT Business Club (FPTU)
                    </UncontrolledTooltip>
                  </Col>
                  <Col className="my-2" md="2" xs="3">
                    <a href="https://www.facebook.com/iGoClub" id="tooltip82987604">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle"
                        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/278402228_407676238026069_7257878776928739635_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=daSA00Be3C0AX8czvbR&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT-xZe5rzegewBxgc_UtJ2_nNZhWMBjuXS6Lp3Rxe3nYmg&oe=6266B4EB"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip82987604">
                      iGo Club (FPTU)
                    </UncontrolledTooltip>
                  </Col>
                  <Col className="my-2" md="2" xs="3">
                    <a href="https://www.facebook.com/fuguitarclub/" id="tooltip731835410">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle opacity-3"
                        src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/262163622_310707094393225_8838935825348156786_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fhv9q6B5uoAAX8cpUI9&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9fmqzbw-tv5ZnRYlcDRTXEuQMGgcmdw77ltAWQTG-byg&oe=6267D7B4"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip731835410">
                      FU Guitar Club (FPTU)
                    </UncontrolledTooltip>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomepageBody;
