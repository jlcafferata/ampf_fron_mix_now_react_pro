import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a href="https://www.ampf.org.ar">
                  Asociaci&oacute;n Mutual de Protecci&oacute;n Familiar
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Dise&ntilde;ado por{" "}
            <a
              href="https://www.ampf.org.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              AMPF
            </a>
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
