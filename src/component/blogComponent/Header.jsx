import React from "react";
import { Link } from "react-router-dom";
import BrandImage from "../../img/brand-logo-white.png";

const Header = () => {
  return (
    <header
      className="navbar navbar-sticky sticky-bg-color--darkblue navbar-expand-lg navbar-dark"
      style={{ background: "#121871", height: "10vh" }}
    >
      <div className="container-fluid position-relative">
        <Link className="navbar-brand" to="/">
          <img
            className="logo navbar-brand__regular"
            src={BrandImage}
            alt="brand-logo"
          />
          <img
            className="logo navbar-brand__sticky"
            src={BrandImage}
            alt="sticky brand-logo"
          />
        </Link>

        <div className="navbar-inner ml-lg-auto">
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "100px",
            }}
          >
            <ul
              className="icon-group icon-rounded icon-rounded-color--primary justify-content-center"
              style={{ marginRight: "20px", marginTop: "15px" }}
            >
              <li>
                <a
                  href="https://www.facebook.com/minerazerbaijan"
                  className="color--primary"
                >
                  <i
                    className="fab fa-facebook-f"
                    style={{
                      color: "#fff",
                      border: "none",
                      marginRight: "-12px",
                    }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/minerazerbaijan"
                  className="color--primary"
                >
                  <i
                    className="fab fa-linkedin-in"
                    style={{
                      color: "#fff",
                      border: "none",
                      marginRight: "-10px",
                    }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/minerazerbaijan"
                  className="color--primary"
                >
                  <i
                    className="fab fa-telegram-plane"
                    style={{
                      color: "#fff",
                      border: "none",
                      marginRight: "-10px",
                    }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/minerazerbaijan"
                  className="color--primary"
                >
                  <i
                    className="fab fa-instagram"
                    style={{ color: "#fff", border: "none" }}
                  ></i>
                </a>
              </li>
            </ul>
            <ul
              className="navbar-nav"
              id="navbar-nav"
              style={{ marginTop: "18px" }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Ana Səhifə
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
