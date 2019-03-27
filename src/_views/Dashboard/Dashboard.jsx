import React from "react";
import { Card, CardHeader, CardFooter, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { PanelHeader, Stats, Statistics, CardCategory } from "../../components";

import logo from "../../assets/img/logo-1.png";

class DashboardView extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" content={logo} />
        <div className="content">
          <Row>
            <Col xs={4} md={4}>
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
                    <CardFooter>
                      <Link to="/ayudasEconomicas">
                        <Stats>
                          {[
                            {
                              i: "now-ui-icons ui-1_simple-add",
                              t: "Nueva"
                            },
                            {
                              i: "now-ui-icons education_glasses",
                              t: "Consulta"
                            }
                          ]}
                        </Stats>
                      </Link>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xs={4} md={4}>
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
                    <CardFooter>
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons arrows-1_refresh-69",
                            t: ""
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xs={4} md={4}>
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
                    <CardFooter>
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons arrows-1_refresh-69",
                            t: ""
                          }
                        ]}
                      </Stats>
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
