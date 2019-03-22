import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { userService } from "./../../services/index";

class Logout extends Component {
  componentWillMount() {
    console.log("COMPONENT DID MOUNT - LOGOUT");
    this.props.logout();
  }

  render() {
    console.log("RENDER - LOGOUT");
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => ({
  logout() {
    console.log("LOGOUT MAPDISPATCHTOPROPS - LOGOUT");
    return dispatch(userService.logout());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
