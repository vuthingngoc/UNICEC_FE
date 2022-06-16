import React from 'react';
import { Card, CardHeader, CardBody, Label, FormGroup, Form, Input, Col, Row, Button } from 'reactstrap';
import ReactQuill from 'react-quill';
import Dropzone from 'dropzone';
import Select2 from 'react-select2-wrapper';
//import ReactDatetime from 'react-datetime';
// core components
function CreateClubActivity() {
  const [reactQuillText, setReactQuillText] = React.useState('');
  React.useEffect(() => {
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
      <Card>
        <CardHeader>
          <h3 className="mb-0">Tạo mới hoạt động</h3>
        </CardHeader>
        <CardBody>
          <FormGroup className="row">
            <Label className="form-control-label" md="2">
              Tên cuộc thi hoặc sự kiện
            </Label>
            <Col md="10">
              <Form>
                <Select2
                  className="form-control"
                  defaultValue="1"
                  options={{
                    placeholder: 'Select',
                  }}
                  data={[
                    { id: '1', text: 'AAA' },
                    { id: '2', text: 'BBB' },
                    { id: '3', text: 'CCC' },
                  ]}
                />
              </Form>
            </Col>
          </FormGroup>
          <FormGroup className="row">
            <Label className="form-control-label" md="2">
              Tên hoạt động
            </Label>
            <Col md="10">
              <Input placeholder="Nhập tên hoạt động" type="text" />
            </Col>
          </FormGroup>
          <Form>
            <FormGroup className="row">
              <Label className="form-control-label" htmlFor="example-search-input" md="2">
                Miêu tả chi tiết
              </Label>
              <Col md="10">
                <Form>
                  <div data-quill-placeholder="Quill WYSIWYG" data-toggle="quill" />
                  <ReactQuill
                    value={reactQuillText}
                    onChange={(value) => setReactQuillText(value)}
                    theme="snow"
                    modules={{
                      toolbar: [
                        ['bold', 'italic'],
                        ['link', 'blockquote', 'code', 'image'],
                        [
                          {
                            list: 'ordered',
                          },
                          {
                            list: 'bullet',
                          },
                        ],
                      ],
                    }}
                  />
                </Form>
              </Col>
            </FormGroup>
            <FormGroup className="row">
              <Label className="form-control-label" htmlFor="example-color-input" md="2">
                Ảnh
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
            <FormGroup className="row">
              <Label className="form-control-label" htmlFor="example-number-input" md="2">
                Số lượng thành viên
              </Label>
              <Col md="10">
                <Input placeholder="Nhập số lượng thành viên trong hoạt động này" id="example-number-input" type="number" />
              </Col>
            </FormGroup>
            <Row>
              <Col md="6">
                <FormGroup className="row">
                  <Label className="form-control-label" htmlFor="example-datetime-local-input" md="4">
                    Thời gian bắt đầu
                  </Label>
                  <Col md="8">
                    <Input defaultValue={new Date().getFullYear() + '-11-23T10:30:00'} id="example-datetime-local-input" type="datetime-local" />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup className="row">
                  <Label className="form-control-label" htmlFor="example-datetime-local-input" md="4">
                    Thời gian kết thúc
                  </Label>
                  <Col md="8">
                    <Input defaultValue={new Date().getFullYear() + '-11-23T10:30:00'} id="example-datetime-local-input" type="datetime-local" />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup className="row">
                  <Label className="form-control-label" md="4">
                    Mức độ ưu tiên
                  </Label>
                  <Col md="8">
                    <Form>
                      <Select2
                        className="form-control"
                        defaultValue="1"
                        options={{
                          placeholder: 'Chọn mức độ ưu tiên',
                        }}
                        data={[
                          { id: '1', text: 'Cao' },
                          { id: '2', text: 'Trung Bình' },
                          { id: '3', text: 'Thấp' },
                          { id: '4', text: 'Khác' },
                        ]}
                      />
                    </Form>
                  </Col>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup className="row">
                  <Label className="form-control-label" htmlFor="example-time-input" md="4">
                    Dự kiến thời gian hoàn thành ( /ngày)
                  </Label>
                  <Col md="8">
                    <Input placeholder="0:00 ( /ngày)" id="example-time-input" type="number" />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <Button color="primary" type="button">
            Tạo hoạt động
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default CreateClubActivity;
