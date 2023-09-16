import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import YachtItem from "../components/UI/YachtItem";
import yachtData from "../assets/data/yachtData";

const YachtListing = () => {
  return (
    <Helmet title="Yachts">
      <CommonSection title="Yacht Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

              </div>
            </Col>

            {yachtData.map((item) => (
              <YachtItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default YachtListing;                                                            