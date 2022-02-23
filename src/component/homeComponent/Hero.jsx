import React from "react";
import MinerAzHome from "../../img/miner-az-home.png";
import Map1 from "../../img/layout/map-1.png";

const Hero = () => {
  return (
    <section className="hero hero--v6 hero--full section--darkblue bg-gradient--darkblue--1 d-flex align-items-center hidden">
      <div className="background-holder background--bottom z-index1">
        <img src={Map1} alt="map1" className="background-image-holder" />
      </div>

      <div className="svg-shape svg-shape-wave d-none d-lg-block">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 620">
          <defs>
            <linearGradient
              id="wave-1-a"
              x1="91.821%"
              x2="8.258%"
              y1="-3.695%"
              y2="81.178%"
            >
              <stop offset="0%" stopColor="" r="#2A36AC" />
              <stop offset="100%" stopColor="#171883" />
            </linearGradient>
            <linearGradient
              id="wave-1-b"
              x1="90.535%"
              x2="10.832%"
              y1="4.232%"
              y2="85.759%"
            >
              <stop offset="0%" stopColor="#7679EC" stopOpacity="0" />
              <stop offset="100%" stopColor="#5659E1" />
            </linearGradient>
          </defs>
          <path
            className="svg-line"
            fill="#232b9d"
            fillRule="evenodd"
            stroke="url(#wave-1-b)"
            strokeWidth="6"
            d="M-22.367223,829.365369 C47.8180949,725.233038 134.111268,731.437531 234.193598,847.152817 C273.353512,891.087195 307.028199,910.593177 338.265123,909.853439 C365.092805,909.218118 390.288083,894.182042 420.454093,863.630787 C429.588386,854.379841 438.997249,843.964548 451.335914,829.645952 C453.858532,826.718541 476.633091,799.992904 483.603802,791.987122 C504.948033,767.473516 522.234002,749.459356 540.435668,733.563857 C562.788651,714.043017 585.163058,699.16629 608.833467,688.824275 C664.49258,664.505837 726.433205,665.853427 799.302255,697.505792 C874.685922,730.250439 930.021659,735.252444 973.79212,717.251707 C992.450868,709.578239 1009.12469,697.759955 1025.59014,681.307946 C1038.52265,668.385995 1049.41242,655.028513 1067.90797,630.411498 C1069.06331,628.873768 1074.30586,621.882493 1075.73545,619.980561 C1094.31817,595.258063 1105.7581,581.219491 1119.4406,567.377636 C1137.08772,549.52499 1155.23692,536.056623 1175.64738,526.508862 C1223.79391,503.986512 1284.04516,503.894195 1364.18517,530.10651 C1441.86592,555.514446 1503.30729,554.203957 1555.08071,530.306348 C1577.09537,520.14481 1597.32891,505.962764 1617.26372,487.437577 C1633.34022,472.497869 1648.09715,456.026992 1667.76056,431.934359 C1670.72185,428.306027 1689.78833,404.658967 1695.30396,397.965487 C1712.53689,377.052492 1725.79585,362.613652 1739.58866,350.465124 C1756.33384,335.716199 1772.9761,325.393365 1790.81046,319.319361 C1831.54878,305.444757 1878.51106,314.004559 1937.4923,348.861006 C2123.16473,458.588806 2144.25888,666.20199 2001.45303,970.525832 L2000.65244,972.231901 L-125.452084,994.056123 L-22.422471,829.450405 L-22.367223,829.365369 Z"
            transform="translate(0 -310)"
          />
        </svg>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 mx-auto mx-lg-0 mb-3 mt-8 mt-lg-0 text-center text-lg-left z-index2 d-flex align-items-center">
            <div className="hero-content">
              <h1 className="hero__title font-w--600 mb-2 mb-lg-3">
                Mayn etmək hamı üçün əlçatan olacaq!{" "}
              </h1>
              <p className="hero__description text-color--200 font-size--20 opacity--80 mb-3 mb-lg-5 mb-md-6">
                Qarşılayın, kriptovalyuta bazarına əlçatanlıq və peşəkarlıq
                gətiririk. Miner.az kriptovalyuta maynerləri üçün 360 dərəcə
                xidmət verən bir şirkətdir.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-1 pos-abs-md-vertical-center pos-right text-center  mr-md-3 mr-xl-2 z-index1">
            <ul className="icon-group icon-group--vertical rounded--full justify-content-center mb-3 mb-md-10">
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

          <div className="col-xl-5 col-lg-7 col-12 pb-md-5">
            <img className="img-fluid" src={MinerAzHome} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;