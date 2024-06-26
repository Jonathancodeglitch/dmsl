import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import TalentedPeople from "./component/TalentedPeopleSection";
import ThingsWeEnjoySection from "./component/ThingsWeEnjoySection";
import CraftExperienceSection from "./component/CraftExperienceSection";
/* import TeamSection from "./component/TeamSection";
import PreviousWorkSection from "./component/PreviousWorkSection"; */
import TestimonialSection from "./component/TestimonialSection";
import ContactUsSection from "./component/ContactUsSection";
import NewsLetterSection from "./component/NewsLetterSection";
import FooterSection from "./component/Footer";
//for animations
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // animations for fade up
    const fadeUps = gsap.utils.toArray(".fade-up");
    fadeUps.forEach((fadeUp) => {
      gsap.from(fadeUp, {
        scrollTrigger: {
          trigger: fadeUp,
          start: () => "-150px bottom",
        },
        y: "200",
        ease: "none",
        duration: 0.4,
      });
    }, []);
  });

  return (
    <>
      <div className="wrapper">
        <Header />
        <HeroSection />
        <TalentedPeople />
        <ThingsWeEnjoySection />
        <CraftExperienceSection />
        {/* <TeamSection /> */}
        {/* <PreviousWorkSection /> */}
        <TestimonialSection />
        <ContactUsSection />
        <NewsLetterSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
