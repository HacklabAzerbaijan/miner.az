import React from "react";
import QapidanQapiya from "../../img/qapidan-qapiya.png";
import UygunTeklif from "../../img/uygun-teklif.png";
import Konsaltinq from "../../img/konsaltinq.png";
import Derece from "../../img/360-derece.png";
import Device from "../../img/device-mockup.png";

const Benefist = () => {
  return (
    <section
      className="space section--darkblue bg-gradient--darkblue--4"
      id="token-sale-details"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9 mx-auto mx-md-0">
            <div className="mb-5 mb-lg-7 text-center text-md-left reveal">
              <h2 className="h3-font font-w--600 mb-2">Üstünlüklərimiz</h2>
              <p className="h6-font">
                Birbaşa olaraq bu sənayenin peşəkarları ilə büdcənizə uyğun
                kapitalınızın paylanmasını təyin etmək ən prioritet
                məqsədlərimizdəndir. Düzgün istiqamətləndirilmiş iş prinsipimiz
                vaxtınıza qənaəti təmin edəcək, həmçinin sahib olduğunuz
                vəsaitin səmərəli istifadəsinə dəstək olacaq. 360 dərəcəli
                xidmət potensialımız bizə daha effektiv xidmət göstərməyə imkan
                yaradır.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <div className="vertical-border d-flex pos-abs-center h-100 w-100">
            <span className="column-border"></span>
          </div>
          <div className="row horizontal-border justify-content-between mb-lg-5 pb-lg-5 reveal">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
                <span className="mb-3 mb-lg-0 mr-md-3">
                  <img className="icon-size" src={QapidanQapiya} alt="icon" />
                </span>
                <div>
                  <h3 className="h5-font text-color--200 font-w--600 mb-2">
                    Qapıdan-qapıya
                  </h3>
                  <p className="text-color--500">
                    Müştərinin istəyinə uyğun avadanlığın (yeni və ya ikinci əl)
                    sifariş verilməsi, sınaqdan keçirilməsi, alınması,
                    logistikası, təhvildən öncə yoxlanılması və müştərinin
                    ünvanına təhlükəsiz çatdırılması. Bütün proses boyunca
                    sənədləşdirmə işlərinin, gömrük və vergi əməliyyatlarının
                    aparılması.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-5">
              <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
                <span className="mb-3 mb-lg-0 mr-md-3">
                  <img className="icon-size" src={UygunTeklif} alt="icon" />
                </span>
                <div>
                  <h3 className="h5-font text-color--200 font-w--600 mb-2">
                    Uyğun Təklif
                  </h3>
                  <p className="text-color--500">
                    Daim yenilənən bazarda qlobal miqyaslı əməkdaşlığımız
                    sayəsində ən münasib qiymətin alınması, müştəriyə uyğun
                    avadanlığın və qiymətin təklif edilməsi, daimi müştərilər
                    üçün xüsusi fürsətlərin təqdim olunması.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row horizontal-border justify-content-between mb-lg-5 pb-lg-5 reveal">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
                <span className="mb-3 mb-lg-0 mr-md-3">
                  <img className="icon-size" src={Konsaltinq} alt="icon" />
                </span>
                <div>
                  <h3 className="h5-font text-color--200 font-w--600 mb-2">
                    Konsaltinq
                  </h3>
                  <p className="text-color--500">
                    Müştərinin tələbləri, imkanları və hədəflərini öyrənərək
                    bunların əsasında mayninq avadanlığının tövsiyə edilməsi,
                    mayninq prosesinin optimallaşdırılması üçün məsləhətlərin
                    verilməsi.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-5">
              <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
                <span className="mb-3 mb-lg-0 mr-md-3">
                  <img className="icon-size" src={Derece} alt="icon" />
                </span>
                <div>
                  <h3 className="h5-font text-color--200 font-w--600 mb-2">
                    360 Xidmət
                  </h3>
                  <p className="text-color--500">
                    Avadanlıq sayından asılı olmayaraq hər bir müştəriyə
                    fermaların qurulmasından tutmuş avadanlıqların təmizliyinə
                    qədər 360 dərəcəli xidmətin göstərilməsi, bütün proses
                    ərzində mayninq avadanlıqlarının işinə kompleks nəzarətin
                    edilməsi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="switchable pt-4 d-lg-flex align-items-md-center">
        <div className="col-12 col-lg-6 mb-40 mb-lg-0 text-center mb-3 reveal">
          <picture className="switchable__image">
            <img src={Device} alt="device" className="img-fluid" />
          </picture>
        </div>

        <div className="switchable__content">
          <div className="container">
            <div className="row">
              <div className="col-12 ml-md-auto">
                <div className="mb-4 text-center text-sm-left reveal">
                  <h2 className="h3-font font-w--600 mb-1">
                    {" "}
                    Suallarınız var? O zaman, vaxt itirmədən bizə yazın!
                  </h2>
                  <p className="h6-font">
                    Məhsul və xidmətlər haqqında, bizimlə əlaqə yarada və sizi
                    maraqlandıran suallara cavab tapa bilərsiniz.
                  </p>
                </div>

                <div className="button-group d-flex flex-column flex-sm-row align-items-center reveal">
                  <div className="d-flex flex-column align-items-center mb-2">
                    <a
                      href="https://wa.me/994502344525"
                      className="btn btn-border btn-border--color--primary btn-border--width--2 rounded--full color--white btn-hover--splash"
                    >
                      <span className="btn__text">Bizə Yazın</span>
                    </a>
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

export default Benefist;
