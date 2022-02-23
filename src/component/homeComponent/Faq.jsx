import React from "react";
import { useState } from "react";

const Faq = () => {
  const [collapse, setCollapse] = useState("collapse1");

  return (
    <div className="space faq faq--v1" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="text-center text-sm-left mb-5 mb-lg-7 reveal">
              <h2
                className="h3-font font-w--600 mb-2"
                style={{ color: "white" }}
              >
                FAQ
              </h2>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div
              className="accordion accordion--v1 reveal remove-space--bottom"
              id="accordion1"
            >
              <div className="card mb-1">
                <button
                  onClick={(e) => setCollapse(e.target.value)}
                  className={
                    collapse !== "collapse1"
                      ? "btn btn-header btn-link collapsed"
                      : "btn btn-header btn-link"
                  }
                  type="button"
                  value="collapse1"
                  data-toggle="collapse"
                  data-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  <span style={{cursor:"not-allowed"}} className="h6-font text-color--200 text-left font-w--600">
                    Miner.az
                  </span>
                  <i className="icon icon-up-arrow"></i>
                </button>
                <div
                  id="collapse1"
                  className={
                    collapse !== "collapse1" ? "collapse" : "collapse show"
                  }
                  data-parent="#accordion1"
                >
                  <div className="card-body pl-3">
                    <p className="text-color--500">
                      Miner.az kriptovalyuta maynerləri üçün avadanlıq
                      təchizatı, fermaların quraşdırılması, hostinq, soyutma
                      sistemləri və digər xidmətlər üzrə ixtisaslaşmış
                      şirkətdir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card mb-1">
                <button
                  onClick={(e) => setCollapse(e.target.value)}
                  className={
                    collapse !== "collapse2"
                      ? "btn btn-header btn-link collapsed"
                      : "btn btn-header btn-link"
                  }
                  type="button"
                  value="collapse2"
                  data-toggle="collapse"
                  data-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  <span style={{cursor:"not-allowed"}} className="h6-font text-color--200 text-left font-w--600">
                    Miner.az yerli şirkətdirmi?
                  </span>
                  <i className="icon icon-up-arrow"></i>
                </button>
                <div
                  id="collapse2"
                  className={
                    collapse !== "collapse2" ? "collapse" : "collapse show"
                  }
                  data-parent="#accordion1"
                >
                  <div className="card-body pl-3">
                    <p className="text-color--500">
                      Miner.az ölkəmizdə yerli istifadəçilərə hərtərəfli dəstək
                      xidməti göstərən və qlobal komandalar ilə əməkdaşlıq edən
                      Azərbaycan şirkətidir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card mb-1">
                <button
                  onClick={(e) => setCollapse(e.target.value)}
                  className={
                    collapse !== "collapse3"
                      ? "btn btn-header btn-link collapsed"
                      : "btn btn-header btn-link"
                  }
                  type="button"
                  value="collapse3"
                  data-toggle="collapse"
                  data-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  <span style={{cursor:"not-allowed"}} className="h6-font text-color--200 text-left font-w--600">
                    “Miner.az”ın məqsədi nədir?
                  </span>
                  <i className="icon icon-up-arrow"></i>
                </button>
                <div
                  id="collapse3"
                  className={collapse !== "collapse3" ? "collapse" : "collapse show"}
                  data-parent="#accordion1"
                >
                  <div className="card-body pl-3">
                    <p className="text-color--500">
                      Məqsədimiz yerli təşəbbüskarların kriptovalyuta
                      mədənçiliyi sahəsində olan tələbatlarını ödəmək,
                      Azərbaycanda və Yaxın Şərqdə mayninq prosesinin öndə gedən
                      təsisçisi və təminatçısı olmaqdır.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card mb-1">
                <button
                  onClick={(e) => setCollapse(e.target.value)}
                  className={
                    collapse !== "collapse4"
                      ? "btn btn-header btn-link collapsed"
                      : "btn btn-header btn-link"
                  }
                  type="button"
                  value="collapse4"
                  data-toggle="collapse"
                  data-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  <span style={{cursor:"not-allowed"}} className="h6-font text-color--200 text-left font-w--600">
                    Miner.az hansı xidmətləri təklif edir?
                  </span>
                  <i className="icon icon-up-arrow"></i>
                </button>
                <div
                  id="collapse4"
                  className={collapse !== "collapse4" ? "collapse" : "collapse show"}
                  data-parent="#accordion1"
                >
                  <div className="card-body pl-3">
                    <p className="text-color--500">
                      Biz fermaların quraşdırılması, hostinq, mayninq
                      avadanlıqlarının satışı, soyutma sistemləri, təmizlik və
                      diaqnostika da daxil olmaq kriptovalyuta mədənçiliyi
                      sahəsində 360 dərəcəli xidmət göstəririk.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card mb-1">
                <button
                  onClick={(e) => setCollapse(e.target.value)}
                  className={
                    collapse !== "collapse5"
                      ? "btn btn-header btn-link collapsed"
                      : "btn btn-header btn-link"
                  }
                  type="button"
                  data-toggle="collapse"
                  value="collapse5"
                  data-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  <span style={{cursor:"not-allowed"}} className="h6-font text-color--200 text-left font-w--600">
                    “Miner.az”ın üstünlükləri nələrdir?
                  </span>
                  <i className="icon icon-up-arrow"></i>
                </button>
                <div
                  id="collapse5"
                  className={collapse !== "collapse5" ? "collapse" : "collapse show"}
                  data-parent="#accordion1"
                >
                  <div className="card-body pl-3">
                    <p className="text-color--500">
                      Büdcənizə uyğun kapitalınızın paylanmasını təyin etmək,
                      düzgün istiqamətləndirilmiş siyasətimiz ilə vaxtınıza
                      qənaət, vəsaitinizin artırılmasına dəstək, 360 dərəcəli
                      xidmət, bu sahənin regional lideri olmağımız əsas
                      üstünlüklərimizdir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
