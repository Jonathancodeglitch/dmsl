import React from "react";
import Slider from "react-slick";
import Profile from "./profile";
import { forwardRef, useRef, useImperativeHandle } from "react";

/* analysis for the carousel */

export default forwardRef(function Carousel({ testimonials }, ref) {
  let settings = {
    infinite: true,
    centerMode: false,
    lazyLoad: true,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    swipeToSlide: false,
    initialSlide: 0,
    arrows: false,
    /* centerPadding: "130px", */
    variableWidth: true,
    draggable: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          variableWidth: false,
          infinite: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let sliderRef = useRef(null);

  useImperativeHandle(ref, () => ({
    nextSlide() {
      sliderRef.slickNext();
    },

    previousSlide() {
      sliderRef.slickPrev();
    },
    getBabe() {
      console.log("hello i, jonathan");
    },
  }));

  return (
    <>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <div className="testimonial_card" key={index}>
              <Profile imgUrl={testimonial.imgUrl} />

              <div className="star-container">
                {/* check the ratings for each testimonial and display corresponding star */}
                {new Array(testimonial.ratings).fill(null).map((_, i) => {
                  return (
                    <img
                      key={i}
                      className="star"
                      src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632614/DMSL/star_u16skq.svg"
                      alt="star"
                    />
                  );
                })}
              </div>

              <p className="desc text-md">{testimonial.testimonial}</p>

              <p className="name text-md"> {testimonial.name}</p>

              <p className="title text-md"> {testimonial.title}</p>
            </div>
          );
        })}
      </Slider>
      {/*  <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className="button" onClick={previousSlide}>
          Previous
        </button>
        <button className="button" onClick={nextSlide}>
          Next
        </button>
      </div> */}
    </>
  );
});
