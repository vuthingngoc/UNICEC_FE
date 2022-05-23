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
} from 'reactstrap';

// core components
import CompetitionHeader from './components/CompetitionHeader.js';
import styled from 'styled-components';

const CardHover = styled.div`
  :hover {
    transform: scale(1.01);
  }
`;

const competitionData = [
  {
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/10/2000',
    author_name: 'Thu Trang',
    author_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '3 ngày trước',
  },
  {
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/10/2000',
    author_name: 'Thu Trang',
    author_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '3 ngày trước',
  },
  {
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/10/2000',
    author_name: 'Thu Trang',
    author_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '3 ngày trước',
  },
  {
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/10/2000',
    author_name: 'Thu Trang',
    author_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '3 ngày trước',
  },
  {
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/10/2000',
    author_name: 'Thu Trang',
    author_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '3 ngày trước',
  },
  {
    title: 'Thử thách âm nhạc trực tuyến Soul of Melody [Không giới hạn người đăng kí, giải thưởng lên đến 1000 USD]',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    type: 'Tài năng',
    startTime: '20/10/2000',
    author_name: 'Thu Trang',
    author_avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    create_time: '3 ngày trước',
  },
];

function CompetitionPage() {
  return (
    <>
      <CompetitionHeader name="Default" parentName="Dashboards" />
      <Container className="mt--6" fluid>
        <Row>
          {competitionData ? (
            competitionData.map((e, value) => {
              return (
                <Col xl="3" md="3" sm="3" key={`ShowCompetition-${value}`}>
                  <CardHover className="card">
                    <CardHeader style={{ fontFamily: 'inherit' }}>
                      <Row className="align-items-center">
                        <Col className="col-auto" style={{ padding: '0px 0px 0px 0px' }}>
                          <span className="avatar avatar-sm rounded-circle">
                            <img
                              alt="..."
                              src={
                                e.author_avatar
                                  ? e.author_avatar
                                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                              }
                            />
                          </span>
                        </Col>
                        <div className="col">
                          <h6 className="text-sm font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                            {e.author_name} ·{' '}
                            <span className="text-sm" style={{ fontWeight: 'lighter', color: 'darkgrey' }}>
                              {e.create_time}
                            </span>
                          </h6>
                        </div>
                        <Col className="text-right col-auto">
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
                    <a href="">
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

                        <CardTitle className="h2 mb-0">{e.title}</CardTitle>
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
