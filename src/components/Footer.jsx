import React from 'react'
import Wave from 'react-wavify'

import '../styles/Footer.css';
import logo from "../assets/images/logo_crop.png";


function Footer() {
  return (
    <div id="footer">
      <div className="wave">
      <Wave fill='#17406c'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height:5,
          amplitude: 10,
          speed: 0.4,
          points: 4
        }}
  />
      </div>
        <h4>
          <u>State Tourism Websites</u>
        </h4>
        <div className="state-collection">
          <div className="left-one">
            <a href="https://tourism.ap.gov.in/home" target="_blank">
              Andhra Pradesh
            </a>
            <a href="https://tourism.bihar.gov.in/" target="_blank">
              Bihar
            </a>
            <a href="https://goa-tourism.com/" target="_blank">
              Goa
            </a>
            <a href="https://haryanatourism.gov.in/" target="_blank">
              Haryana
            </a>
            <a href="https://tourism.jharkhand.gov.in/" target="_blank">
              Jharkhand
            </a>
            <a href="https://www.keralatourism.org/" target="_blank">
              Kerala
            </a>
            <a href="https://maharashtratourism.gov.in/" target="_blank">
              Maharashtra
            </a>
            <a href="https://wbtourism.gov.in/" target="_blank">
              West Bengal
            </a>
            <a href="https://sikkimtourism.gov.in/Public/index" target="_blank">
              Skkim
            </a>
            <a href="">Uttar Pradeh</a>
          </div>

          <div className="left-two">
            <a href="https://arunachaltourism.com/" target="_blank">
              Arunachal Pradesh
            </a>
            <a href="https://tourism.cgstate.gov.in/" target="_blank">
              Chhattisgarh
            </a>
            <a href="https://www.karnatakatourism.org/" target="_blank">
              Karnataka
            </a>
            <a href="https://www.meghalayatourism.in/" target="_blank">
              Meghalaya
            </a>
            <a href="https://tourism.jharkhand.gov.in/" target="_blank">
              Jharkhand
            </a>
            <a href="https://punjabtourism.punjab.gov.in/" target="_blank">
              Punjab
            </a>
            <a href="https://www.tamilnadutourism.tn.gov.in/" target="_blank">
              Tamil Nadu
            </a>
            <a href="https://odishatourism.gov.in/en.html" target="_blank">
              Odisha
            </a>
            <a href="http://tripuratourism.gov.in/" target="_blank">
              Tripura
            </a>
            <a href="https://www.mptourism.com/" target="_blank">
              Madhya Pradesh
            </a>
          </div>

          <div className="left-three">
            <a href="https://tourism.assam.gov.in/" target="_blank">
              Assam
            </a>
            <a href="https://www.gujarattourism.com/" target="_blank">
              Gujarat
            </a>
            <a href="https://himachaltourism.gov.in/" target="_blank">
              Himachal Pradesh
            </a>
            <a href="">Mizoram</a>
            <a href="https://manipurtourism.gov.in/" target="_blank">
              Manipur
            </a>
            <a href="https://tourism.nagaland.gov.in/" target="_blank">
              Nagaland
            </a>
            <a href="https://www.tourism.rajasthan.gov.in/" target="_blank">
              Rajasthan
            </a>
            <a href="">Odisha</a>
            <a href="https://telanganatourism.gov.in/" target="_blank">
              Telangana
            </a>
            <a href="https://uttarakhandtourism.gov.in/" target="_blank">
              Uttrakhand
            </a>
          </div>
          <div className="contact">
            <h3>
              <u>Contact Details</u>
            </h3>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="Facebook">Facebook</a>
            <a href="mailto:info@yourwebsite.com">
              Email: info@yourwebsite.com
            </a>
          </div>
        </div>
        <div className="border"></div>
        <p className='bottom'>O'REGIONAL INDIA</p>
      </div>
  )
}

export default Footer
