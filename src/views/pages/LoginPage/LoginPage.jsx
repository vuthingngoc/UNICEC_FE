import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';
// core components
import AuthHeader from 'components/Headers/AuthHeader.js';
import { useAuth } from 'contexts/AuthContext';
import { NotificationManager } from 'react-notifications';
import { loginByPath } from 'services/auth.service';
import jwtDecode from 'jwt-decode';
import { getDataByPath } from 'services/data.service';
import { useHistory } from 'react-router';

export default function Login() {
  const [focusedEmail, setfocusedEmail] = React.useState(false);
  const [focusedPassword, setfocusedPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { signInWithGoogle } = useAuth();
  const history = useHistory();

  // React.useEffect(() => {
  //   if (currentUser !== null && localStorage.getItem('accessToken') !== null) {
  //     // const role = jwtDecode(localStorage.getItem('accessToken')).ROLE;
  //     // if (role === '2') {
  //     //   history.push('/admin/home');
  //     // } else {
  //     //   history.push('/home');
  //     // }
  //     history.push('/admin/dashboard');
  //   }
  //   // document.body.classList.add('register-page');
  //   // document.body.classList.add('full-screen');
  //   return function cleanup() {
  //     document.body.classList.remove('register-page');
  //     document.body.classList.remove('full-screen');
  //   };
  // });

  async function loginWithAccessToken(accessTokenFirebase) {
    setIsSubmitting(true);
    const res = await loginByPath('api/v1/firebase', accessTokenFirebase);
    if (res.status === 200) {
      if (localStorage) {
        NotificationManager.success('Welcome', 'Login Success', 3000);
        localStorage.setItem('accessToken', res.data.token);
        localStorage.setItem('roleID', jwtDecode(res.data.token).RoleId);
        localStorage.setItem('universityID', jwtDecode(res.data.token).UniversityId);
        getClubAndUniversity(res.data.token);
      }
    } else {
      NotificationManager.warning('Server is busy now! Pleasy try againt', 'Server Error', 3000);
    }
  }

  async function getClubAndUniversity(accessToken) {
    const res = await getDataByPath('api/v1/club/user', accessToken);
    if (res.status === 200) {
      if (res.data.length > 0) {
        localStorage.setItem('clubID', res.data[0].id);
        setIsSubmitting(false);
      }
    } else {
      localStorage.setItem('clubID', '0');
    }
    history.push('/admin/thong-tin-clb');
  }

  const handleErrorLogin = (request) => {
    switch (request) {
      case 'Firebase: Error (auth/user-not-found).':
        NotificationManager.warning('Email chưa đăng ký', 'Login Error', 3000);
        break;
      case 'Firebase: Error (auth/wrong-password).':
        NotificationManager.warning('Email hoặc Mật khẩu sai', 'Login Error', 3000);
        break;
      default:
        NotificationManager.warning('Hệ thống lỗi', 'Login Error', 3000);
    }
  };

  return (
    <>
      <AuthHeader title="Chào mừng bạn đến với" lead="Nền tảng quản lý thông tin sự kiện và cuộc thi của Câu Lạc Bộ Sinh viên." />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary border-0 mb-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                  <small>Đăng nhập với</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    disabled={isSubmitting}
                    onClick={() => {
                      signInWithGoogle()
                        .then((response) => {
                          console.log(response);
                          setIsSubmitting(false);
                          loginWithAccessToken(response.user.accessToken);
                        })
                        .catch((error) => {
                          handleErrorLogin(error.message);
                          // setPassword('');
                          setIsSubmitting(false);
                        });
                    }}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img alt="..." src={require('assets/img/icons/common/google.svg').default} />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Đăng nhập với tài khoản</small>
                </div>
                <Form role="form">
                  <FormGroup
                    className={classnames('mb-3', {
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" onFocus={() => setfocusedEmail(true)} onBlur={() => setfocusedEmail(true)} />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Mật khẩu"
                        type="password"
                        onFocus={() => setfocusedPassword(true)}
                        onBlur={() => setfocusedPassword(true)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                    <label className="custom-control-label" htmlFor=" customCheckLogin">
                      <span className="text-muted">Nhớ mật khẩu</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="info" type="button" disabled={isSubmitting}>
                      Đăng nhập
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                  <small>Quên mật khẩu?</small>
                </a>
              </Col>
              <Col className="text-right" xs="6">
                <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                  <small>Tạo tài khoản mới</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
