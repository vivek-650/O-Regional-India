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
                <img
                  className="post-avatar"
                  src="https://static.vecteezy.com/system/resources/previews/010/171/341/original/emoji-feel-special-surprise-file-png.png"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Meenakari Jewelry</h2>
                 
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
                src="https://cdn0.weddingwire.in/articles/images/1/9/0/5/img_75091/phulkari-embroidery-tradition-meets-trens-juttis.jpg"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://png.pngtree.com/png-vector/20240618/ourmid/pngtree-3d-yellow-colour-wow-surprise-cute-emoji-png-image_12796488.png"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Phulkari Embroidery</h2>
                 
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
                src="https://i.pinimg.com/originals/1b/79/f3/1b79f3e5362dee77552af98a329da395.jpg"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://png.pngtree.com/png-vector/20240618/ourmid/pngtree-3d-yellow-colour-wow-surprise-cute-emoji-png-image_12796488.png"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Blue Pottery</h2>
                 
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
                src="https://images.wholesalesalwar.com/2020y/Jun/15967/Yellow%20Pure%20Cotton%20Festival%20Wear%20Chikan%20Work%20Pakistani%20Suit-EIDI-602.jpg"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://static.vecteezy.com/system/resources/previews/010/171/341/original/emoji-feel-special-surprise-file-png.png"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Chikan Work</h2>
            
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
                src="https://5.imimg.com/data5/TQ/FC/MY-12118886/wooden-carved-elephant-500x500.jpg"
                alt="recipe"
              />
              <div className="post-body">
                <img
                  className="post-avatar"
                  src="https://www.clipartbest.com/cliparts/KTj/pzM/KTjpzMGbc.jpg"
                  alt="avatar"
                />
                <div className="post-detail">
                  <h2 className="post-name">Wood Carvings</h2>
                 
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
