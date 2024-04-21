import Button from "./button.jsx";

export default function NewsLetterSection() {
  return (
    <section className="container newsletter">
      <div className="newsletter_content">
        <h1 className="text-xl">
          Join Our Newsletters & get
          <span className="unique-bg"> the latest offers</span>
        </h1>
        <form className="newsletter_form">
          <label className="label text-md">
            Name
            <input className="input" type="text" />
          </label>
          <label className="label text-md">
            Email
            <input className="input" type="Email" />
          </label>
          <Button name="send" />
        </form>
      </div>
      <div className="newsletter_img">
        <img
          src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632606/DMSL/newsletter-img_smj084.svg"
          alt="illustration"
        />
      </div>
    </section>
  );
}
