import React from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../../img/brand-logo-white.png'

const Footer = () => {
  return (
    <footer className="footer section--darkblue bg-gradient--darkblue--6">
            <div className="space--top pb-6 pb-lg-10 border--bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9 col-lg-5 pr-lg-7 mb-4 mb-lg-0">
                            <Link to="/" className="mb-2">
                                <img className="logo" src={BrandLogo} alt="brand-logo"/>
                            </Link>
                            <p>“Miner Azerbaijan” olaraq, fəaliyyətimiz ilk öncə, yerli təşəbbüskarların kriptovalyuta mədənçiliyi sahəsində olan tələbatlarını ödəməyə istiqamətlənmişdir. Bu sahədə ixtisaslaşmış komandaya sahib olan “miner.az”ın əsas məqsədi Azərbaycanda və eləcədə regionda bu prosesin öncülərindən olmaq və sahənin inkişafına öz tövhələrini verməkdir.</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 mb-1 mb-lg-0">
                            <h3 className="font-size--20 text-color--300 mb-2 font-w--700">Faydalı Linklər</h3>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-color--400 body-font">Biz Kimik?</Link></li>
                                <li><Link to="/" className="text-color--400 body-font">Haqqımızda</Link></li>
                                <li><Link to="/" className="text-color--400 body-font">Üstünlüklərimiz</Link></li>
                                <li><Link to="/qiymet" className="text-color--400 body-font">Qiymətlər</Link></li>
                                <li><Link to="/" className="text-color--400 body-font">Nələr Edirik?</Link></li>
                                <li><Link to="/" className="text-color--400 body-font">Komanda</Link></li>
                                <li><Link to="/" className="text-color--400 body-font">Layihələr</Link></li>
                                <li><Link to="/blog" className="text-color--400 body-font">Blog</Link></li>
                                <li><Link to="/" className="text-color--400 body-font">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 mb-1 mb-lg-0">
                            <h2 className="font-size--20 text-color--300 mb-2 font-w--700">ƏLAQƏ</h2>
                            <p className="">Bizə sualınız var? Elə isə e-mail vasitəsilə göndərin, qısa zamanda cavablandıraq.</p>
                            <ul className="list-unstyled">
                                <li><a href="mailto:info@miner.az" className="text-color--400 body-font">info@miner.az</a></li>
                                <li><a href="tel:+994502344525" className="text-color--400 body-font">+994 50 234 45 25</a></li>
                                <li><span className="text-color--400 body-font">Lotfi Zadeh Technology Center Caspian Plaza, Cəfər Cabbarlı 44</span></li>
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
                                <li><a href="https://www.facebook.com/minerazerbaijan" className="color--primary"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/minerazerbaijan" className="color--primary"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://t.me/minerazerbaijan" className="color--primary"><i className="fab fa-telegram-plane"></i></a></li>
                                <li><a href="https://www.instagram.com/minerazerbaijan" className="color--primary"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer