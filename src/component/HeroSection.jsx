import Button from './button';
import heroImg from '../assets/image/heroImg.svg';

export default function HeroSection() {
  return (
    <section className="hero container container">
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
