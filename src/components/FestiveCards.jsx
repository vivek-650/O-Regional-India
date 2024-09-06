import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/FestiveCards.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

function FestiveCards() {
  return (
    <div className="festive-cards__container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3} /* Show three slides at a time */
        autoplay={{
          delay: 3000, /* Set the delay to 1 second (1000 ms) */
          disableOnInteraction: false, /* Continue autoplay after user interaction */
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -30, /* Slightly overlap the side cards */
          depth: 150, /* Adjust the depth for the 3D effect */
          modifier: 1, 
          slideShadows: false, /* Remove the shadows for clarity */
        }}
        pagination={{ el: '.festive-cards__swiper-pagination', clickable: true }}
      
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="festive-cards__swiper-container"
      >
        <SwiperSlide className="festive-cards__swiper-slide">
          <img src="https://images.pexels.com/photos/3367459/pexels-photo-3367459.jpeg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide className="festive-cards__swiper-slide">
          <img src="https://images.pexels.com/photos/26833725/pexels-photo-26833725/free-photo-of-person-holding-traditional-red-diwali-candle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="water" />
        </SwiperSlide>
        <SwiperSlide className="festive-cards__swiper-slide">
          <img src="https://images.pexels.com/photos/7750087/pexels-photo-7750087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="flower" />
        </SwiperSlide>
        <SwiperSlide className="festive-cards__swiper-slide">
          <img src="https://images.pexels.com/photos/19634843/pexels-photo-19634843/free-photo-of-woman-with-tray-of-fruits-in-river-celebrating-chhath-puja.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain" />
        </SwiperSlide>
        <SwiperSlide className="festive-cards__swiper-slide">
          <img src="https://images.pexels.com/photos/27170152/pexels-photo-27170152/free-photo-of-rath-2.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="tree" />
        </SwiperSlide>


      </Swiper>
    </div>
  );
}

export default FestiveCards;


