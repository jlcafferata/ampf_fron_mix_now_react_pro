import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";

import {
  Form,
  /*FormGroup,
  Label,
  Input,
  FormText,*/
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Row,
  Col
} from "reactstrap";

import logo from "../assets/img/logo-1.png";
//import firebase from "firebase";
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { FormInputs, Button } from "../components";

/*firebase.initializeApp({
  apiKey: "AIzaSyACOcRI5ykpuaNHStSAT0f4m8kC2wpSzmA",
  authDomain: "ampf-front.firebaseapp.com"
});*/

class LoginPage extends Component {
  /*state = {
    isSignedIn: false
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
     
    ],
    callbacks: {
      sigInSuccess: () => false
    }
};*/

  constructor(props) {
    super(props);
    // reset login status
    //this.props.dispatch(userActions.logout());
    this.props.logout();

    this.state = {
      email: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT");
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      //dispatch(userActions.authenticate(this.state));
      this.props.login(email, password);
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;

    /*return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form id="form1" onSubmit={this.handleSubmit} method="POST">
          <div
            className={"form-group" + (submitted && !email ? " has-error" : "")}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {submitted && !email && (
              <div className="help-block">Email requerido</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password requerido</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            {loggingIn && (
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            )}
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
            );*/
    return (
      <div>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>
                {submitted &&
                  !email && (
                    <div className="alert alert-danger">Email requerido</div>
                  )}
                {submitted &&
                  email &&
                  !password && (
                    <div className="alert alert-danger">Password requerido</div>
                  )}
                <CardTitle tag="h4">
                  <img src={logo} alt="AMPF" />
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Form method="POST" onSubmit={this.handleSubmit}>
                  <FormInputs
                    // ncols={["col-12", "col-12", "col-12"]}
                    proprieties={[
                      {
                        label: "Email address",
                        inputProps: {
                          type: "email",
                          name: "email",
                          onChange: this.handleChange
                        }
                      },
                      {
                        label: "Password",
                        inputProps: {
                          type: "password",
                          name: "password",
                          onChange: this.handleChange
                        }
                      }
                      /*{
                          label: "Subscribe to newsletter",
                          labelProps: {
                            check: true
                          },
                          inputProps: {
                            type: "checkbox"
                          },
                          formGroupProps: {
                            check: true,
                            className: "mt-3"
                          }
                        }*/
                    ]}
                  />

                  <Button color="primary" onClick={this.handleSubmit}>
                    Submit
                  </Button>
                  <Link to="/remember" className="btn btn-link">
                    Olvide la contraseña
                  </Link>
                  <Link to="/register" className="btn btn-link">
                    Registrar
                  </Link>
                </Form>

                {/* <Row>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    {this.state.isSignedIn ? (
                      <div>SignedInd</div>
                    ) : (
                      <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                      />
                    )}
                  </Col>
                    </Row>*/}
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
  const { loggingIn } = state.authentication;
  const { email, password } = state;
  return {
    email,
    password,
    loggingIn
  };
}

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
export { connectedLoginPage as LoginPage };
