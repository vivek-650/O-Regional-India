// import React from 'react'
import { useState } from "react";
import '../../../styles/TouristDashboard.css'
const BusinessDashboard = () => {
    const [activeTab, setActiveTab] = useState('profile'); // 'profile' is active by default

    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description for product 1',
            price: '$100',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description for product 2',
            price: '$150',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description for product 3',
            price: '$200',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description for product 3',
            price: '$200',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description for product 3',
            price: '$200',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description for product 3',
            price: '$200',
            image: 'https://via.placeholder.com/150',
        }
    ];

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
              <h3>Business Details</h3>
            </div>
          </div>
          {/* By default, the profile details will be shown since activeTab is 'profile' */}
          {activeTab === 'profile' && (
            <div className="profile-details">
              <div className="detail-row">
                <img src="https://via.placeholder.com/100" alt="Profile" className="profile-photo" />
              </div>
              <h3>xyz@gmail.com</h3>
              <div className='detail-container'>
                  <div className="detail-row">
                      <label>Name:</label>
                      <p>John Doe</p>
                  </div>
                  <div className="detail-row">
                      <label>Aadhar no:</label>
                      <p>xxxx xxxx xxxx</p>
                  </div>
                  <div className="detail-row">
                      <label>City:</label>
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
                  <div className="detail-row">
                      <label>Business Type:</label>
                      <p>xyz</p>
                  </div>
              </div>

              {/* Product section */}
              <div className="products-section">
                <h2>Products</h2><br />
                <div className="product-cards">
                  {products.map(product => (
                    <div key={product.id} className="product-card">
                      <img src={product.image} alt={product.name} />
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <p><strong>Price:</strong> {product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default BusinessDashboard;
