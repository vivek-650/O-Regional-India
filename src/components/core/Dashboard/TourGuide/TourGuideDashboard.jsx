// import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogOut } from '../../../../services/operations/authFire';
import { fetchUserData } from "../../../../services/operations/authUser";
import { AddLocalSpecialities } from "./AddLocalSpecialities";

const TourGuideDashboard = () => {
    const [activeTab, setActiveTab] = useState('profile'); // 'profile' is active by default
    
    const [userData, setUserData] = useState("null");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function to handle "My Profile" click
    const handleProfileClick = () => {
      setActiveTab('profile');
    };

    const handleAddClick = () => {
      setActiveTab('Add');
    };

    const handleLogOutFun = () =>{
      handleLogOut(dispatch, navigate);
    }

    useEffect(() => {
      const getUserData = async () => {
        const UserData = await fetchUserData(); // Call the function
        // console.log("User data came: ",UserData);
        setUserData(UserData); // Store the fetched data in local state
      };

        getUserData();
    }, []);

    // const handleAddFamous = () =>{

    // }

    return (
      <div className="profile-container">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li className={activeTab === 'profile' ? 'active' : ''} onClick={handleProfileClick}>My Profile</li>
            {/* <li>Settings</li> */}
            <li className={activeTab === 'Add' ? 'active' : ''} onClick={handleAddClick}>Add Local Specialities</li>
            <li onClick={handleLogOutFun}>Logout</li>
          </ul>
        </div>

        <div className="content">
          
          {/* By default, the profile details will be shown since activeTab is 'profile' */}
          {activeTab === 'profile' && (
            
            <div className="profile-details">
              {/* <div className="header"> */}
                <div className="header-left">
                  <h3>Tour Guide Details</h3>
                </div>
              {/* </div> */}
              <div className="detail-row">
                <img src="https://via.placeholder.com/100" alt="Profile" className="profile-photo" />
              </div>
              <h3>{userData.email}</h3>
              <div className='detail-conatiner'>
                  <div className="detail-row">
                      <label>Name:</label>
                      <p>{userData.name}</p>
                  </div>
                  <div className="detail-row">
                      <label>Aadhar no:</label>
                      <p>{userData.aadharNumber}</p>
                  </div>
                  <div className="detail-row">
                      <label>city:</label>
                      <p>{userData.city}</p>
                  </div>
                  <div className="detail-row">
                      <label>Address:</label>
                      <p>{userData.address}</p>
                  </div>
                  <div className="detail-row">
                      <label>Contact:</label>
                      <p>{userData.contact}</p>
                  </div>
                  <div className="detail-row">
                      <label>Gender:</label>
                      <p>{userData.gender}</p>
                  </div>
              </div>
            </div>
          )}


          {activeTab === 'Add' && (
            <AddLocalSpecialities></AddLocalSpecialities>
          )}

        </div>
      </div>
    );
};

export default TourGuideDashboard