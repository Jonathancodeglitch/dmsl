import Button from "./button";
import contactUsImge from "../assets/image/contact-us-img.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function ContactUsSection() {
  //animation
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);

  useGSAP(
    () => {
      // animation to slide in from the left

      gsap.from(".slide-from-left", {
        scrollTrigger: {
          trigger: ".contact-us",
          start: "top 80%",
        },
        x: "-600",
        ease: "none",
        duration: 0.8,
      });

      // animation to slide in from the right

      gsap.from(".slide-from-right", {
        scrollTrigger: {
          trigger: ".contact-us",
          start: "top 80%",
        },
        x: "600",
        ease: "none",
        duration: 0.8,
      });
    },
    { scope: container }
  );

  return (
    <section className="container contact-us" ref={container}>
      <div className="contact-us_img slide-from-left">
        <img src={contactUsImge} alt="illustration" />
      </div>
      <div className="contact-us_content slide-from-right">
        <h1 className="text-xl">
          Need Help With <span className="unique-bg">Something</span>? Contact
          Us
        </h1>
        <form className="contact-us_form">
          <label className="label text-md">
            Name
            <input className="input" name="email" type="text" />
          </label>
          <label className="label text-md">
            Email
            <input className="input" name="email" type="email" />
          </label>
          <label className="label text-md">
            Message
            <textarea
              className="input"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <Button name="Send" />
        </form>
      </div>
    </section>
  );
}
