import './App.css'
import Nav from './components/Nav'
import video from './assets/images/heroVideo.mp4'
import DestinationCards from './components/DesitnationCards'
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
              
            </div>
      </div>

    </>
  )
}

export default App
