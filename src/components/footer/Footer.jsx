import "./footer.css";

import facebook from "./../../img/socials/fb.svg";
import instagram from "./../../img/socials/inst.svg";
import twitter from "./../../img/socials/tw.svg";
import linkedIn from "./../../img/socials/in.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__left">
          <div className="logo">
            <span>FASHION</span>
          </div>
          <div className="footer__desc">
            Complete your style with awesome clothes from us.
          </div>
          <div className="footer__socials">
            <ul>
              <li>
                <a href="#!">
                  <img src={facebook} alt={facebook} />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src={instagram} alt={instagram} />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src={twitter} alt={twitter} />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src={linkedIn} alt={linkedIn} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          <ul className="footer__menu">
            <li>
              <a href="#!">Company</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Contact us</a>
            </li>
            <li>
              <a href="#!">Support</a>
            </li>
            <li>
              <a href="#!">Careers</a>
            </li>
          </ul>
          <ul className="footer__menu">
            <li>
              <a href="#!">Quick Link</a>
            </li>
            <li>
              <a href="#!">Share Location</a>
            </li>
            <li>
              <a href="#!">Orders Tracking</a>
            </li>
            <li>
              <a href="#!">Size Guide</a>
            </li>
            <li>
              <a href="#!">FAQs</a>
            </li>
          </ul>
          <ul className="footer__menu">
            <li>
              <a href="#!">Legal</a>
            </li>
            <li>
              <a href="#!">Terms & conditions</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
