import React from "react";
import ImageGlobe from "../../img/layout/image-globe.png";
import Orta from "../../img/orta.png";
import Orta1 from "../../img/orta1.png";
import Process from "../../img/layout/process.svg";

const Working = () => {
  return (
    <section
      className="space--top space--bottom--2 section--darkblue process process--v1 bg-gradient--darkblue--3"
      id="working-process"
    >
      <div className="background-holder background--bottom background--cover opacity--03">
        <img src={ImageGlobe} alt="imageglobe" className="background-image-holder" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 mx-auto">
            <div className="text-center mb-5 reveal">
              <h2 className="h3-font font-w--600 mb-2">Haqqımızda</h2>
              <p className="h6-font">
                “Miner Azerbaijan” olaraq, fəaliyyətimiz ilk öncə, yerli
                təşəbbüskarların kriptovalyuta mədənçiliyi sahəsində olan
                tələbatlarını ödəməyə istiqamətlənmişdir. Bu sahədə
                ixtisaslaşmış komandaya sahib olan “miner.az”ın əsas məqsədi
                Azərbaycanda və eləcədə regionda bu prosesin öncülərindən olmaq
                və sahənin inkişafına öz tövhələrini verməkdir.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <div className="position-relative mt-xl-10 reveal">
              <div className="pos-abs-center d-none d-lg-block">
                <img
                  src={Process}
                  alt="process"
                  className="svg process__circle d-inline-block"
                />
                <img
                  src={Orta}
                  alt="brand-logo"
                  className="pos-abs-center orta-size"
                />
              </div>

              <div className="d-sm-flex justify-content-between ml-6 ml-sm-0">
                <div className="options options--left text-left mb-3 mb-sm-0 remove-space--bottom">
                  <div className="option mb-3 mb-sm-10">
                    <h3 className="h6-font text-sm-right text-uppercase font-w--700">
                      Fermaların <br />
                      Quraşdırılması
                    </h3>
                    <span className="decor"></span>
                  </div>
                  <div className="option mb-3 mb-sm-10">
                    <h3 className="h6-font text-sm-right text-uppercase font-w--700">
                      Soyutma <br />
                      Sistemləri
                    </h3>
                    <span className="decor"></span>
                  </div>
                  <div className="option mb-3 mb-sm-10">
                    <h3 className="h6-font text-sm-right text-uppercase font-w--700">
                      Yeniləmə
                    </h3>
                    <span className="decor"></span>
                  </div>
                </div>

                <div className="process__circle--mobile position-relative d-none d-sm-flex d-lg-none align-items-center">
                  <span className="mobile-logo">
                    <img
                      src={Orta1}
                      alt="brand-logo"
                      className="pos-abs-center"
                    />
                  </span>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="options options--right text-right text-left remove-space--bottom">
                    <div className="option mb-3 mb-sm-10">
                      <h3 className="h6-font text-left text-uppercase font-w--700">
                        Mayninq <br />
                        Avadanlıqlarının Satışı
                      </h3>
                      <span className="decor"></span>
                    </div>
                    <div className="option mb-3 mb-sm-10">
                      <h3 className="h6-font text-left text-uppercase font-w--700">
                        Təmir Təmizlik və <br />
                        Diaqnostika
                      </h3>
                      <span className="decor"></span>
                    </div>
                    <div className="option mb-3 mb-sm-10">
                      <h3 className="h6-font text-left text-uppercase font-w--700">
                        Hostinq
                      </h3>
                      <span className="decor"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
