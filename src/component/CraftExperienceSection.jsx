import Button from './button';
import CraftExperienceImg from '../assets/image/craft-experience-img.svg';

export default function CraftExperienceSection() {
  return (
    <section className="container craft-experience">
      <div className="craft-experience_content">
        <h1 className="text-xl">
          We craft experiences for businesses to help reach
          <br />
          <span className="unique-bg">your customers</span>
        </h1>

        <p className="text-md">
          We specialize in creating unique experiences for businesses, all aimed
          at reaching and engaging your customers effectively. Whether it's
          through compelling visuals, engaging content, or seamless website
          designs, we're here to ensure that every interaction with your brand
          leaves a lasting impression.
        </p>

        <p className="text-md">
          Our goal is simple: to help you connect with your audience in a way
          that feels authentic and impactful, driving meaningful results for
          your business.
        </p>

        <Button name="Learn more" />
      </div>
      <div className="craft-experience_img">
        <img src={CraftExperienceImg} alt="illustration" />
      </div>
    </section>
  );
}
