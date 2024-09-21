import React from "react";
import About from "../About/About";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
// import Testimonials from "../Testimonials/Testimonials";
import Project from "../Project/Project";

import Faqs from "../Faqs/Faqs";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import HeroDetails from "../HeroDetails/HeroDetails";
import { AboutData, HeroData, HeroDetail, CompanyData } from "../../data/data";
const Home = () => {
  // console.log("CompanyData", CompanyData);

  return (
    <div>
      <section className="nav">
        <Hero data={HeroData} />
        <HeroDetails data={HeroDetail} />
      </section>
      <About data={AboutData} />

      <CompanyLogo data={CompanyData} />
      {/* <Testimonials /> */}

      <Project />
      <Faqs />
      <Contact />
    </div>
  );
};

export default Home;
