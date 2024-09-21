import React from "react";
import Imggrohe from "../../assets/images/grohe.svg";
import Imgkale from "../../assets/images/kale.svg";
import merenga from "../../assets/images/merenga.svg";
import kullham from "../../assets/images/kullham.svg";
import evon from "../../assets/images/evon.svg";
const CompanyLogo = ({ data }) => {
  console.log(data);
  return (
    <section class="comnLogo">
      <div class="comnLogo__cont container">
        <div class="comnLogo__left">
          <h2 class="heading comnLogo__heading">
            {data.heading}
            <span class="comnLogo__blue">{data.headingBlue}</span>
          </h2>
          <p class="text-base comnLogo__desc">{data.description}</p>
        </div>
        <div class="comnLogo__right">
          <div class="comnLogo__rightWrap">
            <div class="comnLogo__logos">
              <div class="comnLogo__logosRight comnLogo__logosRight--grohe">
                <img src={Imggrohe} alt="grohe" />
              </div>
              <div class="comnLogo__logosLeft comnLogo__logosLeft--kale">
                <img src={Imgkale} alt="kale" />
              </div>
            </div>
            <div class="comnLogo__logos">
              <div class="comnLogo__logosRight comnLogo__logosRight--merenga">
                <img src={merenga} alt="merenga" />
              </div>
              <div class="comnLogo__logosLeft comnLogo__logosLeft--kullham">
                <img src={kullham} alt="kullham" />
              </div>
            </div>
            <div class="comnLogo__logos">
              <div class="comnLogo__logosRight comnLogo__logosRight--evon">
                <img src={evon} alt="evon" />
              </div>
              <div class="comnLogo__logosLeft comnLogo__logosRight--grohe">
                <img src="/assets/images/grohe.svg" alt="grohe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogo;
