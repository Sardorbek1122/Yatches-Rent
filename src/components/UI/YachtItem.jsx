import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/yacht-item.css";

const YachtItem = (props) => {
  const { imgUrl, model, name, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="yacht__item">
        <div className="yacht__img">
          <img src={imgUrl} alt="" className="w-100 img-it" />
        </div>

        <div className="yacht__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="yacht__item-info d-flex mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 yacht__item-btn yacht__btn-rent">
            <Link to={`/yacht/${name}`}>Rent</Link>
          </button>

          <button className=" w-50 yacht__item-btn yacht__btn-details">
            <Link to={`/yacht/${name}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default YachtItem;
