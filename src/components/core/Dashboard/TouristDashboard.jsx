import  { useState, useEffect } from 'react';
import "../../../styles/TouristDashboard.css";
import { fetchUserData } from '../../../services/operations/authUser';

const TouristDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' is active by default
  const [userData, setUserData] = useState("null");
  // Function to handle "My Profile" click
  const handleProfileClick = () => {
    setActiveTab('profile');
  };

  useEffect(() => {
    const getUserData = async () => {
      const UserData = await fetchUserData(); // Call the function
      console.log("User data came: ",UserData);
      setUserData(UserData); // Store the fetched data in local state
    };

      getUserData();
  }, []);

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
            <h3>Tourist Details</h3>
          </div>
        </div>

        {/* By default, the profile details will be shown since activeTab is 'profile' */}
        {activeTab === 'profile' && (
          <div className="profile-details">
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
      </div>
    </div>
  );
};

export default TouristDashboard;
