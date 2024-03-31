import Button from './button';
import contactUsImge from '../assets/image/contact-us-img.svg';

export default function ContactUsSection() {
  return (
    <section className="container contact-us">
      <div className="contact-us_img">
        <img src={contactUsImge} alt="illustration" />
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
