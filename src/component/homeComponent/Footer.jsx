import React from "react";
import BrandLogo from "../../img/brand-logo-white.png";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer section--darkblue bg-gradient--darkblue--6">
      <div className="pt-2 pb-2 border--bottom">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-12 col-md-9 col-lg-5 pr-lg-7 mb-4 mb-lg-0 ">
              <Link to="/" className="mb-2">
                <img className="logo" src={BrandLogo} alt="brand-logo" />
              </Link>
              <p>
                “Miner Azerbaijan” olaraq, fəaliyyətimiz ilk öncə, yerli
                təşəbbüskarların kriptovalyuta mədənçiliyi sahəsində olan
                tələbatlarını ödəməyə istiqamətlənmişdir.{" "}
              </p>
            </div>

            <div className="" style={{ marginTop: "65px" }}>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="mailto:info@miner.az"
                    className="text-color--400 body-font"
                  >
                    info@miner.az
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+994502344525"
                    className="text-color--400 body-font"
                  >
                    +994 50 234 45 25
                  </a>
                </li>
                <li>
                  <span className="text-color--400 body-font">
                    Atatürk pros. 30A, Bakı
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <ul className="icon-group icon-rounded icon-rounded-color--primary justify-content-center">
                <li>
                  <a
                    href="https://www.facebook.com/minerazerbaijan"
                    className="color--primary"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/minerazerbaijan"
                    className="color--primary"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/minerazerbaijan"
                    className="color--primary"
                  >
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/minerazerbaijan"
                    className="color--primary"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
