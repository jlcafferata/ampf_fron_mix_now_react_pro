import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../../_actions";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Row,
  Col
} from "reactstrap";

//import logo from "../../assets/img/logo-1.png";
import progress from "../../assets/img/progress.gif";

import { Button } from "../../components";

class DatosUsuario extends Component {
  constructor(props) {
    super(props);
    //this.props.logout();
    this.state = {
      email: "",
      password: "",
      submitted: false,
      login: {
        emailState: "",
        passwordState: ""
      }
    };

    /*this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.loginPassword = this.loginPassword.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);*/
  }

  /*handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }
  loginEmail(e) {
    var login = this.state.login;
    login["email"] = e.target.value;
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.handleChange(e);
    if (emailRex.test(e.target.value)) {
      login["emailState"] = "has-success";
    } else {
      login["emailState"] = "has-danger";
    }
    this.setState({ login });
  }
  loginPassword(e) {
    var login = this.state.login;
    login["password"] = e.target.value;
    this.handleChange(e);
    if (e.target.value.length > 0) {
      login["passwordState"] = "has-success";
    } else {
      login["passwordState"] = "has-danger";
    }
    this.setState({ login });
  }
  loginSubmit(e) {
    var login = this.state.login;
    var error = "";

    if (login["emailState"] !== "has-success") {
      login["emailState"] = "has-danger";
      error = "email";
    }
    if (login["passwordState"] !== "has-success") {
      login["passwordState"] = "has-danger";
      error = "password";
    }
    if (error == "") {
      this.handleSubmit(e);
    }
    this.setState({ login });
  }

  componentDidMount() {
    document.getElementsByName("email")[0].focus();
  }*/

  render() {
    const { emailState, passwordState } = this.state.login;
    const { processing } = this.props;
    return (
      <div style={{ marginTop: "3%" }}>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardBody>
                <Form method="POST" onSubmit={this.handleSubmit}>
                  <FormGroup className={"has-label " + emailState}>
                    <Label>Email *</Label>
                    <Input
                      name="email"
                      type="email"
                      onChange={e => this.loginEmail(e)}
                    />
                  </FormGroup>
                  <FormGroup className={"has-label " + passwordState}>
                    <Label>Password *</Label>
                    <Input
                      type="password"
                      name="password"
                      onChange={e => this.loginPassword(e)}
                    />
                  </FormGroup>
                  <div className="category form-category">
                    * Campos requeridos
                  </div>
                  <Button color="danger" onClick={e => this.loginSubmit(e)}>
                    Login
                  </Button>
                  <Link to="/remember" className="btn btn-link">
                    Olvide la contraseña
                  </Link>
                  <Link to="/register" className="btn btn-link">
                    Registrar
                  </Link>
                  {processing && (
                    <div>
                      <img src={progress} alt="procesando..." />
                    </div>
                  )}
                </Form>
                <Row>
                  <Col sm="12" md={{ size: 8, offset: 8 }} />
                </Row>
              </CardBody>
              <CardFooter />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

 function mapStateToProps(state) {
  const { processing } = state.authentication;
  const { email, password } = state;
  return {
    email,
    password,
    processing
  };
}
/*
const mapDispatchToProps = dispatch => ({
 logout() {
    return dispatch(userActions.logout());
  },
  login(email, password) {
    return dispatch(userActions.authenticate(email, password));
  }
});

const connectedLoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
export { connectedLoginPage as LoginPage };*/

const connectedRegisterPage = connect(mapStateToProps)(DatosUsuario);
export { connectedRegisterPage as DatosUsuario };
