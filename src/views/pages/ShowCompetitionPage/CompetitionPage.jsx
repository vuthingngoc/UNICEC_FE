import React from 'react';
import {
  CardBody,
  Container,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap';

// core components
import CompetitionHeader from './components/CompetitionHeader.js';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/vi';

const CardHover = styled.div`
  :hover {
    transform: scale(1.01);
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  }
`;

const competitionData = [
  {
    id: '1',
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    banner: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/6/2022',
    club_name: 'FU Guitar',
    club_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '23/5/2022',
    isSponsor: true,
    location: 'Đại học FPT',
    marjors: ['Kỹ Thuật', 'Ngôn ngữ'],
  },
  {
    id: '1',
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    banner: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/6/2022',
    club_name: 'FU Guitar',
    club_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '23/5/2022',
    isSponsor: true,
    location: 'Đại học FPT',
    marjors: 'ALL',
  },
  {
    id: '1',
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    banner: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/6/2022',
    club_name: 'FU Guitar',
    club_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '23/5/2022',
    isSponsor: true,
    location: 'Đại học FPT',
    marjors: 'ALL',
  },
  {
    id: '1',
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    banner: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/6/2022',
    club_name: 'FU Guitar',
    club_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '23/5/2022',
    isSponsor: true,
    location: 'Đại học FPT',
    marjors: 'ALL',
  },
  {
    id: '1',
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    banner: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/6/2022',
    club_name: 'FU Guitar',
    club_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '23/5/2022',
    isSponsor: true,
    location: 'Đại học FPT',
    marjors: 'ALL',
  },
  {
    id: '1',
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    banner: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/6/2022',
    club_name: 'FU Guitar',
    club_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '23/5/2022',
    isSponsor: true,
    location: 'Đại học FPT',
    marjors: 'ALL',
  },
];

function CompetitionPage() {
  const covertDatePassed = (date) => {
    const ago = moment(date, 'DD/MM/YYYY').fromNow();
    return ago;
  };
  return (
    <>
      <CompetitionHeader name="Default" parentName="Dashboards" />
      <Container className="mt--6 bg-white" fluid>
        <h2 className="display-2 text-warning text-center" style={{ fontFamily: 'sans-serif', paddingTop: '20px' }}>
          Cuộc thi của câu lạc bộ
        </h2>
        <Row className="align-items-center" style={{ width: '50%', margin: 'auto' }}>
          <Col>
            <hr style={{ borderTop: '1px solid black', width: '80%' }} />
          </Col>
          <Col md="8" sm="8">
            <hr style={{ borderTop: '1px solid black', width: '80%' }} />
          </Col>
          <Col>
            <hr style={{ borderTop: '1px solid black', width: '80%' }} />
          </Col>
        </Row>
        <Row>
          {competitionData ? (
            competitionData.map((e, value) => {
              return (
                <Col xl="3" md="3" sm="3" key={`ShowCompetition-${value}`}>
                  <CardHover className="card">
                    <CardHeader style={{ fontFamily: 'inherit' }}>
                      <Row className="align-items-center mb-0">
                        <Col className="col-auto mb-0" style={{ padding: '0px 0px 0px 0px' }}>
                          <span className="avatar avatar-sm rounded-circle">
                            <img
                              alt="..."
                              src={
                                e.club_avatar
                                  ? e.club_avatar
                                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                              }
                            />
                          </span>
                        </Col>
                        <div className="col mb-0">
                          <h6 className="text-sm font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                            {e.club_name} ·{' '}
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
                    <a href={`/admin/cuoc-thi/chi-tiet/${e.id}`}>
                      <CardImg alt="..." src={require('assets/img/theme/img-1-1000x900.jpg').default} />
                      <CardBody>
                        <Row>
                          <Col className="text-left" xl="6" md="6" xs="6">
                            <span style={{ fontFamily: 'cursive', color: 'lightsalmon' }}>@ {e.type}</span>
                          </Col>
                          <Col className="text-right" xl="6" md="6" xs="6">
                            <label
                              className="text-neutral mb-0 font-weight-bold text-sm"
                              style={{ backgroundColor: 'red', borderRadius: '5px', padding: '2px 5px', fontFamily: 'cursive' }}
                            >
                              {e.startTime}
                            </label>
                          </Col>
                        </Row>

                        <CardTitle className="h2 mb-2">{e.title}</CardTitle>
                        <Row>
                          <Col className="col-auto">
                            <Badge className="font-weight-bold" color="info" pill style={{ fontFamily: 'sans-serif' }}>
                              Đại học FPT
                            </Badge>
                          </Col>
                          {e.isSponsor === true ? (
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
          ) : (
            <h2>Please wait</h2>
          )}
        </Row>
      </Container>
    </>
  );
}

export default CompetitionPage;
