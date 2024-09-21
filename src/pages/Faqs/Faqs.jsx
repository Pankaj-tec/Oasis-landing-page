import React from "react";
import plusIcon from "../../assets/images/plus.svg";
import minusIcon from "../../assets/images/minus.svg";

const Faqs = () => {
  return (
    <section class="faq">
      <div class="faq__cont container">
        <h2 class="heading faq__heading">
          FAQ<span class="blue faq__blue">s</span>
        </h2>
        <p class="text-base faq__desc">
          Suspendisse potenti. Vestibulum gravida turpis ut ipsum efficitur, id
          ullamcorper sem semper
        </p>
        <div class="faq__accordions">
          <div class="faq__items">
            <div class="faq__head">
              <h3 class="text-base faq__title">
                Maecenas porttitor enim nec velit ultrices?
              </h3>
              <div class="faq__icon">
                <img class="faq__img" src={plusIcon} alt="plus" />
                <img class="faq__minus-img" src={minusIcon} alt="minus" />
              </div>
            </div>
            <div class="faq__content">
              <p class="text-base faq__contentDesc">
                Pellentesque iaculis, nisl et consectetur mattis, neque eros
                finibus elit, quis semper ipsum lorem vel augue. Aliquam erat
                volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna
                risus, pulvinar ut metus at, consequat aliquet justo. Mauris
                egestas aliquam ligula ut molestie
              </p>
            </div>
          </div>
          <div class="faq__items">
            <div class="faq__head">
              <h3 class="text-base faq__title">
                Maecenas porttitor enim nec velit ultrices?
              </h3>
              <div class="faq__icon">
                <img class="faq__img" src={plusIcon} alt="plus" />
                <img class="faq__minus-img" src={minusIcon} alt="minus" />
              </div>
            </div>
            <div class="faq__content">
              <p class="text-base faq__contentDesc">
                Pellentesque iaculis, nisl et consectetur mattis, neque eros
                finibus elit, quis semper ipsum lorem vel augue. Aliquam erat
                volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna
                risus, pulvinar ut metus at, consequat aliquet justo. Mauris
                egestas aliquam ligula ut molestie
              </p>
            </div>
          </div>
          <div class="faq__items">
            <div class="faq__head">
              <h3 class="text-base faq__title">
                Maecenas porttitor enim nec velit ultrices?
              </h3>
              <div class="faq__icon">
                <img class="faq__img" src={plusIcon} alt="plus" />
                <img class="faq__minus-img" src={minusIcon} alt="minus" />
              </div>
            </div>
            <div class="faq__content">
              <p class="text-base faq__contentDesc">
                Pellentesque iaculis, nisl et consectetur mattis, neque eros
                finibus elit, quis semper ipsum lorem vel augue. Aliquam erat
                volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna
                risus, pulvinar ut metus at, consequat aliquet justo. Mauris
                egestas aliquam ligula ut molestie
              </p>
            </div>
          </div>
          <div class="faq__items">
            <div class="faq__head">
              <h3 class="text-base faq__title">
                Maecenas porttitor enim nec velit ultrices?
              </h3>
              <div class="faq__icon">
                <img class="faq__img" src={plusIcon} alt="plus" />
                <img class="faq__minus-img" src={minusIcon} alt="minus" />
              </div>
            </div>
            <div class="faq__content">
              <p class="text-base faq__contentDesc">
                Pellentesque iaculis, nisl et consectetur mattis, neque eros
                finibus elit, quis semper ipsum lorem vel augue. Aliquam erat
                volutpat. Nunc auctor sem a arcu ultrices molestie. Etiam magna
                risus, pulvinar ut metus at, consequat aliquet justo. Mauris
                egestas aliquam ligula ut molestie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
