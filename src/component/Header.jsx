import { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import Logo from "../assets/image/Logo.svg";
import Button from "./button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dv6uz0bks/image/upload/v1713632604/DMSL/Logo_i4pfua.svg"
            alt="logo"
          />
        </div>
        <div className="menu-btn">
          <Hamburger
            toggled={isMenuOpen}
            size={32}
            color="#27bdf3"
            toggle={setIsMenuOpen}
          />
        </div>
        {/* <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
        </div> */}
        <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li className="navigation_links">
              <a className="links active" href="#">
                HOME
              </a>
            </li>
            <li className="navigation_links">
              <a className="links" href="#">
                ABOUT
              </a>
            </li>
            <li className="navigation_links">
              <a className="links" href="#">
                SERVICES
              </a>
            </li>
            <li className="navigation_links">
              <a className="links" href="#">
                OUR WORK
              </a>
            </li>
            <li className="nav-btn">
              <Button name="CONTACT US" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
