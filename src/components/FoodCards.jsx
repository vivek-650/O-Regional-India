import React from 'react'
import '../styles/FoodCards.css';



function FoodCards() {

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".card-slider-main");
    const leftButton = document.querySelector(".arrow-left");
    const rightButton = document.querySelector(".arrow-right");
  
    function updateButtonState() {
      leftButton.disabled = container.scrollLeft <= 0;
      rightButton.disabled =
        container.scrollLeft + container.offsetWidth >= container.scrollWidth;
    }
  
    leftButton.addEventListener("click", function () {
      container.scrollBy({
        left: -container.offsetWidth / 2,
        behavior: "smooth",
      });
    });
  
    rightButton.addEventListener("click", function () {
      container.scrollBy({ left: container.offsetWidth / 2, behavior: "smooth" });
    });
    container.addEventListener("scroll", updateButtonState);
    updateButtonState();
  });
  return (
   <div class="container">
    <div class="main-slider">
        <div class="label-container">
            {/* <h2>What's on your mind?</h2> */}
            <button class="arrow-left"><i class="bi bi-arrow-left"></i></button>
            <button class="arrow-right"><i class="bi bi-arrow-right"></i></button>
        </div>
        <div class="card-slider-main">
            <div class="card-wrapper">
                {/* <img src="https://images.unsplash.com/photo-1664990035720-faac522df41f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/> */}
            </div>
            <div class="card-wrapper">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png" alt=""/>
            </div>
            <div class="card-wrapper">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" alt=""/>
            </div>
            <div class="card-wrapper">
                {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" alt=""/> */}
            </div>
            <div class="card-wrapper">
                {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png" alt=""/>/ */}
            </div>
            <div class="card-wrapper">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png" alt=""/>
            </div>
            <div class="card-wrapper">
                {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" alt=""/> */}
            </div>
            <div class="card-wrapper">
                {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png" alt=""/> */}
            </div>
            <div class="card-wrapper">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png" alt=""/>
            </div>
            <div class="card-wrapper">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png" alt=""/>
            </div>
            <div class="card-wrapper">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png" alt=""/>
            </div>
            <div class="card-wrapper">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" alt="" />
            </div>
        </div>
    </div>
</div>
  )
}

export default FoodCards