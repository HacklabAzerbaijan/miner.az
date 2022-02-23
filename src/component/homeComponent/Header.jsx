import React, { useState } from "react";
import BrandImage from "../../img/brand-logo-white.png";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const { navbarToggle, setNavbarToggle } = props;
  const [scroll, setScroll] = useState(0);


  window.onscroll = function () {
    let top = window.scrollY;
    setScroll(top);
  };
  

  return (
    <header
      className={
        navbarToggle === false
          ? "navbar navbar-sticky sticky-bg-color--darkblue navbar-expand-lg navbar-dark"
          : "navbar navbar-sticky sticky-bg-color--darkblue navbar-expand-lg navbar-dark active"
      }
      id={scroll > 150 ? "actives" : "navbars"}
    >
      <div className="container-fluid position-relative">
        <NavLink to="/" className="navbar-brand">
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
        </NavLink>

        <span
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="navbarToggler"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
          onClick={() => setNavbarToggle(!navbarToggle)}
        >
          <span
            className={
              navbarToggle === false
                ? "navbar-toggler-icon"
                : "navbar-toggler-icon active"
            }
          ></span>
        </span>

        <div className="navbar-inner ml-lg-auto">
          <span
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="navbarToggler"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
            onClick={() => setNavbarToggle(!navbarToggle)}
          >
            <span
              className={
                navbarToggle === false
                  ? "navbar-toggler-icon"
                  : "navbar-toggler-icon active"
              }
            ></span>
          </span>

          <nav style={{ marginRight: "35px" }}>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#biz-kimik">
                  Biz Kimik?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#working-process">
                  Haqqımızda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#token-sale-details">
                  Üstünlüklərimiz
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <NavLink className="nav-link" to="/price">
                  Qiymətlər
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadmap">
                  Nələr Edirik?
                </a>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
