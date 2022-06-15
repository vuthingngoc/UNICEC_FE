import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/vi';
import {
  Badge,
  CardBody,
  CardHeader,
  CardImg,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from 'reactstrap';
import Loading from 'views/pages/components/Loading';

const CardHover = styled.div`
  :hover {
    transform: scale(1.01);
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  }
`;

export default function CompetitionPageBody(data) {
  const covertDatePassed = (date) => {
    const ago = moment(date, 'YYYY-MM-DDThh:mm:ss').fromNow();
    return ago;
  };

  const convertDateToShow = (date) => {
    const arr = date.split('T');
    const day = arr[0].split('-');
    return `${day[2]}/${day[1]}/${day[0]}`;
  };
  return (
    <Container className="mt--6 bg-white" fluid>
      <h2 className="display-2 text-warning text-center mb-0" style={{ fontFamily: 'sans-serif', paddingTop: '20px' }}>
        Cuộc thi của câu lạc bộ
      </h2>
      <Row className="align-items-center mb-0" style={{ width: '50%', margin: 'auto' }}>
        <Col className="mb-0">
          <hr style={{ borderTop: '1px solid black', width: '80%' }} />
        </Col>
        <Col className="mb-0" md="8" sm="8">
          <hr style={{ borderTop: '1px solid black', width: '80%' }} />
        </Col>
        <Col className="mb-0">
          <hr style={{ borderTop: '1px solid black', width: '80%' }} />
        </Col>
      </Row>
      <Row>
        {data.data && data.data.length > 0 ? (
          data.data.map((e, value) => {
            return (
              <Col xl="3" md="3" sm="3" key={`ShowCompetition-${value}`}>
                <CardHover className="card" style={{ height: '95%' }}>
                  <CardHeader style={{ fontFamily: 'inherit' }}>
                    <Row className="align-items-center mb-0">
                      <Col className="col-auto mb-0" style={{ padding: '0px 0px 0px 0px' }}>
                        <span className="avatar avatar-sm rounded-circle">
                          <img
                            alt="..."
                            src={
                              e.clubs_in_competition[0].image
                                ? e.clubs_in_competition[0].image
                                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                            }
                          />
                        </span>
                      </Col>
                      <div className="col mb-0">
                        <h6 className="text-sm font-weight-bold" style={{ margin: 'auto', color: 'black' }}>
                          {e.clubs_in_competition[0].name} ·{' '}
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
                  <a href={`/admin/cuoc-thi/chi-tiet/${e.competition_id}`}>
                    <CardImg alt="..." src={require('assets/img/theme/img-1-1000x900.jpg').default} />
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
                            {convertDateToShow(e.create_time)}
                          </label>
                        </Col>
                      </Row>

                      <CardTitle className="h4 mb-2">{e.name}</CardTitle>
                      <Row>
                        <Col className="col-auto">
                          <Badge
                            className="font-weight-bold"
                            color={e.scope === 0 ? 'info' : e.scope === 1 ? 'warning' : 'success'}
                            pill
                            style={{ fontFamily: 'sans-serif' }}
                          >
                            {e.scope === 0 ? 'Liên Trường' : e.scope === 1 ? 'Trong Trường' : 'Trong Câu Lạc Bộ'}
                          </Badge>
                        </Col>
                        {e.is_sponsor === true ? (
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
          <Loading style={{ display: 'block' }} />
        )}
      </Row>
    </Container>
  );
}
