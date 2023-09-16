import React from "react";
import "../../styles/adventure.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/yacht-it2.jpg";

const AdventureSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="img" className="w-100 rounded" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
            Ready to Set Sail with Us? Don't Miss Out on Your Yacht Adventure!
            </h2>

            <button className="btn become__driver-btn mt-4">
              Register
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdventureSection;
