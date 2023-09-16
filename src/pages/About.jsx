import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/AdventureSection";

import driveImg from "../assets/all-images/yacht-img/yachtimg8.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Sail into luxury, where dreams set sail
                </h2>

                <p className="section__description">
                  At YachtFlow Rentals, we invite you to embark on a journey
                  beyond the ordinary. Our passion is crafting yacht experiences
                  that blend elegance with adventure, where every moment becomes
                  a cherished memory. From the tranquil lapping of the waves to
                  the thrill of exploration, our yachts offer a gateway to a
                  world where the horizon knows no limits.
                </p>

                <p className="section__description">
                  Step aboard our meticulously designed yachts, where luxury and
                  comfort meet the open sea. Each journey is tailored to your
                  desires, whether it's a serene sunset cruise or an exploration
                  of hidden coves. Our crew ensures that every detail is taken
                  care of, allowing you to simply relax and revel in the beauty
                  of your surroundings.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <a href="tel:+48555555555">+485555555555</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
