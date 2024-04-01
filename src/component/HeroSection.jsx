import Button from './button';
import heroImg from '../assets/image/heroImg.svg';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

export default function HeroSection() {
  const myHeroSection = useRef(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // animation for hero_content
      gsap.from('.hero_content', {
        scrollTrigger: '.hero_content',
        x: '-700',
        ease: 'bounce.out',
        duration: 2,
      });

      // animation for hero img
      gsap.from('.hero_img', {
        scrollTrigger: '.hero_img',
        y: '80',
        opacity: '0',
        ease: 'none',
        duration: 0.6,
      });
    },
    { scope: myHeroSection }
  );

  return (
    <section ref={myHeroSection} className="hero container container">
      <div className="hero_content">
        <h1 className="hero_text">
          We help to <br /> Create <span>Brands </span>
          <br />
          With a Voice
        </h1>
        <Button name="See our work" />
      </div>
      <div className="hero_img">
        <img src={heroImg} alt="an illustration" />
      </div>
    </section>
  );
}
