import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import '../styles/DelhiFoodCard.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PopUp from "./PopUp";

function DelhiFoodCard() {
  const [postVisibility, setPostVisibility] = useState({});
  const swiperRef = useRef(null);

  const [showPopUp, setShowPopUp] = useState(false);

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
                src="https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg"
                alt="recipe" 
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h3 className="post-name" onClick={() => setShowPopUp(true)}>Chole Bhature</h3>
                 
                </div>
                
                    
                  
                
              </div>
            </div>
            {showPopUp && <PopUp onclose={() => setShowPopUp(false)}/>} 
            {/* Slide 2 */}
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://www.scrolldroll.com/wp-content/uploads/2021/09/Chole-Kulche-Indian-foods-every-foreigner-should-try-1.jpeg"
                alt="recipe"
              />
              <div className="post-body">
            
                <div className="post-detail">
                  <h2 className="post-name" onClick={() => setShowPopUp(true)}>Chole Kulche</h2>
                 
                </div>
               
              </div>
            </div>
            {showPopUp && <PopUp onclose={() => setShowPopUp(false)}/>} 
{/* fake one slide */}

<div className="swiper-slide post">
              <img
                className="post-img"
                src="https://static.toiimg.com/photo/75107900.cms"
                alt="recipe"
              />
              <div className="post-body">
               
                <div className="post-detail">
                  <h2 className="post-name">Gol Gappa</h2>
                 
                </div>
                
              </div>
            </div>

            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://i.ytimg.com/vi/xUeb7Ve5-Zo/maxresdefault.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Kachori</h2>
            
                </div>
                
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://www.olddelhifoods.com/wp-content/uploads/2023/05/malaikulfi.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Kulfi</h2>
                 
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
