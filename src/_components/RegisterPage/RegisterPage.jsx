import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import logo from "../../assets/img/logo-1.png";

import { Button } from "../../components";

import { userActions } from "../../_actions";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
        password: ""
      },
      register: {
        nameState: "",
        emailState: "",
        passwordState: ""
      },
      submitted: false
    };

    this.registerSubmit = this.registerSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerEmail = this.registerEmail.bind(this);
    this.registerPassword = this.registerPassword.bind(this);
    this.registerSubmit = this.registerSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.name /*&& user.userName*/ && user.email && user.password) {
      dispatch(userActions.register(user));
    }
  }

  registerName(e) {
    var register = this.state.register;
    register["name"] = e.target.value;
    this.handleChange(e);
    if (e.target.value.length > 0) {
      register["nameState"] = "has-success";
    } else {
      register["nameState"] = "has-danger";
    }
    this.setState({ register });
  }

  registerEmail(e) {
    var register = this.state.register;
    register["email"] = e.target.value;
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.handleChange(e);
    if (emailRex.test(e.target.value)) {
      register["emailState"] = "has-success";
    } else {
      register["emailState"] = "has-danger";
    }
    this.setState({ register });
  }

  registerPassword(e) {
    var register = this.state.register;
    register["password"] = e.target.value;
    this.handleChange(e);
    if (e.target.value.length > 0) {
      register["passwordState"] = "has-success";
    } else {
      register["passwordState"] = "has-danger";
    }
    this.setState({ register });
  }

  registerSubmit(e) {
    var register = this.state.register;
    var error = "";

    if (register["nameState"] !== "has-success") {
      register["nameState"] = "has-danger";
      error = "nombre";
    }

    if (register["emailState"] !== "has-success") {
      register["emailState"] = "has-danger";
      error = "email";
    }
    if (register["passwordState"] !== "has-success") {
      register["passwordState"] = "has-danger";
      error = "password";
    }
    if (error == "") {
      this.handleSubmit(e);
    }
    this.setState({ register });
  }

  render() {
    const { registering } = this.props;
    const { name, email, password, submitted } = this.state;
    return (
      <div style={{ marginTop: "3%" }}>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  <img src={logo} alt="AMPF" />
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Form method="POST" onSubmit={this.handleSubmit}>
                  <FormGroup
                    className={"has-label " + this.state.register.nameState}>
                    <Label>Nombre *</Label>
                    <Input
                      name="name"
                      type="text"
                      onChange={e => this.registerName(e)}
                    />
                  </FormGroup>
                  <FormGroup
                    className={"has-label " + this.state.register.emailState}>
                    <Label>Email *</Label>
                    <Input
                      name="email"
                      type="email"
                      onChange={e => this.registerEmail(e)}
                    />
                  </FormGroup>
                  <FormGroup
                    className={
                      "has-label " + this.state.register.passwordState
                    }>
                    <Label>Password *</Label>
                    <Input
                      name="password"
                      type="password"
                      onChange={e => this.registerPassword(e)}
                    />
                  </FormGroup>
                  <div className="category form-category">
                    * Campos requeridos
                  </div>
                  <Button color="primary" onClick={e => this.registerSubmit(e)}>
                    Registrar
                  </Button>
                  <Link to="/" className="btn btn-link">
                    Cancelar
                  </Link>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
