import Button from "./button.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function NewsLetterSection() {
  //animation slide in from the right

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);

  useGSAP(() => {
    // animation to slide in from the right
    gsap.from(".slide-from-right", {
      scrollTrigger: {
        trigger: ".slide-from-right",
        start: "20px bottom",
      },
      x: "700",
      ease: "none",
      duration: 0.8,
    });
  });

  return (
    <section className="container newsletter" ref={container}>
      <div className="newsletter_content">
        <h1 className="text-xl">
          Join Our Newsletters & get
          <span className="unique-bg"> the latest offers</span>
        </h1>
        <form className="newsletter_form">
          <label className="label text-md">
            Name
            <input className="input" type="text" />
          </label>
          <label className="label text-md">
            Email
            <input className="input" type="Email" />
          </label>
          <Button name="send" />
        </form>
      </div>
      <div className="newsletter_img slide-from-right">
        <img
          src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632606/DMSL/newsletter-img_smj084.svg"
          alt="illustration"
        />
      </div>
    </section>
  );
}
