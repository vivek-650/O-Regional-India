import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/DestinationCards.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

const data = [
  { img: 'https://www.incredibleindia.org/content/dam/incredible-india-v2/images/video/poster/shillong.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg', name: 'Shillong', description: 'Colonial-era charm, a landscape of rolling green and pristine mountains.' },
  { img: 'https://media.gettyimages.com/id/1055685174/photo/topshot-india-statue-politics.jpg?s=2048x2048&w=gi&k=20&c=QNDPz1u9rf6aSTlIikiijRUMFRN4EVwVX42cngunrnA=', name: 'Statue of Unity', description: 'Silhouetted against the surrounding Vindhya and Satpura mountain ranges.' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Kavaratii.jpg', name: 'Kavaratti', description: 'Exerting a magnetic pull over scuba divers, snorkellers and nature lovers, the 4,200-sq-km of immaculate.' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sulthan_Bathery_Ricefarm2.jpg/1280px-Sulthan_Bathery_Ricefarm2.jpg', name: 'Wayanad', description: 'A coffer of coffee, cardamom and tea plantations, which envelope the land.' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Panoramic_view_of_McLeod_Ganj_during_winters%2C_2005.jpg/1280px-Panoramic_view_of_McLeod_Ganj_during_winters%2C_2005.jpg', name: 'Dharamsala', description: 'A pristine green expanse ringed by the mist-shrouded Himalayas and a dense cover of oak, deodar.' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/The_View_of_the_Athirapally_Falls_during_the_onset_of_Monsoon.jpg/1280px-The_View_of_the_Athirapally_Falls_during_the_onset_of_Monsoon.jpg', name: 'Thrissur', description: 'Often referred to as the cultural capital of Kerala, Thrissur energetic festivities.' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ooty_lake.jpg/1920px-Ooty_lake.jpg', name: 'Ooty', description: 'A quaint hill town, perched against the backdrop of Doddabetta, the highest peak.' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Dalhousie_l_Hill_Station_in_Himachal_Pradesh.jpg/1280px-Dalhousie_l_Hill_Station_in_Himachal_Pradesh.jpg', name: 'Dalhousie', description: 'Perched atop a rocky ridge, with snow-clad Dhauladhar mountains and rolling valleys.' }
];

function DestinationCards() {
  return (
    <div className="destination-cards-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3} /* Show three slides at a time */
        autoplay={{
          delay: 3000, /* Set the delay to 3 seconds */
          disableOnInteraction: false, /* Continue autoplay after user interaction */
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -30, /* Slightly overlap the side cards */
          depth: 200, /* Adjust the depth for the 3D effect */
          modifier: 1,
          slideShadows: false, /* Remove the shadows for clarity */
        }}
        pagination={{ el: '.destination-cards__swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="destination-cards__swiper-container"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="destination-cards__swiper-slide">
            <img src={item.img} alt={item.name} />
            <div className="textarea">
              <h3>{item.name}</h3>
              {/* <p>{item.description}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DestinationCards;
