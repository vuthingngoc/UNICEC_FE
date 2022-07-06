import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  Col,
  Row,
  Button,
  InputGroup,
  InputGroupAddon,
  Modal,
  Container,
} from 'reactstrap';
import ReactQuill from 'react-quill';
import Dropzone from 'dropzone';
import Select2 from 'react-select2-wrapper';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import { getDataByPath } from 'services/data.service';
import { dateConvertToShow, formatTitle } from 'services/formatData';
import { createDataByPath } from 'services/data.service';
import SimpleHeader from 'components/Headers/SimpleHeader';
import Loading from '../components/Loading';
import { useHistory } from 'react-router';
import { warningAlertConstants } from 'constants/alert.constants';
import { successAlertConstants } from 'constants/alert.constants';
// core components
function CreateClubActivity() {
  const [reactQuillText, setReactQuillText] = useState('');
  const [title, setTitle] = useState('');
  const [competitionList, setCompetitionList] = useState(null);
  const [competitionId, setCompetitionId] = useState(0);
  const [alert, setalert] = useState(false);
  const [banner, setBanner] = useState(null);
  const [endTime, setEndTime] = useState('');
  const [seed, setSeed] = useState(0);
  const [priority, setPriority] = useState(1);
  const [formModal, setformModal] = useState(false);
  const history = useHistory();

  const toolbarOptions = [
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ];

  const formats = [
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'indent',
    'link',
    'color',
    'background',
    'align',
    'image',
    'video',
  ];

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

  async function loadCompetitionList(accessToken, clubId) {
    if (accessToken) {
      const path = 'api/v1/competitions';
      const data = `clubId=${clubId}`;
      const res = await getDataByPath(`${path}`, accessToken, data);
      console.log(res);
      if (res !== null && res !== undefined && res.status === 200) {
        let newData = [];
        if (res.data.items && res.data.items.length > 0) {
          setCompetitionId(res.data.items[0].id);
          res.data.items.forEach((ele) => {
            if (ele.status === 1 || ele.status === 2 || ele.status === 3 || ele.status === 6) {
              newData.push({ id: ele.id, text: ele.name });
            }
          });
          if (newData.length > 0) {
            setCompetitionId(newData[0].id);
          }
        }
        setCompetitionList(newData);
      } else {
        warningAlert(warningAlertConstants.timeout);
      }
    }
  }

  const successAlert = (message) => {
    setalert(
      <ReactBSAlert
        success
        style={{ display: 'block', marginTop: '-100px' }}
        title={message}
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="success"
        confirmBtnText="Ok"
        btnSize=""
      ></ReactBSAlert>
    );
  };

  const checkValidation = () => {
    if (title.trim() === '') {
      warningAlert(warningAlertConstants.titleValidation);
      return false;
    } else if (reactQuillText.trim() === '') {
      warningAlert(warningAlertConstants.contentsValidation);
      return false;
    }
    return true;
  };

  const convertDataToCreate = (clubId) => {
    if (clubId) {
      let activitiesEntity = [{ name: '', base64_string_entity: null }];
      if (banner && banner !== '') {
        const bannerBase64 = banner.split(',');
        activitiesEntity = [{ name: '', base64_string_img: bannerBase64[1] }];
      }
      return {
        competition_id: parseInt(competitionId),
        name: title,
        description: reactQuillText,
        seeds_point: parseInt(seed),
        ending: endTime,
        priority: parseInt(priority),
        list_activities_entities: activitiesEntity,
        club_id: parseInt(clubId),
      };
    }
    return null;
  };

  async function createActivity() {
    if (checkValidation()) {
      if (localStorage && localStorage.getItem('accessToken')) {
        const accessToken = localStorage.getItem('accessToken');
        const club_id = localStorage.getItem('clubID');
        const path = 'api/v1/competition-activities';
        const data = convertDataToCreate(club_id);
        console.log(data);
        if (data) {
          const res = await createDataByPath(path, accessToken, data);
          console.log(res);
          if (res !== null && res.status === 200) {
            successAlert(successAlertConstants.createActivity);
            setformModal(false);
            setReactQuillText('');
            setTitle('');
          } else if (res !== null && res.status === 400) {
            if (res.data === 'Date not suitable') {
              warningAlert(warningAlertConstants.dateTimeValidation);
            }
          } else {
            warningAlert(warningAlertConstants.timeout);
          }
          setformModal(false);
        }
      }
    }
  }

  useEffect(() => {
    let currentSingleFile = undefined;
    Dropzone.autoDiscover = false;
    //load API first time
    if (localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const clubId = localStorage.getItem('clubID');
      if (competitionList === null) {
        loadCompetitionList(accessToken, clubId);
      }
    }
    setEndTime(dateConvertToShow(new Date()));

    // single dropzone file - accepts only images
    if (competitionList && competitionList.length > 0) {
      new Dropzone(document.getElementById('dropzone-single'), {
        url: '/',
        thumbnailWidth: null,
        thumbnailHeight: null,
        previewsContainer: document.getElementsByClassName('dz-preview-single')[0],
        previewTemplate: document.getElementsByClassName('dz-preview-single')[0].innerHTML,
        dictDefaultMessage: 'Thả ảnh vào đây hoặc click để chọn',
        maxFiles: 1,
        acceptedFiles: 'image/*',
        init: function () {
          this.on('addedfile', function (file) {
            if (currentSingleFile) {
              this.removeFile(currentSingleFile);
            }
            currentSingleFile = file;
            const reader = new FileReader();
            reader.onload = function (event) {
              const base64String = event.target.result;
              setBanner(base64String);
            };
            reader.readAsDataURL(file);
          });
        },
      });
      document.getElementsByClassName('dz-preview-single')[0].innerHTML = '';
    }
  }, [competitionList]);

  return (
    <>
      {alert}
      <SimpleHeader name="Tạo hoạt động" parentName="Câu lạc bộ" linkParent="/" />
      <Container className="mt--6 bg-neutral" fluid>
        {competitionList && competitionList.length > 0 ? (
          <Card>
            <CardHeader>
              <h3 className="mb-0">Tạo mới hoạt động</h3>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="8">
                  {competitionList ? (
                    <FormGroup className="row">
                      <Label className="form-control-label" md="2">
                        Chọn cuộc thi hoặc sự kiện
                      </Label>
                      <Col md="10">
                        <Form>
                          <Select2
                            className="form-control"
                            defaultValue={competitionId}
                            value={competitionId}
                            options={{
                              placeholder: 'Select',
                            }}
                            data={competitionList}
                          />
                        </Form>
                      </Col>
                    </FormGroup>
                  ) : (
                    <></>
                  )}
                  <FormGroup className="row">
                    <Label className="form-control-label" md="2">
                      Tên hoạt động
                    </Label>
                    <Col md="10">
                      <InputGroup>
                        <Input
                          className="text-default"
                          id="title"
                          placeholder="Nhập tên hoạt động"
                          type="text"
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                        />
                        <InputGroupAddon addonType="append">
                          <Button
                            color="default"
                            outline
                            type="button"
                            onClick={() => {
                              setTitle(formatTitle(title));
                            }}
                          >
                            Format
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup className="row">
                    <Label className="form-control-label" htmlFor="example-search-input" md="2">
                      Miêu tả chi tiết
                    </Label>
                    <Col md="10">
                      <Form>
                        <div data-quill-placeholder="Quill WYSIWYG" data-toggle="quill" />
                        <ReactQuill
                          style={{ display: 'block', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
                          value={reactQuillText}
                          clipboard={{
                            matchVisual: false,
                          }}
                          onChange={(value) => setReactQuillText(value)}
                          theme="snow"
                          modules={{
                            toolbar: toolbarOptions,
                          }}
                          formats={formats}
                        />
                      </Form>
                    </Col>
                  </FormGroup>
                  <FormGroup className="row">
                    <Label className="form-control-label" htmlFor="example-color-input" md="2">
                      Ảnh minh họa
                    </Label>
                    <Col md="10">
                      <div className="dropzone dropzone-single mb-3" id="dropzone-single">
                        <div className="fallback">
                          <div className="custom-file">
                            <input className="custom-file-input" id="projectCoverUploads" type="file" />
                            <label className="custom-file-label" htmlFor="projectCoverUploads">
                              Chọn Ảnh
                            </label>
                          </div>
                        </div>
                        <div className="dz-preview dz-preview-single">
                          <div className="dz-preview-cover">
                            <img alt="..." className="dz-preview-img" data-dz-thumbnail="" />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </FormGroup>
                </Col>
                <Col md="4">
                  <Row className="align-items-center justify-content-lg-between mb-3">
                    <Col md="12">
                      <FormGroup className="row">
                        <Label className="form-control-label" htmlFor="example-datetime-local-input" md="4">
                          Thời gian kết thúc
                        </Label>
                        <Col md="8">
                          <Input
                            defaultValue={dateConvertToShow(new Date())}
                            id="enddaytime"
                            type="datetime-local"
                            onChange={(e) => {
                              setEndTime(e.target.value);
                            }}
                            min={dateConvertToShow(new Date())}
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col md="12">
                      <FormGroup className="row">
                        <Label className="form-control-label" md="4">
                          Mức độ ưu tiên
                        </Label>
                        <Col md="8">
                          <Form>
                            <Select2
                              className="form-control"
                              defaultValue={priority}
                              value={priority}
                              onChange={(e) => {
                                setPriority(e.target.value);
                              }}
                              data={[
                                { id: '0', text: 'Cao' },
                                { id: '1', text: 'Trung Bình' },
                                { id: '2', text: 'Thấp' },
                              ]}
                            />
                          </Form>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-3">
                    <Col md="12">
                      <FormGroup className="row">
                        <Label className="form-control-label" htmlFor="example-time-input" md="4">
                          Điểm thưởng
                        </Label>
                        <Col md="8">
                          <Input
                            placeholder="Nhập số seeds"
                            id="example-time-input"
                            type="number"
                            min="0"
                            value={seed}
                            onChange={(e) => {
                              setSeed(e.target.value);
                            }}
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col className="text-center">
                      <Button
                        color="primary"
                        type="button"
                        onClick={() => {
                          setformModal(true);
                          createActivity();
                        }}
                      >
                        Tạo hoạt động
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        ) : competitionList && competitionList.length === 0 ? (
          <Card>
            <CardBody>
              <Row className="align-items-center">
                <Col lg="12" className="text-center text-default">
                  <h2>Danh sách cuộc thi trống</h2>
                  <h3>Vui lòng tạo cuộc thi trước</h3>
                  <img alt="..." src={require('assets/img/icons/empty.jpg').default} />
                  <br />
                  <Button
                    color="primary"
                    type="button"
                    onClick={() => {
                      history.push('/admin/tao-cuoc-thi');
                    }}
                  >
                    Tạo cuộc thi
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        ) : (
          <Row>
            <img alt="..." src={require('assets/img/icons/Curve-Loading.gif').default} style={{ margin: 'auto' }} />
          </Row>
        )}
        <Modal className="modal-dialog-centered" size="sm" isOpen={formModal}>
          <div className="modal-body p-0 bg-transparent">
            <Loading style={{ margin: 'auto' }} />
          </div>
        </Modal>
      </Container>
    </>
  );
}

export default CreateClubActivity;
