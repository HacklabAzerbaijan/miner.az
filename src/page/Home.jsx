import React from "react";
import About from "../component/homeComponent/About";
import Benefist from "../component/homeComponent/Benefist";
import Faq from "../component/homeComponent/Faq";
import Footer from "../component/homeComponent/Footer";
import Header from "../component/homeComponent/Header";
import Hero from "../component/homeComponent/Hero";
import RoadMap from "../component/homeComponent/RoadMap";
import Working from "../component/homeComponent/Working";


const Home = ({setNavbarToggle,navbarToggle}) => {
  return (
    <>
      <Header setNavbarToggle={setNavbarToggle} navbarToggle={navbarToggle}/>
      <Hero />
      <About />
      <Working />
      <Benefist />
      <RoadMap />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
