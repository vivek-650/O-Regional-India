import './App.css'
import Nav from './components/Nav'
import video from './assets/images/heroVideo.mp4'
import DestinationCards from './components/DesitnationCards'
import logo from '../src/assets/images/logo_crop.png';
function App() {

  return (
    <>
      <Nav />
      <div id="page1">
        <div className="video-container"><video src={video} autoPlay muted loop id='video'></video></div>
      </div>
      <div id="page2">
        <div className="container">
          <div className="hidden-text">
            <p>
            One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.
            </p>
          </div>
          <div className="poster">
            <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/banner/Monsoon-campaign_website-banner.jpg" alt="" />
          </div>
            <p className="popular"> Popular In India</p>
            <p className="text">India is a home to the finest architectural heritage, serene ghats, spectacular landscapes and largest tiger reserve</p>
         
        </div>
      </div>  
      <div id="page3">

      </div>
      <div id="page4">
      <div className="container">
        <div className="poster">
          <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/banner/Dekho-Apna-Desh-website-banner-1.png" alt="" />
        </div>
        <p className="popular"> Must Visit Destinations</p>
            <p className="text">From historical cities to natural splendours, come see the best of India</p>

            <div className="Destination-cards">
              <DestinationCards />
              </div>
              <div className="poster">
                <img src='https://www.incredibleindia.org/content/dam/incredible-india-v2/images/banner/wedinindia.png' />
              </div>
            </div>
      </div>
      <div id="page5">
      <div className="container">
      <p className="popular">Immersive Experiences</p>
      <p className="text">In the land of opulence, let loose and discover yourself</p>

      
        </div>
        <div className="cards-collection">
          
        <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/spiritual/buddhism/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
        <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/adventure/river-rafting-rishikesh/river-rafting-rishikesh.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
        <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/art/musica-forms/musica-forms.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
        <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/amritsar/sarson-da-saag.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
        <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/luxury/luxury-image.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
        <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/nature/1920-1080.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
        <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/spiritual/Spiritual-Banner.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Bapu_museum_18.jpg" alt="" />
        <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/shopping/mcleod-ganj-market-dharamsala.jpg/jcr:content/renditions/cq5dam.web.512.384.jpeg" alt="" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Patanjali_Statue.jpg" alt="" />

      </div>
      <p className="popular">Celebrate With Us</p>
      <p className="text">As you travel through the country, be a part of our festivals and feasts</p>
      <div className="Destination-cards">
              <DestinationCards />
              </div>
      </div>
      <div id="footer">
        <h4><u>State Tourism Websites</u></h4>
        <div className="state-collection">
        <div className="left-one">
        <a href="">Andhra Pradesh</a>
        <a href="">Bihar</a>
        <a href="">Goa</a>
        <a href="">Haryana</a>
        <a href="">Jharkhand</a>
        <a href="">Kerala</a>
        <a href="">Maharashtra</a>
        <a href="">West Bengal</a>
        <a href="">Skkim</a>
        <a href="">Uttar Pradeh</a>
        </div>
        
        <div className="left-two">
          <a href="">Arunachal Pradesh</a>
          <a href="">Chhattisgarh</a>
          <a href="">Karnataka</a>
          <a href="">Mizoram</a>
          <a href="">Jharkhand</a>
          <a href="">Punjab</a>
          <a href="">Tamil Nadu</a>
          <a href="">Odisha</a>
          <a href="">Tripura</a>
          <a href="">Madhya Pradesh</a>
        </div>
        
        <div className="left-three">
          <a href="">Assam</a>
          <a href="">Gujarat</a>
          <a href="">Himachal Pradesh</a>
          <a href="">Mizoram</a>
          <a href="">Manipur</a>
          <a href="">Nagaland</a>
          <a href="">Rajasthan</a>
          <a href="">Odisha</a>
          <a href="">Telangana</a>
          <a href="">Uttrakhand</a>
        </div>
        <div className="contact">
          <h3><u>Contact Details</u></h3>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
          <a href="Facebook">Facebook</a>
          <br />
          <img src={logo} alt="logo" id='logo'/>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
