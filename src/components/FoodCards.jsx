import React, { useEffect, useRef } from 'react';
import '../styles/FoodCards.css';

function FoodCards() {
  // Create a ref to access the card slider container
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Function to update button state based on scroll position
    function updateButtonState() {
      const scrolledToEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth;
      // Here, you could add logic to disable/enable buttons if needed
      // or perform some other UI changes when scrolling
      // console.log('Scrolled to end:', scrolledToEnd);
    }

    // Add scroll event listener
    container.addEventListener("scroll", updateButtonState);

    // Update button state initially
    updateButtonState();

    // Cleanup event listener on component unmount
    return () => {
      container.removeEventListener("scroll", updateButtonState);
    };
  }, []);

  return (
    <div className="contain">
      <div className="main-slider">
        <div className="label-container">
          {/* Additional controls like arrows can go here */}
        </div>
        <div className="card-slider-main" ref={containerRef}>
          <div className="card-wrapper">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png"
              alt="Samosas"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
              alt="Biryani"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png"
              alt="Rolls"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png"
              alt="Shawarma"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png"
              alt="Pav Bhaji"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png"
              alt="Pure Veg"
            />
          </div>
          <div className="card-wrapper">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"
              alt="Chinese"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCards;
