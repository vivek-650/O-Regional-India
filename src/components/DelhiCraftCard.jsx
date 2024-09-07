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
                src="https://3.bp.blogspot.com/-JwSUDXlSfNI/UcXqdhGG4SI/AAAAAAAAA8c/ryd4PuCfCio/s1600/award-1.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Meenakari Jewelry</h2>
                 
                </div>
                
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://cdn0.weddingwire.in/articles/images/1/9/0/5/img_75091/phulkari-embroidery-tradition-meets-trens-juttis.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Phulkari Embroidery</h2>
                 
                </div>
                
              </div>
            </div>
{/* fake one slide */}

<div className="swiper-slide post">
              <img
                className="post-img"
                src="https://i.pinimg.com/originals/1b/79/f3/1b79f3e5362dee77552af98a329da395.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Blue Pottery</h2>
                 
                </div>
                
              </div>
            </div>

            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://images.wholesalesalwar.com/2020y/Jun/15967/Yellow%20Pure%20Cotton%20Festival%20Wear%20Chikan%20Work%20Pakistani%20Suit-EIDI-602.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Chikan Work</h2>
            
                </div>
                
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://5.imimg.com/data5/TQ/FC/MY-12118886/wooden-carved-elephant-500x500.jpg"
                alt="recipe"
              />
              <div className="post-body">
                
                <div className="post-detail">
                  <h2 className="post-name">Wood Carvings</h2>
                 
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
