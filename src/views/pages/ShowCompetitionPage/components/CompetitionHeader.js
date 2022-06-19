import PropTypes from 'prop-types';
import React from 'react';
// reactstrap components
import { Container, Row, Col, Card } from 'reactstrap';

function CompetitionHeader(props) {
  return (
    <>
      {props.clubData ? (
        <div className="header bg-grey pb-5">
          <Container fluid>
            <div className="header-body">
              <Card className="pl-4 pr-4">
                <Row className="align-items-center py-4">
                  <Col lg="9" xs="10">
                    <Row>
                      <Col className="col-auto">
                        <a className="avatar rounded-circle" href={props.clubData.club_fanpage} target="blank">
                          <img
                            alt="..."
                            src={
                              props.clubData.image
                                ? props.clubData
                                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                            }
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        <h3 className="mb-0 text-default" style={{ fontWeight: '900', fontFamily: 'sans-serif', margin: 'auto' }}>
                          <a href={props.clubData.club_fanpage} target="blank">
                            {props.clubData.name}
                          </a>
                        </h3>
                        <span style={{ color: 'grey', fontFamily: 'cursive' }}>{props.clubData.club_contact}</span>{' '}
                      </div>
                    </Row>
                  </Col>
                  <Col className="text-right" lg="3" xs="2">
                    <p className="font-weight-bold text-default mb-0" style={{ fontFamily: 'cursive', margin: 'auto' }}>
                      {props.clubData.university_name}
                    </p>
                  </Col>
                </Row>
              </Card>
            </div>
          </Container>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

CompetitionHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default CompetitionHeader;
