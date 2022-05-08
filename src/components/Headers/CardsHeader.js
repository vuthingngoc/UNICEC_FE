import PropTypes from 'prop-types';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

const clubData = {
  id: '1',
  university_id: '1',
  university_name: 'FPT University',
  name: 'F-Code FPT',
  description: 'Câu lạc bộ học thuật lập trình trực thuộc trường đại học FPT cơ sở HCM.',
  logo: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/241277567_2935941399955753_2523832604141178857_n.png?_nc_cat=105&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=Smz-yjrKaJAAX_W3KOH&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8qqiPUPVEvRcdGe-IB16I5oHzt0ODEWFJdUZVkKqzg_Q&oe=627CCF79',
  club_fanpage: 'https://www.facebook.com/fcodefpt/',
  club_contract: 'fcode.fptuhcm@gmail.com',
  total_member: '50',
  total_event: '5',
  total_activity: '4',
  member_increase_last_month: '3',
};

function CardsHeader() {
  return (
    <>
      <div className="header bg-grey pb-6">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="9" xs="10">
                <Row>
                  <Col className="col-auto">
                    <a className="avatar rounded-circle" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img alt="..." src={clubData.logo} />
                    </a>
                  </Col>
                  <div className="col ml--2">
                    <h3 className="mb-0 text-default" style={{ fontWeight: '900', fontFamily: 'sans-serif', margin: 'auto' }}>
                      <a href={clubData.club_fanpage} target="blank">
                        {clubData.name}
                      </a>
                    </h3>
                    <span style={{ color: 'grey', fontFamily: 'cursive' }}>{clubData.club_contract}</span>{' '}
                  </div>
                </Row>
              </Col>
              <Col className="text-right" lg="3" xs="2">
                <p className="font-weight-bold text-default mb-0" style={{ fontFamily: 'cursive', margin: 'auto' }}>
                  {clubData.university_name}
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="6" xl="3">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Giới thiệu
                        </CardTitle>
                        <span className="h4 mb-0">{clubData.description}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                          <i className="ni ni-align-left-2" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" xl="3">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Thành Viên
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{clubData.total_member}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                          <i className="ni ni-badge" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> {clubData.member_increase_last_month}
                      </span>{' '}
                      <span className="text-nowrap">trong tháng này</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" xl="3">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col" style={{ paddingBottom: '20px' }}>
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Sự kiện và cuộc thi đang tổ chức
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{clubData.total_event}</span>
                      </div>
                      <Col className="col-auto ">
                        <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                          <i className="ni ni-trophy" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" xl="3">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <div className="col" style={{ paddingBottom: '35px' }}>
                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                          Hoạt động đang diễn ra
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{clubData.total_activity}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                          <i className="ni ni-satisfied" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

CardsHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default CardsHeader;
