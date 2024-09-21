import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import youTube from "../../assets/images/you-tube.svg";

const Footer = () => {
  return (
    <footer className="ftr">
      <div className="ftr__cont container">
        <div className="ftr__right">
          <div className="ftr__logo">
            <a href="#" className="ftr__logoWrap">
              <div className="ftr__logoIcon">
                <img src={Logo} alt="logo" />
              </div>
              <span className="ftr__name">OpulentOasis</span>
            </a>
          </div>
          <h3 className="ftr__heading">Proud member of IKK Group</h3>
          <p className="text-base ftr__companyHqtr">Headquarters</p>
          <p className="ftr__compnyAdrs">
            Al Nakheel, Jeddah 23241,
            <br /> Saudi Arabia
          </p>
          <div className="ftr__social">
            <div className="ftr__socialIcon ftr__socialIcon--fb">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="ftr__socialIcon ftr__socialIcon--insta">
              <img src={instagram} alt="instagram" />
            </div>
            <div className="ftr__socialIcon ftr__socialIcon--twitter">
              <img src={twitter} alt="twitter" />
            </div>
            <div className="ftr__socialIcon ftr__socialIcon--youtube">
              <img src={youTube} alt="youtube" />
            </div>
          </div>
        </div>
        <div className="ftr__left">
          <div className="ftr__menu">
            <div className="ftr__menubar">
              <h4 className="text-base ftr__title">Company</h4>
              <ul className="ftr__list">
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Home
                  </Link>
                </li>
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Who we are
                  </Link>
                </li>
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Our Products
                  </Link>
                </li>
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Our Recent Projects
                  </Link>
                </li>
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ftr__menubar">
              <h4 className="text-base ftr__title">Contact</h4>
              <ul className="ftr__list">
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Home
                  </Link>
                </li>
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    About
                  </Link>
                </li>
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Email
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ftr__menubar">
              <h4 className="text-base ftr__title">IKK Group</h4>
              <ul className="ftr__list">
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Home
                  </Link>
                </li>

                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Contact me
                  </Link>
                </li>
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ftr__menubar">
              <h4 className="text-base ftr__title">Privacy Policy</h4>
              <ul className="ftr__list">
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    {" "}
                    Home
                  </Link>
                </li>
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    About
                  </Link>
                </li>
                <li className="ftr__item">
                  <Link to="/" className="ftr__link">
                    Our Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ftr__btm">
        <div className="ftr__copyRight container">
          <p className="ftr__btmDesc">
            © copyright{" "}
            <Link to="/" className="ftr__btmLink">
              OpulentOasis
            </Link>
            2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
