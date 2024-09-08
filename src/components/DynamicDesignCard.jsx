import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/FestiveCards.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

function DynamicDesignCard(props) {
    const places = props.data;
    console.log("data coming",places);
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
            {places.map((obj) => (
                    <SwiperSlide className="festive-cards__swiper-slide">
                    <img src={obj.images} alt="nature" />
                  </SwiperSlide>
            ))}


      </Swiper>
    </div>
  );
}

export default DynamicDesignCard;

