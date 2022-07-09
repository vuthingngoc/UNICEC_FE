import { warningAlertConstants } from 'constants/alert.constants';
import { statusCode } from 'constants/status.constants';
import React, { useState } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';
import { deleteDataByPath } from 'services/data.service';
import { updateDataByPath } from 'services/data.service';
import { newDateConvertToFormat } from 'services/formatData';
import ReactBSAlert from 'react-bootstrap-sweetalert';

export default function CompetitionRoundDetailForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState(newDateConvertToFormat(new Date()));
  const [endTime, setEndTime] = useState(newDateConvertToFormat(new Date()));
  const [seed, setSeed] = useState(0);
  const [editable, setEditable] = useState(false);

  const convertDataToUpdate = () => {
    return {
      id: parseInt(props.data.id),
      title: title,
      description: description,
      start_time: startTime,
      end_time: endTime,
      number_of_team: 0,
      seeds_point: parseInt(seed),
    };
  };

  const checkValidationToUpdate = () => {
    if (title.trim() === '') {
      props.warningAlert(warningAlertConstants.titleValidation);
      return false;
    } else if (seed < 0) {
      props.warningAlert(warningAlertConstants.seedValidation);
      return false;
    }
    return true;
  };

  const warningAlertDelete = (message) => {
    props.setalert(
      <ReactBSAlert
        info
        style={{ display: 'block', marginTop: '-100px' }}
        showCancel
        confirmBtnText="Đồng ý"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="info"
        cancelBtnText="Hủy hành động"
        title="Bạn có đồng ý xóa vòng thi không ?"
        onConfirm={() => deleteCompetitionRound()}
        onCancel={() => props.setalert(null)}
        focusCancelBtn
      >
        {message}
      </ReactBSAlert>
    );
  };

  async function deleteCompetitionRound() {
    if (localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const path = `api/v1/competition-rounds`;
      const id = props.data.id;
      const res = await deleteDataByPath(path, accessToken, id);
      if (res && res.status === statusCode.success) {
        props.successAlert('Xóa vòng thi thành công');
        props.loadCompetitionRound(props.CompetitionId);
        props.setDetailModal(false);
      } else {
        props.warningAlert('Có lỗi xảy ra khi xóa vòng thi');
      }
      console.log(res);
    }
  }

  async function updateCompetitionRound() {
    if (checkValidationToUpdate() && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const path = 'api/v1/competition-rounds';
      const data = convertDataToUpdate();
      console.log(data, 'data');
      const res = await updateDataByPath(path, accessToken, data);
      if (res && res.status === statusCode.success) {
        props.successAlert('Cập nhật vòng thi thành công');
        props.loadCompetitionRound(props.CompetitionId);
      } else if (res && res.status === statusCode.badrequest) {
        props.warningAlert('Ngày tháng không hợp lệ');
      } else {
        props.warningAlert('Kết nối tới máy chủ thất bại');
      }
      console.log(res);
    }
  }

  React.useEffect(() => {
    if (props.data) {
      const data = props.data;
      setTitle(data.title);
      setDescription(data.description);
      setStartTime(data.start_time);
      setEndTime(data.end_time);
      setSeed(data.seeds_point);
      setEditable(false);
    }
    console.log(props.data);
  }, [props.data]);

  return (
    <>
      <Card lg="9">
        <CardHeader>
          <Row className="align-items-center">
            <Col lg="6" md="12">
              <Badge className="font-weight-bold" pill color={props.handleStatusShow(props.data.status).color}>
                {props.handleStatusShow(props.data.status).text}
              </Badge>
            </Col>
            <Col lg="6" md="12" className="text-right">
              <Button
                color={editable ? 'warning' : 'info'}
                onClick={() => {
                  setEditable(!editable);
                }}
                size="sm"
              >
                {editable ? 'Tắt chỉnh sửa' : 'Chỉnh sửa'}
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardHeader className="mb-0 pb-0">
          <Row className="mb-1">
            <Col lg="9" md="12">
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
                  disabled={!editable}
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
            <Col lg="3" md="12">
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
                  disabled={!editable}
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
              disabled={!editable}
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
                disabled={!editable}
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
                disabled={!editable}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col className="text-center" lg="6" md="12">
              {editable ? (
                <Button
                  color="success"
                  style={{ margin: 'auto' }}
                  onClick={() => {
                    updateCompetitionRound();
                  }}
                >
                  Lưu
                </Button>
              ) : (
                <Button
                  color="warning"
                  style={{ margin: 'auto' }}
                  onClick={() => {
                    warningAlertDelete('Vòng thi đã xóa sẽ không thể hoàn tác');
                  }}
                >
                  Xóa
                </Button>
              )}
            </Col>
            <Col className="text-center" lg="6" md="12">
              <Button color="default" style={{ margin: 'auto' }} onClick={() => props.setDetailModal(false)}>
                Đóng
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
