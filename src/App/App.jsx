import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
//import { HomePage } from "../HomePage";
import { LoginPage } from "../_components/LoginPage";
import { RegisterPage } from "../_components/RegisterPage";
import Dashboard from "../_layouts/Dashboard/Dashboard.jsx";
import NotificationAlert from "react-notification-alert";
import LockScreenPage from "../_views/Pages/LockScreenPage.jsx";
import "react-notification-alert/dist/animate.css";

let options_message = {
  place: "tr",
  message: "",
  type: "danger",
  icon: "now-ui-icons ui-1_bell-53",
  autoDismiss: 4
};

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  componentWillReceiveProps(nextProps) {
    let message = "";
    if (nextProps.alert.message) {
      if (nextProps.alert.message && nextProps.alert.message != "Unknown") {
        message = nextProps.alert.message;
      } else {
        message = "Error en los ingresos";
      }
      options_message.message = message;
      this.refs.notificationAlert.notificationAlert(options_message);
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/logout" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route component={LockScreenPage} />
            </Switch>
          </div>
        </Router>
        <NotificationAlert ref="notificationAlert" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert, user } = state;
  return {
    alert,
    user
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
