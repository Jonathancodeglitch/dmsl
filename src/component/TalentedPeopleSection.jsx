import Button from "./button";
import playIcon from "../assets/image/PlayIcon.svg";
import poweredByImg from "../assets/image/powered-by-img.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function TalentedPeople() {
  /* animation for talented-people_img  */
  const TalentedPeopleSection = useRef(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // animation for hero img
      gsap.from(".talented-people_img", {
        scrollTrigger: {
          trigger: ".talented-people_img",
          start: "top bottom",
          markers: true,
        },
        x: "-500",
        opacity: "0",
        ease: "none",
        duration: 0.8,
      });
    },
    { scope: TalentedPeopleSection }
  );

  return (
    <section ref={TalentedPeopleSection} className="talented-people container">
      <div className="talented-people_img">
        <img src={poweredByImg} alt="illustration" />
      </div>
      {/* talented-people_content begins */}
      <div className="talented-people_content">
        <h1 className="talented-people_content_title text-xl">
          Powered by <span className="unique-bg">talented people</span>
        </h1>
        <p className="talented-people_content_text text-md">
          But I must explain to you how all thismistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system.
        </p>
        <p className="talented-people_content_text text-md">
          I wrote to let them know ready to came back they kicked me of their
          team slack all of us are make company email.
        </p>

        <div className="talented-people_content_btn">
          <Button name="Learn more" />
          <a href="#" className="talented-people_content_video">
            <img className="playIcon" src={playIcon} alt="play video icon" />
            <span>Watch videos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
