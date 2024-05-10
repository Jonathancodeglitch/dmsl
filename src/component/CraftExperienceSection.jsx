import Button from "./button";

export default function CraftExperienceSection() {
  return (
    <section className="container craft-experience">
      <div className="craft-experience_content">
        <h1 className="text-xl">
          Struggling to be seen? Missing sales due to low visibility? Don't Get
          Lost in the Crowd, Get Discovered By
          <span className="unique-bg"> Your Ideal Customers</span>
        </h1>

        <p className="text-md">
          Don't let your brand grow anonymous – We bring SEO expertise and
          targeted advertising to put your business in front of the right
          people. Watch your website traffic soar and revenue climb with a
          winning digital strategy
        </p>

        <Button name="Learn more" />
      </div>
      <div className="craft-experience_img">
        <img
          src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1715371102/DMSL/Brand_visibility_yytqum.png"
          alt="illustration"
        />
      </div>
    </section>
  );
}
