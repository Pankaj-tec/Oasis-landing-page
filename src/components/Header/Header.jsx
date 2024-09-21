import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <header className="nav__navigation container">
      <div className="nav__right">
        <a href="#" className="nav__rightWrap">
          <img src={Logo} alt="logo" className="nav__logoIcon" />
          <span className="nav__name">OpulentOasis</span>
        </a>
      </div>
      <div className="nav__left">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/About" className="nav__link">
              About Us
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/brand" className="nav__link">
              Our Brands
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/Project" className="nav__link">
              Projects
            </Link>
          </li>
          <li className="nav__item nav__langdrop">
            {/* <a href="#" className="nav__lang">
              <span>Eng</span>
              <img
                src="/assets/images/down-arrow.svg"
                alt="down-arrow"
                className="nav__arrowIcon"
              />
            </a> */}
            <select id="language" className="nav__lang">
              <option value="hindi">Hindi</option>
              <option value="english" selected>
                Eng
              </option>
            </select>
          </li>
          <li className="nav__item nav__btns">
            {/* <a href="#" className="nav__btn btn">
              Contact Us
            </a> */}
            <Link to="/Contact" className="nav__btn btn">
              Contact Us
            </Link>
          </li>
          <div className="nav__close">
            <img src="./assets/images/close.svg" alt="close" />
          </div>
        </ul>
      </div>
      <div className="nav__hambrgr">
        <img src="./assets/images/hamburger.svg" alt="hamburger" />
      </div>
    </header>
  );
};

export default Header;
