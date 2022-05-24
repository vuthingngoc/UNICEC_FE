import React from 'react';
import { CardBody, Container, Row, Col, CardImg, CardTitle, CardText } from 'reactstrap';

// core components
import CompetitionHeader from './components/CompetitionHeader.js';
import styled from 'styled-components';

const CardHover = styled.div`
  :hover {
    transform: scale(1.01);
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  }
`;

const competitionData = [
  {
    id: '1',
    title: 'Lãi suất ngân hàng đồng loạt tăng',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    content: 'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên.',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'Lãi suất ngân hàng đồng loạt tăng',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    content: 'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên.',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'Lãi suất ngân hàng đồng loạt tăng',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    content: 'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên.',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'Lãi suất ngân hàng đồng loạt tăng',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    content: 'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên.',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'Lãi suất ngân hàng đồng loạt tăng',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    content: 'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên.',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'Lãi suất ngân hàng đồng loạt tăng',
    avartar: 'assets/img/theme/img-1-1000x600.jpg',
    content: 'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên.  ',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
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
                <Col xl="4" md="4" key={`ShowCompetition-${value}`}>
                  <a href="">
                    <CardHover className="card">
                      <CardImg alt="..." src={require('assets/img/theme/img-1-1000x900.jpg').default} top />
                      <CardBody>
                        <Row>
                          <Col className="text-right" xl="6" md="6" xs="6"></Col>
                          <Col className="text-right" xl="6" md="6" xs="6">
                            <i className="ni ni-calendar-grid-58 text-red" style={{ marginRight: '10px' }} />
                            <label className="text-danger mb-0">{e.startTime} </label>
                          </Col>
                        </Row>

                        <CardTitle className="h2 mb-0">{e.title}</CardTitle>

                        <CardText className="mt-4" style={{ color: 'Black', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                          {e.content}
                        </CardText>

                        {/* <Button className="px-0" color="link" href="#pablo" onClick={(e) => e.preventDefault()}>
                        Xem thêm
                      </Button> */}
                      </CardBody>
                    </CardHover>
                  </a>
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
