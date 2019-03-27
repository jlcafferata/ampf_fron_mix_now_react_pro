import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Container,
  Col,
  Row
} from "reactstrap";

import { Link } from "react-router-dom";

import logo from "../../assets/img/logo-1.png";

class LockScreenPage extends React.Component {
  render() {
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
                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className="font-icon-detail">
                      <h5 className="title">
                        <i className="now-ui-icons ui-1_lock-circle-open" />
                        Acceso denegado
                      </h5>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md={{ offset: 5 }}>
                    <Link to="/" className="btn btn-link">
                      <h4>Aceptar</h4>
                    </Link>
                  </Col>
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

export default LockScreenPage;
