import React, { useEffect } from "react";

import yachtData from "../assets/data/yachtData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const YachtDetails = () => {
  const { slug } = useParams();

  const singleYachtItem = yachtData.find((item) => item.name === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleYachtItem]);

  return (
    <Helmet title={singleYachtItem.name}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleYachtItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="yacht__info">
                <h2 className="section__title">{singleYachtItem.name}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleYachtItem.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#06432e" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleYachtItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleYachtItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#06432e" }}
                    ></i>{" "}
                    {singleYachtItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#06432e" }}
                    ></i>{" "}
                    {singleYachtItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#06432e" }}
                    ></i>{" "}
                    {singleYachtItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#06432e" }}></i>{" "}
                    {singleYachtItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#06432e" }}
                    ></i>{" "}
                    {singleYachtItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#06432e" }}
                    ></i>{" "}
                    {singleYachtItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default YachtDetails;
