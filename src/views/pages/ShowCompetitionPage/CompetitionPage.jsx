import React from 'react';
import { Card, CardBody, ListGroupItem, ListGroup, Container, Row, Col } from 'reactstrap';

// core components
import CompetitionHeader from './components/CompetitionHeader.js';

const competitionData = [
  {
    id: '1',
    title: 'HuyLãi suất ngân hàng đồng loạt tăng',
    avartar:
      'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/275005018_3058643097691973_1254205249411315442_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=KvkJ0Cjv28AAX_GCdYK&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9cvhzxTdFOU6gnuCJPyuJ6TqhIczL8fUlFL9RblJj7aw&oe=6273E1F9',
    content:
      'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên. Tuy nhiên, nhóm ngân hàng quốc doanh vẫn đứng ngoài cuộc đua này.    ',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'HuyLãi suất ngân hàng đồng loạt tăng',
    avartar:
      'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/275005018_3058643097691973_1254205249411315442_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=KvkJ0Cjv28AAX_GCdYK&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9cvhzxTdFOU6gnuCJPyuJ6TqhIczL8fUlFL9RblJj7aw&oe=6273E1F9',
    content:
      'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên. Tuy nhiên, nhóm ngân hàng quốc doanh vẫn đứng ngoài cuộc đua này.    ',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'HuyLãi suất ngân hàng đồng loạt tăng',
    avartar:
      'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/275005018_3058643097691973_1254205249411315442_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=KvkJ0Cjv28AAX_GCdYK&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9cvhzxTdFOU6gnuCJPyuJ6TqhIczL8fUlFL9RblJj7aw&oe=6273E1F9',
    content:
      'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên. Tuy nhiên, nhóm ngân hàng quốc doanh vẫn đứng ngoài cuộc đua này.    ',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'HuyLãi suất ngân hàng đồng loạt tăng',
    avartar:
      'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/275005018_3058643097691973_1254205249411315442_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=KvkJ0Cjv28AAX_GCdYK&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9cvhzxTdFOU6gnuCJPyuJ6TqhIczL8fUlFL9RblJj7aw&oe=6273E1F9',
    content:
      'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên. Tuy nhiên, nhóm ngân hàng quốc doanh vẫn đứng ngoài cuộc đua này.    ',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'HuyLãi suất ngân hàng đồng loạt tăng',
    avartar:
      'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/275005018_3058643097691973_1254205249411315442_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=KvkJ0Cjv28AAX_GCdYK&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9cvhzxTdFOU6gnuCJPyuJ6TqhIczL8fUlFL9RblJj7aw&oe=6273E1F9',
    content:
      'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên. Tuy nhiên, nhóm ngân hàng quốc doanh vẫn đứng ngoài cuộc đua này.    ',
    startTime: '20/10/2000',
    endTime: '25/10/2000',
  },
  {
    id: '1',
    title: 'HuyLãi suất ngân hàng đồng loạt tăng',
    avartar:
      'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/275005018_3058643097691973_1254205249411315442_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=KvkJ0Cjv28AAX_GCdYK&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9cvhzxTdFOU6gnuCJPyuJ6TqhIczL8fUlFL9RblJj7aw&oe=6273E1F9',
    content:
      'Ngày càng nhiều ngân hàng tăng lãi suất huy động trong bối cảnh tăng trưởng tín dụng cao nhất một thập niên. Tuy nhiên, nhóm ngân hàng quốc doanh vẫn đứng ngoài cuộc đua này.    ',
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
                  <Card>
                    {/* <CardHeader>
                      <h5 className="h3 mb-0">Ban Quản Lý</h5>
                    </CardHeader> */}
                    <CardBody>
                      <ListGroup className="list my--3" flush>
                        <ListGroupItem className="px-0">
                          <Row className="align-items-center">
                            {/* <Col className="col-auto">
                              
                            </Col> */}

                            <div className="col ml--2">
                              <a className="avatar rounded-circle" href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img alt="..." src={e.avartar} />
                              </a>
                              <h4 className="mb-0">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                  {e.title}
                                </a>{' '}
                                <br />
                                <span className="text-muted">{`${e.content}`}</span>
                              </h4>
                              <span className="text-danger">{`${e.startTime}`} - </span> <span className="text-danger">{`${e.endTime}`}</span> <br />
                              <a href="" color="primary" className="mt-3 mb-0 text-sm">
                                Xem thêm
                              </a>
                            </div>
                          </Row>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Card>
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
