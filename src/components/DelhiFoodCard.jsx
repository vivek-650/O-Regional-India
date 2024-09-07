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
                src="https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://www.clipartmax.com/png/middle/166-1667680_face-savoring-food-icon-tasty-emoji.png"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Chole Bhatue</h2>
                 
                </div>
                <div className="post-actions">
                  <button className="post-like" onClick={handleLikeClick}>
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="post-actions-controller"
                    onClick={() => togglePostActions(1)}
                    aria-expanded={postVisibility[1] ? "true" : "false"}
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className={`post-actions-content ${postVisibility[1] ? "visible" : ""}`}
                    data-visible={postVisibility[1] ? "true" : "false"}
                    aria-hidden={postVisibility[1] ? "false" : "true"}
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide post">
              <img
                className="post-img"
                src="https://www.scrolldroll.com/wp-content/uploads/2021/09/Chole-Kulche-Indian-foods-every-foreigner-should-try-1.jpeg"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://www.clipartmax.com/png/middle/166-1667680_face-savoring-food-icon-tasty-emoji.png"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Chole Kulche</h2>
                 
                </div>
                <div className="post-actions">
                  <button className="post-like" onClick={handleLikeClick}>
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="post-actions-controller"
                    onClick={() => togglePostActions(2)}
                    aria-expanded={postVisibility[2] ? "true" : "false"}
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className={`post-actions-content ${postVisibility[2] ? "visible" : ""}`}
                    data-visible={postVisibility[2] ? "true" : "false"}
                    aria-hidden={postVisibility[2] ? "false" : "true"}
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
{/* fake one slide */}

<div className="swiper-slide post">
              <img
                className="post-img"
                src="https://static.toiimg.com/photo/75107900.cms"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://static-00.iconduck.com/assets.00/woozy-face-emoji-1024x1024-nawnlcy1.png"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Gol Gappa</h2>
                 
                </div>
                <div className="post-actions">
                  <button className="post-like" onClick={handleLikeClick}>
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="post-actions-controller"
                    onClick={() => togglePostActions(2)}
                    aria-expanded={postVisibility[2] ? "true" : "false"}
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className={`post-actions-content ${postVisibility[2] ? "visible" : ""}`}
                    data-visible={postVisibility[2] ? "true" : "false"}
                    aria-hidden={postVisibility[2] ? "false" : "true"}
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </button>
                      </li>
                    </ul>
                  </div>
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
                <img
                  className="post-avatar"
                  src="https://i.pinimg.com/originals/bb/4c/08/bb4c08598bff95d8d4a594c92a719e37.jpg"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Kachori</h2>
            
                </div>
                <div className="post-actions">
                  <button className="post-like" onClick={handleLikeClick}>
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="post-actions-controller"
                    onClick={() => togglePostActions(2)}
                    aria-expanded={postVisibility[2] ? "true" : "false"}
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className={`post-actions-content ${postVisibility[2] ? "visible" : ""}`}
                    data-visible={postVisibility[2] ? "true" : "false"}
                    aria-hidden={postVisibility[2] ? "false" : "true"}
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </button>
                      </li>
                    </ul>
                  </div>
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
                <img
                  className="post-avatar"
                  src="https://www.clipartmax.com/png/middle/166-1667680_face-savoring-food-icon-tasty-emoji.png"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Kulfi</h2>
                 
                </div>
                <div className="post-actions">
                  <button className="post-like" onClick={handleLikeClick}>
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="post-actions-controller"
                    onClick={() => togglePostActions(3)}
                    aria-expanded={postVisibility[3] ? "true" : "false"}
                  >
                    <i className="fa-solid fa-ellipsis fa-2xl"></i>
                  </button>
                  <div
                    className={`post-actions-content ${postVisibility[3] ? "visible" : ""}`}
                    data-visible={postVisibility[3] ? "true" : "false"}
                    aria-hidden={postVisibility[3] ? "false" : "true"}
                  >
                    <ul role="list" className="grid-flow" data-spacing="small">
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-folder-open"></i>
                          <span>Add to Collection</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-eye"></i>
                          <span>Show the Recipe</span>
                        </button>
                      </li>
                      <li>
                        <button className="post-actions-link">
                          <i className="fa-solid fa-user-plus"></i>
                          <span>Follow the User</span>
                        </button>
                      </li>
                    </ul>
                  </div>
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
