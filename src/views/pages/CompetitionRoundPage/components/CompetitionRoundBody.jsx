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
  Modal,
  Row,
} from 'reactstrap';
import { newDateConvertToFormat } from 'services/formatData';
import { convertDateToShowWithTime } from 'services/formatData';
import styled from 'styled-components';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import { warningAlertConstants } from 'constants/alert.constants';
import { createDataByPath } from 'services/data.service';
import { statusCode } from 'constants/status.constants';
import CompetitionRoundDetailForm from './CompetitionRoundDetailForm';
import { competitionRoundStatus } from 'constants/competitionRound.constants';

const CardHover = styled.div`
  :hover {
    box-shadow: 0 4px 6px rgb(50 50 93 / 25%), 0 1px 3px rgb(0 0 0 / 8%);
    transform: scale(1.01);
    background-color: '#4141415c';
  }
`;

export default function CompetitionRoundBody(props) {
  const [inputRoundForm, setInputRoundForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState(newDateConvertToFormat(new Date()));
  const [endTime, setEndTime] = useState(newDateConvertToFormat(new Date()));
  const [alert, setalert] = useState(null);
  const [seed, setSeed] = useState(0);
  const [detailModal, setDetailModal] = useState(false);
  const [detailData, setDetailData] = useState({
    competition_id: props.CompetitionId,
    description: '',
    end_time: newDateConvertToFormat(new Date()),
    id: -1,
    seeds_point: 50,
    start_time: newDateConvertToFormat(new Date()),
    status: 1,
    title: '',
  });

  const sumSeedPoints = (arr) => {
    let sum = 0;
    arr.forEach((ele) => {
      sum += ele.seeds_point;
    });
    return sum;
  };

  const warningAlert = (message) => {
    setalert(
      <ReactBSAlert
        warning
        style={{ display: 'block', marginTop: '-100px' }}
        title="Cảnh báo"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="warning"
        confirmBtnText="Ok"
        btnSize=""
      >
        {message}
      </ReactBSAlert>
    );
  };

  const successAlert = (message) => {
    setalert(
      <ReactBSAlert
        success
        style={{ display: 'block', marginTop: '-100px' }}
        title="Thành công"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="warning"
        confirmBtnText="Ok"
        btnSize=""
      >
        {message}
      </ReactBSAlert>
    );
  };

  const convertDataToCreate = () => {
    return [
      {
        competition_id: parseInt(props.CompetitionId),
        title: title,
        description: description,
        start_time: startTime,
        end_time: endTime,
        seeds_point: parseInt(seed),
      },
    ];
  };

  const handleStatusShow = (status) => {
    switch (status) {
      case 1:
        return { text: competitionRoundStatus.active, color: 'info' };
      case 2:
        return { text: competitionRoundStatus.happening, color: 'success' };
      case 3:
        return { text: competitionRoundStatus.finish, color: 'warning' };
    }
  };

  const checkValidationToCreate = () => {
    if (title.trim() === '') {
      warningAlert(warningAlertConstants.titleValidation);
      return false;
    } else if (seed < 0) {
      warningAlert(warningAlertConstants.seedValidation);
      return false;
    }
    return true;
  };

  const resetInputForm = () => {
    setInputRoundForm(false);
    setTitle('');
    setDescription('');
    setSeed(0);
    setStartTime(newDateConvertToFormat(new Date()));
    setEndTime(newDateConvertToFormat(new Date()));
  };

  async function createCompetitonRound() {
    if (checkValidationToCreate() && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const path = 'api/v1/competition-rounds';
      const data = convertDataToCreate();
      console.log(data, 'data');
      const res = await createDataByPath(path, accessToken, data);
      if (res && res.status === statusCode.success) {
        successAlert('Tạo vòng thi thành công');
        resetInputForm();
        props.loadCompetitionRound(props.CompetitionId);
      } else if (res && res.status === statusCode.badrequest) {
        warningAlert('Ngày tháng không hợp lệ');
      } else {
        warningAlert('Kết nối tới máy chủ thất bại');
      }
      console.log(res);
    }
  }

  return (
    <>
      {alert}
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
        <Row className="justify-content-center mb-3">
          <Col lg="10" md="10" className="text-center">
            <span className="font-weight-bold text-lg">
              Các mốc thời gian của vòng thi vui lòng nằm trong khoảng bắt đầu và kết thúc của cuộc thi từ:
              <br />
              <span className="text-warning" style={{ fontWeight: '700' }}>
                {convertDateToShowWithTime(props.CompetitionData.start_time)}
              </span>{' '}
              tới{' '}
              <span className="text-warning" style={{ fontWeight: '700' }}>
                {convertDateToShowWithTime(props.CompetitionData.end_time)}
              </span>
            </span>
          </Col>
        </Row>
        {props.CompetitionRounds.length > 0 ? (
          props.CompetitionRounds.map((ele, value) => {
            return (
              <Row className="justify-content-center mb-0" key={`round-${value}`}>
                <Col lg="10">
                  <CardHover
                    className="card"
                    onClick={() => {
                      setDetailData(ele);
                      setDetailModal(true);
                    }}
                  >
                    <CardHeader className="mb-0 pb-0">
                      <Row className="mb-0">
                        <Col lg="10" md="12">
                          <CardTitle tag="h5" className="text-uppercase mb-0 text-default" style={{ fontWeight: '800' }}>
                            {ele.title}
                          </CardTitle>
                        </Col>
                        <Col lg="2" md="12">
                          <CardTitle>
                            <Badge className="font-weight-bold mb-1" pill color="success">
                              Điểm thưởng: <span style={{ fontWeight: '700' }}>{ele.seeds_point}</span>
                            </Badge>
                          </CardTitle>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Row className="mb-3">
                        <Col lg="12" md="12">
                          <span className="text-default font-weight-bold text-muted">{ele.description}</span>
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col className="col-auto">
                          <Badge className="font-weight-bold" pill color={handleStatusShow(ele.status).color}>
                            {handleStatusShow(ele.status).text}
                          </Badge>
                        </Col>
                      </Row>
                      <Row className="mb-0">
                        <Col lg="6" className="text-left">
                          <label
                            className="text-neutral mb-0 font-weight-bold text-sm bg-info"
                            style={{ borderRadius: '5px', padding: '2px 5px', fontFamily: 'sans-serif' }}
                          >
                            Bắt đầu: {convertDateToShowWithTime(ele.start_time)}
                          </label>
                        </Col>
                        <Col lg="6" className="text-right">
                          <label
                            className="text-neutral mb-0 font-weight-bold text-sm bg-warning"
                            style={{ borderRadius: '5px', padding: '2px 5px', fontFamily: 'sans-serif' }}
                          >
                            Kết thúc: {convertDateToShowWithTime(ele.end_time)}
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
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
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
                        <Input
                          className="text-default"
                          type="number"
                          min="0"
                          id="seeds"
                          value={seed}
                          onChange={(e) => {
                            setSeed(e.target.value);
                          }}
                        />
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
                    <Input
                      className="text-default text-muted font-weight-bold"
                      placeholder="Nhập nội dung"
                      type="text"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
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
                      <Input
                        defaultValue={startTime}
                        id="starttime"
                        type="datetime-local"
                        min={newDateConvertToFormat(new Date())}
                        onChange={(e) => {
                          setStartTime(e.target.value);
                        }}
                      />
                    </Col>
                    <Col lg="6" className="text-left">
                      <label className="form-control-label" htmlFor="endtime">
                        Kết thúc <span className="text-warning">*</span>
                      </label>
                      <Input
                        defaultValue={endTime}
                        id="endtime"
                        type="datetime-local"
                        min={newDateConvertToFormat(new Date())}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center" lg="6" md="12">
                      <Button
                        color="success"
                        style={{ margin: 'auto' }}
                        onClick={() => {
                          createCompetitonRound();
                        }}
                      >
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

      <Modal className="modal-dialog-centered" size="lg" isOpen={detailModal} toggle={() => setDetailModal(false)}>
        <div className="modal-body p-0">
          <CompetitionRoundDetailForm
            data={detailData}
            setDetailModal={setDetailModal}
            handleStatusShow={handleStatusShow}
            warningAlert={warningAlert}
            successAlert={successAlert}
            setalert={setalert}
            loadCompetitionRound={props.loadCompetitionRound}
          />
        </div>
      </Modal>
    </>
  );
}
