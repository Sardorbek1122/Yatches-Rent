import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava01.jpg";
import ava02 from "../../assets/all-images/ava02.webp";
import ava03 from "../../assets/all-images/ava03.webp";
import ava04 from "../../assets/all-images/ava04.webp";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Our lovely yatchFlow turned our dream of sailing into an unforgettable
          reality. From the moment we stepped on board, we were enveloped in a
          world of graceful luxury. The yacht was immaculate, the crew
          attentive, and the views simply breathtaking. Every moment felt like a
          cherished memory in the making.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Noah Johnson</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          YachtFlow Rentals exceeded all expectations, giving us a journey that
          transcended the ordinary. The yacht was an oasis of comfort and
          sophistication, and the crew ensured our every need was met with a
          smile. Exploring hidden coves and indulging in fine dining on the
          water – it was a journey of a lifetime."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Emily Parker</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          They showcased true elegance and offered a level of
          service that set new standards. The yacht was a masterpiece, offering
          sumptuous lounges and panoramic decks. But it was the crew's attention
          to detail and personalized care that truly made this journey
          unforgettable. Thank you for crafting memories we'll cherish forever.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ethan Williams</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Company provided the perfect blend of adventure and
          relaxation. Our yacht was a floating haven of comfort, equipped with
          all the luxuries one could desire. From setting sail at sunrise to
          reveling in a starlit dinner, every moment was a chapter of wonder and
          beauty. An experience that resonates deep within us.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sophia Anderson</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
