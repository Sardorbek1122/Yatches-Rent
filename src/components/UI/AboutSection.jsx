import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/yacht-img/yacht3.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Step Aboard and Welcome to YachtFlow Rentals</h2>
              <p className="section__description">
              At YachtFlow Rentals, we invite you to escape the ordinary and embrace the extraordinary. Our fleet of meticulously crafted yachts awaits your journey, promising opulent experiences that redefine the art of relaxation and exploration. Step aboard and let the soothing sound of the waves be your symphony, while our crew tends to your every desire, ensuring each moment is a cherished memory..
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Unparalleled Luxury and Comfort:</p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Tailored Experiences for Every Occasion:
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Seamless Exploration and Adventure:
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Unforgettable Memories Beyond the Horizon:
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" className="about__con">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100 rounded" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
