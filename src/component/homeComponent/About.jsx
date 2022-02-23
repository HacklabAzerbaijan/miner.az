import React from "react";
import Missiya from "../../img/missiya.png";
import Vizyon from "../../img/vizyon.png";
import Hedefler from "../../img/hedefler.png";
import Illustration from "../../img/illustration-01.png";

const About = () => {
  return (
    <section
      className="space about about--v1 section--darkblue bg-gradient--darkblue--2"
      id="biz-kimik"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 mb-6 mb-lg-0">
            <picture className="about__image">
              <img
                className="img-fluid"
                src={Illustration}
                alt="illustration"
              />
            </picture>
          </div>

          <div className="col-12 col-lg-7 remove-space--bottom">
            <div className="mb-5 mb-lg-7 text-center text-lg-left reveal">
              <h2 className="h3-font font-w--600 mb-2">Biz Kimik?</h2>
              <p className="font-size--20">
                Miner.az Azərbaycan bazarında, kriptovalyuta maynerləri üçün
                avadanlıq təchizatı, fermaların quraşdırılması, mayninq
                avadanlıqlarının təmiri, diaqnostikası, hostinq, soyutma
                sistemləri və digər xidmətləri göstərən bir şirkətdir.
              </p>
            </div>

            <div className="d-md-flex mb-4 mb-lg-5 text-center text-md-left reveal">
              <span className="mb-3 mb-lg-0 mr-md-5">
                <img className="icon-size" src={Missiya} alt="icon" />
              </span>
              <div>
                <h3 className="h5-font font-w--600 text-color--200 mb-1">
                  Missiya
                </h3>
                <p className="text-color--500">
                  Lokal mühit nəzərə alınaraq, mümkün maksimal gəlirli
                  maynerlərin araşdırılması və analizi ilə yaranan öngörülərə
                  əsaslanaraq uyğun məhsulların bazara təqdim edilməsi.
                </p>
              </div>
            </div>

            <div className="d-md-flex mb-4 mb-lg-5 text-center text-md-left reveal">
              <span className="mb-3 mb-lg-0 mr-md-5">
                <img className="icon-size" src={Vizyon} alt="icon" />
              </span>
              <div>
                <h3 className="h5-font font-w--600 text-color--200 mb-1">
                  Vizyon
                </h3>
                <p className="text-color--500">
                  Blockchain və kripto texnologiyasını əsas tutaraq, mayninq
                  sahəsindəki yeniliklərin yerli və region bazarlarına uyğun və
                  faydalı şəkildə tətbiqi{" "}
                </p>
              </div>
            </div>

            <div className="d-md-flex mb-4 mb-lg-5 text-center text-md-left reveal">
              <span className="mb-3 mb-lg-0 mr-md-5">
                <img className="icon-size" src={Hedefler} alt="icon" />
              </span>
              <div>
                <h3 className="h5-font font-w--600 text-color--200 mb-1">
                  Hədəflər
                </h3>
                <p className="text-color--500">
                  Mayninq sahəsinə investisiya yatırmaq istəyən, investorların
                  mümkün maksimal gəliri əldə etməsi üçün yaranan şansanları
                  təyin etmək və izləmək. Yerli və regional bazarda sahənin
                  şansları
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
