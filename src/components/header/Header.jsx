import HederNavBtn from "../headerNavBtn/HeaderNavBtn";
import logo from "./../../img/icons/logo.svg";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <a href="#!" className="header__logo">
            <div className="logo">
              <img src={logo} alt="" />
              <span>Fashion</span>
            </div>
          </a>
          <div className="header__nav">
            <nav className="nav">
              <ul className="nav__list">
                <li>
                  <a href="#!">CATALOGUE</a>
                </li>
                <li>
                  <a href="#!">FASHION</a>
                </li>
                <li>
                  <a href="#!">FAVOURITE</a>
                </li>
                <li>
                  <a href="#!">LIFESTYLE</a>
                </li>
              </ul>
            </nav>
            <a href="#!" className="sign-up">
              SIGN UP
            </a>
          </div>
          <HederNavBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
