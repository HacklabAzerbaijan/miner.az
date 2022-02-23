import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../img/brand-logo-white.png";
import Map1 from "../../img/layout/map-1.png";
import './bloqChild.css'

const BlogChild = () => {
  return (
    <div className="blogmenu">
      <div
        style={{ width: "95%", height: "350px", margin: "50px 0px 0px 0px"}}
        className="background-holder background--bottom z-index1 bgc1"
      >
        <img
          style={{ width: "100%" }}
          src={Map1}
          alt="i"
          className="bgc2"
        />
      </div>
      <div className="logotext">
        <img src={BrandLogo} style={{ width: "350px" }} alt="imag" />
        <span>Official Blog</span>
      </div>

      <div
        className="card section--darkblue"
        style={{ zIndex: 100 }}
      >
        <Link to="/blognews" style={{textDecoration:"none"}}>
          <div className="carditems">
            <span>ictimaiyyət</span>
            <span style={{ fontFamily: "SFUI,sans-serif" }}>
              Çin geniş miqyaslı mayninqi faktiki olaraq qadağan etdi{" "}
            </span>
            <span style={{ fontFamily: "SFUI,sans-serif" }}>
              Bu dəyişiklik digər ölkələrdə mayninq mütəxəssislərinə misilsiz
              fürsət təqdim edir, çünki Çinin heşreyti digər ölkələrə axır.
            </span>
            <span>24 Avqust, 2021</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogChild;
