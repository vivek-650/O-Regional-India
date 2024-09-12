// import React from 'react'
import { useState } from "react";
const TourGuideDashboard = () => {
    const [activeTab, setActiveTab] = useState('profile'); // 'profile' is active by default

    // Function to handle "My Profile" click
    const handleProfileClick = () => {
      setActiveTab('profile');
    };
  
    return (
      <div className="profile-container">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li className={activeTab === 'profile' ? 'active' : ''} onClick={handleProfileClick}>My Profile</li>
            {/* <li>Settings</li> */}
            <li>Logout</li>
          </ul>
        </div>
  
        <div className="content">
          <div className="header">
            <div className="header-left">
              <h3>Tour Guide Details</h3>
            </div>
          </div>
          {/* By default, the profile details will be shown since activeTab is 'profile' */}
          {activeTab === 'profile' && (
            <div className="profile-details">
              <div className="detail-row">
                <img src="https://via.placeholder.com/100" alt="Profile" className="profile-photo" />
              </div>
              <h3>xyz@gmail.com</h3>
              <div className='detail-conatiner'>
                  <div className="detail-row">
                      <label>Name:</label>
                      <p>John Doe</p>
                  </div>
                  <div className="detail-row">
                      <label>Aadhar no:</label>
                      <p>xxxx xxxx xxxx</p>
                  </div>
                  <div className="detail-row">
                      <label>city:</label>
                      <p>xyz</p>
                  </div>
                  <div className="detail-row">
                      <label>Address:</label>
                      <p>123 Main St, Springfield</p>
                  </div>
                  <div className="detail-row">
                      <label>Contact:</label>
                      <p>+1 234 567 890</p>
                  </div>
                  <div className="detail-row">
                      <label>Gender:</label>
                      <p>Male</p>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default TourGuideDashboard