import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import {
  PanelHeader,
  Statistics,
  CardCategory,
  Instructions,
  Button
} from "../../components";

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col lg={4} xs={12} md={12}>
              <Row>
                <Col xs={12} md={12}>
                  <Card
                    className="card-stats card-raisedcard-chart"
                    onClick={this.tryAyudasEconomicas}>
                    <CardHeader>
                      <CardCategory>Servicios financieros</CardCategory>
                      <CardTitle tag="h3">Ayudas economicas</CardTitle>

                      <Statistics
                        iconState="success"
                        icon="business_money-coins"
                        title=""
                        subtitle=""
                      />
                    </CardHeader>
                    <hr />
                    <CardFooter>
                      <Nav className="icon-primary icon-circle ">
                        <NavItem>
                          <NavLink to="/forms/wizard" className="active">
                            <i className="now-ui-icons ui-1_simple-add" />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className="active"
                            onClick={() =>
                              this.setState({ pageSubcategories: "ps2" })
                            }>
                            <i className="now-ui-icons ui-1_zoom-bold" />
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={4} xs={12} md={12}>
              <Row>
                <Col xs={12} md={12}>
                  <Card
                    className="card-stats card-raisedcard-chart"
                    onClick={this.tryAyudasEconomicas}>
                    <CardHeader>
                      <CardCategory>Otro grupo </CardCategory>
                      <CardTitle tag="h3">Otro servicio</CardTitle>

                      <Statistics
                        iconState="success"
                        icon="business_bulb-63"
                        title=""
                        subtitle=""
                      />
                    </CardHeader>
                    <hr />
                    <CardFooter>
                      <Nav className=" icon-primary icon-circle ">
                        <NavItem>
                          <NavLink
                            className="active"
                            onClick={() =>
                              this.setState({ pageSubcategories: "ps1" })
                            }>
                            <i className="now-ui-icons ui-1_simple-add" />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className="active"
                            onClick={() =>
                              this.setState({ pageSubcategories: "ps2" })
                            }>
                            <i className="now-ui-icons ui-1_zoom-bold" />
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={4} xs={12} md={12}>
              <Row>
                <Col xs={12} md={12}>
                  <Card
                    className="card-stats card-raisedcard-chart"
                    onClick={this.tryAyudasEconomicas}>
                    <CardHeader>
                      <CardCategory>Otro grupo mas</CardCategory>
                      <CardTitle tag="h3">Otro servicio mas</CardTitle>

                      <Statistics
                        iconState="success"
                        icon="business_briefcase-24"
                        title=""
                        subtitle=""
                      />
                    </CardHeader>
                    <hr />
                    <CardFooter>
                      <Nav className="icon-primary icon-circle ">
                        <NavItem>
                          <NavLink
                            className="active"
                            onClick={() =>
                              this.setState({ pageSubcategories: "ps1" })
                            }>
                            <i className="now-ui-icons ui-1_simple-add" />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className="active"
                            onClick={() =>
                              this.setState({ pageSubcategories: "ps2" })
                            }>
                            <i className="now-ui-icons ui-1_zoom-bold" />
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default DashboardView;
