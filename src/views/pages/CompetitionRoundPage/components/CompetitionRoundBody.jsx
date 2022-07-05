import React, { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import { dateConvertToShow } from 'services/formatData';
import { convertDateFormat } from 'services/formatData';
import styled from 'styled-components';

const CardHover = styled.div`
  :hover {
    box-shadow: 0 4px 6px rgb(50 50 93 / 25%), 0 1px 3px rgb(0 0 0 / 8%);
    transform: scale(1.01);
    background-color: '#4141415c';
  }
`;

export default function CompetitionRoundBod(props) {
  const [inputRoundForm, setInputRoundForm] = useState(false);

  const sumSeedPoints = (arr) => {
    let sum = 0;
    arr.forEach((ele) => {
      sum += ele.seeds_point;
    });
    return sum;
  };

  return (
    <>
      <Container className="mt--6 bg-neutral" fluid>
        <Row className="justify-content-center">
          <Col className="text-center" lg="6" md="12">
            <Card style={{ height: '85%' }} className="bg-gradient-info border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle tag="h5" className="text-uppercase text-muted mb-0 text-white">
                      Tổng số vòng thi
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      {props.CompetitionRounds.length > 0 ? props.CompetitionRounds.length : 0}
                    </span>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="text-center" lg="6" md="12">
            <Card style={{ height: '85%' }} className="bg-gradient-success border-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle tag="h5" className="text-uppercase text-muted mb-0 text-white">
                      Tổng điểm thưởng
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0 text-white">
                      {props.CompetitionRounds.length > 0 ? sumSeedPoints(props.CompetitionRounds) : 0}
                    </span>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {props.CompetitionRounds.length > 0 ? (
          props.CompetitionRounds.map((ele, value) => {
            return (
              <Row className="justify-content-center mb-0" key={`round-${value}`}>
                <Col lg="10">
                  <CardHover className="card">
                    <CardHeader className="mb-0 pb-0">
                      <Row className="mb-0">
                        <Col lg="10" md="12">
                          <CardTitle tag="h5" className="text-uppercase mb-0 text-default" style={{ fontWeight: '800' }}>
                            {ele.title}
                          </CardTitle>
                        </Col>
                        <Col lg="2" md="12">
                          <Badge className="font-weight-bold mb-1" pill color="success">
                            {' '}
                            Điểm thưởng: {ele.seeds_point}{' '}
                          </Badge>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <span className="text-default font-weight-bold text-muted">{ele.description}</span>
                      <Row className="mb-0">
                        <Col lg="6" className="text-left">
                          <label
                            className="text-neutral mb-0 font-weight-bold text-sm bg-info"
                            style={{ borderRadius: '5px', padding: '2px 5px', fontFamily: 'sans-serif' }}
                          >
                            Bắt đầu: {convertDateFormat(ele.start_time)}
                          </label>
                        </Col>
                        <Col lg="6" className="text-right">
                          <label
                            className="text-neutral mb-0 font-weight-bold text-sm bg-warning"
                            style={{ borderRadius: '5px', padding: '2px 5px', fontFamily: 'sans-serif' }}
                          >
                            Kết thúc: {convertDateFormat(ele.end_time)}
                          </label>
                        </Col>
                      </Row>
                    </CardBody>
                  </CardHover>
                </Col>
              </Row>
            );
          })
        ) : (
          <></>
        )}

        {inputRoundForm === true ? (
          <Row className="justify-content-center mb-0">
            <Col lg="10">
              <Card>
                <CardHeader className="mb-0 pb-0">
                  <Row className="mb-1">
                    <Col lg="10" md="12">
                      <Label className="form-control-label" htmlFor="title">
                        Tên vòng thi <span className="text-warning">*</span>
                      </Label>
                      <InputGroup>
                        <Input
                          className="text-uppercase mb-0 text-default"
                          style={{ fontWeight: '800' }}
                          placeholder="Nhập tên vòng thi"
                          type="text"
                          id="title"
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="fas fa-file-signature" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col lg="2" md="12">
                      <Label className="form-control-label" htmlFor="seeds">
                        Điểm thưởng
                      </Label>
                      <InputGroup>
                        <Input className="text-default" type="number" defaultValue="0" min="0" id="seeds" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="fas fa-seedling" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Label className="form-control-label" htmlFor="description">
                    Nội dung
                  </Label>
                  <InputGroup className="mb-2">
                    <Input className="text-default text-muted font-weight-bold" placeholder="Nhập nội dung" type="text" id="description" />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i className="fas fa-paperclip" />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <Row className="mb-3">
                    <Col lg="6" className="text-left">
                      <label className="form-control-label" htmlFor="starttime">
                        Bắt đầu <span className="text-warning">*</span>
                      </label>
                      <Input defaultValue={dateConvertToShow(new Date())} id="starttime" type="datetime-local" min={dateConvertToShow(new Date())} />
                    </Col>
                    <Col lg="6" className="text-right">
                      <label className="form-control-label" htmlFor="endtime">
                        Kết thúc <span className="text-warning">*</span>
                      </label>
                      <Input defaultValue={dateConvertToShow(new Date())} id="endtime" type="datetime-local" min={dateConvertToShow(new Date())} />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center" lg="6" md="12">
                      <Button color="success" style={{ margin: 'auto' }}>
                        Lưu
                      </Button>
                    </Col>
                    <Col className="text-center" lg="6" md="12">
                      <Button
                        color="danger"
                        style={{ margin: 'auto' }}
                        onClick={() => {
                          setInputRoundForm(false);
                        }}
                      >
                        Đóng
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ) : (
          <></>
        )}

        <Row className="justify-content-center mb-0">
          <Col lg="10">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setInputRoundForm(true);
              }}
            >
              <CardHover className="card" style={{ minHeight: '150px', borderStyle: 'dashed', borderWidth: '2px', borderColor: 'gray' }}>
                <CardBody className="mt-2" style={{ margin: 'auto' }}>
                  <span style={{ fontSize: '3em', color: 'gray' }}>
                    <i className="fas fa-plus-circle " />
                  </span>
                </CardBody>
              </CardHover>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
