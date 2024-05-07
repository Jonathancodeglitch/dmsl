import Profile from "./utility/profile";
import Carousel from "./utility/Carousel";
import { useRef, useEffect } from "react";

// i am not able to use a set size for all slides because it give a with to slide with npo content which fucks with the layouts
//it also show slide that has their hidden to be true whih then display the actual slide that should be there
// also add a width to the slide fuccks with the mobile view

//if i give the testimonial card itself a with , its going to climb it self

// add a margin to the right of the active card
//  add the need width to the active class

export default function TestimonialSection() {
  const testimonials = [
    {
      imgUrl:
        "https://res.cloudinary.com/dv6uz0bks/image/upload/v1715044362/DMSL/PD-logo-with-name_eq4zkk.png",
      ratings: 5,
      testimonial:
        "1 My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience",
      name: "Samantha Kate",
      title: "CEO of Floatcom",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dv6uz0bks/image/upload/v1715044359/DMSL/images_16_b0udvj.png",
      ratings: 5,
      testimonial:
        "2 My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience",
      name: "Samantha Kate",
      title: "CEO of Floatcom",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dv6uz0bks/image/upload/v1715044358/DMSL/download_62_smccrs.jpg",
      ratings: 5,
      testimonial:
        "3 My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience",
      name: "Samantha Kate",
      title: "CEO of Floatcom",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dv6uz0bks/image/upload/v1715044312/DMSL/download_28_lmvrsr.png",
      ratings: 5,
      testimonial:
        "4 My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience",
      name: "Samantha Kate",
      title: "CEO of Floatcom",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dv6uz0bks/image/upload/v1715044310/DMSL/cropped-The-print-haven-copy-300x300_1_jerrhc.png",
      ratings: 5,
      testimonial:
        "5 My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience",
      name: "Samantha Kate",
      title: "CEO of Floatcom",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dv6uz0bks/image/upload/v1715044309/DMSL/YWIIT_GREEN_MConverter.eu_rddp1v.png",
      ratings: 5,
      testimonial:
        "6 My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience",
      name: "Samantha Kate",
      title: "CEO of Floatcom",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dv6uz0bks/image/upload/v1715044308/DMSL/rekit_uu3pmz.png",
      ratings: 5,
      testimonial:
        "7 My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience",
      name: "Samantha Kate",
      title: "CEO of Floatcom",
    },
    {
      imgUrl:
        "https://res.cloudinary.com/dv6uz0bks/image/upload/v1715044308/DMSL/rekit_uu3pmz.png",
      ratings: 5,
      testimonial:
        "8 My experience with Mark is a complete success, from customer service, wide rang of products, clean store, purchasing experience",
      name: "Samantha Kate",
      title: "CEO of Floatcom",
    },
  ];

  let slides = useRef(null);

  function nextSlide() {
    return slides.current.nextSlide();
  }

  function previousSlide() {
    return slides.current.previousSlide();
  }

  useEffect(() => {
    console.log();
  });

  return (
    <section className="testimonial">
      <h1 className="text-xl">Testimonial</h1>
      <h3 className="text-l">Over 18 happy clients.</h3>
      <div className="testimonial_card-container">
        <Carousel testimonials={testimonials} ref={slides} />
      </div>

      <div className="testimonial_button container">
        <button onClick={previousSlide}>
          <img
            src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632600/DMSL/Left_lpx0yr.svg"
            alt="left button icon"
          />
        </button>
        <button onClick={nextSlide}>
          <img
            src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632613/DMSL/Right_ofrgq3.svg"
            alt="right button icon"
          />
        </button>
      </div>
    </section>
  );
}
