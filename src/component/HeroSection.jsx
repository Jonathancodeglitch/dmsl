import Button from "./button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function HeroSection() {
  const myHeroSection = useRef(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // animation for hero_content
      gsap.from(".hero_content", {
        scrollTrigger: ".hero_content",
        x: "-700",
        ease: "bounce.out",
        duration: 2,
        delay: 0.3,
      });

      // animation for hero img
      gsap.from(".hero_img", {
        scrollTrigger: {
          trigger: ".hero_img",
          start: () => "top bottom",
        },
        y: "80",
        opacity: "0",
        ease: "none",
        duration: 0.6,
        delay: 0.3,
      });
    },
    { scope: myHeroSection }
  );

  return (
    <section ref={myHeroSection} className="hero container container">
      <div className="hero_content">
        <h1 className="hero_text">
          Your <span className="bg-unique">brand</span> <br /> can stand out in
          the crowd
        </h1>
        <Button name="Click to see how" />
      </div>
      <div className="hero_img">
        <img
          src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1715364688/DMSL/Brand_stand_out_abstract_b6wnzi.jpg"
          alt="an illustration"
        />
      </div>
    </section>
  );
}
