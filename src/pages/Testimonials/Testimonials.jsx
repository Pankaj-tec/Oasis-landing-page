import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ralph from "../../assets/images/ralph-edwards.webp";
import star from "../../assets/images/star.svg";
import "swiper/css";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        classNameName="mySwiper"
        autoplay={{
          delay: 2,
          disableOnInteraction: false,
        }}
      >
        <div className="testimonials__cont container swiper mySwiper">
          <h2 className="heading testimonials__heading">
            What <span className="blue testimonials__blue">Our Clients</span>{" "}
            Say
          </h2>

          <div className="testimonials__inner swiper swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="testimonials__card">
                <div className="testimonials__authImg">
                  <img src={ralph} alt="ralph-edwards" />
                </div>
                <h3 className="blue testimonials__authName">Ralph Edwards</h3>
                <p className="text-base testimonials__position">
                  Senior SEO Executive
                </p>
                <div className="testimonials__review">
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                </div>
                <p className="text-base testimonials__desc">
                  I am absolutely delighted to share my positive experience as a
                  client. From the moment I engaged with the company, I was met
                  with exceptional professionalism and dedication to ensuring my
                  satisfaction. The level of service provided was truly
                  outstanding, and every interaction I had with the team was
                  characterized by their unwavering commitment to excellence.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonials__card">
                <div className="testimonials__authImg">
                  <img src={ralph} alt="ralph-edwards" />
                </div>
                <h3 className="blue testimonials__authName">Ralph Edwards</h3>
                <p className="text-base testimonials__position">
                  Senior SEO Executive
                </p>
                <div className="testimonials__review">
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                </div>
                <p className="text-base testimonials__desc">
                  I am absolutely delighted to share my positive experience as a
                  client. From the moment I engaged with the company, I was met
                  with exceptional professionalism and dedication to ensuring my
                  satisfaction. The level of service provided was truly
                  outstanding, and every interaction I had with the team was
                  characterized by their unwavering commitment to excellence.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonials__card">
                <div className="testimonials__authImg">
                  <img src={ralph} alt="ralph-edwards" />
                </div>
                <h3 className="blue testimonials__authName">Ralph Edwards</h3>
                <p className="text-base testimonials__position">
                  Senior SEO Executive
                </p>
                <div className="testimonials__review">
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                </div>
                <p className="text-base testimonials__desc">
                  I am absolutely delighted to share my positive experience as a
                  client. From the moment I engaged with the company, I was met
                  with exceptional professionalism and dedication to ensuring my
                  satisfaction. The level of service provided was truly
                  outstanding, and every interaction I had with the team was
                  characterized by their unwavering commitment to excellence.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonials__card">
                <div className="testimonials__authImg">
                  <img src={ralph} alt="ralph-edwards" />
                </div>
                <h3 className="blue testimonials__authName">Ralph Edwards</h3>
                <p className="text-base testimonials__position">
                  Senior SEO Executive
                </p>
                <div className="testimonials__review">
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="testimonials__star">
                    <img src={star} alt="star" />
                  </div>
                </div>
                <p className="text-base testimonials__desc">
                  I am absolutely delighted to share my positive experience as a
                  client. From the moment I engaged with the company, I was met
                  with exceptional professionalism and dedication to ensuring my
                  satisfaction. The level of service provided was truly
                  outstanding, and every interaction I had with the team was
                  characterized by their unwavering commitment to excellence.
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination testimonials__pgnt"></div>
          <div className="swiper-pagination testimonials__pgnt"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
