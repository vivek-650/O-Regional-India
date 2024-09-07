import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import '../styles/DelhiFoodCard.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function DelhiFoodCard() {
  const [postVisibility, setPostVisibility] = useState({});
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    swiperRef.current = new Swiper(".swiper", {
      grabCursor: true,
      speed: 400,
      mousewheel: {
        invert: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        900: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    // Handle click outside to close post actions
    function handleClickOutside(event) {
      document.querySelectorAll(".post-actions-content").forEach((content, index) => {
        if (content.getAttribute("data-visible") === "true" && !content.contains(event.target)) {
          setPostVisibility((prevState) => ({
            ...prevState,
            [index]: false,
          }));
        }
      });
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const togglePostActions = (index) => {
    setPostVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleLikeClick = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  return (
    <div>
      <div className="recipe-container">
      
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://wallpaperaccess.com/full/4455652.jpg"
                alt="recipe"
              />
              <div className="post-body">
               
                <div className="post-detail">
                  <h2 className="post-name">India Gate</h2>
                 
                </div>
                
                
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://www.indiatravelblog.net/wp-content/uploads/2011/09/Lotus-Temple-delhi-at-night.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Lotus Temple</h2>
                 
                </div>
                
              </div>
            </div>
{/* fake one slide */}

<div className="swiper-slide post">
              <img
                className="post-img"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Qutub_Minar_in_the_monsoons.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Qutub Minar</h2>
                 
                </div>
                
              </div>
            </div>

            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://theurgetowander.com/wp-content/uploads/2013/11/dsc_5242-copy.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Humayun's Tomb</h2>
            
                </div>
                
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://hindipanda.com/wp-content/uploads/2018/08/Red-Fort-2.jpg"
                alt="recipe"
              />
              <div className="post-body">
               
                <div className="post-detail">
                  <h2 className="post-name">Red Fort</h2>
                 
                </div>
                
              </div>
            </div>

          </div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  );
}

export default DelhiFoodCard;
