import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "../styles/DelhiFoodCard.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PopUp from "./PopUp";

function DelhiFoodCard(props) {
  // console.log(props, "is comming");
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
      document
        .querySelectorAll(".post-actions-content")
        .forEach((content, index) => {
          if (
            content.getAttribute("data-visible") === "true" &&
            !content.contains(event.target)
          ) {
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
  const foodData = props.data;
  // console.log("gettibg ==", foodData);
  return (
    <div>
      <div className="recipe-container">
        <div className="swiper">
          <div className="swiper-wrapper">
            {foodData.map((obj) => (
              <div className="swiper-slide post">
              <img
                className="post-img"
                src={obj.images}
                alt="recipe"
              />
              <div className="post-body">
                <div className="post-detail">
                  <h2 className="post-name" onClick={() => setShowPopUp(true)}>
                    {obj.name}
                  </h2>
                </div>
              </div>
            </div>
            // {showPopUp && <PopUp onclose={() => setShowPopUp(false)} />}}              
            ))}
          </div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  );
}

export default DelhiFoodCard;
