import React from "react";
const About = ({ data }) => {
  // console.log("data", data);

  return (
    <section class="about">
      <div class="about__cont">
        <div class="about__left">
          <div class="about__img">
            <img
              src={data?.image?.src}
              alt={data?.image?.alt}
              width={data?.image?.width}
              height={data?.image?.height}
            />
          </div>
        </div>
        <div class="about__right">
          <h2 class="heading about__heading">{data?.heading}</h2>
          <p class="text-base about__desc">{data?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
