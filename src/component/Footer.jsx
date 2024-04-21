export default function FooterSection() {
  return (
    <section className="footer">
      <SecondaryFooter />
      <MainFooter />
    </section>
  );
}

function SecondaryFooter() {
  return (
    <div className="container">
      <div className="secondary-footer">
        <ul className="social-container fade-up">
          <li>
            <div className="logo" href="#">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632604/DMSL/Logo_i4pfua.svg"
                  alt="logo"
                />
              </a>
            </div>
          </li>
          <li className="secondary-footer_icon icons">
            <a href="#">
              <img
                src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632592/DMSL/facebook_qpsudu.svg"
                alt="social icon"
              />
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632598/DMSL/instangram_xqtjop.svg"
                alt="social icon"
              />
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632603/DMSL/ln_imqbot.svg"
                alt="social icon"
              />
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632589/DMSL/ball_eranj5.svg"
                alt="social icon"
              />
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632620/DMSL/twiter_d9ich3.svg"
                alt="social icon"
              />
            </a>
          </li>
          <li className="address">
            <h3>Address</h3>
            <p className="text-sm">+123 654 987</p>
            <p className="text-sm">
              877 The Bronx, NY <br /> 14568 USA
            </p>
          </li>
        </ul>

        <ul className="service fade-up">
          <li className="title">Services</li>
          <li className="items">Graphic design</li>
          <li className="items">Web design & development</li>
          <li className="items">Social media management</li>
          <li className="items">Social media marketing</li>
          <li className="items">Content writing</li>
          <li className="items">Video editing</li>
        </ul>

        <ul className="company fade-up">
          <li className="title">Company</li>
          <li className="items">
            <a href="#">Case Studies </a>
          </li>
          <li className="items">
            <a href="#"> Web design & Services</a>
          </li>
          <li className="items">
            <a href="#">About</a>
          </li>
          <li className="items">
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <ul className="about-us fade-up">
          <li className="title">About Us</li>
          <li className="items">
            <a href="#">Featured clients</a>
          </li>
          <li className="items">
            <a href="#"> Meet the owner</a>
          </li>
          <li className="items">
            <a href="#">Live events</a>
          </li>
        </ul>

        <ul className="lagal-staff fade-up">
          <li className="title">Legal Stuff</li>
          <li className="items">
            <a href="#">Terms & Conditions </a>
          </li>
          <li className="items">
            <a href="#">Privacy & Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function MainFooter() {
  return (
    <div className="main-footer">
      <div className="container">
        <p className="copyright">Copyright ©2024 DMSL. All Right Reserved</p>
        <ul className="main-footer_links">
          <li>
            <a href="#">Cookie Policy</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
