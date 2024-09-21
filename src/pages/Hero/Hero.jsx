import React from "react";

const Hero = ({ data }) => {
  return (
    <section class="banner">
      <div class="banner__cont container">
        <h1 class="banner__heading">{data?.heading}</h1>
        <p class="banner__desc">{data?.description}</p>
        <button class="banner__btnExplr btn">{data.btn}</button>
      </div>
    </section>
  );
};

export default Hero;
