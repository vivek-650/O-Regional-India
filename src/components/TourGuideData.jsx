import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/TourGuidData.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

function TourGuidData() {
  return (
    
    <div className="TourGuid_container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={3} /* Show three slides at a time */
        autoplay={{
          delay: 5000, /* Set the delay to 1 second (1000 ms) */
          disableOnInteraction: false, /* Continue autoplay after user interaction */
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -30, /* Slightly overlap the side cards */
          depth: 450, /* Adjust the depth for the 3D effect */
          modifier: 1, 
          slideShadows: false, /* Remove the shadows for clarity */
        }}
        pagination={{ el: '.festive-cards__swiper-pagination', clickable: true }}
      
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="TourGuid-cards__swiper-container"
      >
        <SwiperSlide className="TourGuid-cards__swiper-slide">
          <div className="upper-div">
            <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="pic" />
            <h2>Amit Deo</h2>
            <p>Rating:⭐⭐⭐⭐</p>
          </div>
          <div className="lower-div">
          <p>Location: Sitamari,Bihar</p>
            <p>Languages:Hindi,English</p>
            <p>Contact:5492729752</p>
            <p>Nationality:Indian</p>
            <br />
          
          </div>
        </SwiperSlide>
        <SwiperSlide className="TourGuid-cards__swiper-slide">
          <div className="upper-div">
            <img src="https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg" alt="pic" />
            <h2>Satendra Kumar</h2>
            <p>Rating:⭐⭐⭐⭐</p>
          </div>
          <div className="lower-div">
          <p>Location: Sitamari,Bihar</p>
            <p>Languages:Hindi,English</p>
            <p>Contact:5492729752</p>
            <p>Nationality:Indian</p>
            <br />
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="TourGuid-cards__swiper-slide">
          <div className="upper-div">
            <img src="https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922" alt="pic" />
            <h2>Vivek Anand</h2>
            <p>Rating:⭐⭐⭐⭐</p>
          </div>
          <div className="lower-div">
          <p>Location:Dumka,Jharkhand</p>
            <p>Languages:Hindi,English</p>
            <p>Contact:5492729752</p>
            <p>Nationality:Indian</p>
            <br />
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="TourGuid-cards__swiper-slide">
          <div className="upper-div">
            <img src="https://play-lh.googleusercontent.com/830wVRGpgr6whP_zJ_1kh7QpuQvCvZ7x-_qJDjYGC2JAp46rj-xOKKzBqyItO4t32WoQ" alt="pic" />
            <h2>Sitesh kumar</h2>
            <p>Rating:⭐⭐⭐⭐</p>
          </div>
          <div className="lower-div">
          <p>Location:Noida,U.P</p>
            <p>Languages:Hindi,English</p>
            <p>Contact:5492729752</p>
            <p>Nationality:Indian</p>
            <br />
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="TourGuid-cards__swiper-slide">
          <div className="upper-div">
            <img src="https://neurolist.ru/wp-content/uploads/ai-profile-pic.png" alt="pic" />
            <h2>Jyoti Aditya</h2>
            <p>Rating:⭐⭐⭐⭐</p>
          </div>
          <div className="lower-div">
          <p>Location: Asansol, W.B</p>
            <p>Languages:Hindi,English</p>
            <p>Contact:5492729752</p>
            <p>Nationality:Indian</p>
            <br />
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="TourGuid-cards__swiper-slide">
          <div className="upper-div">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbUlzKaMhLWPx_ynu1-ga2i50bcsVJ3rLNA&s" alt="pic" />
            <h2>Alien Sharma</h2>
            <p>Rating:⭐⭐⭐⭐⭐</p>
          </div>
          <div className="lower-div">
          <p>Location: Mars,Solar</p>
            <p>Languages:Hinglish,%$##%</p>
            <p>Contact:5492729752</p>
            <p>Nationality:Indian</p>
            <br />
            
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
    
  );
}

export default TourGuidData;