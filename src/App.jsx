import Header from './component/Header';
import HeroSection from './component/HeroSection';
import TalentedPeople from './component/TalentedPeopleSection';
import ThingsWeEnjoySection from './component/ThingsWeEnjoySection';
import CraftExperienceSection from './component/CraftExperienceSection';
import TeamSection from './component/TeamSection';
import PreviousWorkSection from './component/PreviousWorkSection';
import TestimonialSection from './component/TestimonialSection';
import ContactUsSection from './component/ContactUsSection';
import NewsLetterSection from './component/NewsLetterSection';
import FooterSection from './component/Footer';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  //ANIMATIONs

  //register pluginsS
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    /* fade up animation */
    //get all element with the classname point
    document.querySelectorAll('.fade-up').forEach((point) => {
      //loop through each of them and activate animation one them
      gsap.from(point, {
        scrollTrigger: point,
        y: '100',
        opacity: '0',
        ease: 'none',
        duration: 0.6,
      });
    });

    /* slide in from the left */
    //get all element with the classname point
    document.querySelectorAll('.slide-in-left').forEach((point) => {
      //loop through each of them and activate animation one them
      gsap.from(point, {
        scrollTrigger: point,
        x: '-400',
        opacity: '0',
        ease: 'none',
        duration: 0.6,
      });
    });

    /* slide in from the right */
    //get all element with the classname point
    document.querySelectorAll('.slide-in-right').forEach((point) => {
      //loop through each of them and activate animation one them
      gsap.from(point, {
        scrollTrigger: point,
        x: '400',
        opacity: '0',
        ease: 'none',
        duration: 0.6,
      });
    });
  }, {});

  return (
    <>
      <Header />
      <HeroSection />
      <TalentedPeople />
      <ThingsWeEnjoySection />
      <CraftExperienceSection />
      <TeamSection />
      <PreviousWorkSection />
      <TestimonialSection />
      <ContactUsSection />
      <NewsLetterSection />
      <FooterSection />
    </>
  );
}

export default App;
