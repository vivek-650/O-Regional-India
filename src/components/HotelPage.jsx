import React from "react";
import "../styles/HotelPage.css";

function HotelPage() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="navbar"></div>
        <div className="page1">
          <div className="checkbox-nav">
            <div className="city-box">
              <input type="text" placeholder="City-Name" />
            </div>
            <div className="date-box">
              <input className="date-box1" type="date" placeholder="Check In" />
              <input
                className="date-box2"
                type="date"
                placeholder="Check Out"
              />
            </div>
            <div className="member-box">
              <input type="number" placeholder="No. Of People" />
            </div>
          </div>
          <div className="hotel-part-division">
            <div className="left-part">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.4628453133287!2d86.94896997504694!3d23.695160090895406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f05289d9be1%3A0x28f6da8ce2526d9!2sSuper%20Collection%20O%20Meera%20International!5e0!3m2!1sen!2sin!4v1725906210319!5m2!1sen!2sin"
                width="650"
                height="650"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="location-map"
              ></iframe>
              <div className="left-textarea">
                <h2>Popular Filter</h2>
                <div className="filer-check">
                <p>Airpot Transport</p>
                <input type="checkbox" />
                </div>
                <div className="filer-check">
                <p>Train Transport</p>
                <input type="checkbox" />
                </div>
                <div className="filer-check">
                <p>Air Conditioning</p>
                <input type="checkbox" />
                </div>
                <div className="filer-check">
                <p>Breakfast Offer..</p>
                <input type="checkbox" />
                </div>
                <div className="filer-check">
                <p>Lunch Offer...</p>
                <input type="checkbox" />
                </div>
                <div className="filer-check">
                <p>Dinner Offer ..</p>
                <input type="checkbox" />
                </div>
                <div className="filer-check">
                <p>20% Discount</p>
                <input type="checkbox" />
                </div>
                <div className="filer-check">
                <p>50% Discount</p>
                <input type="checkbox" />
                </div>
                <div className="filer-check">
                <p>Rate:⭐⭐⭐</p>
                <input type="checkbox" />
                </div>
                <div className="filer-check">
                <p>Rate:⭐⭐⭐⭐</p>
                <input type="checkbox" />
                </div>

              </div>
            </div>
            <div className="right-part">
              <div className="Hotels-card">
                <div className="hotels-img">
                  <img
                    src="https://pix8.agoda.net/hotelImages/9784122/-1/06cb4b75cc7af4e789226d50d71a4162.jpg?ca=9&ce=1&s=1024x"
                    alt=""
                  />
                </div>
                <div className="hotel-textarea">
                  <h1>Meera International</h1>
                  <p>⭐⭐⭐</p>
                  <p>🔻Asansol </p>
                  <br />
                  <h2>Rs.1,500</h2>
                </div>
              </div>
              <div className="Hotels-card">
                <div className="hotels-img">
                  <img
                    src="https://pix8.agoda.net/hotelImages/45135934/0/eb4f75693c31381c7188f66e2814c092.jpg?ce=0&s=1024x"
                    alt=""
                  />
                </div>
                <div className="hotel-textarea">
                  <h1>Payal Inn</h1>
                  <p>⭐⭐⭐⭐</p>
                  <p>🔻Asansol </p>
                  <br />
                  <h2>Rs.1,700</h2>
                </div>
              </div>
              <div className="Hotels-card">
                <div className="hotels-img">
                  <img
                    src="https://pix8.agoda.net/hotelImages/39786226/-1/743cef33643ece4d424e7b55401f415e.jpg?ce=0&s=375x"
                    alt=""
                  />
                </div>
                <div className="hotel-textarea">
                  <h1>Jyoti International</h1>
                  <p>⭐⭐⭐⭐</p>
                  <p>🔻Asansol </p>
                  <br />
                  <h2>Rs.1,300</h2>
                </div>
              </div>
              <div className="Hotels-card">
                <div className="hotels-img">
                  <img
                    src="https://pix8.agoda.net/hotelImages/45085350/0/98a0cb1a729b699deaba0ee2c07ef2ca.jpg?ce=0&s=375x"
                    alt=""
                  />
                </div>
                <div className="hotel-textarea">
                  <h1>Spot On OYO</h1>
                  <p>⭐⭐</p>
                  <p>🔻Asansol </p>
                  <br />
                  <h2>Rs.1,500</h2>
                </div>
              </div>
              <div className="Hotels-card">
                <div className="hotels-img">
                  <img
                    src="https://q-xx.bstatic.com/xdata/images/hotel/max500/553469322.jpg?k=2f373a9387642d6eb4dbce008242abe48474820557fd4e5036bf39d76da0cfa1&s=375x"
                    alt=""
                  />
                </div>
                <div className="hotel-textarea">
                  <h1>OYO</h1>
                  <p>⭐⭐⭐</p>
                  <p>🔻Asansol </p>
                  <br />
                  <h2>Rs.1,500</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelPage;
