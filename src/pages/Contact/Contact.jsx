import React from "react";
import ContactImg from "../../assets/images/contact-us.webp";
const Contact = () => {
  return (
    <section class="contact">
      <div class="contact__cont container">
        <div class="contact__left">
          <div class="contact__img">
            <img src={ContactImg} alt="contact" />
          </div>
        </div>
        <div class="contact__right">
          <form action="" class="contact__form">
            <h2 class="heading contact__heading">
              Contact <span class="blue">Us</span>
            </h2>
            <p class="text-base contact__desc">
              We’d love to speak to you and understand how we can work together
              to make graph analytics better
            </p>
            <div class="contact__inner">
              <div class="contact__firtNme">
                <label for="firstName" class="test-base contact__label">
                  First Name
                  <input
                    type="text"
                    name=""
                    id="firstName"
                    placeholder="Enter your name"
                    class="text-base contact__input"
                  />
                </label>
              </div>
              <div class="contact__lastNme">
                <label for="lastName" class="test-base contact__label">
                  Last Name
                  <input
                    type="text"
                    name=""
                    id="lastName"
                    placeholder="Enter your name"
                    class="text-base contact__input"
                  />
                </label>
              </div>
            </div>
            <label
              for="email"
              class="test-base contact__label contact__label--emailLebel"
            >
              Email Address*
              <input
                type="email"
                name=""
                id="email"
                placeholder="Enter your email"
                class="text-base contact__input contact__email"
              />
            </label>
            <label
              for="textarea"
              class="test-base contact__label contact__label--textWrap"
            >
              Any Questions?
              <textarea
                name=""
                id="textarea"
                class="contact__input contact__textarea"
              ></textarea>
            </label>
            <button class="btn contact__submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
