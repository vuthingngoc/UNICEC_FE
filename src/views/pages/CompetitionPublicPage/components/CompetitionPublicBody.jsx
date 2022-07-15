import CompetitionCard from 'components/Cards/CompetitionCard';
import React from 'react';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';

export default function CompetitionPublicBody(props) {
  return (
    <Container className="mt--5 " fluid>
      <Card>
        <CardBody>
          <CardTitle className="text-default font-weight-bold">CÓ THỂ BẠN SẼ THÍCH</CardTitle>
          <Row className="mb-5">
            {props.competitionFavorite && props.competitionFavorite.length > 0 ? (
              props.competitionFavorite.map((e, value) => {
                return <CompetitionCard data={e} key={`CompetitionCard-${value}`} />;
              })
            ) : props.competitionFavorite && props.competitionFavorite.length === 0 ? (
              <Col lg="12" md="12" className="text-center">
                <h2 className="display-4" style={{ margin: 'auto' }}>
                  Danh sách trống
                </h2>
                <img alt="..." src={require('assets/img/icons/empty.jpg').default} style={{ width: '300px', height: '300px' }} />
              </Col>
            ) : (
              <Col className="text-center" lg="12" md="12">
                <img
                  alt="..."
                  src={require('assets/img/icons/Curve-Loading.gif').default}
                  style={{ margin: 'auto', maxWeight: '200px', maxHeight: '200px', weight: '100%', height: '100%' }}
                />
              </Col>
            )}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}
