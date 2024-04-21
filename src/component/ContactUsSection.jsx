import Button from "./button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function ContactUsSection() {
  //animation
  /*  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);

 
  */
  return (
    <section className="container contact-us">
      <div className="contact-us_img slide-from-left">
        <img
          src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632590/DMSL/contact-us-img_papvos.svg"
          alt="illustration"
        />
      </div>
      <div className="contact-us_content">
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
