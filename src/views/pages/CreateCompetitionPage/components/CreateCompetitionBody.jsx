/*eslint-disable*/
import Dropzone from 'dropzone';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import Select2 from 'react-select2-wrapper';
import ReactBSAlert from 'react-bootstrap-sweetalert';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';

const CompetitionType = [
  { id: '1', text: 'Học thuật' },
  { id: '2', text: 'Nghệ thuật' },
  { id: '3', text: 'Tài năng' },
  { id: '4', text: 'Thể thao' },
  { id: '5', text: 'Triết học' },
  { id: '6', text: 'Khoa học' },
  { id: '7', text: 'Công nghệ' },
];

const Majors = [
  { id: '1', text: 'Tất cả' },
  { id: '2', text: 'Kinh tế' },
  { id: '3', text: 'Kỹ thuật' },
  { id: '4', text: 'Ngôn Ngữ' },
  { id: '5', text: 'Truyền thông' },
];

export default function CreateCompetitionBody() {
  const [reactQuillText, setReactQuillText] = useState('');
  const [feeCheckbox, setFeeCheckbox] = useState(false);
  const [groupLimit, setGroupLimit] = useState(false);
  const [influencerModal, setinfluencerModal] = useState(false);
  const [teamModal, setTeamModal] = useState(false);
  const [imgBase64, setImgBase64] = useState('https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png');
  const [fullname, setFullname] = useState('');
  const [title, setTitle] = useState('');
  const [Influencer, setInfluencer] = useState([]);
  const [alert, setalert] = React.useState(false);

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

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleImageChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      let _convertImageToBase64 = toBase64(e.target.files[0]);
      Promise.all([_convertImageToBase64]).then((values) => {
        setImgBase64(values[0]);
      });
    }
  };

  const addInfluencer = (name, base64) => {
    const newInfluencer = [...Influencer];
    newInfluencer.push({ name: name, image: base64 });
    setInfluencer(newInfluencer);
    setFullname('');
    setImgBase64('https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png');
  };

  const removeInfluencer = (index) => {
    console.log(index);
    const newInfluencer = [...Influencer];
    newInfluencer.splice(index, 1);
    setInfluencer(newInfluencer);
    setFullname('');
    setImgBase64('https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png');
  };

  const formatTitle = (title) => {
    if (title.trim() !== '') {
      let arr = title.split(' ');
      arr = arr.filter((e) => e !== '');
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      const formated = arr.join(' ');
      setTitle(formated);
    }
  };

  const warningAlert = () => {
    setalert(
      <ReactBSAlert
        warning
        style={{ display: 'block', marginTop: '-100px' }}
        title="Warning"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        confirmBtnBsStyle="warning"
        confirmBtnText="Ok"
        btnSize=""
      >
        Vui lòng điền đầy đủ thông tin.
      </ReactBSAlert>
    );
  };

  useEffect(() => {
    let currentSingleFile = undefined;
    // single dropzone file - accepts only images
    new Dropzone(document.getElementById('dropzone-single'), {
      url: '/',
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName('dz-preview-single')[0],
      previewTemplate: document.getElementsByClassName('dz-preview-single')[0].innerHTML,
      maxFiles: 1,
      acceptedFiles: 'image/*',
      init: function () {
        this.on('addedfile', function (file) {
          if (currentSingleFile) {
            this.removeFile(currentSingleFile);
          }
          currentSingleFile = file;
        });
      },
    });
    document.getElementsByClassName('dz-preview-single')[0].innerHTML = '';
  }, []);

  return (
    <>
      {alert}
      <Container className="mt--6" fluid>
        <Row className="justify-content-center" style={{ marginLeft: '50px' }}>
          <Col md="8">
            <Card className="card-wrapper" lg="8">
              <CardHeader>
                <Row>
                  <Col className="col-auto">
                    <h3 className="mb-0" style={{ marginTop: '10px' }}>
                      Tạo cuộc thi của bạn:
                      <span className="text-success" style={{ marginLeft: '10px' }}>
                        Thể loại cuộc thi
                      </span>
                    </h3>
                  </Col>
                  <Col className="col-auto">
                    <Select2
                      className="form-control"
                      defaultValue="1"
                      options={{
                        placeholder: 'Tìm kiếm',
                      }}
                      data={CompetitionType}
                    />
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row className="mb-3">
                  <Col md="12">
                    <label className="form-control-label" htmlFor="title">
                      Tiêu đề <span className="text-warning">*</span>
                    </label>
                    <InputGroup>
                      <Input
                        className="text-default"
                        id="title"
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
                            formatTitle(title);
                          }}
                        >
                          Format
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="6">
                    <label className="form-control-label" htmlFor="startdaytime">
                      Thời gian bắt đầu cuộc thi <span className="text-warning">*</span>
                    </label>
                    <Input defaultValue={new Date().getFullYear() + '-11-23T10:30:00'} id="startdaytime" type="datetime-local" />
                  </Col>
                  <Col md="6">
                    <label className="form-control-label" htmlFor="startdaytime">
                      Thời gian kết thúc cuộc thi <span className="text-warning">*</span>
                    </label>
                    <Input defaultValue={new Date().getFullYear() + '-11-23T10:30:00'} id="startdaytime" type="datetime-local" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="12">
                    <label className="form-control-label" htmlFor="startdaytime">
                      Thời gian kết thúc đăng ký <span className="text-warning">*</span>
                    </label>
                    <Input defaultValue={new Date().getFullYear() + '-11-23T10:30:00'} id="startdaytime" type="datetime-local" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="6">
                    <label className="form-control-label" htmlFor="locationname">
                      Địa chỉ <span className="text-warning">*</span>
                    </label>
                    <InputGroup>
                      <Input type="text" id="locationname" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="fas fa-map-marker" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label className="form-control-label" htmlFor="locationname">
                      Tên địa điểm
                    </label>
                    <InputGroup>
                      <Input type="text" id="locationname" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="fas fa-building" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="12">
                    <label className="form-control-label" htmlFor="startdaytime">
                      Thời gian bắt đầu cuộc thi <span className="text-warning">*</span>
                    </label>
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
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="12">
                    <label className="form-control-label" htmlFor="startdaytime">
                      Ảnh bài viết <span className="text-warning">*</span>
                    </label>
                    <br />
                    <small className="mb-3" style={{ color: 'gray' }}>
                      Ảnh có dung lượng dưới 200kb và kích cỡ tiêu chuẩn 700x400px. Các ảnh kích cỡ lớn hơn đều có thể gây chậm hoặc không tải được.
                      Hỗ trợ các định dạng ảnh JPG, PNG, GIF, JPEG. Bạn có thể vào <a href="https://tool.ybox.vn/resize-image?s=ybox">đây</a> để giảm
                      kích thước ảnh
                    </small>
                    <div className="dropzone dropzone-single mb-3" id="dropzone-single">
                      <div className="fallback">
                        <div className="custom-file">
                          <input className="custom-file-input" id="projectCoverUploads" type="file" />
                          <label className="custom-file-label" htmlFor="projectCoverUploads">
                            Choose file
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
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-wrapper" lg="4" style={{ position: 'sticky', top: '10px' }}>
              <CardHeader>
                <Row>
                  <Col className="col-auto">
                    <h3>Thông tin bổ sung: </h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="col-auto">
                    <h3>
                      Chọn chuyên ngành<span className="text-warning">*</span>:{' '}
                    </h3>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Select2
                      multiple
                      className="form-control"
                      options={{
                        placeholder: 'Tìm kiếm',
                      }}
                      data={Majors}
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col className="col-auto">
                    <h3>Giám khảo và khách mời:</h3>
                    {Influencer.length > 0 ? (
                      <Row className="align-items-center mb-3">
                        {Influencer.map((ele, value) => {
                          return (
                            <Col className="col-auto mb-1" key={`influ-${value}`}>
                              <a
                                href="/"
                                id={`tooltip-${value}`}
                                onClick={(e) => {
                                  removeInfluencer(value);
                                  e.preventDefault(e);
                                }}
                              >
                                <img style={{ width: '50px', height: '50px' }} alt="..." className="img-fluid rounded-circle" src={ele.image} />
                              </a>
                              <UncontrolledTooltip delay={0} target={`tooltip-${value}`}>
                                {ele.name} <br />
                                Click to Remove
                              </UncontrolledTooltip>
                            </Col>
                          );
                        })}
                      </Row>
                    ) : (
                      <></>
                    )}
                    <Button
                      outline
                      color="info"
                      onClick={() => {
                        setinfluencerModal(true);
                      }}
                    >
                      Thêm danh sách
                    </Button>
                    {/*Influents add form*/}
                    <Modal className="modal-dialog-centered" size="md" isOpen={influencerModal} toggle={() => setinfluencerModal(false)}>
                      <div className="modal-body p-0">
                        <Card className="bg-secondary border-0 mb-0" lg="9">
                          <CardHeader className="bg-transparent pb-5">
                            <div className="text-center">
                              <h3>Thông tin giám khảo hoặc khách mời</h3>
                            </div>
                          </CardHeader>
                          <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center mb-3">
                              <img
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                style={{ width: '140px', height: '140px' }}
                                alt="..."
                                src={imgBase64}
                              />
                            </div>
                            <label className="form-control-label" htmlFor="startdaytime">
                              Họ và tên <span className="text-warning">*</span>
                            </label>
                            <Input
                              value={fullname}
                              valid={fullname !== ''}
                              invalid={fullname === ''}
                              type="text"
                              placeholder="Tên đầy đủ"
                              onChange={(e) => {
                                setFullname(e.target.value);
                              }}
                            />
                            <div className="custom-file">
                              <input
                                className="custom-file-input"
                                id="customFileLang"
                                lang="en"
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e)}
                              />
                              <label className="custom-file-label" htmlFor="customFileLang">
                                Select file
                              </label>
                            </div>
                            <div className="text-center">
                              <Button
                                className="my-4"
                                color="primary"
                                type="button"
                                onClick={() => {
                                  if (fullname.trim() !== '') {
                                    setinfluencerModal(false);
                                    addInfluencer(fullname, imgBase64);
                                  } else {
                                    warningAlert();
                                  }
                                }}
                              >
                                Thêm mới +
                              </Button>
                              <Button className="my-4" color="danger" type="button" onClick={() => setinfluencerModal(false)}>
                                Đóng
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    </Modal>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col className="col-auto">
                    <Row style={{ marginLeft: '5px' }}>
                      <h3>Thu phí tham gia: </h3>
                      <label style={{ marginLeft: '10px' }} className="custom-toggle mr-1">
                        <input
                          defaultChecked={feeCheckbox}
                          type="checkbox"
                          onChange={() => {
                            setFeeCheckbox(!feeCheckbox);
                          }}
                        />
                        <span className="custom-toggle-slider rounded-circle" data-label-on="Có" />
                      </label>
                    </Row>
                    <InputGroup style={{ display: `${feeCheckbox ? 'flex' : 'none'}` }}>
                      <Input defaultValue={1000} type="number" id="fee" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>vnđ</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-auto">
                    <h3>Quy mô: </h3>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md="12">
                    <Input type="select">
                      <option>Trong Trường</option>
                      <option>Liên Trường</option>
                      <option>Trong câu lạc bộ</option>
                    </Input>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-auto">
                    <h3>Tùy chỉnh nhóm và người tham dự: </h3>
                  </Col>
                </Row>
                <Row className="align-items-center mb-3">
                  <Col className="col-auto">
                    <Button
                      color="warning"
                      outline
                      onClick={() => {
                        setTeamModal(true);
                      }}
                    >
                      Thiết lập
                    </Button>
                  </Col>
                </Row>
                <Modal className="modal-dialog-centered" size="lg" isOpen={teamModal} toggle={() => setTeamModal(false)}>
                  <div className="modal-body p-0">
                    <Card className="bg-secondary border-0 mb-0" lg="9">
                      <CardHeader className="bg-transparent pb-5">
                        <div className="text-center">
                          <h3>Tùy chỉnh nhóm và người tham dự:</h3>
                        </div>
                      </CardHeader>
                      <CardBody className="px-lg-5 py-lg-5">
                        <Row className="mb-3">
                          <Col md="12">
                            <label className="form-control-label" htmlFor="max-participant">
                              Tối đa người đăng ký <span className="text-warning">*</span>
                            </label>
                            <InputGroup>
                              <Input className="text-default" id="max-participant" type="number" defaultValue={100} min={1} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText>
                                  <i className="fas fa-users" />
                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col md="12">
                            <label className="form-control-label" htmlFor="max-participant">
                              Giới hạn nhóm đăng ký: <span className="text-warning">*</span>
                            </label>
                            <InputGroup>
                              <Input className="text-default" id="max-participant" type="number" defaultValue={25} min={1} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText>
                                  <i class="fas fa-user-friends" />
                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col md="12">
                            <Row style={{ marginLeft: '0px' }}>
                              <label className="form-control-label mr-3" htmlFor="max-participant">
                                Giới hạn thành viên trong nhóm <span className="text-warning">*</span>
                              </label>
                              Chính xác
                              <label style={{ marginLeft: '10px' }} className="custom-toggle mr-1">
                                <input
                                  defaultChecked={groupLimit}
                                  type="checkbox"
                                  onChange={() => {
                                    setGroupLimit(!groupLimit);
                                  }}
                                />
                                <span className="custom-toggle-slider rounded-circle" />
                              </label>{' '}
                              Khoảng chừng
                            </Row>
                            <Row className="mb-3">
                              {groupLimit === false ? (
                                <Col md="12">
                                  <InputGroup>
                                    <Input className="text-default" id="max-participant" type="number" defaultValue={4} min={1} />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>
                                        <i className="fas fa-users-cog" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                              ) : (
                                <>
                                  <Col md="5">
                                    <Input className="text-default" id="max-participant" type="number" defaultValue={4} min={1} />
                                  </Col>
                                  <Col md="2" className="text-center">
                                    <label className="form-control-label mt-2" htmlFor="max-participant" style={{ margin: 'auto' }}>
                                      -
                                    </label>
                                  </Col>
                                  <Col md="5">
                                    <Input className="text-default" id="max-participant" type="number" defaultValue={5} min={1} />
                                  </Col>
                                </>
                              )}
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="text-center" md="6">
                            <Button
                              className="my-4"
                              color="primary"
                              type="button"
                              onClick={() => {
                                if (fullname.trim() !== '') {
                                  setinfluencerModal(false);
                                  addInfluencer(fullname, imgBase64);
                                } else {
                                  warningAlert();
                                }
                              }}
                            >
                              Lưu thông tin
                            </Button>
                          </Col>
                          <Col className="text-center" md="6">
                            <Button className="my-4" color="danger" type="button" onClick={() => setTeamModal(false)}>
                              Đóng
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </div>
                </Modal>

                <Row>
                  <Col className="col-auto">
                    <h3>Tùy chỉnh: </h3>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Button color="success" style={{ margin: 'auto' }}>
                    Hoàn tất
                  </Button>
                  <Button color="info" style={{ margin: 'auto' }}>
                    Xem trước
                  </Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
